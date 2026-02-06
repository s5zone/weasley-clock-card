import { LitElement, html, svg, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './styles';
import {
  WeasleyClockConfig,
  PersonPosition,
  PersonState,
  HomeAssistant,
  ActionConfig,
  ClockTheme
} from './types';
import {
  getPersonSection,
  calculateHandAngle,
  isDarkMode,
  describeArc,
  polarToCartesian,
  stringToColor
} from './utils';

// Constants for SVG rendering
const VIEWBOX_SIZE = 400;
const CENTER = VIEWBOX_SIZE / 2;
const CLOCK_RADIUS = 180;
const LABEL_RADIUS = 155;
const BORDER_RADIUS = 188;
const HUB_RADIUS = 25;
const HAND_LENGTH = 90;
const ARROW_SIZE = 12;
const PERSON_RADIUS = 16;

// Section colors by theme
const SECTION_COLORS: Record<ClockTheme, { light: string[]; dark: string[] }> = {
  steampunk: {
    light: ['#6B3A19', '#7D4422', '#8B4513', '#9C5524', '#A0522D', '#8B6914', '#996633', '#7A5230'],
    dark: ['#4A2511', '#5C3317', '#6B3A19', '#7D4422', '#8B4513', '#6B4423', '#7A5230', '#5D3A1A']
  },
  minimalist: {
    light: ['#F5F5F5', '#EEEEEE', '#E8E8E8', '#F0F0F0', '#EBEBEB', '#F2F2F2', '#E5E5E5', '#EDEDED'],
    dark: ['#2C2C2C', '#333333', '#3D3D3D', '#363636', '#303030', '#383838', '#2E2E2E', '#353535']
  },
  playful: {
    light: [
      'rgba(102, 126, 234, 0.5)',
      'rgba(118, 75, 162, 0.5)',
      'rgba(237, 100, 166, 0.45)',
      'rgba(72, 219, 251, 0.45)',
      'rgba(99, 102, 241, 0.5)',
      'rgba(139, 92, 246, 0.45)',
      'rgba(236, 72, 153, 0.4)',
      'rgba(34, 211, 238, 0.4)'
    ],
    dark: [
      'rgba(99, 102, 241, 0.4)',
      'rgba(139, 92, 246, 0.4)',
      'rgba(236, 72, 153, 0.35)',
      'rgba(34, 211, 238, 0.35)',
      'rgba(99, 102, 241, 0.35)',
      'rgba(139, 92, 246, 0.35)',
      'rgba(236, 72, 153, 0.3)',
      'rgba(34, 211, 238, 0.3)'
    ]
  }
};

@customElement('weasley-clock-card')
export class WeasleyClockCard extends LitElement {
  static styles = styles;

  @property({ attribute: false }) hass?: HomeAssistant;
  @state() private _config?: WeasleyClockConfig;

  setConfig(config: WeasleyClockConfig): void {
    if (!config.persons || !Array.isArray(config.persons)) {
      throw new Error('Please define persons');
    }
    if (!config.sections || !Array.isArray(config.sections)) {
      throw new Error('Please define sections');
    }
    if (config.sections.length < 1 || config.sections.length > 8) {
      throw new Error('Sections must be between 1 and 8');
    }

    this._config = {
      ...config,
      theme: config.theme || 'steampunk',
      default_section: config.default_section || config.sections[0]?.name || 'Unknown'
    };
  }

  private get _theme(): ClockTheme {
    return this._config?.theme || 'steampunk';
  }

  getCardSize(): number {
    return 4;
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (changedProps.has('_config')) {
      return true;
    }

    if (changedProps.has('hass') && this._config) {
      const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
      if (!oldHass) return true;

      // Check if any tracked person entities changed
      for (const person of this._config.persons) {
        const oldState = oldHass.states[person.entity];
        const newState = this.hass?.states[person.entity];

        if (oldState?.state !== newState?.state ||
            oldState?.attributes?.entity_picture !== newState?.attributes?.entity_picture) {
          return true;
        }
      }

      // Check if theme changed
      if (oldHass.themes?.darkMode !== this.hass?.themes?.darkMode) {
        return true;
      }
    }

    return false;
  }

  protected updated(changedProps: PropertyValues): void {
    super.updated(changedProps);

    // Update theme attribute
    this.setAttribute('theme', this._theme);

    // Update dark mode attribute
    const darkMode = isDarkMode(this.hass);
    if (darkMode) {
      this.setAttribute('dark-mode', '');
    } else {
      this.removeAttribute('dark-mode');
    }
  }

  private _getPersonPositions(): PersonPosition[] {
    if (!this._config || !this.hass) return [];

    const positions: PersonPosition[] = [];
    const sectionCounts: Map<number, number> = new Map();

    // First pass: determine which section each person is in
    for (const personConfig of this._config.persons) {
      const state = this.hass.states[personConfig.entity] as PersonState | undefined;
      const isAvailable = state &&
        state.state !== 'unavailable' &&
        state.state !== 'unknown';

      const { sectionIndex, sectionName } = getPersonSection(
        state || null,
        this._config.sections,
        this._config.default_section
      );

      positions.push({
        config: personConfig,
        state: state || null,
        sectionIndex,
        sectionName,
        angle: 0, // Will be calculated in second pass
        isAvailable: !!isAvailable
      });

      // Count persons per section
      if (isAvailable) {
        sectionCounts.set(sectionIndex, (sectionCounts.get(sectionIndex) || 0) + 1);
      }
    }

    // Second pass: calculate angles with fan-out
    const sectionPersonIndex: Map<number, number> = new Map();

    for (const position of positions) {
      if (position.isAvailable) {
        const personsInSection = sectionCounts.get(position.sectionIndex) || 1;
        const personIndex = sectionPersonIndex.get(position.sectionIndex) || 0;

        position.angle = calculateHandAngle(
          position.sectionIndex,
          this._config.sections.length,
          personsInSection,
          personIndex
        );

        sectionPersonIndex.set(position.sectionIndex, personIndex + 1);
      }
    }

    return positions;
  }

  protected render() {
    if (!this._config || !this.hass) {
      return html`<ha-card>Loading...</ha-card>`;
    }

    const darkMode = isDarkMode(this.hass);
    const positions = this._getPersonPositions();
    const sections = this._config.sections;
    const sectionCount = sections.length;
    const anglePerSection = 360 / sectionCount;

    const theme = this._theme;
    const bgColor = this._getBackgroundColor(theme, darkMode);

    return html`
      ${theme === 'steampunk' ? html`<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet">` : ''}
      <ha-card>
        <div class="card-container">
          <div class="clock-wrapper">
            <svg
              class="clock-svg"
              viewBox="0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                ${this._renderDefs(darkMode, sectionCount, theme)}
              </defs>

              <!-- Background circle -->
              <circle
                cx="${CENTER}"
                cy="${CENTER}"
                r="${CLOCK_RADIUS}"
                fill="${bgColor}"
              />

              <!-- Section slices -->
              ${sections.map((_, i) => {
                const startAngle = i * anglePerSection - 90;
                const endAngle = startAngle + anglePerSection;
                const sectionFill = theme === 'steampunk'
                  ? `url(#sectionGradient${i})`
                  : this._getSectionColor(theme, darkMode, i);
                return svg`
                  <path
                    class="section-slice"
                    d="${describeArc(CENTER, CENTER, CLOCK_RADIUS, startAngle, endAngle)}"
                    fill="${sectionFill}"
                  />
                `;
              })}

              <!-- Section divider lines -->
              ${sections.map((_, i) => {
                const angle = i * anglePerSection - 90;
                const start = polarToCartesian(CENTER, CENTER, HUB_RADIUS + 5, angle);
                const end = polarToCartesian(CENTER, CENTER, CLOCK_RADIUS, angle);
                return svg`
                  <line
                    class="section-divider"
                    x1="${start.x}"
                    y1="${start.y}"
                    x2="${end.x}"
                    y2="${end.y}"
                  />
                `;
              })}

              <!-- Section labels -->
              ${sections.map((section, i) => {
                const angle = i * anglePerSection - 90 + anglePerSection / 2;
                const pos = polarToCartesian(CENTER, CENTER, LABEL_RADIUS, angle);
                const fontSize = this._calculateFontSize(section.name, sectionCount);
                const filterAttr = theme === 'steampunk' ? 'url(#textShadow)' : '';

                return svg`
                  <text
                    class="section-label"
                    x="${pos.x}"
                    y="${pos.y}"
                    transform="rotate(${angle + 90}, ${pos.x}, ${pos.y})"
                    style="font-size: ${fontSize}px"
                    filter="${filterAttr}"
                  >
                    ${section.name}
                  </text>
                `;
              })}

              <!-- Inner border -->
              <circle
                class="clock-border-inner"
                cx="${CENTER}"
                cy="${CENTER}"
                r="${CLOCK_RADIUS}"
              />

              <!-- Clock hands (persons) -->
              ${positions.map((person, index) =>
                this._renderClockHand(person, index)
              )}

              <!-- Center hub -->
              ${this._renderCenterHub(darkMode, theme)}

              <!-- Outer decorative border -->
              <circle
                class="clock-border"
                cx="${CENTER}"
                cy="${CENTER}"
                r="${BORDER_RADIUS}"
              />

              <!-- Decorative rivets around the border (steampunk only) -->
              ${theme === 'steampunk' ? Array.from({ length: 12 }, (_, i) => {
                const angle = i * 30 - 90;
                const pos = polarToCartesian(CENTER, CENTER, BORDER_RADIUS, angle);
                return svg`
                  <circle
                    class="border-rivet"
                    cx="${pos.x}"
                    cy="${pos.y}"
                    r="4"
                  />
                `;
              }) : ''}
            </svg>
          </div>
        </div>
      </ha-card>
    `;
  }

  private _renderDefs(isDark: boolean, sectionCount: number, theme: ClockTheme) {
    if (theme === 'steampunk') {
      const colors = SECTION_COLORS.steampunk;
      const colorSet = isDark ? colors.dark : colors.light;

      return svg`
        <!-- Gradients for metallic look -->
        <radialGradient id="hubGradient" cx="30%" cy="30%">
          <stop offset="0%" stop-color="${isDark ? '#D4AF37' : '#FFD700'}" />
          <stop offset="50%" stop-color="${isDark ? '#B8860B' : '#DAA520'}" />
          <stop offset="100%" stop-color="${isDark ? '#8B6914' : '#B8860B'}" />
        </radialGradient>

        <radialGradient id="hubInnerGradient" cx="40%" cy="40%">
          <stop offset="0%" stop-color="${isDark ? '#A67C52' : '#CD7F32'}" />
          <stop offset="100%" stop-color="${isDark ? '#6B4423' : '#8B4513'}" />
        </radialGradient>

        <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${isDark ? '#D4AF37' : '#CFB53B'}" />
          <stop offset="25%" stop-color="${isDark ? '#8B6914' : '#B87333'}" />
          <stop offset="50%" stop-color="${isDark ? '#D4AF37' : '#CD7F32'}" />
          <stop offset="75%" stop-color="${isDark ? '#8B6914' : '#B87333'}" />
          <stop offset="100%" stop-color="${isDark ? '#D4AF37' : '#CFB53B'}" />
        </linearGradient>

        <!-- Section gradients -->
        ${Array.from({ length: sectionCount }, (_, i) => svg`
          <radialGradient id="sectionGradient${i}" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stop-color="${this._adjustColor(colorSet[i % colorSet.length], isDark ? -20 : 20)}" />
            <stop offset="100%" stop-color="${this._adjustColor(colorSet[i % colorSet.length], isDark ? -40 : 0)}" />
          </radialGradient>
        `)}

        <!-- Golden text gradient for labels -->
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${isDark ? '#F4E4BA' : '#FFF8DC'}" />
          <stop offset="20%" stop-color="${isDark ? '#DAA520' : '#FFD700'}" />
          <stop offset="50%" stop-color="${isDark ? '#B8860B' : '#DAA520'}" />
          <stop offset="80%" stop-color="${isDark ? '#DAA520' : '#FFD700'}" />
          <stop offset="100%" stop-color="${isDark ? '#8B6914' : '#B8860B'}" />
        </linearGradient>

        <!-- Drop shadow filter for text -->
        <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="1" stdDeviation="1" flood-color="#000000" flood-opacity="0.7"/>
        </filter>
      `;
    }

    if (theme === 'minimalist') {
      return svg`
        <!-- Simple hub gradient for minimalist -->
        <radialGradient id="hubGradient" cx="30%" cy="30%">
          <stop offset="0%" stop-color="${isDark ? '#757575' : '#BDBDBD'}" />
          <stop offset="100%" stop-color="${isDark ? '#424242' : '#9E9E9E'}" />
        </radialGradient>

        <radialGradient id="hubInnerGradient" cx="40%" cy="40%">
          <stop offset="0%" stop-color="${isDark ? '#424242' : '#F5F5F5'}" />
          <stop offset="100%" stop-color="${isDark ? '#212121' : '#E0E0E0'}" />
        </radialGradient>
      `;
    }

    // Modern theme
    return svg`
      <!-- Glass-like hub gradient for modern -->
      <radialGradient id="hubGradient" cx="30%" cy="30%">
        <stop offset="0%" stop-color="rgba(255, 255, 255, 0.95)" />
        <stop offset="50%" stop-color="rgba(255, 255, 255, 0.8)" />
        <stop offset="100%" stop-color="rgba(255, 255, 255, 0.6)" />
      </radialGradient>

      <radialGradient id="hubInnerGradient" cx="40%" cy="40%">
        <stop offset="0%" stop-color="rgba(255, 255, 255, 0.5)" />
        <stop offset="100%" stop-color="rgba(255, 255, 255, 0.2)" />
      </radialGradient>

      <!-- Subtle glow filter for modern -->
      <filter id="modernGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    `;
  }

  private _getBackgroundColor(theme: ClockTheme, isDark: boolean): string {
    switch (theme) {
      case 'steampunk':
        return isDark ? '#1E1810' : '#F5E6C8';
      case 'minimalist':
        return isDark ? '#1E1E1E' : '#FAFAFA';
      case 'playful':
        return isDark ? '#1a1a2e' : '#667eea';
      default:
        return isDark ? '#1E1810' : '#F5E6C8';
    }
  }

  private _getSectionColor(theme: ClockTheme, isDark: boolean, index: number): string {
    const colors = SECTION_COLORS[theme];
    const colorSet = isDark ? colors.dark : colors.light;
    return colorSet[index % colorSet.length];
  }

  private _renderClockHand(person: PersonPosition, index: number) {
    if (!person.isAvailable) {
      return svg``;
    }

    const angle = person.angle;
    const color = person.config.color || stringToColor(person.config.entity);
    const hasImage = person.state?.attributes?.entity_picture;
    const displayName = person.config.name ||
      person.state?.attributes?.friendly_name ||
      person.config.entity.replace('person.', '');

    // Calculate positions
    const arrowTip = polarToCartesian(CENTER, CENTER, HAND_LENGTH, angle);
    const arrowBase = polarToCartesian(CENTER, CENTER, HAND_LENGTH - ARROW_SIZE * 2, angle);

    // Arrow wing points
    const wingAngle1 = angle - 90;
    const wingAngle2 = angle + 90;
    const wingOffset = ARROW_SIZE * 0.6;

    const wing1 = polarToCartesian(arrowBase.x, arrowBase.y, wingOffset, wingAngle1);
    const wing2 = polarToCartesian(arrowBase.x, arrowBase.y, wingOffset, wingAngle2);

    // Shaft points
    const shaftStart = polarToCartesian(CENTER, CENTER, HUB_RADIUS + 3, angle);
    const shaftWidth = 4;
    const shaftWing1 = polarToCartesian(shaftStart.x, shaftStart.y, shaftWidth, wingAngle1);
    const shaftWing2 = polarToCartesian(shaftStart.x, shaftStart.y, shaftWidth, wingAngle2);

    // Person image position
    const personPos = polarToCartesian(CENTER, CENTER, HAND_LENGTH + PERSON_RADIUS + 3, angle);

    const clipId = `person-clip-${index}`;

    return svg`
      <g class="clock-hand">
        <!-- Hand shaft -->
        <polygon
          class="hand-shaft"
          points="${shaftWing1.x},${shaftWing1.y} ${wing1.x},${wing1.y} ${wing2.x},${wing2.y} ${shaftWing2.x},${shaftWing2.y}"
        />

        <!-- Arrow head -->
        <polygon
          class="hand-arrow"
          points="${arrowTip.x},${arrowTip.y} ${wing1.x},${wing1.y} ${wing2.x},${wing2.y}"
        />

        <!-- Person circle (clickable) -->
        <defs>
          <clipPath id="${clipId}">
            <circle cx="${personPos.x}" cy="${personPos.y}" r="${PERSON_RADIUS}" />
          </clipPath>
        </defs>

        <g
          class="person-circle"
          @click=${(e: Event) => this._handleAction(e, person)}
        >
          <!-- Invisible hit area for easier tapping -->
          <circle
            cx="${personPos.x}"
            cy="${personPos.y}"
            r="${PERSON_RADIUS + 5}"
            fill="transparent"
          />

          ${hasImage ? svg`
            <image
              class="person-image"
              x="${personPos.x - PERSON_RADIUS}"
              y="${personPos.y - PERSON_RADIUS}"
              width="${PERSON_RADIUS * 2}"
              height="${PERSON_RADIUS * 2}"
              href="${person.state?.attributes?.entity_picture}"
              clip-path="url(#${clipId})"
              preserveAspectRatio="xMidYMid slice"
            />
          ` : svg`
            <circle
              cx="${personPos.x}"
              cy="${personPos.y}"
              r="${PERSON_RADIUS}"
              fill="${color}"
            />
            <text
              class="person-fallback"
              x="${personPos.x}"
              y="${personPos.y}"
              fill="white"
            >
              ${this._getInitials(displayName)}
            </text>
          `}

          <!-- Decorative frame -->
          <circle
            class="person-frame"
            cx="${personPos.x}"
            cy="${personPos.y}"
            r="${PERSON_RADIUS + 2}"
          />
        </g>
      </g>
    `;
  }

  private _renderCenterHub(isDark: boolean, theme: ClockTheme) {
    const centerDotColor = theme === 'steampunk'
      ? (isDark ? '#D4AF37' : '#FFD700')
      : theme === 'minimalist'
        ? (isDark ? '#616161' : '#9E9E9E')
        : 'rgba(255, 255, 255, 0.9)';

    return svg`
      <circle
        class="center-hub"
        cx="${CENTER}"
        cy="${CENTER}"
        r="${HUB_RADIUS}"
      />
      <circle
        class="center-hub-inner"
        cx="${CENTER}"
        cy="${CENTER}"
        r="${HUB_RADIUS * 0.6}"
      />
      ${theme === 'steampunk' ? Array.from({ length: 6 }, (_, i) => {
        const angle = i * 60;
        const pos = polarToCartesian(CENTER, CENTER, HUB_RADIUS * 0.8, angle);
        return svg`
          <circle
            class="center-rivet"
            cx="${pos.x}"
            cy="${pos.y}"
            r="2.5"
          />
        `;
      }) : ''}
      <circle
        cx="${CENTER}"
        cy="${CENTER}"
        r="3"
        fill="${centerDotColor}"
      />
    `;
  }

  private _adjustColor(hex: string, percent: number): string {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, Math.min(255, (num >> 16) + amt));
    const G = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amt));
    const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
    return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`;
  }

  private _calculateFontSize(label: string, sectionCount: number): number {
    const baseSize = 20;
    const lengthFactor = Math.max(0.65, 1 - (label.length - 5) * 0.035);
    const sectionFactor = Math.max(0.75, 1 - (sectionCount - 4) * 0.05);
    return Math.round(baseSize * lengthFactor * sectionFactor);
  }

  private _getInitials(name: string): string {
    const words = name.trim().split(/\s+/);
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  }

  private _handleAction(e: Event, person: PersonPosition): void {
    e.stopPropagation();

    const config = person.config.tap_action || { action: 'more-info' as const };
    const entityId = config.entity || person.config.entity;

    switch (config.action) {
      case 'more-info':
        this._fireMoreInfo(entityId);
        break;
      case 'toggle':
        this._toggleEntity(entityId);
        break;
      case 'call-service':
        this._callService(config);
        break;
      case 'navigate':
        this._navigate(config.navigation_path);
        break;
      case 'url':
        this._openUrl(config.url_path);
        break;
      case 'none':
      default:
        break;
    }
  }

  private _fireMoreInfo(entityId: string): void {
    const event = new CustomEvent('hass-more-info', {
      bubbles: true,
      composed: true,
      detail: { entityId }
    });
    this.dispatchEvent(event);
  }

  private _toggleEntity(entityId: string): void {
    if (!this.hass) return;
    this.hass.callService('homeassistant', 'toggle', { entity_id: entityId });
  }

  private _callService(config: ActionConfig): void {
    if (!this.hass || !config.service) return;
    const [domain, service] = config.service.split('.');
    this.hass.callService(domain, service, config.service_data || {});
  }

  private _navigate(path?: string): void {
    if (!path) return;
    history.pushState(null, '', path);
    window.dispatchEvent(new CustomEvent('location-changed'));
  }

  private _openUrl(url?: string): void {
    if (!url) return;
    window.open(url, '_blank');
  }

  static getConfigElement() {
    // Could return a config editor element here
    return document.createElement('div');
  }

  static getStubConfig() {
    return {
      type: 'custom:weasley-clock-card',
      persons: [
        { entity: 'person.example', name: 'Example' }
      ],
      sections: [
        { name: 'Home', zones: ['zone.home'] },
        { name: 'Work', zones: ['zone.work'] },
        { name: 'School', zones: ['zone.school'] },
        { name: 'In transit', zones: [] }
      ],
      default_section: 'In transit'
    };
  }
}

// Register the card with Home Assistant
declare global {
  interface Window {
    customCards?: Array<{ type: string; name: string; description: string }>;
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'weasley-clock-card',
  name: 'Weasley Clock Card',
  description: 'A magical clock showing where family members are located'
});
