(()=>{"use strict";var e,t={52:()=>{String.format||(String.format=function(e){var t=Array.prototype.slice.call(arguments,1);return e.replace(/{(\d+)}/g,(function(e,a){return void 0!==t[a]?t[a]:e}))}),window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".ag-post-metabox__title"),t=e?e.querySelector("i"):document.createElement("i"),a=e?e.querySelector("span"):document.createElement("span"),n=e?e.querySelector("button"):document.createElement("button");document.querySelectorAll(".ag-post-metabox__age-toggle").forEach((function(e){e.addEventListener("click",(function(){return document.body.classList.toggle("ag-show-age")}))})),document.querySelectorAll(".ag-post-metabox__set").forEach((function(t){t.addEventListener("click",(function(t){if(e){e.dataset.age=t.currentTarget.parentNode.querySelector("input").value;var n=e.dataset,o=n.age,r=n.textRestrict;a.textContent=String.format(r,o),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=new CustomEvent(e,{detail:t});window.dispatchEvent(a)}("AgeGateSetAge",o)}document.body.classList.toggle("ag-show-age")}))})),document.querySelectorAll(".ag_settings_switch").forEach((function(o){o.addEventListener("change",(function(o){if(e){var r=o.target.checked,c=e.dataset,s=c.age,i=c.textRestrict,l=c.textUnrestrict;o.target.name.match(/bypass/)?r?(n&&(n.style.display="none"),document.body.classList.remove("ag-show-age"),t.className="dashicons dashicons-unlock",a.textContent=l):(n&&(n.style.display="inline-block"),t.className="dashicons dashicons-lock",a.textContent=String.format(i,s)):r?(n&&(n.style.display="inline-block"),t.className="dashicons dashicons-lock",a.textContent=String.format(i,s)):(n&&(n.style.display="none"),document.body.classList.remove("ag-show-age"),t.className="dashicons dashicons-unlock",a.textContent=l)}}))}));var o=document.querySelector('[name="post_lang_choice"], [name="icl_post_language"], [name="term_lang_choice"], [name="icl_tax_category_language"]');if(window.addEventListener("AgeGateSetAge",(function(e){})),o){var r=window.agagemap,c=o.value,s=document.querySelector('[name="ag_settings[age]"]');if(s){var i=r[c]!=s.value;o.addEventListener("change",(function(t){if(!i){var n=document.querySelector('.ag-post-metabox [name="ag_settings[bypass]"]'),o=document.querySelector('.ag-post-metabox [name="ag_settings[restrict]"]');s.value=r[t.target.value],e.dataset.age=r[t.target.value];var c=e.dataset,l=c.age,d=c.textRestrict;o&&!o.checked||n&&n.checked||(a.textContent=String.format(d,l))}}))}}}))},4144:()=>{},8058:()=>{},7617:()=>{},2594:()=>{}},a={};function n(e){var o=a[e];if(void 0!==o)return o.exports;var r=a[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,a,o,r)=>{if(!a){var c=1/0;for(d=0;d<e.length;d++){for(var[a,o,r]=e[d],s=!0,i=0;i<a.length;i++)(!1&r||c>=r)&&Object.keys(n.O).every((e=>n.O[e](a[i])))?a.splice(i--,1):(s=!1,r<c&&(c=r));if(s){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,o,r]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={761:0,86:0,58:0,308:0,101:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var o,r,[c,s,i]=a,l=0;if(c.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(i)var d=i(n)}for(t&&t(a);l<c.length;l++)r=c[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},a=self.webpackChunkage_gate=self.webpackChunkage_gate||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),n.O(void 0,[86,58,308,101],(()=>n(52))),n.O(void 0,[86,58,308,101],(()=>n(4144))),n.O(void 0,[86,58,308,101],(()=>n(8058))),n.O(void 0,[86,58,308,101],(()=>n(7617)));var o=n.O(void 0,[86,58,308,101],(()=>n(2594)));o=n.O(o)})();