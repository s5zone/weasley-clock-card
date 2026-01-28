function t(t,e,s,i){var r,o=arguments.length,n=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(n=(o<3?r(n):o>3?r(e,s,n):r(e,s))||n);return o>3&&n&&Object.defineProperty(e,s,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const n=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,$=f?f.emptyScript:"",g=u.reactiveElementPolyfillSupport,m=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?$:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},_=(t,e)=>!a(t,e),w={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:r}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const o=i?.call(this);r?.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(s)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const s of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const r=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(e,s.type);this._$Em=t,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=i;const o=r.fromAttribute(e,t.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(void 0!==t){const o=this.constructor;if(!1===i&&(r=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??_)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==r||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t){const{wrapped:t}=s,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,s,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[m("elementProperties")]=new Map,A[m("finalized")]=new Map,g?.({ReactiveElement:A}),(u.reactiveElementVersions??=[]).push("2.1.2");const b=globalThis,x=t=>t,v=b.trustedTypes,C=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+k,P=`<${S}>`,M=document,D=()=>M.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,B=Array.isArray,O="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,T=/>/g,R=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,I=/"/g,F=/^(?:script|style|textarea|title)$/i,G=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),j=G(1),L=G(2),q=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,Z=M.createTreeWalker(M,129);function J(t,e){if(!B(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const K=(t,e)=>{const s=t.length-1,i=[];let r,o=2===e?"<svg>":3===e?"<math>":"",n=N;for(let e=0;e<s;e++){const s=t[e];let a,c,l=-1,h=0;for(;h<s.length&&(n.lastIndex=h,c=n.exec(s),null!==c);)h=n.lastIndex,n===N?"!--"===c[1]?n=H:void 0!==c[1]?n=T:void 0!==c[2]?(F.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=R):void 0!==c[3]&&(n=R):n===R?">"===c[0]?(n=r??N,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,a=c[1],n=void 0===c[3]?R:'"'===c[3]?I:z):n===I||n===z?n=R:n===H||n===T?n=N:(n=R,r=void 0);const d=n===R&&t[e+1].startsWith("/>")?" ":"";o+=n===N?s+P:l>=0?(i.push(a),s.slice(0,l)+E+s.slice(l)+k+d):s+k+(-2===l?e:d)}return[J(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0;const n=t.length-1,a=this.parts,[c,l]=K(t,e);if(this.el=Y.createElement(c,s),Z.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=Z.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=l[o++],s=i.getAttribute(t).split(k),n=/([.?@])?(.*)/.exec(e);a.push({type:1,index:r,name:n[2],strings:s,ctor:"."===n[1]?st:"?"===n[1]?it:"@"===n[1]?rt:et}),i.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:r}),i.removeAttribute(t));if(F.test(i.tagName)){const t=i.textContent.split(k),e=t.length-1;if(e>0){i.textContent=v?v.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],D()),Z.nextNode(),a.push({type:2,index:++r});i.append(t[e],D())}}}else if(8===i.nodeType)if(i.data===S)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(k,t+1));)a.push({type:7,index:r}),t+=k.length-1}r++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function Q(t,e,s=t,i){if(e===q)return e;let r=void 0!==i?s._$Co?.[i]:s._$Cl;const o=U(e)?void 0:e._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),void 0===o?r=void 0:(r=new o(t),r._$AT(t,s,i)),void 0!==i?(s._$Co??=[])[i]=r:s._$Cl=r),void 0!==r&&(e=Q(t,r._$AS(t,e.values),r,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??M).importNode(e,!0);Z.currentNode=i;let r=Z.nextNode(),o=0,n=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new tt(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new ot(r,this,t)),this._$AV.push(e),a=s[++n]}o!==a?.index&&(r=Z.nextNode(),o++)}return Z.currentNode=M,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),U(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>B(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=Y.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new X(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new Y(t)),e}k(t){B(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new tt(this.O(D()),this.O(D()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const r=this.strings;let o=!1;if(void 0===r)t=Q(this,t,e,0),o=!U(t)||t!==this._$AH&&t!==q,o&&(this._$AH=t);else{const i=t;let n,a;for(t=r[0],n=0;n<r.length-1;n++)a=Q(this,i[s+n],e,n),a===q&&(a=this._$AH[n]),o||=!U(a)||a!==this._$AH[n],a===W?t=W:t!==W&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}o&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class st extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class rt extends et{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??W)===q)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const nt=b.litHtmlPolyfillSupport;nt?.(Y,tt),(b.litHtmlVersions??=[]).push("3.3.2");const at=globalThis;class ct extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{const i=s?.renderBefore??e;let r=i._$litPart$;if(void 0===r){const t=s?.renderBefore??null;i._$litPart$=r=new tt(e.insertBefore(D(),t),t,void 0,s??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ct._$litElement$=!0,ct.finalized=!0,at.litElementHydrateSupport?.({LitElement:ct});const lt=at.litElementPolyfillSupport;lt?.({LitElement:ct}),(at.litElementVersions??=[]).push("4.2.2");const ht={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:_},dt=(t=ht,e,s)=>{const{kind:i,metadata:r}=s;let o=globalThis.litPropertyMetadata.get(r);if(void 0===o&&globalThis.litPropertyMetadata.set(r,o=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),"accessor"===i){const{name:i}=s;return{set(s){const r=e.get.call(this);e.set.call(this,s),this.requestUpdate(i,r,t,!0,s)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=s;return function(s){const r=this[i];e.call(this,s),this.requestUpdate(i,r,t,!0,s)}}throw Error("Unsupported decorator location: "+i)};function pt(t){return(e,s)=>"object"==typeof s?dt(t,e,s):((t,e,s)=>{const i=e.hasOwnProperty(s);return e.constructor.createProperty(s,t),i?Object.getOwnPropertyDescriptor(e,s):void 0})(t,e,s)}const ut=((t,...e)=>{const s=1===t.length?t[0]:e.reduce((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new o(s,t,i)})`
  :host {
    display: block;
    padding: 16px;
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
    --wc-section-bg-1: #8B4513;
    --wc-section-bg-2: #A0522D;
    --wc-section-bg-3: #CD853F;
    --wc-section-bg-4: #DEB887;
    --wc-border-width: 8px;
    --wc-transition-duration: 0.5s;
  }

  :host([dark-mode]) {
    --wc-brass-light: #A67C52;
    --wc-brass-dark: #8B6914;
    --wc-parchment: #2C2416;
    --wc-parchment-dark: #1E1810;
    --wc-text-light: #D4C4A8;
    --wc-section-bg-1: #4A2511;
    --wc-section-bg-2: #5C3317;
    --wc-section-bg-3: #6E4522;
    --wc-section-bg-4: #7F572D;
  }

  .card-container {
    background: var(--wc-parchment);
    border-radius: 50%;
    padding: 12px;
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.3),
      inset 0 2px 4px rgba(255, 255, 255, 0.1);
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
    opacity: 0.9;
  }

  /* Section label styles - Medieval/Gothic golden text */
  .section-label {
    font-family: 'Cinzel', 'Uncial Antiqua', 'Times New Roman', Georgia, serif;
    font-weight: 700;
    fill: url(#textGradient);
    stroke: #2C1810;
    stroke-width: 0.5;
    paint-order: stroke fill;
    text-anchor: middle;
    dominant-baseline: middle;
    pointer-events: none;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .section-label-shadow {
    font-family: 'Cinzel', 'Uncial Antiqua', 'Times New Roman', Georgia, serif;
    font-weight: 700;
    fill: rgba(0, 0, 0, 0.6);
    text-anchor: middle;
    dominant-baseline: middle;
    pointer-events: none;
    letter-spacing: 1px;
    text-transform: uppercase;
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
    fill: var(--wc-gold);
    stroke: var(--wc-brass-darker);
    stroke-width: 1;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.4));
  }

  .hand-shaft {
    fill: var(--wc-brass-dark);
    stroke: var(--wc-brass-darker);
    stroke-width: 0.5;
  }

  /* Person image at arrow tip */
  .person-image {
    clip-path: circle(50%);
  }

  .person-frame {
    fill: none;
    stroke: var(--wc-gold);
    stroke-width: 2;
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
  }

  .person-fallback {
    fill: currentColor;
    font-family: 'Times New Roman', Georgia, serif;
    font-weight: bold;
    font-size: 12px;
    text-anchor: middle;
    dominant-baseline: middle;
  }

  /* Center hub styles */
  .center-hub {
    fill: url(#hubGradient);
    stroke: var(--wc-brass-darker);
    stroke-width: 2;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
  }

  .center-hub-inner {
    fill: url(#hubInnerGradient);
    stroke: var(--wc-brass-dark);
    stroke-width: 1;
  }

  .center-rivet {
    fill: var(--wc-gold-light);
    stroke: var(--wc-brass-darker);
    stroke-width: 0.5;
  }

  /* Outer border */
  .clock-border {
    fill: none;
    stroke: url(#borderGradient);
    stroke-width: var(--wc-border-width);
    filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.5));
  }

  .clock-border-inner {
    fill: none;
    stroke: var(--wc-brass-darker);
    stroke-width: 2;
  }

  /* Decorative rivets around border */
  .border-rivet {
    fill: var(--wc-gold);
    stroke: var(--wc-brass-darker);
    stroke-width: 0.5;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
  }

  /* Section dividers */
  .section-divider {
    stroke: var(--wc-brass-darker);
    stroke-width: 2;
    filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.3));
  }

  /* Texture overlay for aged look */
  .texture-overlay {
    mix-blend-mode: multiply;
    opacity: 0.1;
    pointer-events: none;
  }
`;function ft(t,e,s){if(!t||"unavailable"===t.state||"unknown"===t.state){const t=e.findIndex(t=>t.name===s);return{sectionIndex:t>=0?t:0,sectionName:s}}const i=`zone.${t.state.toLowerCase().replace(/\s+/g,"_")}`;for(let s=0;s<e.length;s++){const r=e[s];for(const e of r.zones){if(e.toLowerCase()===i)return{sectionIndex:s,sectionName:r.name};const o=e.replace("zone.","").replace(/_/g," ");if(t.state.toLowerCase()===o.toLowerCase())return{sectionIndex:s,sectionName:r.name};if("home"===t.state.toLowerCase()&&"zone.home"===e)return{sectionIndex:s,sectionName:r.name}}}const r=e.findIndex(t=>t.name===s);return{sectionIndex:r>=0?r:0,sectionName:r>=0?s:e[0]?.name||"Unknown"}}function $t(t,e,s,i){const r=360/e,o=t*r-90;if(1===s)return o+r/2;const n=.15*r;return o+n+(r-2*n)/(s+1)*(i+1)}function gt(t,e,s,i){const r=i*Math.PI/180;return{x:t+s*Math.cos(r),y:e+s*Math.sin(r)}}function mt(t){return t?.themes?.darkMode??!1}const yt=200,_t=180,wt=16,At=["#6B3A19","#7D4422","#8B4513","#9C5524","#A0522D","#8B6914","#996633","#7A5230"];let bt=class extends ct{setConfig(t){if(!t.persons||!Array.isArray(t.persons))throw new Error("Please define persons");if(!t.sections||!Array.isArray(t.sections))throw new Error("Please define sections");if(t.sections.length<1||t.sections.length>8)throw new Error("Sections must be between 1 and 8");this._config={...t,default_section:t.default_section||t.sections[0]?.name||"Unknown"}}getCardSize(){return 4}shouldUpdate(t){if(t.has("_config"))return!0;if(t.has("hass")&&this._config){const e=t.get("hass");if(!e)return!0;for(const t of this._config.persons){const s=e.states[t.entity],i=this.hass?.states[t.entity];if(s?.state!==i?.state||s?.attributes?.entity_picture!==i?.attributes?.entity_picture)return!0}if(e.themes?.darkMode!==this.hass?.themes?.darkMode)return!0}return!1}updated(t){super.updated(t);mt(this.hass)?this.setAttribute("dark-mode",""):this.removeAttribute("dark-mode")}_getPersonPositions(){if(!this._config||!this.hass)return[];const t=[],e=new Map;for(const s of this._config.persons){const i=this.hass.states[s.entity],r=i&&"unavailable"!==i.state&&"unknown"!==i.state,{sectionIndex:o,sectionName:n}=ft(i||null,this._config.sections,this._config.default_section);t.push({config:s,state:i||null,sectionIndex:o,sectionName:n,angle:0,isAvailable:!!r}),r&&e.set(o,(e.get(o)||0)+1)}const s=new Map;for(const i of t)if(i.isAvailable){const t=e.get(i.sectionIndex)||1,r=s.get(i.sectionIndex)||0;i.angle=$t(i.sectionIndex,this._config.sections.length,t,r),s.set(i.sectionIndex,r+1)}return t}render(){if(!this._config||!this.hass)return j`<ha-card>Loading...</ha-card>`;const t=mt(this.hass),e=this._getPersonPositions(),s=this._config.sections,i=s.length,r=360/i;return j`
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap" rel="stylesheet">
      <ha-card>
        <div class="card-container">
          <div class="clock-wrapper">
            <svg
              class="clock-svg"
              viewBox="0 0 ${400} ${400}"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                ${this._renderDefs(t,i)}
              </defs>

              <!-- Background circle -->
              <circle
                cx="${yt}"
                cy="${yt}"
                r="${_t}"
                fill="${t?"#1E1810":"#F5E6C8"}"
              />

              <!-- Section slices -->
              ${s.map((t,e)=>{const s=e*r-90;return L`
                  <path
                    class="section-slice"
                    d="${function(t,e,s,i,r){const o=gt(t,e,s,r),n=gt(t,e,s,i),a=r-i<=180?"0":"1";return["M",t,e,"L",o.x,o.y,"A",s,s,0,a,0,n.x,n.y,"Z"].join(" ")}(yt,yt,_t,s,s+r)}"
                    fill="url(#sectionGradient${e})"
                  />
                `})}

              <!-- Section divider lines -->
              ${s.map((t,e)=>{const s=e*r-90,i=gt(yt,yt,30,s),o=gt(yt,yt,_t,s);return L`
                  <line
                    class="section-divider"
                    x1="${i.x}"
                    y1="${i.y}"
                    x2="${o.x}"
                    y2="${o.y}"
                  />
                `})}

              <!-- Section labels -->
              ${s.map((t,e)=>{const s=e*r-90+r/2,o=gt(yt,yt,155,s),n=this._calculateFontSize(t.name,i);return L`
                  <text
                    class="section-label"
                    x="${o.x}"
                    y="${o.y}"
                    transform="rotate(${s+90}, ${o.x}, ${o.y})"
                    style="font-size: ${n}px"
                    filter="url(#textShadow)"
                  >
                    ${t.name}
                  </text>
                `})}

              <!-- Inner border -->
              <circle
                class="clock-border-inner"
                cx="${yt}"
                cy="${yt}"
                r="${_t}"
              />

              <!-- Clock hands (persons) -->
              ${e.map((t,e)=>this._renderClockHand(t,e))}

              <!-- Center hub -->
              ${this._renderCenterHub(t)}

              <!-- Outer decorative border -->
              <circle
                class="clock-border"
                cx="${yt}"
                cy="${yt}"
                r="${188}"
              />

              <!-- Decorative rivets around the border -->
              ${Array.from({length:12},(t,e)=>{const s=gt(yt,yt,188,30*e-90);return L`
                  <circle
                    class="border-rivet"
                    cx="${s.x}"
                    cy="${s.y}"
                    r="4"
                  />
                `})}
            </svg>
          </div>
        </div>
      </ha-card>
    `}_renderDefs(t,e){return L`
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
      ${Array.from({length:e},(e,s)=>L`
        <radialGradient id="sectionGradient${s}" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="${this._adjustColor(At[s%At.length],t?-20:20)}" />
          <stop offset="100%" stop-color="${this._adjustColor(At[s%At.length],t?-40:0)}" />
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
    `}_renderClockHand(t,e){if(!t.isAvailable)return L``;const s=t.angle,i=t.config.color||function(t){let e=0;for(let s=0;s<t.length;s++)e=t.charCodeAt(s)+((e<<5)-e);return`hsl(${Math.abs(e%360)}, ${60+e%20}%, ${35+e%15}%)`}(t.config.entity),r=t.state?.attributes?.entity_picture,o=t.config.name||t.state?.attributes?.friendly_name||t.config.entity.replace("person.",""),n=gt(yt,yt,90,s),a=gt(yt,yt,66,s),c=s-90,l=s+90,h=12*.6,d=gt(a.x,a.y,h,c),p=gt(a.x,a.y,h,l),u=gt(yt,yt,28,s),f=gt(u.x,u.y,4,c),$=gt(u.x,u.y,4,l),g=gt(yt,yt,109,s),m=`person-clip-${e}`;return L`
      <g class="clock-hand">
        <!-- Hand shaft -->
        <polygon
          class="hand-shaft"
          points="${f.x},${f.y} ${d.x},${d.y} ${p.x},${p.y} ${$.x},${$.y}"
        />

        <!-- Arrow head -->
        <polygon
          class="hand-arrow"
          points="${n.x},${n.y} ${d.x},${d.y} ${p.x},${p.y}"
        />

        <!-- Person circle -->
        <defs>
          <clipPath id="${m}">
            <circle cx="${g.x}" cy="${g.y}" r="${wt}" />
          </clipPath>
        </defs>

        ${r?L`
          <image
            class="person-image"
            x="${g.x-wt}"
            y="${g.y-wt}"
            width="${32}"
            height="${32}"
            href="${t.state?.attributes?.entity_picture}"
            clip-path="url(#${m})"
            preserveAspectRatio="xMidYMid slice"
          />
        `:L`
          <circle
            cx="${g.x}"
            cy="${g.y}"
            r="${wt}"
            fill="${i}"
          />
          <text
            class="person-fallback"
            x="${g.x}"
            y="${g.y}"
            fill="white"
          >
            ${this._getInitials(o)}
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
    `}_renderCenterHub(t){return L`
      <circle
        class="center-hub"
        cx="${yt}"
        cy="${yt}"
        r="${25}"
      />
      <circle
        class="center-hub-inner"
        cx="${yt}"
        cy="${yt}"
        r="${15}"
      />
      ${Array.from({length:6},(t,e)=>{const s=gt(yt,yt,20,60*e);return L`
          <circle
            class="center-rivet"
            cx="${s.x}"
            cy="${s.y}"
            r="2.5"
          />
        `})}
      <circle
        cx="${yt}"
        cy="${yt}"
        r="3"
        fill="${t?"#D4AF37":"#FFD700"}"
      />
    `}_adjustColor(t,e){const s=parseInt(t.replace("#",""),16),i=Math.round(2.55*e);return`#${(16777216+65536*Math.max(0,Math.min(255,(s>>16)+i))+256*Math.max(0,Math.min(255,(s>>8&255)+i))+Math.max(0,Math.min(255,(255&s)+i))).toString(16).slice(1)}`}_calculateFontSize(t,e){const s=Math.max(.65,1-.035*(t.length-5)),i=Math.max(.75,1-.05*(e-4));return Math.round(20*s*i)}_getInitials(t){const e=t.trim().split(/\s+/);return 1===e.length?e[0].substring(0,2).toUpperCase():(e[0][0]+e[e.length-1][0]).toUpperCase()}static getConfigElement(){return document.createElement("div")}static getStubConfig(){return{type:"custom:weasley-clock-card",persons:[{entity:"person.example",name:"Example"}],sections:[{name:"Home",zones:["zone.home"]},{name:"Work",zones:["zone.work"]},{name:"School",zones:["zone.school"]},{name:"In transit",zones:[]}],default_section:"In transit"}}};bt.styles=ut,t([pt({attribute:!1})],bt.prototype,"hass",void 0),t([function(t){return pt({...t,state:!0,attribute:!1})}()],bt.prototype,"_config",void 0),bt=t([(t=>(e,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)})("weasley-clock-card")],bt),window.customCards=window.customCards||[],window.customCards.push({type:"weasley-clock-card",name:"Weasley Clock Card",description:"A magical clock showing where family members are located"});export{bt as WeasleyClockCard};
//# sourceMappingURL=weasley-clock-card.js.map
