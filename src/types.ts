import { HomeAssistant } from './hass-types';

export interface WeasleyClockConfig {
  type: string;
  persons: PersonConfig[];
  sections: SectionConfig[];
  default_section: string;
}

export interface PersonConfig {
  entity: string;
  name?: string;
  color?: string;
}

export interface SectionConfig {
  name: string;
  zones: string[];
}

export interface PersonState {
  entity_id: string;
  state: string;
  attributes: {
    friendly_name?: string;
    entity_picture?: string;
    source?: string;
    [key: string]: unknown;
  };
}

export interface ZoneState {
  entity_id: string;
  state: string;
  attributes: {
    friendly_name?: string;
    latitude?: number;
    longitude?: number;
    radius?: number;
    icon?: string;
    [key: string]: unknown;
  };
}

export interface PersonPosition {
  config: PersonConfig;
  state: PersonState | null;
  sectionIndex: number;
  sectionName: string;
  angle: number;
  isAvailable: boolean;
}

export { HomeAssistant };
