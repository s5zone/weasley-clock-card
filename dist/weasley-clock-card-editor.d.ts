import { LitElement, nothing } from 'lit';
import { WeasleyClockConfig, HomeAssistant } from './types';
export declare class WeasleyClockCardEditor extends LitElement {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: WeasleyClockConfig): void;
    connectedCallback(): void;
    private _loadHaComponents;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderItemActions;
    private _generalSchema;
    private _computeLabel;
    private _personTitle;
    private _generalChanged;
    private _itemChanged;
    private _renameSectionReferences;
    private _addPerson;
    private _addSection;
    private _moveItem;
    private _removeItem;
    private _updateConfig;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'weasley-clock-card-editor': WeasleyClockCardEditor;
    }
}
//# sourceMappingURL=weasley-clock-card-editor.d.ts.map