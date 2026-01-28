import { LitElement, PropertyValues } from 'lit';
import { WeasleyClockConfig, HomeAssistant } from './types';
export declare class WeasleyClockCard extends LitElement {
    static styles: import("lit").CSSResult;
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: WeasleyClockConfig): void;
    getCardSize(): number;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    protected updated(changedProps: PropertyValues): void;
    private _getPersonPositions;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderDefs;
    private _renderClockHand;
    private _renderCenterHub;
    private _adjustColor;
    private _calculateFontSize;
    private _getInitials;
    static getConfigElement(): HTMLDivElement;
    static getStubConfig(): {
        type: string;
        persons: {
            entity: string;
            name: string;
        }[];
        sections: {
            name: string;
            zones: string[];
        }[];
        default_section: string;
    };
}
declare global {
    interface Window {
        customCards?: Array<{
            type: string;
            name: string;
            description: string;
        }>;
    }
}
//# sourceMappingURL=weasley-clock-card.d.ts.map