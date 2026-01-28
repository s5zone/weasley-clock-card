import { LitElement, html, svg, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './styles';
import {
  WeasleyClockConfig,
  PersonPosition,
  PersonState,
  HomeAssistant
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

// Section colors for the steampunk look
const SECTION_COLORS = [
  '#6B3A19',
  '#7D4422',
  '#8B4513',
  '#9C5524',
  '#A0522D',
  '#8B6914',
  '#996633',
  '#7A5230',
];

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
      default_section: config.default_section || config.sections[0]?.name || 'Unknown'
    };
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

    return html`
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet">
      <ha-card>
        <div class="card-container">
          <div class="clock-wrapper">
            <svg
              class="clock-svg"
              viewBox="0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                ${this._renderDefs(darkMode, sectionCount)}
              </defs>

              <!-- Background circle -->
              <circle
                cx="${CENTER}"
                cy="${CENTER}"
                r="${CLOCK_RADIUS}"
                fill="${darkMode ? '#1E1810' : '#F5E6C8'}"
              />

              <!-- Section slices -->
              ${sections.map((_, i) => {
                const startAngle = i * anglePerSection - 90;
                const endAngle = startAngle + anglePerSection;
                return svg`
                  <path
                    class="section-slice"
                    d="${describeArc(CENTER, CENTER, CLOCK_RADIUS, startAngle, endAngle)}"
                    fill="url(#sectionGradient${i})"
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

                return svg`
                  <text
                    class="section-label"
                    x="${pos.x}"
                    y="${pos.y}"
                    transform="rotate(${angle + 90}, ${pos.x}, ${pos.y})"
                    style="font-size: ${fontSize}px"
                    filter="url(#textShadow)"
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
              ${this._renderCenterHub(darkMode)}

              <!-- Outer decorative border -->
              <circle
                class="clock-border"
                cx="${CENTER}"
                cy="${CENTER}"
                r="${BORDER_RADIUS}"
              />

              <!-- Decorative rivets around the border -->
              ${Array.from({ length: 12 }, (_, i) => {
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
              })}
            </svg>
          </div>
        </div>
      </ha-card>
    `;
  }

  private _renderDefs(isDark: boolean, sectionCount: number) {
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
          <stop offset="0%" stop-color="${this._adjustColor(SECTION_COLORS[i % SECTION_COLORS.length], isDark ? -20 : 20)}" />
          <stop offset="100%" stop-color="${this._adjustColor(SECTION_COLORS[i % SECTION_COLORS.length], isDark ? -40 : 0)}" />
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

        <!-- Person circle -->
        <defs>
          <clipPath id="${clipId}">
            <circle cx="${personPos.x}" cy="${personPos.y}" r="${PERSON_RADIUS}" />
          </clipPath>
        </defs>

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
    `;
  }

  private _renderCenterHub(isDark: boolean) {
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
      ${Array.from({ length: 6 }, (_, i) => {
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
      })}
      <circle
        cx="${CENTER}"
        cy="${CENTER}"
        r="3"
        fill="${isDark ? '#D4AF37' : '#FFD700'}"
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
