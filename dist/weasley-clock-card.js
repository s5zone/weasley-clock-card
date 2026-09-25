function t(t,e,o,s){var i,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(n=(r<3?i(n):r>3?i(e,o,n):i(e,o))||n);return r>3&&n&&Object.defineProperty(e,o,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,o=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;let r=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const o=void 0!==e&&1===e.length;o&&(t=i.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&i.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,o,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[s+1],t[0]);return new r(o,t,s)},a=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,m=f.trustedTypes,g=m?m.emptyScript:"",w=f.reactiveElementPolyfillSupport,b=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=null!==t;break;case Number:o=null===t?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch(t){o=null}}return o}},_=(t,e)=>!c(t,e),y={attribute:!0,type:String,converter:$,reflect:!1,useDefault:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,o){const{get:s,set:i}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);i?.call(this,e),this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const o of e)this.createProperty(o,t[o])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,o]of e)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const o=this._$Eu(t,e);void 0!==o&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const t of o)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const o=e.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(o)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const o of s){const s=document.createElement("style"),i=e.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=o.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$ET(t,e){const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(void 0!==s&&!0===o.reflect){const i=(void 0!==o.converter?.toAttribute?o.converter:$).toAttribute(e,o.type);this._$Em=t,null==i?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){const o=this.constructor,s=o._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=o.getPropertyOptions(s),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s;const r=i.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,o,s=!1,i){if(void 0!==t){const r=this.constructor;if(!1===s&&(i=this[t]),o??=r.getPropertyOptions(t),!((o.hasChanged??_)(i,e)||o.useDefault&&o.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,o))))return;this.C(t,e,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:o,reflect:s,wrapped:i},r){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==i||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||o||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,o]of t){const{wrapped:t}=o,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,o,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[b("elementProperties")]=new Map,v[b("finalized")]=new Map,w?.({ReactiveElement:v}),(f.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,E=t=>t,A=x.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,F="?"+S,M=`<${F}>`,D=document,P=()=>D.createComment(""),B=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,U="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,N=/>/g,T=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,z=/"/g,R=/^(?:script|style|textarea|title)$/i,G=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),j=G(1),V=G(2),W=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Z=new WeakMap,K=D.createTreeWalker(D,129);function J(t,e){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const Y=(t,e)=>{const o=t.length-1,s=[];let i,r=2===e?"<svg>":3===e?"<math>":"",n=O;for(let e=0;e<o;e++){const o=t[e];let a,c,l=-1,h=0;for(;h<o.length&&(n.lastIndex=h,c=n.exec(o),null!==c);)h=n.lastIndex,n===O?"!--"===c[1]?n=I:void 0!==c[1]?n=N:void 0!==c[2]?(R.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=T):void 0!==c[3]&&(n=T):n===T?">"===c[0]?(n=i??O,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?T:'"'===c[3]?z:L):n===z||n===L?n=T:n===I||n===N?n=O:(n=T,i=void 0);const d=n===T&&t[e+1].startsWith("/>")?" ":"";r+=n===O?o+M:l>=0?(s.push(a),o.slice(0,l)+C+o.slice(l)+S+d):o+S+(-2===l?e:d)}return[J(t,r+(t[o]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Q{constructor({strings:t,_$litType$:e},o){let s;this.parts=[];let i=0,r=0;const n=t.length-1,a=this.parts,[c,l]=Y(t,e);if(this.el=Q.createElement(c,o),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=K.nextNode())&&a.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(C)){const e=l[r++],o=s.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:i,name:n[2],strings:o,ctor:"."===n[1]?st:"?"===n[1]?it:"@"===n[1]?rt:ot}),s.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:i}),s.removeAttribute(t));if(R.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let o=0;o<e;o++)s.append(t[o],P()),K.nextNode(),a.push({type:2,index:++i});s.append(t[e],P())}}}else if(8===s.nodeType)if(s.data===F)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:i}),t+=S.length-1}i++}}static createElement(t,e){const o=D.createElement("template");return o.innerHTML=t,o}}function X(t,e,o=t,s){if(e===W)return e;let i=void 0!==s?o._$Co?.[s]:o._$Cl;const r=B(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),void 0===r?i=void 0:(i=new r(t),i._$AT(t,o,s)),void 0!==s?(o._$Co??=[])[s]=i:o._$Cl=i),void 0!==i&&(e=X(t,i._$AS(t,e.values),i,s)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:o}=this._$AD,s=(t?.creationScope??D).importNode(e,!0);K.currentNode=s;let i=K.nextNode(),r=0,n=0,a=o[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new et(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new nt(i,this,t)),this._$AV.push(e),a=o[++n]}r!==a?.index&&(i=K.nextNode(),r++)}return K.currentNode=D,s}p(t){let e=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,o,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),B(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:o}=t,s="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=Q.createElement(J(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new tt(s,this),o=t.u(this.options);t.p(e),this.T(o),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new Q(t)),e}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,s=0;for(const i of t)s===e.length?e.push(o=new et(this.O(P()),this.O(P()),this,this.options)):o=e[s],o._$AI(i),s++;s<e.length&&(this._$AR(o&&o._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=E(t).nextSibling;E(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,o,s,i){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=q}_$AI(t,e=this,o,s){const i=this.strings;let r=!1;if(void 0===i)t=X(this,t,e,0),r=!B(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const s=t;let n,a;for(t=i[0],n=0;n<i.length-1;n++)a=X(this,s[o+n],e,n),a===W&&(a=this._$AH[n]),r||=!B(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+i[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class it extends ot{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class rt extends ot{constructor(t,e,o,s,i){super(t,e,o,s,i),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??q)===W)return;const o=this._$AH,s=t===q&&o!==q||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==q&&(o===q||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const at=x.litHtmlPolyfillSupport;at?.(Q,et),(x.litHtmlVersions??=[]).push("3.3.2");const ct=globalThis;class lt extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,o)=>{const s=o?.renderBefore??e;let i=s._$litPart$;if(void 0===i){const t=o?.renderBefore??null;s._$litPart$=i=new et(e.insertBefore(P(),t),t,void 0,o??{})}return i._$AI(t),i})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}lt._$litElement$=!0,lt.finalized=!0,ct.litElementHydrateSupport?.({LitElement:lt});const ht=ct.litElementPolyfillSupport;ht?.({LitElement:lt}),(ct.litElementVersions??=[]).push("4.2.2");const dt=t=>(e,o)=>{void 0!==o?o.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},pt={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:_},ut=(t=pt,e,o)=>{const{kind:s,metadata:i}=o;let r=globalThis.litPropertyMetadata.get(i);if(void 0===r&&globalThis.litPropertyMetadata.set(i,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(o.name,t),"accessor"===s){const{name:s}=o;return{set(o){const i=e.get.call(this);e.set.call(this,o),this.requestUpdate(s,i,t,!0,o)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=o;return function(o){const i=this[s];e.call(this,o),this.requestUpdate(s,i,t,!0,o)}}throw Error("Unsupported decorator location: "+s)};function ft(t){return(e,o)=>"object"==typeof o?ut(t,e,o):((t,e,o)=>{const s=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),s?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function mt(t){return ft({...t,state:!0,attribute:!1})}const gt=n`
  :host {
    display: block;
    height: 100%;
    --wc-transition-duration: 0.5s;
  }

  :host([hidden]) {
    display: none;
  }

  /* Fill the whole grid cell; center the clock when the cell is taller than it */
  ha-card {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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

  /* Section icon styles */
  .section-icon {
    pointer-events: none;
    overflow: visible;
  }

  .section-icon ha-icon {
    --mdc-icon-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    line-height: 0;
  }

  :host([theme="steampunk"]) .section-icon ha-icon {
    color: rgba(210, 180, 140, 0.2);
  }

  :host([theme="steampunk"][dark-mode]) .section-icon ha-icon {
    color: rgba(210, 180, 140, 0.15);
  }

  :host([theme="minimalist"]) .section-icon ha-icon {
    color: rgba(120, 120, 120, 0.12);
  }

  :host([theme="minimalist"][dark-mode]) .section-icon ha-icon {
    color: rgba(200, 200, 200, 0.1);
  }

  :host([theme="playful"]) .section-icon ha-icon {
    color: rgba(255, 255, 255, 0.15);
  }

  :host([theme="playful"][dark-mode]) .section-icon ha-icon {
    color: rgba(255, 255, 255, 0.1);
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
`,wt={theme:"Theme",default_section:"Default section",visible_when_in:"Only show when someone is in",entity:"Person",name:"Name",color:"Fallback color (hex, e.g. #C41E3A)",tap_action:"Tap action",icon:"Icon",zones:"Zones"},bt=[{name:"entity",required:!0,selector:{entity:{filter:{domain:"person"}}}},{type:"grid",name:"",schema:[{name:"name",selector:{text:{}}},{name:"color",selector:{text:{}}}]},{name:"tap_action",selector:{ui_action:{default_action:"more-info",actions:["more-info","toggle","navigate","url","perform-action","none"]}}}],$t=[{type:"grid",name:"",schema:[{name:"name",required:!0,selector:{text:{}}},{name:"icon",selector:{icon:{}}}]},{name:"zones",selector:{entity:{multiple:!0,filter:{domain:"zone"}}}}];let _t=class extends lt{constructor(){super(...arguments),this._computeLabel=t=>wt[t.name]??t.name}setConfig(t){this._config={...t,persons:Array.isArray(t.persons)?t.persons:[],sections:Array.isArray(t.sections)?t.sections:[]}}connectedCallback(){super.connectedCallback(),this._loadHaComponents()}async _loadHaComponents(){if(customElements.get("ha-form")&&customElements.get("ha-selector-ui_action"))return;const t=customElements.get("hui-entities-card");await(t?.getConfigElement?.()),this.requestUpdate()}render(){if(!this.hass||!this._config)return q;const t=this._config.sections.map(t=>t.name).filter(Boolean);return j`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._generalSchema(t)}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._generalChanged}
      ></ha-form>

      <div class="list">
        <h3>Persons</h3>
        ${this._config.persons.map((t,e)=>j`
          <ha-expansion-panel outlined .header=${this._personTitle(t)}>
            <div class="item">
              <ha-form
                .hass=${this.hass}
                .data=${t}
                .schema=${bt}
                .computeLabel=${this._computeLabel}
                @value-changed=${t=>this._itemChanged("persons",e,t)}
              ></ha-form>
              ${this._renderItemActions("persons",e,this._config.persons.length,0)}
            </div>
          </ha-expansion-panel>
        `)}
        <ha-button @click=${this._addPerson}>Add person</ha-button>
      </div>

      <div class="list">
        <h3>Sections (${this._config.sections.length}/${8})</h3>
        ${this._config.sections.map((t,e)=>j`
          <ha-expansion-panel outlined .header=${t.name||`Section ${e+1}`}>
            <div class="item">
              <ha-form
                .hass=${this.hass}
                .data=${t}
                .schema=${$t}
                .computeLabel=${this._computeLabel}
                @value-changed=${t=>this._itemChanged("sections",e,t)}
              ></ha-form>
              ${this._renderItemActions("sections",e,this._config.sections.length,1)}
            </div>
          </ha-expansion-panel>
        `)}
        <ha-button
          .disabled=${this._config.sections.length>=8}
          @click=${this._addSection}
        >Add section</ha-button>
      </div>
    `}_renderItemActions(t,e,o,s){return j`
      <div class="item-actions">
        <ha-icon-button
          .label=${"Move up"}
          .path=${"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"}
          .disabled=${0===e}
          @click=${()=>this._moveItem(t,e,-1)}
        ></ha-icon-button>
        <ha-icon-button
          .label=${"Move down"}
          .path=${"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"}
          .disabled=${e===o-1}
          @click=${()=>this._moveItem(t,e,1)}
        ></ha-icon-button>
        <ha-icon-button
          .label=${"Remove"}
          .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
          .disabled=${o<=s}
          @click=${()=>this._removeItem(t,e)}
        ></ha-icon-button>
      </div>
    `}_generalSchema(t){return[{name:"theme",selector:{select:{mode:"dropdown",options:[{value:"steampunk",label:"Steampunk"},{value:"minimalist",label:"Minimalist"},{value:"playful",label:"Playful"}]}}},{name:"default_section",selector:{select:{mode:"dropdown",options:t}}},{name:"visible_when_in",selector:{select:{multiple:!0,mode:"list",options:t}}}]}_personTitle(t){return t.name?t.name:t.entity?this.hass?.states[t.entity]?.attributes.friendly_name??t.entity:"New person"}_generalChanged(t){t.stopPropagation();const e={...t.detail.value};e.visible_when_in?.length||delete e.visible_when_in,this._updateConfig(e)}_itemChanged(t,e,o){o.stopPropagation();const s={...this._config};if("persons"===t){const t={...o.detail.value};t.name||delete t.name,t.color||delete t.color,t.tap_action||delete t.tap_action,s.persons=s.persons.map((o,s)=>s===e?t:o)}else{const t={...o.detail.value};t.icon||delete t.icon,t.zones=t.zones??[],this._renameSectionReferences(s,s.sections[e].name,t.name),s.sections=s.sections.map((o,s)=>s===e?t:o)}this._updateConfig(s)}_renameSectionReferences(t,e,o){e!==o&&(t.default_section===e&&(t.default_section=o),t.visible_when_in&&(t.visible_when_in=t.visible_when_in.map(t=>t===e?o:t)))}_addPerson(){const t=new Set(this._config.persons.map(t=>t.entity)),e=Object.keys(this.hass?.states??{}).find(e=>e.startsWith("person.")&&!t.has(e))??"";this._updateConfig({...this._config,persons:[...this._config.persons,{entity:e}]})}_addSection(){const t=this._config.sections;t.length>=8||this._updateConfig({...this._config,sections:[...t,{name:`Section ${t.length+1}`,zones:[]}]})}_moveItem(t,e,o){const s=[...this._config[t]],i=e+o;i<0||i>=s.length||([s[e],s[i]]=[s[i],s[e]],this._updateConfig({...this._config,[t]:s}))}_removeItem(t,e){const o={...this._config};if("sections"===t){const t=o.sections[e].name;o.sections=o.sections.filter((t,o)=>o!==e),o.default_section===t&&(o.default_section=o.sections[0]?.name??""),o.visible_when_in&&(o.visible_when_in=o.visible_when_in.filter(e=>e!==t),o.visible_when_in.length||delete o.visible_when_in)}else o.persons=o.persons.filter((t,o)=>o!==e);this._updateConfig(o)}_updateConfig(t){this._config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}};function yt(t,e,o,s){if(!t||"unavailable"===t.state||"unknown"===t.state){const t=e.findIndex(t=>t.name===o);return{sectionIndex:t>=0?t:0,sectionName:o}}let i;if(s?.states){const e=Object.entries(s.states).find(([e,o])=>e.startsWith("zone.")&&o.attributes?.friendly_name?.toLowerCase()===t.state.toLowerCase());e&&(i=e[0])}i||(i=`zone.${t.state.toLowerCase().replace(/\s+/g,"_")}`);for(let t=0;t<e.length;t++){const o=e[t];for(const e of o.zones)if(e.toLowerCase()===i.toLowerCase())return{sectionIndex:t,sectionName:o.name}}const r=e.findIndex(t=>t.name===o);return{sectionIndex:r>=0?r:0,sectionName:r>=0?o:e[0]?.name||"Unknown"}}function vt(t,e,o,s){const i=360/e,r=t*i-90;if(1===o)return r+i/2;const n=.15*i;return r+n+(i-2*n)/(o+1)*(s+1)}function xt(t,e,o,s){const i=s*Math.PI/180;return{x:t+o*Math.cos(i),y:e+o*Math.sin(i)}}function Et(t){return t?.themes?.darkMode??!1}_t.styles=n`
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
  `,t([ft({attribute:!1})],_t.prototype,"hass",void 0),t([mt()],_t.prototype,"_config",void 0),_t=t([dt("weasley-clock-card-editor")],_t);const At=200,kt=180,Ct=16,St={steampunk:{light:["#6B3A19","#7D4422","#8B4513","#9C5524","#A0522D","#8B6914","#996633","#7A5230"],dark:["#4A2511","#5C3317","#6B3A19","#7D4422","#8B4513","#6B4423","#7A5230","#5D3A1A"]},minimalist:{light:["#F5F5F5","#EEEEEE","#E8E8E8","#F0F0F0","#EBEBEB","#F2F2F2","#E5E5E5","#EDEDED"],dark:["#2C2C2C","#333333","#3D3D3D","#363636","#303030","#383838","#2E2E2E","#353535"]},playful:{light:["rgba(102, 126, 234, 0.5)","rgba(118, 75, 162, 0.5)","rgba(237, 100, 166, 0.45)","rgba(72, 219, 251, 0.45)","rgba(99, 102, 241, 0.5)","rgba(139, 92, 246, 0.45)","rgba(236, 72, 153, 0.4)","rgba(34, 211, 238, 0.4)"],dark:["rgba(99, 102, 241, 0.4)","rgba(139, 92, 246, 0.4)","rgba(236, 72, 153, 0.35)","rgba(34, 211, 238, 0.35)","rgba(99, 102, 241, 0.35)","rgba(139, 92, 246, 0.35)","rgba(236, 72, 153, 0.3)","rgba(34, 211, 238, 0.3)"]}};let Ft=class extends lt{setConfig(t){if(!t.persons||!Array.isArray(t.persons))throw new Error("Please define persons");if(!t.sections||!Array.isArray(t.sections))throw new Error("Please define sections");if(t.sections.length<1||t.sections.length>8)throw new Error("Sections must be between 1 and 8");this._config={...t,theme:t.theme||"steampunk",default_section:t.default_section||t.sections[0]?.name||"Unknown"}}get _theme(){return this._config?.theme||"steampunk"}getCardSize(){return 4}shouldUpdate(t){if(t.has("_config"))return!0;if(t.has("hass")&&this._config){const e=t.get("hass");if(!e)return!0;for(const t of this._config.persons){const o=e.states[t.entity],s=this.hass?.states[t.entity];if(o?.state!==s?.state||o?.attributes?.entity_picture!==s?.attributes?.entity_picture)return!0}if(e.themes?.darkMode!==this.hass?.themes?.darkMode)return!0}return!1}updated(t){super.updated(t),this.setAttribute("theme",this._theme);Et(this.hass)?this.setAttribute("dark-mode",""):this.removeAttribute("dark-mode"),this._shouldHide()?this.setAttribute("hidden",""):this.removeAttribute("hidden")}_shouldHide(){if(!this._config||!this.hass)return!1;const t=this._config.visible_when_in;if(!t||0===t.length)return!1;return!this._getPersonPositions().some(e=>e.isAvailable&&t.includes(e.sectionName))}_getPersonPositions(){if(!this._config||!this.hass)return[];const t=[],e=new Map;for(const o of this._config.persons){const s=this.hass.states[o.entity],i=s&&"unavailable"!==s.state&&"unknown"!==s.state,{sectionIndex:r,sectionName:n}=yt(s||null,this._config.sections,this._config.default_section,this.hass);t.push({config:o,state:s||null,sectionIndex:r,sectionName:n,angle:0,isAvailable:!!i}),i&&e.set(r,(e.get(r)||0)+1)}const o=new Map;for(const s of t)if(s.isAvailable){const t=e.get(s.sectionIndex)||1,i=o.get(s.sectionIndex)||0;s.angle=vt(s.sectionIndex,this._config.sections.length,t,i),o.set(s.sectionIndex,i+1)}return t}render(){if(!this._config||!this.hass)return j`<ha-card>Loading...</ha-card>`;if(this._shouldHide())return j``;const t=Et(this.hass),e=this._getPersonPositions(),o=this._config.sections,s=o.length,i=360/s,r=this._theme,n=this._getBackgroundColor(r,t);return j`
      ${"steampunk"===r?j`<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet">`:""}
      <ha-card>
        <div class="card-container">
          <div class="clock-wrapper">
            <svg
              class="clock-svg"
              viewBox="0 0 ${400} ${400}"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                ${this._renderDefs(t,s,r)}
              </defs>

              <!-- Background circle -->
              <circle
                cx="${At}"
                cy="${At}"
                r="${kt}"
                fill="${n}"
              />

              <!-- Section slices -->
              ${o.map((e,o)=>{const s=o*i-90,n=s+i,a="steampunk"===r?`url(#sectionGradient${o})`:this._getSectionColor(r,t,o);return V`
                  <path
                    class="section-slice"
                    d="${function(t,e,o,s,i){const r=xt(t,e,o,i),n=xt(t,e,o,s),a=i-s<=180?"0":"1";return["M",t,e,"L",r.x,r.y,"A",o,o,0,a,0,n.x,n.y,"Z"].join(" ")}(At,At,kt,s,n)}"
                    fill="${a}"
                  />
                `})}

              <!-- Section icons -->
              ${o.map((t,e)=>{if(!t.icon)return V``;const o=xt(At,At,90,e*i-90+i/2),s=Math.min(81,1.2*i);return V`
                  <foreignObject
                    class="section-icon"
                    x="${o.x-s/2}"
                    y="${o.y-s/2}"
                    width="${s}"
                    height="${s}"
                  >
                    <ha-icon icon="${t.icon}"></ha-icon>
                  </foreignObject>
                `})}

              <!-- Section divider lines -->
              ${o.map((t,e)=>{const o=e*i-90,s=xt(At,At,30,o),r=xt(At,At,kt,o);return V`
                  <line
                    class="section-divider"
                    x1="${s.x}"
                    y1="${s.y}"
                    x2="${r.x}"
                    y2="${r.y}"
                  />
                `})}

              <!-- Section labels -->
              ${o.map((t,e)=>{const o=e*i-90+i/2,n=xt(At,At,155,o),a=this._calculateFontSize(t.name,s),c="steampunk"===r?"url(#textShadow)":"";return V`
                  <text
                    class="section-label"
                    x="${n.x}"
                    y="${n.y}"
                    transform="rotate(${o+90}, ${n.x}, ${n.y})"
                    style="font-size: ${a}px"
                    filter="${c}"
                  >
                    ${t.name}
                  </text>
                `})}

              <!-- Inner border -->
              <circle
                class="clock-border-inner"
                cx="${At}"
                cy="${At}"
                r="${kt}"
              />

              <!-- Clock hands (persons) -->
              ${e.map((t,e)=>this._renderClockHand(t,e))}

              <!-- Center hub -->
              ${this._renderCenterHub(t,r)}

              <!-- Outer decorative border -->
              <circle
                class="clock-border"
                cx="${At}"
                cy="${At}"
                r="${188}"
              />

              <!-- Decorative rivets around the border (steampunk only) -->
              ${"steampunk"===r?Array.from({length:12},(t,e)=>{const o=xt(At,At,188,30*e-90);return V`
                  <circle
                    class="border-rivet"
                    cx="${o.x}"
                    cy="${o.y}"
                    r="4"
                  />
                `}):""}
            </svg>
          </div>
        </div>
      </ha-card>
    `}_renderDefs(t,e,o){if("steampunk"===o){const o=St.steampunk,s=t?o.dark:o.light;return V`
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
        ${Array.from({length:e},(e,o)=>V`
          <radialGradient id="sectionGradient${o}" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stop-color="${this._adjustColor(s[o%s.length],t?-20:20)}" />
            <stop offset="100%" stop-color="${this._adjustColor(s[o%s.length],t?-40:0)}" />
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
      `}return"minimalist"===o?V`
        <!-- Simple hub gradient for minimalist -->
        <radialGradient id="hubGradient" cx="30%" cy="30%">
          <stop offset="0%" stop-color="${t?"#757575":"#BDBDBD"}" />
          <stop offset="100%" stop-color="${t?"#424242":"#9E9E9E"}" />
        </radialGradient>

        <radialGradient id="hubInnerGradient" cx="40%" cy="40%">
          <stop offset="0%" stop-color="${t?"#424242":"#F5F5F5"}" />
          <stop offset="100%" stop-color="${t?"#212121":"#E0E0E0"}" />
        </radialGradient>
      `:V`
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
    `}_getBackgroundColor(t,e){switch(t){case"steampunk":default:return e?"#1E1810":"#F5E6C8";case"minimalist":return e?"#1E1E1E":"#FAFAFA";case"playful":return e?"#1a1a2e":"#667eea"}}_getSectionColor(t,e,o){const s=St[t],i=e?s.dark:s.light;return i[o%i.length]}_renderClockHand(t,e){if(!t.isAvailable)return V``;const o=t.angle,s=t.config.color||function(t){let e=0;for(let o=0;o<t.length;o++)e=t.charCodeAt(o)+((e<<5)-e);return`hsl(${Math.abs(e%360)}, ${60+e%20}%, ${35+e%15}%)`}(t.config.entity),i=t.state?.attributes?.entity_picture,r=t.config.name||t.state?.attributes?.friendly_name||t.config.entity.replace("person.",""),n=xt(At,At,90,o),a=xt(At,At,66,o),c=o-90,l=o+90,h=12*.6,d=xt(a.x,a.y,h,c),p=xt(a.x,a.y,h,l),u=xt(At,At,28,o),f=xt(u.x,u.y,4,c),m=xt(u.x,u.y,4,l),g=xt(At,At,109,o),w=`person-clip-${e}`;return V`
      <g class="clock-hand">
        <!-- Hand shaft -->
        <polygon
          class="hand-shaft"
          points="${f.x},${f.y} ${d.x},${d.y} ${p.x},${p.y} ${m.x},${m.y}"
        />

        <!-- Arrow head -->
        <polygon
          class="hand-arrow"
          points="${n.x},${n.y} ${d.x},${d.y} ${p.x},${p.y}"
        />

        <!-- Person circle (clickable) -->
        <defs>
          <clipPath id="${w}">
            <circle cx="${g.x}" cy="${g.y}" r="${Ct}" />
          </clipPath>
        </defs>

        <g
          class="person-circle"
          @click=${e=>this._handleAction(e,t)}
        >
          <!-- Invisible hit area for easier tapping -->
          <circle
            cx="${g.x}"
            cy="${g.y}"
            r="${21}"
            fill="transparent"
          />

          ${i?V`
            <image
              class="person-image"
              x="${g.x-Ct}"
              y="${g.y-Ct}"
              width="${32}"
              height="${32}"
              href="${t.state?.attributes?.entity_picture}"
              clip-path="url(#${w})"
              preserveAspectRatio="xMidYMid slice"
            />
          `:V`
            <circle
              cx="${g.x}"
              cy="${g.y}"
              r="${Ct}"
              fill="${s}"
            />
            <text
              class="person-fallback"
              x="${g.x}"
              y="${g.y}"
              fill="white"
            >
              ${this._getInitials(r)}
            </text>
          `}

          <!-- Decorative frame -->
          <circle
            class="person-frame"
            cx="${g.x}"
            cy="${g.y}"
            r="${18}"
          />
        </g>
      </g>
    `}_renderCenterHub(t,e){const o="steampunk"===e?t?"#D4AF37":"#FFD700":"minimalist"===e?t?"#616161":"#9E9E9E":"rgba(255, 255, 255, 0.9)";return V`
      <circle
        class="center-hub"
        cx="${At}"
        cy="${At}"
        r="${25}"
      />
      <circle
        class="center-hub-inner"
        cx="${At}"
        cy="${At}"
        r="${15}"
      />
      ${"steampunk"===e?Array.from({length:6},(t,e)=>{const o=xt(At,At,20,60*e);return V`
          <circle
            class="center-rivet"
            cx="${o.x}"
            cy="${o.y}"
            r="2.5"
          />
        `}):""}
      <circle
        cx="${At}"
        cy="${At}"
        r="3"
        fill="${o}"
      />
    `}_adjustColor(t,e){const o=parseInt(t.replace("#",""),16),s=Math.round(2.55*e);return`#${(16777216+65536*Math.max(0,Math.min(255,(o>>16)+s))+256*Math.max(0,Math.min(255,(o>>8&255)+s))+Math.max(0,Math.min(255,(255&o)+s))).toString(16).slice(1)}`}_calculateFontSize(t,e){const o=Math.max(.65,1-.035*(t.length-5)),s=Math.max(.75,1-.05*(e-4));return Math.round(20*o*s)}_getInitials(t){const e=t.trim().split(/\s+/);return 1===e.length?e[0].substring(0,2).toUpperCase():(e[0][0]+e[e.length-1][0]).toUpperCase()}_handleAction(t,e){t.stopPropagation();const o=e.config.tap_action||{action:"more-info"},s=o.entity||e.config.entity;switch(o.action){case"more-info":this._fireMoreInfo(s);break;case"toggle":this._toggleEntity(s);break;case"call-service":this._callService(o);break;case"perform-action":this._performAction(o);break;case"navigate":this._navigate(o.navigation_path);break;case"url":this._openUrl(o.url_path)}}_fireMoreInfo(t){const e=new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}});this.dispatchEvent(e)}_toggleEntity(t){this.hass&&this.hass.callService("homeassistant","toggle",{entity_id:t})}_callService(t){if(!this.hass||!t.service)return;const[e,o]=t.service.split(".");this.hass.callService(e,o,t.service_data||{})}_performAction(t){if(!this.hass||!t.perform_action)return;const[e,o]=t.perform_action.split(".");this.hass.callService(e,o,t.data||{},t.target)}_navigate(t){t&&(history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed")))}_openUrl(t){t&&window.open(t,"_blank")}static getConfigElement(){return document.createElement("weasley-clock-card-editor")}static getStubConfig(t){const e=Object.keys(t?.states??{}).filter(t=>t.startsWith("person.")).slice(0,4).map(t=>({entity:t}));return{type:"custom:weasley-clock-card",persons:e.length?e:[{entity:"person.example",name:"Example"}],sections:[{name:"Home",zones:["zone.home"]},{name:"Work",zones:["zone.work"]},{name:"School",zones:["zone.school"]},{name:"In transit",zones:[]}],default_section:"In transit"}}};Ft.styles=gt,t([ft({attribute:!1})],Ft.prototype,"hass",void 0),t([mt()],Ft.prototype,"_config",void 0),Ft=t([dt("weasley-clock-card")],Ft),window.customCards=window.customCards||[],window.customCards.push({type:"weasley-clock-card",name:"Weasley Clock Card",description:"A magical clock showing where family members are located",preview:!0,documentationURL:"https://github.com/s5zone/weasley-clock-card"});export{Ft as WeasleyClockCard};
//# sourceMappingURL=weasley-clock-card.js.map
