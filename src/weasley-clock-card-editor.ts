import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  WeasleyClockConfig,
  PersonConfig,
  SectionConfig,
  HomeAssistant
} from './types';

const MAX_SECTIONS = 8;

// MDI icon paths (from @mdi/js)
const mdiArrowUp = 'M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z';
const mdiArrowDown = 'M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z';
const mdiDelete = 'M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z';

type ListKey = 'persons' | 'sections';

const LABELS: Record<string, string> = {
  theme: 'Theme',
  default_section: 'Default section',
  visible_when_in: 'Only show when someone is in',
  entity: 'Person',
  name: 'Name',
  color: 'Fallback color (hex, e.g. #C41E3A)',
  tap_action: 'Tap action',
  icon: 'Icon',
  zones: 'Zones'
};

const PERSON_SCHEMA = [
  { name: 'entity', required: true, selector: { entity: { filter: { domain: 'person' } } } },
  {
    type: 'grid',
    name: '',
    schema: [
      { name: 'name', selector: { text: {} } },
      { name: 'color', selector: { text: {} } }
    ]
  },
  {
    name: 'tap_action',
    selector: {
      ui_action: {
        default_action: 'more-info',
        actions: ['more-info', 'toggle', 'navigate', 'url', 'perform-action', 'none']
      }
    }
  }
];

const SECTION_SCHEMA = [
  {
    type: 'grid',
    name: '',
    schema: [
      { name: 'name', required: true, selector: { text: {} } },
      { name: 'icon', selector: { icon: {} } }
    ]
  },
  { name: 'zones', selector: { entity: { multiple: true, filter: { domain: 'zone' } } } }
];

@customElement('weasley-clock-card-editor')
export class WeasleyClockCardEditor extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @state() private _config?: WeasleyClockConfig;

  setConfig(config: WeasleyClockConfig): void {
    this._config = {
      ...config,
      persons: Array.isArray(config.persons) ? config.persons : [],
      sections: Array.isArray(config.sections) ? config.sections : []
    };
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._loadHaComponents();
  }

  // ha-form and its selectors are lazy-loaded by Home Assistant. Asking a
  // built-in card for its editor forces them to be registered.
  private async _loadHaComponents(): Promise<void> {
    if (customElements.get('ha-form') && customElements.get('ha-selector-ui_action')) return;
    const entitiesCard = customElements.get('hui-entities-card') as
      | (CustomElementConstructor & { getConfigElement?: () => Promise<unknown> })
      | undefined;
    await entitiesCard?.getConfigElement?.();
    this.requestUpdate();
  }

  protected render() {
    if (!this.hass || !this._config) {
      return nothing;
    }

    const sectionNames = this._config.sections.map(s => s.name).filter(Boolean);

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._generalSchema(sectionNames)}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._generalChanged}
      ></ha-form>

      <div class="list">
        <h3>Persons</h3>
        ${this._config.persons.map((person, index) => html`
          <ha-expansion-panel outlined .header=${this._personTitle(person)}>
            <div class="item">
              <ha-form
                .hass=${this.hass}
                .data=${person}
                .schema=${PERSON_SCHEMA}
                .computeLabel=${this._computeLabel}
                @value-changed=${(ev: CustomEvent) => this._itemChanged('persons', index, ev)}
              ></ha-form>
              ${this._renderItemActions('persons', index, this._config!.persons.length, 0)}
            </div>
          </ha-expansion-panel>
        `)}
        <ha-button @click=${this._addPerson}>Add person</ha-button>
      </div>

      <div class="list">
        <h3>Sections (${this._config.sections.length}/${MAX_SECTIONS})</h3>
        ${this._config.sections.map((section, index) => html`
          <ha-expansion-panel outlined .header=${section.name || `Section ${index + 1}`}>
            <div class="item">
              <ha-form
                .hass=${this.hass}
                .data=${section}
                .schema=${SECTION_SCHEMA}
                .computeLabel=${this._computeLabel}
                @value-changed=${(ev: CustomEvent) => this._itemChanged('sections', index, ev)}
              ></ha-form>
              ${this._renderItemActions('sections', index, this._config!.sections.length, 1)}
            </div>
          </ha-expansion-panel>
        `)}
        <ha-button
          .disabled=${this._config.sections.length >= MAX_SECTIONS}
          @click=${this._addSection}
        >Add section</ha-button>
      </div>
    `;
  }

  private _renderItemActions(key: ListKey, index: number, length: number, minItems: number) {
    return html`
      <div class="item-actions">
        <ha-icon-button
          .label=${'Move up'}
          .path=${mdiArrowUp}
          .disabled=${index === 0}
          @click=${() => this._moveItem(key, index, -1)}
        ></ha-icon-button>
        <ha-icon-button
          .label=${'Move down'}
          .path=${mdiArrowDown}
          .disabled=${index === length - 1}
          @click=${() => this._moveItem(key, index, 1)}
        ></ha-icon-button>
        <ha-icon-button
          .label=${'Remove'}
          .path=${mdiDelete}
          .disabled=${length <= minItems}
          @click=${() => this._removeItem(key, index)}
        ></ha-icon-button>
      </div>
    `;
  }

  private _generalSchema(sectionNames: string[]) {
    return [
      {
        name: 'theme',
        selector: {
          select: {
            mode: 'dropdown',
            options: [
              { value: 'steampunk', label: 'Steampunk' },
              { value: 'minimalist', label: 'Minimalist' },
              { value: 'playful', label: 'Playful' }
            ]
          }
        }
      },
      {
        name: 'default_section',
        selector: { select: { mode: 'dropdown', options: sectionNames } }
      },
      {
        name: 'visible_when_in',
        selector: { select: { multiple: true, mode: 'list', options: sectionNames } }
      }
    ];
  }

  private _computeLabel = (schema: { name: string }): string =>
    LABELS[schema.name] ?? schema.name;

  private _personTitle(person: PersonConfig): string {
    if (person.name) return person.name;
    if (!person.entity) return 'New person';
    return (this.hass?.states[person.entity]?.attributes.friendly_name as string | undefined)
      ?? person.entity;
  }

  private _generalChanged(ev: CustomEvent): void {
    ev.stopPropagation();
    const config = { ...ev.detail.value } as WeasleyClockConfig;
    if (!config.visible_when_in?.length) {
      delete config.visible_when_in;
    }
    this._updateConfig(config);
  }

  private _itemChanged(key: ListKey, index: number, ev: CustomEvent): void {
    ev.stopPropagation();
    const config = { ...this._config! };

    if (key === 'persons') {
      const person = { ...ev.detail.value } as PersonConfig;
      if (!person.name) delete person.name;
      if (!person.color) delete person.color;
      if (!person.tap_action) delete person.tap_action;
      config.persons = config.persons.map((p, i) => (i === index ? person : p));
    } else {
      const section = { ...ev.detail.value } as SectionConfig;
      if (!section.icon) delete section.icon;
      section.zones = section.zones ?? [];
      this._renameSectionReferences(config, config.sections[index].name, section.name);
      config.sections = config.sections.map((s, i) => (i === index ? section : s));
    }

    this._updateConfig(config);
  }

  // Keep default_section and visible_when_in pointing at a section when it is renamed
  private _renameSectionReferences(config: WeasleyClockConfig, oldName: string, newName: string): void {
    if (oldName === newName) return;
    if (config.default_section === oldName) {
      config.default_section = newName;
    }
    if (config.visible_when_in) {
      config.visible_when_in = config.visible_when_in.map(n => (n === oldName ? newName : n));
    }
  }

  private _addPerson(): void {
    const used = new Set(this._config!.persons.map(p => p.entity));
    const entity = Object.keys(this.hass?.states ?? {})
      .find(id => id.startsWith('person.') && !used.has(id)) ?? '';
    this._updateConfig({
      ...this._config!,
      persons: [...this._config!.persons, { entity }]
    });
  }

  private _addSection(): void {
    const sections = this._config!.sections;
    if (sections.length >= MAX_SECTIONS) return;
    this._updateConfig({
      ...this._config!,
      sections: [...sections, { name: `Section ${sections.length + 1}`, zones: [] }]
    });
  }

  private _moveItem(key: ListKey, index: number, offset: number): void {
    const items = [...this._config![key]] as unknown[];
    const target = index + offset;
    if (target < 0 || target >= items.length) return;
    [items[index], items[target]] = [items[target], items[index]];
    this._updateConfig({ ...this._config!, [key]: items });
  }

  private _removeItem(key: ListKey, index: number): void {
    const config = { ...this._config! };

    if (key === 'sections') {
      const removed = config.sections[index].name;
      config.sections = config.sections.filter((_, i) => i !== index);
      if (config.default_section === removed) {
        config.default_section = config.sections[0]?.name ?? '';
      }
      if (config.visible_when_in) {
        config.visible_when_in = config.visible_when_in.filter(n => n !== removed);
        if (!config.visible_when_in.length) delete config.visible_when_in;
      }
    } else {
      config.persons = config.persons.filter((_, i) => i !== index);
    }

    this._updateConfig(config);
  }

  private _updateConfig(config: WeasleyClockConfig): void {
    this._config = config;
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config },
      bubbles: true,
      composed: true
    }));
  }

  static styles = css`
    .list {
      margin-top: 24px;
    }

    h3 {
      margin: 0 0 8px;
      font-size: 16px;
      font-weight: 500;
    }

    ha-expansion-panel {
      display: block;
      margin-bottom: 8px;
    }

    .item {
      padding: 8px 0;
    }

    .item-actions {
      display: flex;
      justify-content: flex-end;
      color: var(--secondary-text-color);
    }

    ha-button {
      margin-top: 4px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'weasley-clock-card-editor': WeasleyClockCardEditor;
  }
}
