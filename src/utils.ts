import { SectionConfig, PersonState, HomeAssistant } from './types';

/**
 * Determines which section a person belongs to based on their current zone state
 */
export function getPersonSection(
  personState: PersonState | null,
  sections: SectionConfig[],
  defaultSection: string,
  hass?: HomeAssistant
): { sectionIndex: number; sectionName: string } {
  if (!personState || personState.state === 'unavailable' || personState.state === 'unknown') {
    // Return default section for unavailable persons
    const defaultIndex = sections.findIndex(s => s.name === defaultSection);
    return {
      sectionIndex: defaultIndex >= 0 ? defaultIndex : 0,
      sectionName: defaultSection
    };
  }

  // Find the zone entity ID by matching the person's state (friendly name) against zone friendly names
  let currentZone: string | undefined;

  if (hass?.states) {
    // Look up the zone entity by matching friendly_name to the person's state
    const zoneEntry = Object.entries(hass.states).find(([entityId, state]) =>
      entityId.startsWith('zone.') &&
      state.attributes?.friendly_name?.toLowerCase() === personState.state.toLowerCase()
    );

    if (zoneEntry) {
      currentZone = zoneEntry[0]; // The actual entity_id like "zone.work_location"
    }
  }

  // Fallback: if no zone found by friendly name, try to construct it (for 'home' and simple cases)
  if (!currentZone) {
    currentZone = `zone.${personState.state.toLowerCase().replace(/\s+/g, '_')}`;
  }

  // Check each section for matching zones
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    for (const zone of section.zones) {
      // Match by zone entity ID
      if (zone.toLowerCase() === currentZone.toLowerCase()) {
        return { sectionIndex: i, sectionName: section.name };
      }
    }
  }

  // No matching section found, use default
  const defaultIndex = sections.findIndex(s => s.name === defaultSection);
  return {
    sectionIndex: defaultIndex >= 0 ? defaultIndex : 0,
    sectionName: defaultIndex >= 0 ? defaultSection : sections[0]?.name || 'Unknown'
  };
}

/**
 * Calculates the angle for a clock hand, handling fan-out when multiple persons are in the same section
 */
export function calculateHandAngle(
  sectionIndex: number,
  totalSections: number,
  personsInSection: number,
  personIndexInSection: number
): number {
  // Each section spans 360/totalSections degrees
  const sectionAngle = 360 / totalSections;

  // Section starts at this angle (0 is at top, going clockwise)
  const sectionStartAngle = sectionIndex * sectionAngle - 90; // -90 to start at top

  // Center of the section
  const sectionCenterAngle = sectionStartAngle + sectionAngle / 2;

  if (personsInSection === 1) {
    return sectionCenterAngle;
  }

  // Fan out within the section, leaving some padding at edges
  const padding = sectionAngle * 0.15; // 15% padding on each side
  const usableAngle = sectionAngle - 2 * padding;

  // Distribute persons evenly within the usable angle
  const spacing = usableAngle / (personsInSection + 1);
  const offset = spacing * (personIndexInSection + 1);

  return sectionStartAngle + padding + offset;
}

/**
 * Converts polar coordinates to Cartesian (SVG) coordinates
 */
export function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
): { x: number; y: number } {
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

/**
 * Generates an SVG arc path for a pie slice
 */
export function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
): string {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return [
    'M', x, y,
    'L', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    'Z'
  ].join(' ');
}

/**
 * Generates a unique but consistent color from a string (for fallback person colors)
 */
export function stringToColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Generate HSL color with good saturation and lightness for visibility
  const h = Math.abs(hash % 360);
  const s = 60 + (hash % 20); // 60-80% saturation
  const l = 35 + (hash % 15); // 35-50% lightness

  return `hsl(${h}, ${s}%, ${l}%)`;
}

/**
 * Check if the current theme is dark mode
 */
export function isDarkMode(hass: { themes?: { darkMode?: boolean } } | undefined): boolean {
  return hass?.themes?.darkMode ?? false;
}
