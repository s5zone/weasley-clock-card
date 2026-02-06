import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    padding: 16px;
    --wc-transition-duration: 0.5s;
  }

  /* =====================================================
     STEAMPUNK THEME (Default)
     ===================================================== */
  :host([theme="steampunk"]) {
    --wc-brass-light: #CD7F32;
    --wc-brass-dark: #B87333;
    --wc-brass-darker: #8B5A2B;
    --wc-gold: #CFB53B;
    --wc-gold-light: #D4AF37;
    --wc-parchment: #F5E6C8;
    --wc-parchment-dark: #E8D4A8;
    --wc-wood-dark: #3D2914;
    --wc-wood-medium: #5D4037;
    --wc-text-light: #F5E6C8;
    --wc-text-dark: #2C1810;
    --wc-background: #F5E6C8;
    --wc-border-width: 8px;
    --wc-border-color: var(--wc-brass-dark);
    --wc-divider-color: var(--wc-brass-darker);
    --wc-divider-width: 2px;
    --wc-hub-color: var(--wc-gold);
    --wc-hand-color: var(--wc-brass-dark);
    --wc-arrow-color: var(--wc-gold);
    --wc-frame-color: var(--wc-gold);
    --wc-font-family: 'Cinzel', 'Times New Roman', Georgia, serif;
    --wc-label-stroke: #2C1810;
    --wc-label-stroke-width: 0.5;
    --wc-shadow-opacity: 0.4;
    --wc-container-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1);
    --wc-container-bg: var(--wc-parchment);
  }

  :host([theme="steampunk"][dark-mode]) {
    --wc-brass-light: #A67C52;
    --wc-brass-dark: #8B6914;
    --wc-parchment: #2C2416;
    --wc-parchment-dark: #1E1810;
    --wc-text-light: #D4C4A8;
    --wc-background: #1E1810;
    --wc-container-bg: #2C2416;
  }

  /* =====================================================
     MINIMALIST THEME
     ===================================================== */
  :host([theme="minimalist"]) {
    --wc-background: #FAFAFA;
    --wc-border-width: 2px;
    --wc-border-color: #E0E0E0;
    --wc-divider-color: #E0E0E0;
    --wc-divider-width: 1px;
    --wc-hub-color: #9E9E9E;
    --wc-hand-color: #616161;
    --wc-arrow-color: #424242;
    --wc-frame-color: #9E9E9E;
    --wc-gold: #757575;
    --wc-gold-light: #9E9E9E;
    --wc-brass-darker: #BDBDBD;
    --wc-font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    --wc-label-stroke: none;
    --wc-label-stroke-width: 0;
    --wc-shadow-opacity: 0;
    --wc-container-shadow: none;
    --wc-container-bg: #FFFFFF;
    --wc-text-color: #424242;
    --wc-section-color-1: #F5F5F5;
    --wc-section-color-2: #EEEEEE;
    --wc-section-color-3: #E0E0E0;
    --wc-section-color-4: #F5F5F5;
    --wc-section-color-5: #EEEEEE;
    --wc-section-color-6: #E0E0E0;
    --wc-section-color-7: #F5F5F5;
    --wc-section-color-8: #EEEEEE;
  }

  :host([theme="minimalist"][dark-mode]) {
    --wc-background: #1E1E1E;
    --wc-border-color: #424242;
    --wc-divider-color: #424242;
    --wc-hub-color: #616161;
    --wc-hand-color: #9E9E9E;
    --wc-arrow-color: #BDBDBD;
    --wc-frame-color: #616161;
    --wc-gold: #9E9E9E;
    --wc-gold-light: #BDBDBD;
    --wc-brass-darker: #424242;
    --wc-container-bg: #212121;
    --wc-text-color: #E0E0E0;
    --wc-section-color-1: #2C2C2C;
    --wc-section-color-2: #333333;
    --wc-section-color-3: #3D3D3D;
    --wc-section-color-4: #2C2C2C;
    --wc-section-color-5: #333333;
    --wc-section-color-6: #3D3D3D;
    --wc-section-color-7: #2C2C2C;
    --wc-section-color-8: #333333;
  }

  /* =====================================================
     MODERN THEME
     ===================================================== */
  :host([theme="playful"]) {
    --wc-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --wc-border-width: 4px;
    --wc-border-color: rgba(255, 255, 255, 0.3);
    --wc-divider-color: rgba(255, 255, 255, 0.2);
    --wc-divider-width: 1px;
    --wc-hub-color: rgba(255, 255, 255, 0.9);
    --wc-hand-color: rgba(255, 255, 255, 0.8);
    --wc-arrow-color: #FFFFFF;
    --wc-frame-color: rgba(255, 255, 255, 0.8);
    --wc-gold: rgba(255, 255, 255, 0.9);
    --wc-gold-light: #FFFFFF;
    --wc-brass-darker: rgba(255, 255, 255, 0.3);
    --wc-font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    --wc-label-stroke: none;
    --wc-label-stroke-width: 0;
    --wc-shadow-opacity: 0.2;
    --wc-container-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    --wc-container-bg: rgba(255, 255, 255, 0.15);
    --wc-text-color: #FFFFFF;
    --wc-section-color-1: rgba(102, 126, 234, 0.6);
    --wc-section-color-2: rgba(118, 75, 162, 0.6);
    --wc-section-color-3: rgba(237, 100, 166, 0.5);
    --wc-section-color-4: rgba(72, 219, 251, 0.5);
    --wc-section-color-5: rgba(102, 126, 234, 0.5);
    --wc-section-color-6: rgba(118, 75, 162, 0.5);
    --wc-section-color-7: rgba(237, 100, 166, 0.4);
    --wc-section-color-8: rgba(72, 219, 251, 0.4);
    --wc-glass-blur: 10px;
    --wc-glass-bg: rgba(255, 255, 255, 0.1);
    --wc-glow-color: rgba(255, 255, 255, 0.5);
  }

  :host([theme="playful"][dark-mode]) {
    --wc-background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    --wc-border-color: rgba(255, 255, 255, 0.15);
    --wc-divider-color: rgba(255, 255, 255, 0.1);
    --wc-hub-color: rgba(255, 255, 255, 0.8);
    --wc-hand-color: rgba(255, 255, 255, 0.7);
    --wc-frame-color: rgba(255, 255, 255, 0.6);
    --wc-container-bg: rgba(255, 255, 255, 0.08);
    --wc-section-color-1: rgba(99, 102, 241, 0.4);
    --wc-section-color-2: rgba(139, 92, 246, 0.4);
    --wc-section-color-3: rgba(236, 72, 153, 0.35);
    --wc-section-color-4: rgba(34, 211, 238, 0.35);
    --wc-section-color-5: rgba(99, 102, 241, 0.35);
    --wc-section-color-6: rgba(139, 92, 246, 0.35);
    --wc-section-color-7: rgba(236, 72, 153, 0.3);
    --wc-section-color-8: rgba(34, 211, 238, 0.3);
    --wc-glow-color: rgba(99, 102, 241, 0.5);
  }

  /* =====================================================
     COMMON STYLES
     ===================================================== */
  .card-container {
    background: var(--wc-container-bg);
    border-radius: 50%;
    padding: 12px;
    box-shadow: var(--wc-container-shadow);
  }

  :host([theme="playful"]) .card-container {
    backdrop-filter: blur(var(--wc-glass-blur, 0));
    -webkit-backdrop-filter: blur(var(--wc-glass-blur, 0));
  }

  .clock-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
  }

  .clock-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  /* Section slice styles */
  .section-slice {
    transition: opacity 0.3s ease;
  }

  .section-slice:hover {
    opacity: 0.85;
  }

  /* Section label styles */
  .section-label {
    font-family: var(--wc-font-family);
    font-weight: 700;
    text-anchor: middle;
    dominant-baseline: middle;
    pointer-events: none;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  :host([theme="steampunk"]) .section-label {
    fill: url(#textGradient);
    stroke: var(--wc-label-stroke);
    stroke-width: var(--wc-label-stroke-width);
    paint-order: stroke fill;
  }

  :host([theme="minimalist"]) .section-label {
    fill: var(--wc-text-color);
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  :host([theme="playful"]) .section-label {
    fill: var(--wc-text-color);
    font-weight: 600;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  /* Clock hand styles */
  .clock-hand {
    transition: transform var(--wc-transition-duration) ease-in-out;
    transform-origin: center center;
  }

  .clock-hand.hidden {
    opacity: 0;
    pointer-events: none;
  }

  .hand-arrow {
    fill: var(--wc-arrow-color);
    stroke: var(--wc-brass-darker);
    stroke-width: 1;
  }

  :host([theme="steampunk"]) .hand-arrow {
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, var(--wc-shadow-opacity)));
  }

  :host([theme="playful"]) .hand-arrow {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  }

  .hand-shaft {
    fill: var(--wc-hand-color);
    stroke: var(--wc-brass-darker);
    stroke-width: 0.5;
  }

  :host([theme="minimalist"]) .hand-shaft {
    stroke: none;
  }

  /* Person image at arrow tip */
  .person-image {
    clip-path: circle(50%);
  }

  .person-frame {
    fill: none;
    stroke: var(--wc-frame-color);
    stroke-width: 2;
  }

  :host([theme="steampunk"]) .person-frame {
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
  }

  :host([theme="playful"]) .person-frame {
    filter: drop-shadow(0 2px 8px var(--wc-glow-color, rgba(255, 255, 255, 0.3)));
  }

  .person-fallback {
    fill: currentColor;
    font-family: var(--wc-font-family);
    font-weight: bold;
    font-size: 12px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  /* Clickable person circle */
  .person-circle {
    cursor: pointer;
  }

  .person-circle:hover .person-frame {
    stroke: var(--wc-gold-light);
    stroke-width: 3;
  }

  :host([theme="playful"]) .person-circle:hover .person-frame {
    filter: drop-shadow(0 0 12px var(--wc-glow-color, rgba(255, 255, 255, 0.6)));
  }

  /* Center hub styles */
  .center-hub {
    fill: url(#hubGradient);
    stroke: var(--wc-brass-darker);
    stroke-width: 2;
  }

  :host([theme="steampunk"]) .center-hub {
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
  }

  :host([theme="minimalist"]) .center-hub {
    fill: var(--wc-hub-color);
    stroke: var(--wc-border-color);
    stroke-width: 1;
  }

  :host([theme="playful"]) .center-hub {
    fill: var(--wc-hub-color);
    stroke: var(--wc-border-color);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  }

  .center-hub-inner {
    fill: url(#hubInnerGradient);
    stroke: var(--wc-hand-color);
    stroke-width: 1;
  }

  :host([theme="minimalist"]) .center-hub-inner {
    fill: var(--wc-container-bg);
    stroke: var(--wc-border-color);
  }

  :host([theme="playful"]) .center-hub-inner {
    fill: rgba(255, 255, 255, 0.3);
    stroke: rgba(255, 255, 255, 0.5);
  }

  .center-rivet {
    fill: var(--wc-gold-light);
    stroke: var(--wc-brass-darker);
    stroke-width: 0.5;
  }

  :host([theme="minimalist"]) .center-rivet,
  :host([theme="playful"]) .center-rivet {
    display: none;
  }

  /* Outer border */
  .clock-border {
    fill: none;
    stroke: url(#borderGradient);
    stroke-width: var(--wc-border-width);
  }

  :host([theme="steampunk"]) .clock-border {
    filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.5));
  }

  :host([theme="minimalist"]) .clock-border {
    stroke: var(--wc-border-color);
  }

  :host([theme="playful"]) .clock-border {
    stroke: var(--wc-border-color);
    filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.15));
  }

  .clock-border-inner {
    fill: none;
    stroke: var(--wc-brass-darker);
    stroke-width: 2;
  }

  :host([theme="minimalist"]) .clock-border-inner {
    stroke: var(--wc-border-color);
    stroke-width: 1;
  }

  :host([theme="playful"]) .clock-border-inner {
    stroke: var(--wc-border-color);
    stroke-width: 1;
  }

  /* Decorative rivets around border */
  .border-rivet {
    fill: var(--wc-gold);
    stroke: var(--wc-brass-darker);
    stroke-width: 0.5;
  }

  :host([theme="steampunk"]) .border-rivet {
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
  }

  :host([theme="minimalist"]) .border-rivet,
  :host([theme="playful"]) .border-rivet {
    display: none;
  }

  /* Section dividers */
  .section-divider {
    stroke: var(--wc-divider-color);
    stroke-width: var(--wc-divider-width);
  }

  :host([theme="steampunk"]) .section-divider {
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
  }

  /* Texture overlay for aged look - steampunk only */
  .texture-overlay {
    mix-blend-mode: multiply;
    opacity: 0.1;
    pointer-events: none;
  }

  :host([theme="minimalist"]) .texture-overlay,
  :host([theme="playful"]) .texture-overlay {
    display: none;
  }
`;
