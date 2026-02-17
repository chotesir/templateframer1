import{__esmMin as e}from"./rolldown-runtime.ClrPx-I7.mjs";import{I as t,Y as n,ae as r,ce as i,init_jsx_runtime as a,init_npm_react_18_2 as o,init_ssg_sandbox_shims as s,me as c,navigator as l,p as u,pe as d,re as f,se as p,u as m,window as h,x as g,z as ee}from"./react.D5Qdq__8.mjs";import{LayoutGroup as te,MotionConfigContext as _,init_framer_motion_H2BOCUWP as ne,motion as re}from"./motion.BPGXsQYK.mjs";import{ComponentViewportProvider as ie,ControlType as v,RenderTarget as y,SmartComponentScopedContainer as ae,addFonts as oe,addPropertyControls as se,cx as ce,getFonts as le,getPropertyControls as b,init_framer_ATKQQ2EE as ue,useComponentViewport as de,useLocaleInfo as fe,useVariantState as pe,withCSS as me}from"./framer.CpDa-K-3.mjs";function he(e,t,{reverse:n=!1}={}){let r=e.length;for(let i=n?r-1:0;n?i>=0:i<r;n?i--:i++)t(e[i],i)}var x,S,C,ge,_e,ve,ye,w,T=e((()=>{s(),x=h!==void 0,S=(e,t,n)=>{let r=document.createElement(e),[i,a]=Array.isArray(t)?[void 0,t]:[t,n];return i&&Object.assign(r,i),a?.forEach(e=>r.appendChild(e)),r},C=(e,t)=>t===`left`?e.offsetLeft:((e.offsetParent instanceof HTMLElement?e.offsetParent:null)?.offsetWidth??0)-e.offsetWidth-e.offsetLeft,ge=e=>e.offsetWidth>0&&e.offsetHeight>0,_e=(e,t)=>{x&&customElements.get(e)!==t&&customElements.define(e,t)},ve=(e,t)=>e==null?t:t==null?e:Math.max(e,t),ye=String.raw,w=String.raw})),be,xe,Se,E,D,O,k,Ce,A,j,M,N,P,F,we,I,Te=e((()=>{T(),be=x&&typeof CSS<`u`&&CSS.supports&&CSS.supports(`animation-timing-function`,`linear(1,2)`),xe=x&&typeof CSS<`u`&&CSS.supports&&CSS.supports(`line-height`,`mod(1,1)`),Se=x&&typeof matchMedia<`u`?matchMedia(`(prefers-reduced-motion: reduce)`):null,E=`--_number-flow-d-opacity`,D=`--_number-flow-d-width`,O=`--_number-flow-dx`,k=`--_number-flow-d`,Ce=(()=>{try{return CSS.registerProperty({name:E,syntax:`<number>`,inherits:!1,initialValue:`0`}),CSS.registerProperty({name:O,syntax:`<length>`,inherits:!0,initialValue:`0px`}),CSS.registerProperty({name:D,syntax:`<number>`,inherits:!1,initialValue:`0`}),CSS.registerProperty({name:k,syntax:`<number>`,inherits:!0,initialValue:`0`}),!0}catch{return!1}})(),A=`var(--number-flow-char-height, 1em)`,j=`var(--number-flow-mask-height, 0.25em)`,M=`calc(${j} / 2)`,N=`var(--number-flow-mask-width, 0.5em)`,P=`calc(${N} / var(--scale-x))`,F=`#000 0, transparent 71%`,we=w`
	:host {
		display: inline-block;
		direction: ltr;
		white-space: nowrap;
		isolation: isolate; /* for .number z-index */
		/* Technically this is only needed on the .number, but applying it here makes the ::selection the same height for the whole element: */
		line-height: ${A} !important;
	}

	.number,
	.number__inner {
		display: inline-block;
		transform-origin: left top;
	}

	:host([data-will-change]) :is(.number, .number__inner, .section, .digit, .digit__num, .symbol) {
		will-change: transform;
	}

	.number {
		--scale-x: calc(1 + var(${D}) / var(--width));
		transform: translateX(var(${O})) scaleX(var(--scale-x));

		margin: 0 calc(-1 * ${N});
		position: relative; /* for z-index */

		/* overflow: clip; /* helpful to not affect page layout, but breaks baseline alignment in Safari :/ */
		/* -webkit- prefixed properties have better support than unprefixed ones: */
		-webkit-mask-image:
			/* Horizontal: */
			linear-gradient(
				to right,
				transparent 0,
				#000 ${P},
				#000 calc(100% - ${P}),
				transparent
			),
			/* Vertical: */
				linear-gradient(
					to bottom,
					transparent 0,
					#000 ${j},
					#000 calc(100% - ${j}),
					transparent 100%
				),
			/* TL corner */ radial-gradient(at bottom right, ${F}),
			/* TR corner */ radial-gradient(at bottom left, ${F}),
			/* BR corner */ radial-gradient(at top left, ${F}),
			/* BL corner */ radial-gradient(at top right, ${F});
		-webkit-mask-size:
			100% calc(100% - ${j} * 2),
			calc(100% - ${P} * 2) 100%,
			${P} ${j},
			${P} ${j},
			${P} ${j},
			${P} ${j};
		-webkit-mask-position:
			center,
			center,
			top left,
			top right,
			bottom right,
			bottom left;
		-webkit-mask-repeat: no-repeat;
	}

	.number__inner {
		padding: ${M} ${N};
		/* invert parent's: */
		transform: scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${O})));
	}

	/* Put number underneath other sections. Negative z-index messed up text cursor and selection, weirdly: */
	:host > :not(.number) {
		z-index: 5;
	}

	.section,
	.symbol {
		display: inline-block;
		/* for __exiting: */
		position: relative;
		isolation: isolate; /* also helpful for mix-blend-mode in symbol__value */
	}

	.section::after {
		/*
		 * We seem to need some type of character to ensure baseline alignment continues working
		 * even when empty
		 */
		content: '\200b'; /* zero-width space */
		display: inline-block;
	}

	.section--justify-left {
		transform-origin: center left;
	}

	.section--justify-right {
		transform-origin: center right;
	}

	.section__exiting,
	.symbol__exiting {
		margin: 0 !important;
		position: absolute !important;
		z-index: -1;
	}

	.digit {
		display: inline-block;
		position: relative;
		--c: var(--current) + var(${k});
	}

	.digit__num,
	.number .section::after {
		padding: ${M} 0;
	}

	.digit__num {
		display: inline-block;
		/* Claude + https://buildui.com/recipes/animated-counter */
		--offset-raw: mod(var(--length) + var(--n) - mod(var(--c), var(--length)), var(--length));
		--offset: calc(
			var(--offset-raw) - var(--length) * round(down, var(--offset-raw) / (var(--length) / 2), 1)
		);
		/* Technically we just need var(--offset)*100%, but clamping should reduce the layer size: */
		--y: clamp(-100%, var(--offset) * 100%, 100%);
		transform: translateY(var(--y));
	}

	.digit__num:not(.is-current) {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) translateY(var(--y));
	}

	.digit:not(.is-spinning) .digit__num:not(.is-current) {
		display: none;
	}

	.symbol__value {
		display: inline-block;
		mix-blend-mode: plus-lighter; /* better crossfades e.g. + <-> - */
		white-space: pre; /* some symbols are spaces or thin spaces */
	}

	.section--justify-left .symbol__exiting {
		left: 0;
	}

	.section--justify-right .symbol__exiting {
		right: 0;
	}

	.animate-presence {
		opacity: calc(1 + var(${E}));
	}
`,I=we})),Ee,De,Oe,L,ke,Ae=e((()=>{T(),Te(),Ee=x?HTMLElement:class{},De=w`
	:host {
		display: inline-block;
		direction: ltr;
		white-space: nowrap;
		line-height: ${A} !important;
	}

	span {
		display: inline-block;
	}

	:host([data-will-change]) span {
		will-change: transform;
	}

	.number,
	.digit {
		padding: ${M} 0;
	}

	.symbol {
		white-space: pre; /* some symbols are spaces or thin spaces */
	}
`,Oe=e=>`<span class="${e.type===`integer`||e.type===`fraction`?`digit`:`symbol`}" part="${e.type===`integer`||e.type===`fraction`?`digit ${e.type}-digit`:e.type}">${e.value}</span>`,L=(e,t)=>`<span part="${t}">${e.reduce((e,t)=>e+Oe(t),``)}</span>`,ke=e=>ye`<template shadowroot="open" shadowrootmode="open"
			><style>
				${De}</style
			>${L(e.pre,`left`)}<span part="number" class="number"
				>${L(e.integer,`integer`)}${L(e.fraction,`fraction`)}</span
			>${L(e.post,`right`)}</template
		><span
			style="font-kerning: none; display: inline-block; line-height: ${A} !important; padding: ${j} 0;"
			>${e.valueAsString}</span
		>`}));function je(e,t,n,r){let i=t.formatToParts(e);n&&i.unshift({type:`prefix`,value:n}),r&&i.push({type:`suffix`,value:r}),console.log(n,r);let a=[],o=[],s=[],c=[],l={},u=e=>`${e}:${l[e]=(l[e]??-1)+1}`,d=``,f=!1,p=!1;for(let e of i){d+=e.value;let t=e.type===`minusSign`||e.type===`plusSign`?`sign`:e.type;t===`integer`?(f=!0,o.push(...e.value.split(``).map(e=>({type:t,value:parseInt(e)})))):t===`group`?o.push({type:t,value:e.value}):t===`decimal`?(p=!0,s.push({type:t,value:e.value,key:u(t)})):t===`fraction`?s.push(...e.value.split(``).map(e=>({type:t,value:parseInt(e),key:u(t),pos:-1-l[t]}))):(f||p?c:a).push({type:t,value:e.value,key:u(t)})}let m=[];for(let e=o.length-1;e>=0;e--){let t=o[e];m.unshift(t.type===`integer`?{...t,key:u(t.type),pos:l[t.type]}:{...t,key:u(t.type)})}return{pre:a,integer:m,fraction:s,post:c,valueAsString:d,value:typeof e==`string`?parseFloat(e):e}}var Me=e((()=>{}));function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Ne,z,B,Pe,V,H,U,W,G,K,Fe,Ie=e((()=>{T(),Ae(),Te(),Me(),Ne=xe&&be&&Ce,B=class extends Ee{get animated(){return this._animated}set animated(e){var t;this.animated!==e&&(this._animated=e,(t=this.shadowRoot)==null||t.getAnimations().forEach(e=>e.finish()))}set data(e){if(e==null)return;let{pre:t,integer:n,fraction:r,post:i,value:a}=e;if(this.created){let o=this._data;if(this._data=e,this.computedTrend=typeof this.trend==`function`?this.trend(o.value,a):this.trend,this.startingPos=void 0,this.computedTrend&&this.continuous){let t=o.integer.concat(o.fraction).filter(e=>e.type===`integer`||e.type===`fraction`),n=e.integer.concat(e.fraction).filter(e=>e.type===`integer`||e.type===`fraction`),r=t.find(e=>!n.find(t=>t.pos===e.pos&&t.value===e.value)),i=n.find(e=>!t.find(t=>e.pos===t.pos&&e.value===t.value));this.startingPos=ve(r?.pos,i?.pos)}this.computedAnimated=Ne&&this._animated&&(!this.respectMotionPreference||!Se?.matches)&&ge(this),this.manual||this.willUpdate(),this._pre.update(t),this._num.update({integer:n,fraction:r}),this._post.update(i),this.manual||this.didUpdate()}else{if(this._data=e,this.attachShadow({mode:`open`}),typeof CSSStyleSheet<`u`&&this.shadowRoot.adoptedStyleSheets)z||(z=new CSSStyleSheet,z.replaceSync(I)),this.shadowRoot.adoptedStyleSheets=[z];else{let e=document.createElement(`style`);e.textContent=I,this.shadowRoot.appendChild(e)}this._pre=new U(this,t,{justify:`right`,part:`left`}),this.shadowRoot.appendChild(this._pre.el),this._num=new Pe(this,n,r),this.shadowRoot.appendChild(this._num.el),this._post=new U(this,i,{justify:`left`,part:`right`}),this.shadowRoot.appendChild(this._post.el)}this.created=!0}willUpdate(){this._pre.willUpdate(),this._num.willUpdate(),this._post.willUpdate()}didUpdate(){if(!this.computedAnimated)return;this._abortAnimationsFinish?this._abortAnimationsFinish.abort():this.dispatchEvent(new Event(`animationsstart`)),this._pre.didUpdate(),this._num.didUpdate(),this._post.didUpdate();let e=new AbortController;Promise.all(this.shadowRoot.getAnimations().map(e=>e.finished)).then(()=>{e.signal.aborted||(this.dispatchEvent(new Event(`animationsfinish`)),this._abortAnimationsFinish=void 0)}),this._abortAnimationsFinish=e}constructor(){super(),R(this,`_animated`,void 0),R(this,`created`,!1),R(this,`_pre`,void 0),R(this,`_num`,void 0),R(this,`_post`,void 0),R(this,`computedTrend`,void 0),R(this,`startingPos`,void 0),R(this,`computedAnimated`,void 0),R(this,`_data`,void 0),R(this,`manual`,!1),R(this,`_abortAnimationsFinish`,void 0);let{animated:e,...t}=this.constructor.defaultProps;this._animated=this.computedAnimated=e,Object.assign(this,t)}},R(B,`defaultProps`,{transformTiming:{duration:900,easing:`linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)`},spinTiming:void 0,opacityTiming:{duration:450,easing:`ease-out`},animated:!0,trend:(e,t)=>Math.sign(t-e),continuous:!1,respectMotionPreference:!0,digits:void 0}),Pe=class{willUpdate(){this._prevWidth=this.el.offsetWidth,this._prevLeft=this.el.getBoundingClientRect().left,this._integer.willUpdate(),this._fraction.willUpdate()}update({integer:e,fraction:t}){this._integer.update(e),this._fraction.update(t)}didUpdate(){let e=this.el.getBoundingClientRect();this._integer.didUpdate(),this._fraction.didUpdate();let t=this._prevLeft-e.left,n=this.el.offsetWidth,r=this._prevWidth-n;this.el.style.setProperty(`--width`,String(n)),this.el.animate({[O]:[`${t}px`,`0px`],[D]:[r,0]},{...this.flow.transformTiming,composite:`accumulate`})}constructor(e,t,n,{className:r,...i}={}){R(this,`flow`,void 0),R(this,`el`,void 0),R(this,`_inner`,void 0),R(this,`_integer`,void 0),R(this,`_fraction`,void 0),R(this,`_prevWidth`,void 0),R(this,`_prevLeft`,void 0),this.flow=e,this._integer=new H(e,t,{justify:`right`,part:`integer`}),this._fraction=new H(e,n,{justify:`left`,part:`fraction`}),this._inner=S(`span`,{className:`number__inner`},[this._integer.el,this._fraction.el]),this.el=S(`span`,{...i,part:`number`,className:`number ${r??``}`},[this._inner])}},V=class{addChar(e,{startDigitsAtZero:t=!1,...n}={}){let r=e.type===`integer`||e.type===`fraction`?new K(this,e.type,t?0:e.value,e.pos,{...n,onRemove:this.onCharRemove(e.key)}):new Fe(this,e.type,e.value,{...n,onRemove:this.onCharRemove(e.key)});return this.children.set(e.key,r),r}unpop(e){e.el.classList.remove(`section__exiting`),e.el.style.top=``,e.el.style[this.justify]=``}pop(e){e.forEach(e=>{e.el.style.top=`${e.el.offsetTop}px`,e.el.style[this.justify]=`${C(e.el,this.justify)}px`}),e.forEach(e=>{e.el.classList.add(`section__exiting`),e.present=!1})}addNewAndUpdateExisting(e){let t=new Map,n=new Map,r=this.justify===`left`,i=r?`prepend`:`append`;if(he(e,e=>{let r;this.children.has(e.key)?(r=this.children.get(e.key),n.set(e,r),this.unpop(r),r.present=!0):(r=this.addChar(e,{startDigitsAtZero:!0,animateIn:!0}),t.set(e,r)),this.el[i](r.el)},{reverse:r}),this.flow.computedAnimated){let e=this.el.getBoundingClientRect();t.forEach(t=>{t.willUpdate(e)})}t.forEach((e,t)=>{e.update(t.value)}),n.forEach((e,t)=>{e.update(t.value)})}willUpdate(){let e=this.el.getBoundingClientRect();this._prevOffset=e[this.justify],this.children.forEach(t=>t.willUpdate(e))}didUpdate(){let e=this.el.getBoundingClientRect();this.children.forEach(t=>t.didUpdate(e));let t=e[this.justify],n=this._prevOffset-t;n&&this.children.size&&this.el.animate({transform:[`translateX(${n}px)`,`none`]},{...this.flow.transformTiming,composite:`accumulate`})}constructor(e,t,{justify:n,className:r,...i},a){R(this,`flow`,void 0),R(this,`el`,void 0),R(this,`justify`,void 0),R(this,`children`,void 0),R(this,`onCharRemove`,void 0),R(this,`_prevOffset`,void 0),this.flow=e,this.children=new Map,this.onCharRemove=e=>()=>{this.children.delete(e)},this.justify=n;let o=t.map(e=>this.addChar(e).el);this.el=S(`span`,{...i,className:`section section--justify-${n} ${r??``}`},a?a(o):o)}},H=class extends V{update(e){let t=new Map;this.children.forEach((n,r)=>{e.find(e=>e.key===r)||t.set(r,n),this.unpop(n)}),this.addNewAndUpdateExisting(e),t.forEach(e=>{e instanceof K&&e.update(0)}),this.pop(t)}},U=class extends V{update(e){let t=new Map;this.children.forEach((n,r)=>{e.find(e=>e.key===r)||t.set(r,n)}),this.pop(t),this.addNewAndUpdateExisting(e)}},W=class{get present(){return this._present}set present(e){if(this._present!==e){if(this._present=e,!this.flow.computedAnimated){e||this._remove();return}this.el.style.setProperty(`--_number-flow-d-opacity`,e?`0`:`-.999`),this.el.animate({[E]:e?[-.9999,0]:[.999,0]},{...this.flow.opacityTiming,composite:`accumulate`}),e?this.flow.removeEventListener(`animationsfinish`,this._remove):this.flow.addEventListener(`animationsfinish`,this._remove,{once:!0})}}constructor(e,t,{onRemove:n,animateIn:r=!1}={}){R(this,`flow`,void 0),R(this,`el`,void 0),R(this,`_present`,void 0),R(this,`_onRemove`,void 0),R(this,`_remove`,void 0),this.flow=e,this.el=t,this._present=!0,this._remove=()=>{var e,t;this.el.remove(),(e=(t=this)._onRemove)==null||e.call(t)},this.el.classList.add(`animate-presence`),this.flow.computedAnimated&&r&&this.el.animate({[E]:[-.9999,0]},{...this.flow.opacityTiming,composite:`accumulate`}),this._onRemove=n}},G=class extends W{constructor(e,t,n,r){super(e.flow,n,r),R(this,`section`,void 0),R(this,`value`,void 0),R(this,`el`,void 0),this.section=e,this.value=t,this.el=n}},K=class extends G{willUpdate(e){let t=this.el.getBoundingClientRect();this._prevValue=this.value;let n=t[this.section.justify]-e[this.section.justify],r=t.width/2;this._prevCenter=this.section.justify===`left`?n+r:n-r}update(e){var t,n;(t=this._numbers[this.value])==null||t.classList.remove(`is-current`),this.el.style.setProperty(`--current`,String(e)),(n=this._numbers[e])==null||n.classList.add(`is-current`),this.value=e}didUpdate(e){let t=this.el.getBoundingClientRect(),n=t[this.section.justify]-e[this.section.justify],r=t.width/2,i=this.section.justify===`left`?n+r:n-r,a=this._prevCenter-i;a&&this.el.animate({transform:[`translateX(${a}px)`,`none`]},{...this.flow.transformTiming,composite:`accumulate`});let o=this.diff;o&&(this.el.classList.add(`is-spinning`),this.el.animate({[k]:[-o,0]},{...this.flow.spinTiming??this.flow.transformTiming,composite:`accumulate`}),this.flow.addEventListener(`animationsfinish`,this._onAnimationsFinish,{once:!0}))}get diff(){let e=this.flow.computedTrend,t=this.value-this._prevValue;return!t&&this.flow.startingPos!=null&&this.flow.startingPos>=this.pos?this._length*e:(e||=Math.sign(t),e<0&&this.value>this._prevValue?this.value-this._length-this._prevValue:e>0&&this.value<this._prevValue?this._length-this._prevValue+this.value:t)}constructor(e,t,n,r,i){let a=(e.flow.digits?.[r]?.max??9)+1,o=Array.from({length:a}).map((e,t)=>{let r=S(`span`,{className:`digit__num${t===n?` is-current`:``}`},[document.createTextNode(String(t))]);return r.style.setProperty(`--n`,String(t)),r}),s=S(`span`,{part:`digit ${t}-digit`,className:`digit`},o);s.style.setProperty(`--current`,String(n)),s.style.setProperty(`--length`,String(a)),super(e,n,s,i),R(this,`pos`,void 0),R(this,`_numbers`,void 0),R(this,`_length`,void 0),R(this,`_prevValue`,void 0),R(this,`_prevCenter`,void 0),R(this,`_onAnimationsFinish`,void 0),this.pos=r,this._onAnimationsFinish=()=>{this.el.classList.remove(`is-spinning`)},this._numbers=o,this._length=a}},Fe=class extends G{willUpdate(e){this.type!==`decimal`&&(this._prevOffset=this.el.getBoundingClientRect()[this.section.justify]-e[this.section.justify])}update(e){if(this.value!==e){let t=this._children.get(this.value);if(t.present=!1,t.el.classList.add(`symbol__exiting`),this._children.has(e)){let t=this._children.get(e);t.present=!0,t.el.classList.remove(`symbol__exiting`)}else{let t=S(`span`,{className:`symbol__value`,textContent:e});this.el.appendChild(t),this._children.set(e,new W(this.flow,t,{animateIn:!0,onRemove:this._onChildRemove(e)}))}}this.value=e}didUpdate(e){if(this.type===`decimal`)return;let t=this.el.getBoundingClientRect()[this.section.justify]-e[this.section.justify],n=this._prevOffset-t;n&&this.el.animate({transform:[`translateX(${n}px)`,`none`]},{...this.flow.transformTiming,composite:`accumulate`})}constructor(e,t,n,r){let i=S(`span`,{className:`symbol__value`,textContent:n});super(e,n,S(`span`,{part:`symbol ${t}`,className:`symbol`},[i]),r),R(this,`type`,void 0),R(this,`_children`,void 0),R(this,`_prevOffset`,void 0),R(this,`_onChildRemove`,void 0),this.type=t,this._children=new Map,this._onChildRemove=e=>()=>{this._children.delete(e)},this._children.set(n,new W(this.flow,i,{onRemove:this._onChildRemove(n)}))}}}));function Le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Re(e){let{transformTiming:t,spinTiming:n,opacityTiming:r,animated:i,respectMotionPreference:a,trend:o,continuous:s,...c}=e;return[{transformTiming:t,spinTiming:n,opacityTiming:r,animated:i,respectMotionPreference:a,trend:o,continuous:s},c]}var q,ze,J,Be,Y,Ve,He,Ue,We,Ge=e((()=>{a(),o(),Ie(),q=parseInt(c.match(/^(\d+)\./)?.[1])>=19,ze=[`data`,`digits`],J=class extends B{attributeChangedCallback(e,t,n){this[e]=JSON.parse(n)}},Le(J,`observedAttributes`,q?[]:ze),_e(`number-flow-react`,J),Be={},Y=q?e=>e:JSON.stringify,Ve=class extends t{updateProperties(e){if(!this.el)return;this.el.manual=!this.props.isolate;let[t]=Re(this.props);Object.entries(t).forEach(([e,t])=>{this.el[e]=t??J.defaultProps[e]}),e?.onAnimationsStart&&this.el.removeEventListener(`animationsstart`,e.onAnimationsStart),this.props.onAnimationsStart&&this.el.addEventListener(`animationsstart`,this.props.onAnimationsStart),e?.onAnimationsFinish&&this.el.removeEventListener(`animationsfinish`,e.onAnimationsFinish),this.props.onAnimationsFinish&&this.el.addEventListener(`animationsfinish`,this.props.onAnimationsFinish)}componentDidMount(){this.updateProperties(),q&&this.el&&(this.el.digits=this.props.digits,this.el.data=this.props.data)}getSnapshotBeforeUpdate(e){if(this.updateProperties(e),e.data!==this.props.data){if(this.props.group)return this.props.group.willUpdate(),()=>this.props.group?.didUpdate();if(!this.props.isolate){var t,n;return(n=this.el)==null||(t=n.willUpdate)==null||t.call(n),()=>this.el?.didUpdate()}}return null}componentDidUpdate(e,t,n){n?.()}handleRef(e){this.props.innerRef&&(this.props.innerRef.current=e),this.el=e}render(){let[e,{innerRef:t,className:n,data:r,willChange:i,isolate:a,group:o,digits:s,onAnimationsStart:c,onAnimationsFinish:l,...d}]=Re(this.props);return u(`number-flow-react`,{ref:this.handleRef,"data-will-change":i?``:void 0,class:n,"aria-label":r.valueAsString,...d,role:`img`,dangerouslySetInnerHTML:{__html:x?``:ke(r)},suppressHydrationWarning:!0,digits:Y(s),data:Y(r)})}constructor(e){super(e),Le(this,`el`,void 0),this.handleRef=this.handleRef.bind(this)}},He=n(function({value:e,locales:t,format:n,prefix:r,suffix:a,...o},s){i(s,()=>c.current,[]);let c=d(),l=f(We);l?.useRegister(c);let m=p(()=>t?JSON.stringify(t):``,[t]),h=p(()=>n?JSON.stringify(n):``,[n]),g=p(()=>{var i,o;let s=(i=Be)[o=`${m}:${h}`]??(i[o]=new Intl.NumberFormat(t,n));return je(e,s,r,a)},[e,m,h,r,a]);return u(Ve,{...o,group:l,data:g,innerRef:c})}),Ue=He,We=ee(void 0)}));function X(e){let{value:t,format:n,gradientHeight:r}=e,i=y.current()===y.canvas,a=Je(),o={userSelect:e.userSelect?`auto`:`none`,fontVariantNumeric:e.monospace?`tabular-nums`:void 0,margin:0,color:e.color,...e.font,...e.style},s={notation:n.style===`compact`?`compact`:`standard`,signDisplay:n.plusSign?`exceptZero`:`auto`,useGrouping:n.separators};return i?m(`div`,{style:{...e.style,...o,whiteSpace:`pre`},children:[e.prefix,Intl.NumberFormat(n.locale||void 0,s).format(t),e.suffix]}):m(`div`,{id:a,style:{...e.style,whiteSpace:`pre`,marginTop:-r,marginBottom:-r},children:[u(Ue,{value:t,trend:Ke[e.direction],continuous:e.continuous,format:s,locales:n.locale||void 0,prefix:e.prefix,suffix:e.suffix,transformTiming:{easing:qe[e.transition.easing],duration:e.transition.duration*1e3},opacityTiming:{easing:`ease-out`,duration:e.transition.duration*1e3/2},isolate:!0,willChange:!0,style:o}),u(`style`,{dangerouslySetInnerHTML:{__html:`#${a} { --number-flow-mask-height: ${r}px }`}})]})}var Ke,qe,Je,Ye=e((()=>{s(),a(),ue(),o(),Ge(),Ke={nearest:(e,t)=>Math.sign(t-e),individual:0,up:1,down:-1},qe={smooth:`linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)`,linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`},X.displayName=`NumberFlow`,se(X,{value:{type:v.Number,defaultValue:0},format:{type:v.Object,controls:{style:{type:v.Enum,defaultValue:`default`,options:[`default`,`compact`],optionTitles:[`Default (1,000)`,`Compact (1K)`],displaySegmentedControl:!0,segmentedControlDirection:`vertical`},separators:{type:v.Boolean,defaultValue:!0},plusSign:{type:v.Boolean,defaultValue:!1},locale:{type:v.String,placeholder:`Auto${l===void 0?``:` (${l.language})`}`}}},direction:{type:v.Enum,defaultValue:`nearest`,options:[`nearest`,`individual`,`up`,`down`],optionTitles:[`Nearest (All)`,`Nearest (Per-Character)`,`Up ↑`,`Down ↓`]},continuous:{type:v.Boolean,defaultValue:!0,hidden:e=>e.direction===`individual`},gradientHeight:{type:v.Number,defaultValue:10,min:0,step:1,title:`Gradient`},font:{type:`font`,controls:`extended`,defaultFontType:`sans-serif`,defaultValue:{fontSize:16,lineHeight:1}},color:{type:v.Color,defaultValue:`#000`},prefix:{type:v.String,placeholder:`Prefix`},suffix:{type:v.String,placeholder:`Suffix`},userSelect:{type:v.Boolean,defaultValue:!1},transition:{type:v.Object,controls:{easing:{type:v.Enum,defaultValue:`smooth`,options:[`smooth`,`linear`,`ease`,`easeIn`,`easeOut`,`easeInOut`],optionTitles:[`Smooth`,`Linear`,`Ease`,`Ease In`,`Ease Out`,`Ease In Out`]},duration:{type:v.Number,defaultValue:.75,min:0,step:.01}},description:`More components at [Framer University](https://frameruni.link/cc).`}}),Je=()=>`frameruni-${r().replace(/:/g,``)}`}));function Xe(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var Z,Q,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,$,st,ct=e((()=>{a(),ue(),ne(),o(),Ye(),Z=le(X),Q=b(X),Ze=[`yShZsES5F`,`WK2OQQ8u0`,`Axt23qBeF`,`W6Fkdsmi9`,`sl1h4cdJt`,`poGyVHWU3`],Qe=`framer-BQWw8`,$e={Axt23qBeF:`framer-v-jhp9ru`,poGyVHWU3:`framer-v-1utiqi4`,sl1h4cdJt:`framer-v-13o1csi`,W6Fkdsmi9:`framer-v-1diwhej`,WK2OQQ8u0:`framer-v-volocp`,yShZsES5F:`framer-v-c7pgeg`},et={duration:0,type:`tween`},tt=({value:e,children:t})=>{let n=f(_),r=e??n.transition,i=p(()=>({...n,transition:r}),[JSON.stringify(r)]);return u(_.Provider,{value:i,children:t})},nt=re.create(g),rt={"Down ↓":`down`,"Nearest (All)":`nearest`,"Nearest (Per-Character)":`individual`,"Up ↑":`up`},it={"Large - End Number":`WK2OQQ8u0`,"Large - Start Number":`yShZsES5F`,"Medium - End Number":`W6Fkdsmi9`,"Medium - Start Number":`Axt23qBeF`,"Small - Start Number":`sl1h4cdJt`,"Small- End Number":`poGyVHWU3`},at=({direction:e,endValue:t,fontColor:n,height:r,id:i,prefix:a,startValue:o,suffix:s,width:c,...l})=>({...l,AlkJUvdso:n??l.AlkJUvdso??`var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255))`,ds4iTMbPD:s??l.ds4iTMbPD??`K`,FCkEPZZBj:o??l.FCkEPZZBj,LPzu7UvXp:rt[e]??e??l.LPzu7UvXp??`down`,PZVzSNtmu:a??l.PZVzSNtmu,variant:it[l.variant]??l.variant??`yShZsES5F`,zjFTn8JRN:t??l.zjFTn8JRN??50}),ot=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),$=me(n(function(e,t){let n=d(null),i=t??n,a=r(),{activeLocale:o,setLocale:s}=fe();de();let{style:c,className:l,layoutId:f,variant:p,FCkEPZZBj:m,zjFTn8JRN:h,AlkJUvdso:g,LPzu7UvXp:ee,PZVzSNtmu:_,ds4iTMbPD:ne,...v}=at(e),{baseVariant:y,classNames:oe,clearLoadingGesture:se,gestureHandlers:le,gestureVariant:b,isLoading:ue,setGestureState:me,setVariant:he,variants:x}=pe({cycleOrder:Ze,defaultVariant:`yShZsES5F`,ref:i,variant:p,variantClassNames:$e}),S=ot(e,x),C=ce(Qe);return u(te,{id:f??a,children:u(nt,{animate:x,initial:!1,children:u(tt,{value:et,children:u(re.div,{...v,...le,className:ce(C,`framer-c7pgeg`,l,oe),"data-framer-name":`Large - Start Number`,layoutDependency:S,layoutId:`yShZsES5F`,ref:i,style:{...c},...Xe({Axt23qBeF:{"data-framer-name":`Medium - Start Number`},poGyVHWU3:{"data-framer-name":`Small- End Number`},sl1h4cdJt:{"data-framer-name":`Small - Start Number`},W6Fkdsmi9:{"data-framer-name":`Medium - End Number`},WK2OQQ8u0:{"data-framer-name":`Large - End Number`}},y,b),children:u(ie,{children:u(ae,{className:`framer-166yijw-container`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:S,layoutId:`h4eDgjFCn-container`,nodeId:`h4eDgjFCn`,rendersWithMotion:!0,scopeId:`qQnPciu5G`,children:u(X,{color:g,continuous:!1,direction:ee,font:{fontFamily:`"Inter Display", "Inter Display Placeholder", sans-serif`,fontSize:`80px`,fontStyle:`normal`,fontWeight:500,letterSpacing:`-0.04em`,lineHeight:`1em`,textAlign:`right`},format:{locale:``,plusSign:!1,separators:!0,style:`compact`},gradientHeight:10,height:`100%`,id:`h4eDgjFCn`,layoutId:`h4eDgjFCn`,prefix:_,suffix:ne,transition:{duration:2,easing:`easeInOut`},userSelect:!1,value:m,width:`100%`,...Xe({Axt23qBeF:{font:{fontFamily:`"Inter Display", "Inter Display Placeholder", sans-serif`,fontSize:`60px`,fontStyle:`normal`,fontWeight:600,letterSpacing:`-0.04em`,lineHeight:`1em`,textAlign:`right`}},poGyVHWU3:{font:{fontFamily:`"Inter Display", "Inter Display Placeholder", sans-serif`,fontSize:`42px`,fontStyle:`normal`,fontWeight:600,letterSpacing:`-0.04em`,lineHeight:`1em`,textAlign:`right`},value:h},sl1h4cdJt:{font:{fontFamily:`"Inter Display", "Inter Display Placeholder", sans-serif`,fontSize:`42px`,fontStyle:`normal`,fontWeight:600,letterSpacing:`-0.04em`,lineHeight:`1em`,textAlign:`right`}},W6Fkdsmi9:{font:{fontFamily:`"Inter Display", "Inter Display Placeholder", sans-serif`,fontSize:`60px`,fontStyle:`normal`,fontWeight:500,letterSpacing:`-0.04em`,lineHeight:`1em`,textAlign:`right`},value:h},WK2OQQ8u0:{value:h}},y,b)})})})})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-BQWw8.framer-19u02s5, .framer-BQWw8 .framer-19u02s5 { display: block; }`,`.framer-BQWw8.framer-c7pgeg { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,`.framer-BQWw8 .framer-166yijw-container { flex: none; height: auto; position: relative; width: auto; }`,`.framer-BQWw8.framer-v-volocp .framer-166yijw-container { order: 0; }`],`framer-BQWw8`),st=$,$.displayName=`NumberFlow`,$.defaultProps={height:80,width:96},se($,{variant:{options:[`yShZsES5F`,`WK2OQQ8u0`,`Axt23qBeF`,`W6Fkdsmi9`,`sl1h4cdJt`,`poGyVHWU3`],optionTitles:[`Large - Start Number`,`Large - End Number`,`Medium - Start Number`,`Medium - End Number`,`Small - Start Number`,`Small- End Number`],title:`Variant`,type:v.Enum},FCkEPZZBj:{defaultValue:0,title:`Start Value`,type:v.Number},zjFTn8JRN:{defaultValue:50,title:`End Value`,type:v.Number},AlkJUvdso:{defaultValue:`var(--token-3238911e-9cd4-40ad-8e5a-3b7215265583, rgb(255, 255, 255)) /* {"name":"White"} */`,title:`Font Color`,type:v.Color},LPzu7UvXp:Q?.direction&&{...Q.direction,defaultValue:`down`,description:void 0,hidden:void 0,title:`Direction`},PZVzSNtmu:{defaultValue:``,placeholder:`Prefix`,title:`Prefix`,type:v.String},ds4iTMbPD:{defaultValue:`K`,placeholder:`Suffix`,title:`Suffix`,type:v.String}}),oe($,[{explicitInter:!0,fonts:[{family:`Inter Display`,source:`framer`,style:`normal`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`https://framerusercontent.com/assets/ePuN3mCjzajIHnyCdvKBFiZkyY0.woff2`,weight:`500`},{family:`Inter Display`,source:`framer`,style:`normal`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`https://framerusercontent.com/assets/V3j1L0o5vPFKe26Sw4HcpXCfHo.woff2`,weight:`500`},{family:`Inter Display`,source:`framer`,style:`normal`,unicodeRange:`U+1F00-1FFF`,url:`https://framerusercontent.com/assets/F3kdpd2N0cToWV5huaZjjgM.woff2`,weight:`500`},{family:`Inter Display`,source:`framer`,style:`normal`,unicodeRange:`U+0370-03FF`,url:`https://framerusercontent.com/assets/0iDmxkizU9goZoclqIqsV5rvETU.woff2`,weight:`500`},{family:`Inter Display`,source:`framer`,style:`normal`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`https://framerusercontent.com/assets/r0mv3NegmA0akcQsNFotG32Las.woff2`,weight:`500`},{family:`Inter Display`,source:`framer`,style:`normal`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`https://framerusercontent.com/assets/iwWTDc49ENF2tCHbqlNARXw6Ug.woff2`,weight:`500`},{family:`Inter Display`,source:`framer`,style:`normal`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`https://framerusercontent.com/assets/Ii21jnSJkulBKsHHXKlapi7fv9w.woff2`,weight:`500`},{family:`Inter Display`,source:`framer`,style:`normal`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`https://framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2`,weight:`600`},{family:`Inter Display`,source:`framer`,style:`normal`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`https://framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2`,weight:`600`},{family:`Inter Display`,source:`framer`,style:`normal`,unicodeRange:`U+1F00-1FFF`,url:`https://framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2`,weight:`600`},{family:`Inter Display`,source:`framer`,style:`normal`,unicodeRange:`U+0370-03FF`,url:`https://framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2`,weight:`600`},{family:`Inter Display`,source:`framer`,style:`normal`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`https://framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2`,weight:`600`},{family:`Inter Display`,source:`framer`,style:`normal`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`https://framerusercontent.com/assets/PfdOpgzFf7N2Uye9JX7xRKYTgSc.woff2`,weight:`600`},{family:`Inter Display`,source:`framer`,style:`normal`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`https://framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2`,weight:`600`}]},...Z],{supportsExplicitInterCodegen:!0})}));export{ct as init_qQnPciu5G,st as qQnPciu5G_default};
//# sourceMappingURL=qQnPciu5G.DQqjIg-Z.mjs.map