/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.5
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,(function(){"use strict";for(var e=["native code","[object MutationObserverConstructor]"],t="undefined"!=typeof window,n=["Edge","Trident","Firefox"],o=0,r=0;r<n.length;r+=1)if(t&&navigator.userAgent.indexOf(n[r])>=0){o=1;break}var i,a=t&&(i=window.MutationObserver,e.some((function(e){return(i||"").toString().indexOf(e)>-1})))?function(e){var t=!1,n=0,o=document.createElement("span");return new MutationObserver((function(){e(),t=!1})).observe(o,{attributes:!0}),function(){t||(t=!0,o.setAttribute("x-index",n),n+=1)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout((function(){t=!1,e()}),o))}};function f(e){return e&&"[object Function]"==={}.toString.call(e)}function s(e,t){if(1!==e.nodeType)return[];var n=window.getComputedStyle(e,null);return t?n[t]:n}function p(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function l(e){if(!e||-1!==["HTML","BODY","#document"].indexOf(e.nodeName))return window.document.body;var t=s(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/(auto|scroll)/.test(n+r+o)?e:l(p(e))}function d(e){var t=e&&e.offsetParent,n=t&&t.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(t.nodeName)&&"static"===s(t,"position")?d(t):t:window.document.documentElement}function u(e){return null!==e.parentNode?u(e.parentNode):e}function c(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return window.document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,o=n?e:t,r=n?t:e,i=document.createRange();i.setStart(o,0),i.setEnd(r,0);var a,f,s=i.commonAncestorContainer;if(e!==s&&t!==s||o.contains(r))return"BODY"===(f=(a=s).nodeName)||"HTML"!==f&&d(a.firstElementChild)!==a?d(s):s;var p=u(e);return p.host?c(p.host,t):c(e,u(t).host)}function h(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var o=window.document.documentElement;return(window.document.scrollingElement||o)[t]}return e[t]}function m(e,t){var n="x"===t?"Left":"Top",o="Left"===n?"Right":"Bottom";return+e["border"+n+"Width"].split("px")[0]+ +e["border"+o+"Width"].split("px")[0]}var v=void 0,g=function(){return void 0===v&&(v=-1!==navigator.appVersion.indexOf("MSIE 10")),v};function b(e,t,n,o){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],g()?n["offset"+e]+o["margin"+("Height"===e?"Top":"Left")]+o["margin"+("Height"===e?"Bottom":"Right")]:0)}function w(){var e=window.document.body,t=window.document.documentElement,n=g()&&window.getComputedStyle(t);return{height:b("Height",e,t,n),width:b("Width",e,t,n)}}var y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},O=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),E=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};function L(e){return x({},e,{right:e.left+e.width,bottom:e.top+e.height})}function T(e){var t={};if(g())try{t=e.getBoundingClientRect();var n=h(e,"top"),o=h(e,"left");t.top+=n,t.left+=o,t.bottom+=n,t.right+=o}catch(e){}else t=e.getBoundingClientRect();var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?w():{},a=i.width||e.clientWidth||r.right-r.left,f=i.height||e.clientHeight||r.bottom-r.top,p=e.offsetWidth-a,l=e.offsetHeight-f;if(p||l){var d=s(e);p-=m(d,"x"),l-=m(d,"y"),r.width-=p,r.height-=l}return L(r)}function M(e,t){var n=g(),o="HTML"===t.nodeName,r=T(e),i=T(t),a=l(e),f=s(t),p=+f.borderTopWidth.split("px")[0],d=+f.borderLeftWidth.split("px")[0],u=L({top:r.top-i.top-p,left:r.left-i.left-d,width:r.width,height:r.height});if(u.marginTop=0,u.marginLeft=0,!n&&o){var c=+f.marginTop.split("px")[0],m=+f.marginLeft.split("px")[0];u.top-=p-c,u.bottom-=p-c,u.left-=d-m,u.right-=d-m,u.marginTop=c,u.marginLeft=m}return(n?t.contains(a):t===a&&"BODY"!==a.nodeName)&&(u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=h(t,"top"),r=h(t,"left"),i=n?-1:1;return e.top+=o*i,e.bottom+=o*i,e.left+=r*i,e.right+=r*i,e}(u,t)),u}function C(e,t,n,o){var r={top:0,left:0},i=c(e,t);if("viewport"===o)r=function(e){var t=window.document.documentElement,n=M(e,t),o=Math.max(t.clientWidth,window.innerWidth||0),r=Math.max(t.clientHeight,window.innerHeight||0),i=h(t),a=h(t,"left");return L({top:i-n.top+n.marginTop,left:a-n.left+n.marginLeft,width:o,height:r})}(i);else{var a=void 0;"scrollParent"===o?"BODY"===(a=l(p(e))).nodeName&&(a=window.document.documentElement):a="window"===o?window.document.documentElement:o;var f=M(a,i);if("HTML"!==a.nodeName||function e(t){var n=t.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===s(t,"position")||e(p(t)))}(i))r=f;else{var d=w(),u=d.height,m=d.width;r.top+=f.top-f.marginTop,r.bottom=u+f.top,r.left+=f.left-f.marginLeft,r.right=m+f.left}}return r.left+=n,r.top+=n,r.right-=n,r.bottom-=n,r}function N(e,t,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=C(n,o,i,r),f={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},s=Object.keys(f).map((function(e){return x({key:e},f[e],{area:(t=f[e],t.width*t.height)});var t})).sort((function(e,t){return t.area-e.area})),p=s.filter((function(e){var t=e.width,o=e.height;return t>=n.clientWidth&&o>=n.clientHeight})),l=p.length>0?p[0].key:s[0].key,d=e.split("-")[1];return l+(d?"-"+d:"")}function k(e,t,n){return M(n,c(t,n))}function S(e){var t=window.getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),o=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+o,height:e.offsetHeight+n}}function W(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function A(e,t,n){n=n.split("-")[0];var o=S(e),r={width:o.width,height:o.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",f=i?"left":"top",s=i?"height":"width",p=i?"width":"height";return r[a]=t[a]+t[s]/2-o[s]/2,r[f]=n===f?t[f]-o[p]:t[W(f)],r}function B(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function D(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex((function(e){return e[t]===n}));var o=B(e,(function(e){return e[t]===n}));return e.indexOf(o)}(e,"name",n))).forEach((function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&f(n)&&(t.offsets.popper=L(t.offsets.popper),t.offsets.reference=L(t.offsets.reference),t=n(t,e))})),t}function H(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=k(this.state,this.popper,this.reference),e.placement=N(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=A(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position="absolute",e=D(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function P(e,t){return e.some((function(e){var n=e.name;return e.enabled&&n===t}))}function j(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),o=0;o<t.length-1;o++){var r=t[o],i=r?""+r+n:e;if(void 0!==window.document.body.style[i])return i}return null}function I(){return this.state.isDestroyed=!0,P(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[j("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function F(e,t,n,o){n.updateBound=o,window.addEventListener("resize",n.updateBound,{passive:!0});var r=l(e);return function e(t,n,o,r){var i="BODY"===t.nodeName,a=i?window:t;a.addEventListener(n,o,{passive:!0}),i||e(l(a.parentNode),n,o,r),r.push(a)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function R(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function U(){var e;this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=(this.reference,e=this.state,window.removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function Y(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function q(e,t){Object.keys(t).forEach((function(n){var o="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&Y(t[n])&&(o="px"),e.style[n]=t[n]+o}))}function K(e,t,n){var o=B(e,(function(e){return e.name===t})),r=!!o&&e.some((function(e){return e.name===n&&e.enabled&&e.order<o.order}));if(!r){var i="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return r}var z=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],G=z.slice(3);function V(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=G.indexOf(e),o=G.slice(n+1).concat(G.slice(0,n));return t?o.reverse():o}var _={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function X(e,t,n,o){var r=[0,0],i=-1!==["right","left"].indexOf(o),a=e.split(/(\+|\-)/).map((function(e){return e.trim()})),f=a.indexOf(B(a,(function(e){return-1!==e.search(/,|\s/)})));a[f]&&-1===a[f].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var s=/\s*,\s*|\s+/,p=-1!==f?[a.slice(0,f).concat([a[f].split(s)[0]]),[a[f].split(s)[1]].concat(a.slice(f+1))]:[a];return(p=p.map((function(e,o){var r=(1===o?!i:i)?"height":"width",a=!1;return e.reduce((function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)}),[]).map((function(e){return function(e,t,n,o){var r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+r[1],a=r[2];if(!i)return e;if(0===a.indexOf("%")){var f=void 0;switch(a){case"%p":f=n;break;case"%":case"%r":default:f=o}return L(f)[t]/100*i}if("vh"===a||"vw"===a){return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i}return i}(e,r,t,n)}))}))).forEach((function(e,t){e.forEach((function(n,o){Y(n)&&(r[t]+=n*("-"===e[o-1]?-1:1))}))})),r}var J={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],o=t.split("-")[1];if(o){var r=e.offsets,i=r.reference,a=r.popper,f=-1!==["bottom","top"].indexOf(n),s=f?"left":"top",p=f?"width":"height",l={start:E({},s,i[s]),end:E({},s,i[s]+i[p]-a[p])};e.offsets.popper=x({},a,l[o])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,o=e.placement,r=e.offsets,i=r.popper,a=r.reference,f=o.split("-")[0],s=void 0;return s=Y(+n)?[+n,0]:X(n,i,a,f),"left"===f?(i.top+=s[0],i.left-=s[1]):"right"===f?(i.top+=s[0],i.left+=s[1]):"top"===f?(i.left+=s[0],i.top-=s[1]):"bottom"===f&&(i.left+=s[0],i.top+=s[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||d(e.instance.popper);e.instance.reference===n&&(n=d(n));var o=C(e.instance.popper,e.instance.reference,t.padding,n);t.boundaries=o;var r=t.priority,i=e.offsets.popper,a={primary:function(e){var n=i[e];return i[e]<o[e]&&!t.escapeWithReference&&(n=Math.max(i[e],o[e])),E({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=i[n];return i[e]>o[e]&&!t.escapeWithReference&&(r=Math.min(i[n],o[e]-("right"===e?i.width:i.height))),E({},n,r)}};return r.forEach((function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";i=x({},i,a[t](e))})),e.offsets.popper=i,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,o=t.reference,r=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(r),f=a?"right":"bottom",s=a?"left":"top",p=a?"width":"height";return n[f]<i(o[s])&&(e.offsets.popper[s]=i(o[s])-n[p]),n[s]>i(o[f])&&(e.offsets.popper[s]=i(o[f])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){if(!K(e.instance.modifiers,"arrow","keepTogether"))return e;var n=t.element;if("string"==typeof n){if(!(n=e.instance.popper.querySelector(n)))return e}else if(!e.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],r=e.offsets,i=r.popper,a=r.reference,f=-1!==["left","right"].indexOf(o),p=f?"height":"width",l=f?"Top":"Left",d=l.toLowerCase(),u=f?"left":"top",c=f?"bottom":"right",h=S(n)[p];a[c]-h<i[d]&&(e.offsets.popper[d]-=i[d]-(a[c]-h)),a[d]+h>i[c]&&(e.offsets.popper[d]+=a[d]+h-i[c]);var m=a[d]+a[p]/2-h/2,v=s(e.instance.popper,"margin"+l).replace("px",""),g=m-L(e.offsets.popper)[d]-v;return g=Math.max(Math.min(i[p]-h,g),0),e.arrowElement=n,e.offsets.arrow={},e.offsets.arrow[d]=Math.round(g),e.offsets.arrow[u]="",e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(P(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=C(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),o=e.placement.split("-")[0],r=W(o),i=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case _.FLIP:a=[o,r];break;case _.CLOCKWISE:a=V(o);break;case _.COUNTERCLOCKWISE:a=V(o,!0);break;default:a=t.behavior}return a.forEach((function(f,s){if(o!==f||a.length===s+1)return e;o=e.placement.split("-")[0],r=W(o);var p=e.offsets.popper,l=e.offsets.reference,d=Math.floor,u="left"===o&&d(p.right)>d(l.left)||"right"===o&&d(p.left)<d(l.right)||"top"===o&&d(p.bottom)>d(l.top)||"bottom"===o&&d(p.top)<d(l.bottom),c=d(p.left)<d(n.left),h=d(p.right)>d(n.right),m=d(p.top)<d(n.top),v=d(p.bottom)>d(n.bottom),g="left"===o&&c||"right"===o&&h||"top"===o&&m||"bottom"===o&&v,b=-1!==["top","bottom"].indexOf(o),w=!!t.flipVariations&&(b&&"start"===i&&c||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&v);(u||g||w)&&(e.flipped=!0,(u||g)&&(o=a[s+1]),w&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=o+(i?"-"+i:""),e.offsets.popper=x({},e.offsets.popper,A(e.instance.popper,e.offsets.reference,e.placement)),e=D(e.instance.modifiers,e,"flip"))})),e},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],o=e.offsets,r=o.popper,i=o.reference,a=-1!==["left","right"].indexOf(n),f=-1===["top","left"].indexOf(n);return r[a?"left":"top"]=i[n]-(f?r[a?"width":"height"]:0),e.placement=W(t),e.offsets.popper=L(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=B(e.instance.modifiers,(function(e){return"preventOverflow"===e.name})).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,o=t.y,r=e.offsets.popper,i=B(e.instance.modifiers,(function(e){return"applyStyle"===e.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==i?i:t.gpuAcceleration,f=T(d(e.instance.popper)),s={position:r.position},p={left:Math.floor(r.left),top:Math.floor(r.top),bottom:Math.floor(r.bottom),right:Math.floor(r.right)},l="bottom"===n?"top":"bottom",u="right"===o?"left":"right",c=j("transform"),h=void 0,m=void 0;if(m="bottom"===l?-f.height+p.bottom:p.top,h="right"===u?-f.width+p.right:p.left,a&&c)s[c]="translate3d("+h+"px, "+m+"px, 0)",s[l]=0,s[u]=0,s.willChange="transform";else{var v="bottom"===l?-1:1,g="right"===u?-1:1;s[l]=m*v,s[u]=h*g,s.willChange=l+", "+u}var b={"x-placement":e.placement};return e.attributes=x({},b,e.attributes),e.styles=x({},s,e.styles),e.arrowStyles=x({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return q(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach((function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})),e.arrowElement&&Object.keys(e.arrowStyles).length&&q(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,o,r){var i=k(0,t,e),a=N(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),q(t,{position:"absolute"}),n},gpuAcceleration:void 0}}},Q=function(){function e(t,n){var o=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};y(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=a(this.update.bind(this)),this.options=x({},e.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t.jquery?t[0]:t,this.popper=n.jquery?n[0]:n,this.options.modifiers={},Object.keys(x({},e.Defaults.modifiers,r.modifiers)).forEach((function(t){o.options.modifiers[t]=x({},e.Defaults.modifiers[t]||{},r.modifiers?r.modifiers[t]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(e){return x({name:e},o.options.modifiers[e])})).sort((function(e,t){return e.order-t.order})),this.modifiers.forEach((function(e){e.enabled&&f(e.onLoad)&&e.onLoad(o.reference,o.popper,o.options,e,o.state)})),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return O(e,[{key:"update",value:function(){return H.call(this)}},{key:"destroy",value:function(){return I.call(this)}},{key:"enableEventListeners",value:function(){return R.call(this)}},{key:"disableEventListeners",value:function(){return U.call(this)}}]),e}();return Q.Utils=("undefined"!=typeof window?window:global).PopperUtils,Q.placements=z,Q.Defaults=J,Q}));