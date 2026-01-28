import { svg, SVGTemplateResult } from 'lit';
import { SectionConfig } from './types';
import { describeArc, polarToCartesian } from './utils';

const VIEWBOX_SIZE = 400;
const CENTER = VIEWBOX_SIZE / 2;
const CLOCK_RADIUS = 180;
const LABEL_RADIUS = 150;
const BORDER_RADIUS = 185;
const HUB_RADIUS = 25;

// Section colors for the steampunk look
const SECTION_COLORS = [
  '#6B3A19', // Dark mahogany
  '#7D4422', // Saddle brown
  '#8B4513', // Sienna
  '#9C5524', // Rust brown
  '#A0522D', // Chocolate
  '#8B6914', // Dark goldenrod
  '#996633', // Brown
  '#7A5230', // Copper brown
];

export function renderClockFace(
  sections: SectionConfig[],
  isDark: boolean
): SVGTemplateResult {
  const sectionCount = sections.length;
  const anglePerSection = 360 / sectionCount;

  return svg`
    <svg
      class="clock-svg"
      viewBox="0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
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

        <!-- Section gradient template -->
        ${sections.map((_, i) => svg`
          <radialGradient id="sectionGradient${i}" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stop-color="${adjustColor(SECTION_COLORS[i % SECTION_COLORS.length], isDark ? -20 : 20)}" />
            <stop offset="100%" stop-color="${adjustColor(SECTION_COLORS[i % SECTION_COLORS.length], isDark ? -40 : 0)}" />
          </radialGradient>
        `)}

        <!-- Texture pattern for aged look -->
        <pattern id="noisePattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise"/>
            <feColorMatrix type="saturate" values="0"/>
          </filter>
          <rect width="100" height="100" filter="url(#noise)" opacity="0.15"/>
        </pattern>
      </defs>

      <!-- Background circle -->
      <circle
        cx="${CENTER}"
        cy="${CENTER}"
        r="${CLOCK_RADIUS}"
        fill="${isDark ? '#1E1810' : '#F5E6C8'}"
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

      <!-- Texture overlay -->
      <circle
        cx="${CENTER}"
        cy="${CENTER}"
        r="${CLOCK_RADIUS}"
        fill="url(#noisePattern)"
        class="texture-overlay"
      />

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

        return svg`
          <text
            class="section-label"
            x="${pos.x}"
            y="${pos.y}"
            transform="rotate(${angle + 90}, ${pos.x}, ${pos.y})"
            style="font-size: ${calculateFontSize(section.name, sectionCount)}px"
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

      <!-- Center hub - rendered after hands in main component -->
    </svg>
  `;
}

export function renderCenterHub(isDark: boolean): SVGTemplateResult {
  return svg`
    <!-- Center hub outer -->
    <circle
      class="center-hub"
      cx="${CENTER}"
      cy="${CENTER}"
      r="${HUB_RADIUS}"
    />

    <!-- Center hub inner -->
    <circle
      class="center-hub-inner"
      cx="${CENTER}"
      cy="${CENTER}"
      r="${HUB_RADIUS * 0.6}"
    />

    <!-- Center rivets -->
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

    <!-- Center dot -->
    <circle
      cx="${CENTER}"
      cy="${CENTER}"
      r="3"
      fill="${isDark ? '#D4AF37' : '#FFD700'}"
    />
  `;
}

// Helper to adjust color brightness
function adjustColor(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.max(0, Math.min(255, (num >> 16) + amt));
  const G = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amt));
  const B = Math.max(0, Math.min(255, (num & 0x0000FF) + amt));
  return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`;
}

// Calculate font size based on label length and section count
function calculateFontSize(label: string, sectionCount: number): number {
  const baseSize = 14;
  const lengthFactor = Math.max(0.6, 1 - (label.length - 6) * 0.05);
  const sectionFactor = Math.max(0.7, 1 - (sectionCount - 4) * 0.08);
  return Math.round(baseSize * lengthFactor * sectionFactor);
}

export { CENTER, CLOCK_RADIUS, HUB_RADIUS };
