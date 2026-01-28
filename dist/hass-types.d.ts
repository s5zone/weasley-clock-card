export interface HomeAssistant {
    states: HassEntities;
    themes: Themes;
    selectedTheme: ThemeSettings | null;
    config: HassConfig;
    callService: (domain: string, service: string, serviceData?: Record<string, unknown>) => Promise<void>;
}
export interface HassEntities {
    [entityId: string]: HassEntity;
}
export interface HassEntity {
    entity_id: string;
    state: string;
    last_changed: string;
    last_updated: string;
    attributes: HassEntityAttributeBase & Record<string, unknown>;
    context: Context;
}
export interface HassEntityAttributeBase {
    friendly_name?: string;
    icon?: string;
    entity_picture?: string;
    assumed_state?: boolean;
    device_class?: string;
    unit_of_measurement?: string;
}
export interface Context {
    id: string;
    parent_id?: string;
    user_id?: string;
}
export interface Themes {
    default_theme: string;
    default_dark_theme?: string;
    themes: Record<string, Record<string, string>>;
    darkMode: boolean;
}
export interface ThemeSettings {
    theme: string;
    dark?: boolean;
    primaryColor?: string;
    accentColor?: string;
}
export interface HassConfig {
    latitude: number;
    longitude: number;
    elevation: number;
    unit_system: {
        length: string;
        mass: string;
        temperature: string;
        volume: string;
    };
    location_name: string;
    time_zone: string;
    components: string[];
    version: string;
}
export interface LovelaceCard extends HTMLElement {
    hass?: HomeAssistant;
    setConfig(config: unknown): void;
    getCardSize?(): number | Promise<number>;
}
export interface LovelaceCardConfig {
    type: string;
    [key: string]: unknown;
}
export interface LovelaceCardEditor extends HTMLElement {
    hass?: HomeAssistant;
    lovelace?: unknown;
    setConfig(config: unknown): void;
}
//# sourceMappingURL=hass-types.d.ts.map