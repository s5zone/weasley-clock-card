import { SectionConfig, PersonState } from './types';
/**
 * Determines which section a person belongs to based on their current zone state
 */
export declare function getPersonSection(personState: PersonState | null, sections: SectionConfig[], defaultSection: string): {
    sectionIndex: number;
    sectionName: string;
};
/**
 * Calculates the angle for a clock hand, handling fan-out when multiple persons are in the same section
 */
export declare function calculateHandAngle(sectionIndex: number, totalSections: number, personsInSection: number, personIndexInSection: number): number;
/**
 * Converts polar coordinates to Cartesian (SVG) coordinates
 */
export declare function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number): {
    x: number;
    y: number;
};
/**
 * Generates an SVG arc path for a pie slice
 */
export declare function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number): string;
/**
 * Generates a unique but consistent color from a string (for fallback person colors)
 */
export declare function stringToColor(str: string): string;
/**
 * Check if the current theme is dark mode
 */
export declare function isDarkMode(hass: {
    themes?: {
        darkMode?: boolean;
    };
} | undefined): boolean;
//# sourceMappingURL=utils.d.ts.map