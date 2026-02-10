function t(t,e,r,o){var s,i=arguments.length,n=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(n=(i<3?s(n):i>3?s(e,r,n):s(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,r=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;let i=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&s.set(e,t))}return t}toString(){return this.cssText}};const n=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,o))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,g=f?f.emptyScript:"",w=u.reactiveElementPolyfillSupport,m=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},$=(t,e)=>!a(t,e),y={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);void 0!==o&&c(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:o,set(e){const i=o?.call(this);s?.call(this,e),this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{if(r)t.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of o){const o=document.createElement("style"),s=e.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=r.cssText,t.appendChild(o)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(void 0!==o&&!0===r.reflect){const s=(void 0!==r.converter?.toAttribute?r.converter:b).toAttribute(e,r.type);this._$Em=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){const r=this.constructor,o=r._$Eh.get(t);if(void 0!==o&&this._$Em!==o){const t=r.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=o;const i=s.fromAttribute(e,t.type);this[o]=i??this._$Ej?.get(o)??i,this._$Em=null}}requestUpdate(t,e,r,o=!1,s){if(void 0!==t){const i=this.constructor;if(!1===o&&(s=this[t]),r??=i.getPropertyOptions(t),!((r.hasChanged??$)(s,e)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:o,wrapped:s},i){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),!0!==s||void 0!==i)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===o&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,o=this[e];!0!==t||this._$AL.has(e)||void 0===o||this.C(e,void 0,r,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[m("elementProperties")]=new Map,_[m("finalized")]=new Map,w?.({ReactiveElement:_}),(u.reactiveElementVersions??=[]).push("2.1.2");const v=globalThis,E=t=>t,x=v.trustedTypes,A=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+C,F=`<${S}>`,D=document,M=()=>D.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,B=Array.isArray,U="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,N=/>/g,I=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),T=/'/g,G=/"/g,R=/^(?:script|style|textarea|title)$/i,z=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),j=z(1),L=z(2),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),V=new WeakMap,K=D.createTreeWalker(D,129);function Z(t,e){if(!B(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const J=(t,e)=>{const r=t.length-1,o=[];let s,i=2===e?"<svg>":3===e?"<math>":"",n=O;for(let e=0;e<r;e++){const r=t[e];let a,c,l=-1,h=0;for(;h<r.length&&(n.lastIndex=h,c=n.exec(r),null!==c);)h=n.lastIndex,n===O?"!--"===c[1]?n=H:void 0!==c[1]?n=N:void 0!==c[2]?(R.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=I):void 0!==c[3]&&(n=I):n===I?">"===c[0]?(n=s??O,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?I:'"'===c[3]?G:T):n===G||n===T?n=I:n===H||n===N?n=O:(n=I,s=void 0);const d=n===I&&t[e+1].startsWith("/>")?" ":"";i+=n===O?r+F:l>=0?(o.push(a),r.slice(0,l)+k+r.slice(l)+C+d):r+C+(-2===l?e:d)}return[Z(t,i+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),o]};class Y{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let s=0,i=0;const n=t.length-1,a=this.parts,[c,l]=J(t,e);if(this.el=Y.createElement(c,r),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=K.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(k)){const e=l[i++],r=o.getAttribute(t).split(C),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:n[2],strings:r,ctor:"."===n[1]?rt:"?"===n[1]?ot:"@"===n[1]?st:et}),o.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:s}),o.removeAttribute(t));if(R.test(o.tagName)){const t=o.textContent.split(C),e=t.length-1;if(e>0){o.textContent=x?x.emptyScript:"";for(let r=0;r<e;r++)o.append(t[r],M()),K.nextNode(),a.push({type:2,index:++s});o.append(t[e],M())}}}else if(8===o.nodeType)if(o.data===S)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(C,t+1));)a.push({type:7,index:s}),t+=C.length-1}s++}}static createElement(t,e){const r=D.createElement("template");return r.innerHTML=t,r}}function Q(t,e,r=t,o){if(e===W)return e;let s=void 0!==o?r._$Co?.[o]:r._$Cl;const i=P(e)?void 0:e._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),void 0===i?s=void 0:(s=new i(t),s._$AT(t,r,o)),void 0!==o?(r._$Co??=[])[o]=s:r._$Cl=s),void 0!==s&&(e=Q(t,s._$AS(t,e.values),s,o)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=(t?.creationScope??D).importNode(e,!0);K.currentNode=o;let s=K.nextNode(),i=0,n=0,a=r[0];for(;void 0!==a;){if(i===a.index){let e;2===a.type?e=new tt(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new it(s,this,t)),this._$AV.push(e),a=r[++n]}i!==a?.index&&(s=K.nextNode(),i++)}return K.currentNode=D,o}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),P(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>B(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,o="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Y.createElement(Z(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(e);else{const t=new X(o,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new Y(t)),e}k(t){B(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const s of t)o===e.length?e.push(r=new tt(this.O(M()),this.O(M()),this,this.options)):r=e[o],r._$AI(s),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=E(t).nextSibling;E(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,s){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=q}_$AI(t,e=this,r,o){const s=this.strings;let i=!1;if(void 0===s)t=Q(this,t,e,0),i=!P(t)||t!==this._$AH&&t!==W,i&&(this._$AH=t);else{const o=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=Q(this,o[r+n],e,n),a===W&&(a=this._$AH[n]),i||=!P(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+s[n+1]),this._$AH[n]=a}i&&!o&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class ot extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class st extends et{constructor(t,e,r,o,s){super(t,e,r,o,s),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??q)===W)return;const r=this._$AH,o=t===q&&r!==q||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==q&&(r===q||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const nt=v.litHtmlPolyfillSupport;nt?.(Y,tt),(v.litHtmlVersions??=[]).push("3.3.2");const at=globalThis;class ct extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const o=r?.renderBefore??e;let s=o._$litPart$;if(void 0===s){const t=r?.renderBefore??null;o._$litPart$=s=new tt(e.insertBefore(M(),t),t,void 0,r??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}ct._$litElement$=!0,ct.finalized=!0,at.litElementHydrateSupport?.({LitElement:ct});const lt=at.litElementPolyfillSupport;lt?.({LitElement:ct}),(at.litElementVersions??=[]).push("4.2.2");const ht={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:$},dt=(t=ht,e,r)=>{const{kind:o,metadata:s}=r;let i=globalThis.litPropertyMetadata.get(s);if(void 0===i&&globalThis.litPropertyMetadata.set(s,i=new Map),"setter"===o&&((t=Object.create(t)).wrapped=!0),i.set(r.name,t),"accessor"===o){const{name:o}=r;return{set(r){const s=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,s,t,!0,r)},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===o){const{name:o}=r;return function(r){const s=this[o];e.call(this,r),this.requestUpdate(o,s,t,!0,r)}}throw Error("Unsupported decorator location: "+o)};function pt(t){return(e,r)=>"object"==typeof r?dt(t,e,r):((t,e,r)=>{const o=e.hasOwnProperty(r);return e.constructor.createProperty(r,t),o?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}const ut=((t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[o+1],t[0]);return new i(r,t,o)})`
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
`;function ft(t,e,r,o){if(!t||"unavailable"===t.state||"unknown"===t.state){const t=e.findIndex(t=>t.name===r);return{sectionIndex:t>=0?t:0,sectionName:r}}let s;if(o?.states){const e=Object.entries(o.states).find(([e,r])=>e.startsWith("zone.")&&r.attributes?.friendly_name?.toLowerCase()===t.state.toLowerCase());e&&(s=e[0])}s||(s=`zone.${t.state.toLowerCase().replace(/\s+/g,"_")}`);for(let t=0;t<e.length;t++){const r=e[t];for(const e of r.zones)if(e.toLowerCase()===s.toLowerCase())return{sectionIndex:t,sectionName:r.name}}const i=e.findIndex(t=>t.name===r);return{sectionIndex:i>=0?i:0,sectionName:i>=0?r:e[0]?.name||"Unknown"}}function gt(t,e,r,o){const s=360/e,i=t*s-90;if(1===r)return i+s/2;const n=.15*s;return i+n+(s-2*n)/(r+1)*(o+1)}function wt(t,e,r,o){const s=o*Math.PI/180;return{x:t+r*Math.cos(s),y:e+r*Math.sin(s)}}function mt(t){return t?.themes?.darkMode??!1}const bt=200,$t=180,yt=16,_t={steampunk:{light:["#6B3A19","#7D4422","#8B4513","#9C5524","#A0522D","#8B6914","#996633","#7A5230"],dark:["#4A2511","#5C3317","#6B3A19","#7D4422","#8B4513","#6B4423","#7A5230","#5D3A1A"]},minimalist:{light:["#F5F5F5","#EEEEEE","#E8E8E8","#F0F0F0","#EBEBEB","#F2F2F2","#E5E5E5","#EDEDED"],dark:["#2C2C2C","#333333","#3D3D3D","#363636","#303030","#383838","#2E2E2E","#353535"]},playful:{light:["rgba(102, 126, 234, 0.5)","rgba(118, 75, 162, 0.5)","rgba(237, 100, 166, 0.45)","rgba(72, 219, 251, 0.45)","rgba(99, 102, 241, 0.5)","rgba(139, 92, 246, 0.45)","rgba(236, 72, 153, 0.4)","rgba(34, 211, 238, 0.4)"],dark:["rgba(99, 102, 241, 0.4)","rgba(139, 92, 246, 0.4)","rgba(236, 72, 153, 0.35)","rgba(34, 211, 238, 0.35)","rgba(99, 102, 241, 0.35)","rgba(139, 92, 246, 0.35)","rgba(236, 72, 153, 0.3)","rgba(34, 211, 238, 0.3)"]}};let vt=class extends ct{setConfig(t){if(!t.persons||!Array.isArray(t.persons))throw new Error("Please define persons");if(!t.sections||!Array.isArray(t.sections))throw new Error("Please define sections");if(t.sections.length<1||t.sections.length>8)throw new Error("Sections must be between 1 and 8");this._config={...t,theme:t.theme||"steampunk",default_section:t.default_section||t.sections[0]?.name||"Unknown"}}get _theme(){return this._config?.theme||"steampunk"}getCardSize(){return 4}shouldUpdate(t){if(t.has("_config"))return!0;if(t.has("hass")&&this._config){const e=t.get("hass");if(!e)return!0;for(const t of this._config.persons){const r=e.states[t.entity],o=this.hass?.states[t.entity];if(r?.state!==o?.state||r?.attributes?.entity_picture!==o?.attributes?.entity_picture)return!0}if(e.themes?.darkMode!==this.hass?.themes?.darkMode)return!0}return!1}updated(t){super.updated(t),this.setAttribute("theme",this._theme);mt(this.hass)?this.setAttribute("dark-mode",""):this.removeAttribute("dark-mode")}_getPersonPositions(){if(!this._config||!this.hass)return[];const t=[],e=new Map;for(const r of this._config.persons){const o=this.hass.states[r.entity],s=o&&"unavailable"!==o.state&&"unknown"!==o.state,{sectionIndex:i,sectionName:n}=ft(o||null,this._config.sections,this._config.default_section,this.hass);t.push({config:r,state:o||null,sectionIndex:i,sectionName:n,angle:0,isAvailable:!!s}),s&&e.set(i,(e.get(i)||0)+1)}const r=new Map;for(const o of t)if(o.isAvailable){const t=e.get(o.sectionIndex)||1,s=r.get(o.sectionIndex)||0;o.angle=gt(o.sectionIndex,this._config.sections.length,t,s),r.set(o.sectionIndex,s+1)}return t}render(){if(!this._config||!this.hass)return j`<ha-card>Loading...</ha-card>`;const t=mt(this.hass),e=this._getPersonPositions(),r=this._config.sections,o=r.length,s=360/o,i=this._theme,n=this._getBackgroundColor(i,t);return j`
      ${"steampunk"===i?j`<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet">`:""}
      <ha-card>
        <div class="card-container">
          <div class="clock-wrapper">
            <svg
              class="clock-svg"
              viewBox="0 0 ${400} ${400}"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                ${this._renderDefs(t,o,i)}
              </defs>

              <!-- Background circle -->
              <circle
                cx="${bt}"
                cy="${bt}"
                r="${$t}"
                fill="${n}"
              />

              <!-- Section slices -->
              ${r.map((e,r)=>{const o=r*s-90,n=o+s,a="steampunk"===i?`url(#sectionGradient${r})`:this._getSectionColor(i,t,r);return L`
                  <path
                    class="section-slice"
                    d="${function(t,e,r,o,s){const i=wt(t,e,r,s),n=wt(t,e,r,o),a=s-o<=180?"0":"1";return["M",t,e,"L",i.x,i.y,"A",r,r,0,a,0,n.x,n.y,"Z"].join(" ")}(bt,bt,$t,o,n)}"
                    fill="${a}"
                  />
                `})}

              <!-- Section divider lines -->
              ${r.map((t,e)=>{const r=e*s-90,o=wt(bt,bt,30,r),i=wt(bt,bt,$t,r);return L`
                  <line
                    class="section-divider"
                    x1="${o.x}"
                    y1="${o.y}"
                    x2="${i.x}"
                    y2="${i.y}"
                  />
                `})}

              <!-- Section labels -->
              ${r.map((t,e)=>{const r=e*s-90+s/2,n=wt(bt,bt,155,r),a=this._calculateFontSize(t.name,o),c="steampunk"===i?"url(#textShadow)":"";return L`
                  <text
                    class="section-label"
                    x="${n.x}"
                    y="${n.y}"
                    transform="rotate(${r+90}, ${n.x}, ${n.y})"
                    style="font-size: ${a}px"
                    filter="${c}"
                  >
                    ${t.name}
                  </text>
                `})}

              <!-- Inner border -->
              <circle
                class="clock-border-inner"
                cx="${bt}"
                cy="${bt}"
                r="${$t}"
              />

              <!-- Clock hands (persons) -->
              ${e.map((t,e)=>this._renderClockHand(t,e))}

              <!-- Center hub -->
              ${this._renderCenterHub(t,i)}

              <!-- Outer decorative border -->
              <circle
                class="clock-border"
                cx="${bt}"
                cy="${bt}"
                r="${188}"
              />

              <!-- Decorative rivets around the border (steampunk only) -->
              ${"steampunk"===i?Array.from({length:12},(t,e)=>{const r=wt(bt,bt,188,30*e-90);return L`
                  <circle
                    class="border-rivet"
                    cx="${r.x}"
                    cy="${r.y}"
                    r="4"
                  />
                `}):""}
            </svg>
          </div>
        </div>
      </ha-card>
    `}_renderDefs(t,e,r){if("steampunk"===r){const r=_t.steampunk,o=t?r.dark:r.light;return L`
        <!-- Gradients for metallic look -->
        <radialGradient id="hubGradient" cx="30%" cy="30%">
          <stop offset="0%" stop-color="${t?"#D4AF37":"#FFD700"}" />
          <stop offset="50%" stop-color="${t?"#B8860B":"#DAA520"}" />
          <stop offset="100%" stop-color="${t?"#8B6914":"#B8860B"}" />
        </radialGradient>

        <radialGradient id="hubInnerGradient" cx="40%" cy="40%">
          <stop offset="0%" stop-color="${t?"#A67C52":"#CD7F32"}" />
          <stop offset="100%" stop-color="${t?"#6B4423":"#8B4513"}" />
        </radialGradient>

        <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${t?"#D4AF37":"#CFB53B"}" />
          <stop offset="25%" stop-color="${t?"#8B6914":"#B87333"}" />
          <stop offset="50%" stop-color="${t?"#D4AF37":"#CD7F32"}" />
          <stop offset="75%" stop-color="${t?"#8B6914":"#B87333"}" />
          <stop offset="100%" stop-color="${t?"#D4AF37":"#CFB53B"}" />
        </linearGradient>

        <!-- Section gradients -->
        ${Array.from({length:e},(e,r)=>L`
          <radialGradient id="sectionGradient${r}" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stop-color="${this._adjustColor(o[r%o.length],t?-20:20)}" />
            <stop offset="100%" stop-color="${this._adjustColor(o[r%o.length],t?-40:0)}" />
          </radialGradient>
        `)}

        <!-- Golden text gradient for labels -->
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${t?"#F4E4BA":"#FFF8DC"}" />
          <stop offset="20%" stop-color="${t?"#DAA520":"#FFD700"}" />
          <stop offset="50%" stop-color="${t?"#B8860B":"#DAA520"}" />
          <stop offset="80%" stop-color="${t?"#DAA520":"#FFD700"}" />
          <stop offset="100%" stop-color="${t?"#8B6914":"#B8860B"}" />
        </linearGradient>

        <!-- Drop shadow filter for text -->
        <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="1" stdDeviation="1" flood-color="#000000" flood-opacity="0.7"/>
        </filter>
      `}return"minimalist"===r?L`
        <!-- Simple hub gradient for minimalist -->
        <radialGradient id="hubGradient" cx="30%" cy="30%">
          <stop offset="0%" stop-color="${t?"#757575":"#BDBDBD"}" />
          <stop offset="100%" stop-color="${t?"#424242":"#9E9E9E"}" />
        </radialGradient>

        <radialGradient id="hubInnerGradient" cx="40%" cy="40%">
          <stop offset="0%" stop-color="${t?"#424242":"#F5F5F5"}" />
          <stop offset="100%" stop-color="${t?"#212121":"#E0E0E0"}" />
        </radialGradient>
      `:L`
      <!-- Glass-like hub gradient for modern -->
      <radialGradient id="hubGradient" cx="30%" cy="30%">
        <stop offset="0%" stop-color="rgba(255, 255, 255, 0.95)" />
        <stop offset="50%" stop-color="rgba(255, 255, 255, 0.8)" />
        <stop offset="100%" stop-color="rgba(255, 255, 255, 0.6)" />
      </radialGradient>

      <radialGradient id="hubInnerGradient" cx="40%" cy="40%">
        <stop offset="0%" stop-color="rgba(255, 255, 255, 0.5)" />
        <stop offset="100%" stop-color="rgba(255, 255, 255, 0.2)" />
      </radialGradient>

      <!-- Subtle glow filter for modern -->
      <filter id="modernGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    `}_getBackgroundColor(t,e){switch(t){case"steampunk":default:return e?"#1E1810":"#F5E6C8";case"minimalist":return e?"#1E1E1E":"#FAFAFA";case"playful":return e?"#1a1a2e":"#667eea"}}_getSectionColor(t,e,r){const o=_t[t],s=e?o.dark:o.light;return s[r%s.length]}_renderClockHand(t,e){if(!t.isAvailable)return L``;const r=t.angle,o=t.config.color||function(t){let e=0;for(let r=0;r<t.length;r++)e=t.charCodeAt(r)+((e<<5)-e);return`hsl(${Math.abs(e%360)}, ${60+e%20}%, ${35+e%15}%)`}(t.config.entity),s=t.state?.attributes?.entity_picture,i=t.config.name||t.state?.attributes?.friendly_name||t.config.entity.replace("person.",""),n=wt(bt,bt,90,r),a=wt(bt,bt,66,r),c=r-90,l=r+90,h=12*.6,d=wt(a.x,a.y,h,c),p=wt(a.x,a.y,h,l),u=wt(bt,bt,28,r),f=wt(u.x,u.y,4,c),g=wt(u.x,u.y,4,l),w=wt(bt,bt,109,r),m=`person-clip-${e}`;return L`
      <g class="clock-hand">
        <!-- Hand shaft -->
        <polygon
          class="hand-shaft"
          points="${f.x},${f.y} ${d.x},${d.y} ${p.x},${p.y} ${g.x},${g.y}"
        />

        <!-- Arrow head -->
        <polygon
          class="hand-arrow"
          points="${n.x},${n.y} ${d.x},${d.y} ${p.x},${p.y}"
        />

        <!-- Person circle (clickable) -->
        <defs>
          <clipPath id="${m}">
            <circle cx="${w.x}" cy="${w.y}" r="${yt}" />
          </clipPath>
        </defs>

        <g
          class="person-circle"
          @click=${e=>this._handleAction(e,t)}
        >
          <!-- Invisible hit area for easier tapping -->
          <circle
            cx="${w.x}"
            cy="${w.y}"
            r="${21}"
            fill="transparent"
          />

          ${s?L`
            <image
              class="person-image"
              x="${w.x-yt}"
              y="${w.y-yt}"
              width="${32}"
              height="${32}"
              href="${t.state?.attributes?.entity_picture}"
              clip-path="url(#${m})"
              preserveAspectRatio="xMidYMid slice"
            />
          `:L`
            <circle
              cx="${w.x}"
              cy="${w.y}"
              r="${yt}"
              fill="${o}"
            />
            <text
              class="person-fallback"
              x="${w.x}"
              y="${w.y}"
              fill="white"
            >
              ${this._getInitials(i)}
            </text>
          `}

          <!-- Decorative frame -->
          <circle
            class="person-frame"
            cx="${w.x}"
            cy="${w.y}"
            r="${18}"
          />
        </g>
      </g>
    `}_renderCenterHub(t,e){const r="steampunk"===e?t?"#D4AF37":"#FFD700":"minimalist"===e?t?"#616161":"#9E9E9E":"rgba(255, 255, 255, 0.9)";return L`
      <circle
        class="center-hub"
        cx="${bt}"
        cy="${bt}"
        r="${25}"
      />
      <circle
        class="center-hub-inner"
        cx="${bt}"
        cy="${bt}"
        r="${15}"
      />
      ${"steampunk"===e?Array.from({length:6},(t,e)=>{const r=wt(bt,bt,20,60*e);return L`
          <circle
            class="center-rivet"
            cx="${r.x}"
            cy="${r.y}"
            r="2.5"
          />
        `}):""}
      <circle
        cx="${bt}"
        cy="${bt}"
        r="3"
        fill="${r}"
      />
    `}_adjustColor(t,e){const r=parseInt(t.replace("#",""),16),o=Math.round(2.55*e);return`#${(16777216+65536*Math.max(0,Math.min(255,(r>>16)+o))+256*Math.max(0,Math.min(255,(r>>8&255)+o))+Math.max(0,Math.min(255,(255&r)+o))).toString(16).slice(1)}`}_calculateFontSize(t,e){const r=Math.max(.65,1-.035*(t.length-5)),o=Math.max(.75,1-.05*(e-4));return Math.round(20*r*o)}_getInitials(t){const e=t.trim().split(/\s+/);return 1===e.length?e[0].substring(0,2).toUpperCase():(e[0][0]+e[e.length-1][0]).toUpperCase()}_handleAction(t,e){t.stopPropagation();const r=e.config.tap_action||{action:"more-info"},o=r.entity||e.config.entity;switch(r.action){case"more-info":this._fireMoreInfo(o);break;case"toggle":this._toggleEntity(o);break;case"call-service":this._callService(r);break;case"navigate":this._navigate(r.navigation_path);break;case"url":this._openUrl(r.url_path)}}_fireMoreInfo(t){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}});this.dispatchEvent(e)}_toggleEntity(t){this.hass&&this.hass.callService("homeassistant","toggle",{entity_id:t})}_callService(t){if(!this.hass||!t.service)return;const[e,r]=t.service.split(".");this.hass.callService(e,r,t.service_data||{})}_navigate(t){t&&(history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed")))}_openUrl(t){t&&window.open(t,"_blank")}static getConfigElement(){return document.createElement("div")}static getStubConfig(){return{type:"custom:weasley-clock-card",persons:[{entity:"person.example",name:"Example"}],sections:[{name:"Home",zones:["zone.home"]},{name:"Work",zones:["zone.work"]},{name:"School",zones:["zone.school"]},{name:"In transit",zones:[]}],default_section:"In transit"}}};vt.styles=ut,t([pt({attribute:!1})],vt.prototype,"hass",void 0),t([function(t){return pt({...t,state:!0,attribute:!1})}()],vt.prototype,"_config",void 0),vt=t([(t=>(e,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("weasley-clock-card")],vt),window.customCards=window.customCards||[],window.customCards.push({type:"weasley-clock-card",name:"Weasley Clock Card",description:"A magical clock showing where family members are located"});export{vt as WeasleyClockCard};
//# sourceMappingURL=weasley-clock-card.js.map
