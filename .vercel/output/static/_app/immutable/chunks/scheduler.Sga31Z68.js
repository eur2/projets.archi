function L(){}function G(t,e){for(const n in e)t[n]=e[n];return t}function I(t){return t()}function nt(){return Object.create(null)}function R(t){t.forEach(I)}function z(t){return typeof t=="function"}function it(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function A(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function k(t){return t.split(",").map(e=>e.trim().split(" ").filter(Boolean))}function lt(t,e){const n=k(t.srcset),i=k(e||"");return i.length===n.length&&i.every(([l,s],r)=>s===n[r][1]&&(A(n[r][0],l)||A(l,n[r][0])))}function rt(t){return Object.keys(t).length===0}function F(t,...e){if(t==null){for(const i of e)i(void 0);return L}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function st(t,e,n){t.$$.on_destroy.push(F(e,n))}function ct(t,e,n,i){if(t){const l=M(t,e,n,i);return t[0](l)}}function M(t,e,n,i){return t[1]&&i?G(n.ctx.slice(),t[1](i(e))):n.ctx}function ot(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const s=[],r=Math.max(e.dirty.length,l.length);for(let o=0;o<r;o+=1)s[o]=e.dirty[o]|l[o];return s}return e.dirty|l}return e.dirty}function ut(t,e,n,i,l,s){if(l){const r=M(e,n,i,s);t.p(r,l)}}function at(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ft(t){return t&&z(t.destroy)?t.destroy:L}let p=!1;function _t(){p=!0}function dt(){p=!1}function U(t,e,n,i){for(;t<e;){const l=t+(e-t>>1);n(l)<=i?t=l+1:e=l}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let l=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,a=(l>0&&e[n[l]].claim_order<=u?l+1:U(1,l,O=>e[n[O]].claim_order,u))-1;i[c]=n[a]+1;const w=a+1;n[w]=c,l=Math.max(w,l)}const s=[],r=[];let o=e.length-1;for(let c=n[l]+1;c!=0;c=i[c-1]){for(s.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);s.reverse(),r.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<r.length;c++){for(;u<s.length&&r[c].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(r[c],a)}}function J(t,e){if(p){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function K(t,e,n){t.insertBefore(e,n||null)}function Q(t,e,n){p&&!n?J(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function j(t){return document.createElement(t)}function D(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function mt(){return N(" ")}function pt(){return N("")}function yt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function gt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bt(t){return t.dataset.svelteH}function xt(t,e,n){const i=new Set;for(let l=0;l<t.length;l+=1)t[l].checked&&i.add(t[l].__value);return n||i.delete(e),Array.from(i)}function vt(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function Et(t){return Array.from(t.childNodes)}function P(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,e,n,i,l=!1){P(t);const s=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,l||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,l?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function C(t,e,n,i){return q(t,l=>l.nodeName===e,l=>{const s=[];for(let r=0;r<l.attributes.length;r++){const o=l.attributes[r];n[o.name]||s.push(o.name)}s.forEach(r=>l.removeAttribute(r))},()=>i(e))}function Tt(t,e,n){return C(t,e,n,j)}function Nt(t,e,n){return C(t,e,n,D)}function V(t,e){return q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>N(e),!0)}function wt(t){return V(t," ")}function H(t,e,n){for(let i=n;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===e)return i}return-1}function At(t,e){const n=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new g(e);P(t);const l=t.splice(n,i-n+1);v(l[0]),v(l[l.length-1]);const s=l.slice(1,l.length-1);if(s.length===0)return new g(e);for(const r of s)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new g(e,s)}function kt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ht(t,e){t.value=e??""}function St(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Lt(t,e,n){for(let i=0;i<t.options.length;i+=1){const l=t.options[i];if(l.__value===e){l.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Mt(t){const e=t.querySelector(":checked");return e&&e.__value}function jt(t,e,n){t.classList.toggle(e,!!n)}function X(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Dt(t,e){const n=[];let i=0;for(const l of e.childNodes)if(l.nodeType===8){const s=l.textContent.trim();s===`HEAD_${t}_END`?(i-=1,n.push(l)):s===`HEAD_${t}_START`&&(i+=1,n.push(l))}else i>0&&n.push(l);return n}class Y{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=D(n.nodeName):this.e=j(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)K(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}class g extends Y{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Q(this.t,this.n[n],e)}}function Pt(t,e){return new t(e)}let m;function b(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function qt(t){y().$$.on_mount.push(t)}function Ct(t){y().$$.after_update.push(t)}function Bt(t){y().$$.on_destroy.push(t)}function Ot(){const t=y();return(e,n,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[e];if(l){const s=X(e,n,{cancelable:i});return l.slice().forEach(r=>{r.call(t,s)}),!s.defaultPrevented}return!0}}const d=[],S=[];let _=[];const E=[],B=Promise.resolve();let T=!1;function Z(){T||(T=!0,B.then(tt))}function Gt(){return Z(),B}function $(t){_.push(t)}function It(t){E.push(t)}const x=new Set;let f=0;function tt(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const e=d[f];f++,b(e),et(e.$$)}}catch(e){throw d.length=0,f=0,e}for(b(null),d.length=0,f=0;S.length;)S.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];x.has(n)||(x.add(n),n())}_.length=0}while(d.length);for(;E.length;)E.pop()();T=!1,x.clear(),b(t)}function et(t){if(t.fragment!==null){t.update(),R(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach($)}}function Rt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{m as $,st as A,yt as B,R as C,Ot as D,A as E,lt as F,ft as G,z as H,D as I,Nt as J,jt as K,g as L,bt as M,At as N,Ht as O,It as P,ht as Q,vt as R,xt as S,Bt as T,$ as U,Lt as V,Mt as W,nt as X,tt as Y,rt as Z,Rt as _,mt as a,b as a0,I as a1,d as a2,Z as a3,_t as a4,dt as a5,Ct as b,wt as c,v as d,pt as e,j as f,Tt as g,Et as h,Q as i,gt as j,St as k,N as l,V as m,kt as n,qt as o,S as p,Pt as q,ct as r,it as s,Gt as t,Dt as u,ut as v,at as w,ot as x,J as y,L as z};