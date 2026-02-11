import { HomeAssistant } from './hass-types';

export type ActionType = 'more-info' | 'toggle' | 'call-service' | 'navigate' | 'url' | 'none';
export type ClockTheme = 'steampunk' | 'minimalist' | 'playful';

export interface ActionConfig {
  action: ActionType;
  entity?: string;
  navigation_path?: string;
  url_path?: string;
  service?: string;
  service_data?: Record<string, unknown>;
}

export interface WeasleyClockConfig {
  type: string;
  theme?: ClockTheme;
  persons: PersonConfig[];
  sections: SectionConfig[];
  default_section: string;
}

export interface PersonConfig {
  entity: string;
  name?: string;
  color?: string;
  tap_action?: ActionConfig;
}

export interface SectionConfig {
  name: string;
  zones: string[];
  icon?: string;
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
