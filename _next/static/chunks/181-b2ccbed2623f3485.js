(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[181],{7782:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return U},useBptContext:function(){return J}});var r=t(230),o=t(7437),i=t(1396),l=t.n(i),c=t(802),s=t(2410),u=t(2265);let a="1rem",d="0.8rem",f="2.5rem";function h(){let n=(0,r._)(["\n  text-decoration: none;\n  color: black;\n  width: 100%;\n"]);return h=function(){return n},n}function m(){let n=(0,r._)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  font-size: ",";\n  border: none;\n  outline: none;\n  background-color: transparent;\n  min-width: 90%;\n  width: 100%;\n"]);return m=function(){return n},n}function p(){let n=(0,r._)(["\n  /* width: 1px; */\n\n  /* height: ","; */\n  width: 1rem;\n  height: 100%;\n  background-color: #515151;\n  /* margin-left: 0.3rem;\n  margin-right: 1.7rem; */\n"]);return p=function(){return n},n}function g(){let n=(0,r._)(["\n  border: none;\n  outline: none;\n  background-color: transparent;\n  width: 10%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return g=function(){return n},n}function x(){let n=(0,r._)(["\n  display: flex;\n  align-items: center;\n  background-color: transparent;\n  height: ",";\n  width: 100%;\n  justify-content: space-between;\n  border: none;\n  outline: none;\n"]);return x=function(){return n},n}let v=(0,c.ZP)(l()).withConfig({componentId:"sc-f95b2fb4-0"})(h()),b=c.ZP.button.withConfig({componentId:"sc-f95b2fb4-1"})(m(),d),y=c.ZP.div.withConfig({componentId:"sc-f95b2fb4-2"})(p(),f),w=c.ZP.button.withConfig({componentId:"sc-f95b2fb4-3"})(g()),j=c.ZP.div.withConfig({componentId:"sc-f95b2fb4-4"})(x(),f),C="./posts/blog";function k(){let n=(0,r._)([""]);return k=function(){return n},n}function z(){let n=(0,r._)(["\n  color: black;\n  font-size: ",";\n  font-weight: normal;\n  list-style: none;\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 0.5s ease-in-out;\n"]);return z=function(){return n},n}let I=c.ZP.div.withConfig({componentId:"sc-89b49446-0"})(k()),_=c.ZP.ul.withConfig({componentId:"sc-89b49446-1"})(z(),d);var P=n=>{let{name:e,path:t,branches:r}=n,i=(0,u.useRef)(null),[l,c]=(0,u.useState)(!1),a=J(),d=()=>{c(n=>!n)};return(0,u.useEffect)(()=>{let n=i.current;l?(n.style.maxHeight=n.scrollHeight+"px",setTimeout(()=>{n.style.maxHeight="fit-content"},500)):(n.style.maxHeight=n.scrollHeight+"px",setTimeout(()=>{n.style.maxHeight=0},5))},[l]),(0,o.jsxs)(I,{children:[(0,o.jsxs)(j,{children:[(0,o.jsx)(v,{href:"/blog".concat(t.slice(C.length),"/index"),children:(0,o.jsxs)(b,{onClick:n=>{d(),a(n)},children:[Array.from({length:t.slice(C.length).split("/").length-2}).map((n,e)=>(0,o.jsx)(y,{},e)),e]})}),(0,o.jsx)(w,{onClick:d,children:l?(0,o.jsx)(s.OId,{size:15}):(0,o.jsx)(s.hjJ,{size:15})})]}),(0,o.jsx)(_,{ref:i,children:r})]})};function O(){let n=(0,r._)(["\n  /* & > ul {\n    font-size: ",";\n    font-weight: ",";\n    list-style: none;\n  } */\n"]);return O=function(){return n},n}function E(){let n=(0,r._)(["\n  color: black;\n  font-size: ",";\n  font-weight: normal;\n  list-style: none;\n  overflow: hidden;\n  padding: 0;\n  /* max-height: 0; */\n  /* transition: max-height 0.5s ease-in-out; */\n"]);return E=function(){return n},n}t(3198),t(9582),t(8672);let Z=c.zo.div(O(),a,"600"),T=c.zo.ul(E(),d);var S=n=>{let{name:e,path:t,branches:r}=n,i=J();return(0,o.jsxs)(Z,{children:["root"!==e?(0,o.jsx)(j,{children:(0,o.jsx)(v,{href:"/blog".concat(t.slice(C.length),"/index"),children:(0,o.jsx)(b,{onClick:i,style:{fontSize:a,fontWeight:"600"},children:e})})}):null,(0,o.jsx)(T,{children:r})]})};function N(){let n=(0,r._)(["\n  display: flex;\n  align-items: center;\n  font-size: ",";\n  font-weight: normal;\n  height: ",";\n"]);return N=function(){return n},n}let H=c.zo.li(N(),d,f);var M=n=>{let{tree:e}=n,t=J();if("index.mdx"===e.name)return null;let r="/blog".concat(e.path.slice(0,e.path.lastIndexOf(".")).slice(C.length));return(0,o.jsx)(H,{children:(0,o.jsx)(v,{href:r,children:(0,o.jsxs)(b,{onClick:t,children:[Array.from({length:e.path.slice(C.length).split("/").length-2}).map((n,e)=>(0,o.jsx)(y,{},e)),e.name.slice(0,e.name.lastIndexOf("."))]})})})};function A(){let n=(0,r._)(["\n  position: sticky;\n  width: 18rem;\n  top: 9rem;\n  right: 0;\n  overflow: hidden;\n"]);return A=function(){return n},n}let B=c.ZP.div.withConfig({componentId:"sc-7539e60c-0"})(A()),R=n=>{let{tree:e}=n,t=n=>{var e;return null==n?void 0:null===(e=n.children)||void 0===e?void 0:e.map(n=>(0,o.jsx)(L,{tree:n},n.name))};return"category"===e.type?(0,o.jsx)(S,{name:e.name,path:e.path,branches:t(e)}):(0,o.jsx)(P,{name:e.name,path:e.path,branches:t(e)})},L=n=>{let{tree:e}=n;return"post"===e.type?(0,o.jsx)(M,{tree:e}):(0,o.jsx)(R,{tree:e})},W=(0,u.createContext)(),J=()=>(0,u.useContext)(W);var U=n=>{let{tree:e}=n,[t,r]=(0,u.useState)(null);return(0,u.useEffect)(()=>{t&&(t.style.color="#6fadc2")},[t]),(0,o.jsx)(W.Provider,{value:n=>{let{target:e}=n;null!==t&&t!==e&&(t.style.color="black"),r(e)},children:(0,o.jsx)(B,{children:(0,o.jsx)(L,{tree:e})})})}},8926:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return v}});var r=t(230),o=t(7437),i=t(7381),l=t(3198),c=t(802);let s="#78b7df";var u=t(2265);function a(){let n=(0,r._)(["\n  position: sticky;\n  top: 9rem;\n  display: flex;\n  flex-direction: column;\n"]);return a=function(){return n},n}function d(){let n=(0,r._)(["\n  width: 0.5rem;\n  height: 100%;\n  /* background-color: ","; */\n  /* margin-right: 0.7rem; */\n"]);return d=function(){return n},n}function f(){let n=(0,r._)(["\n  display: flex;\n  height: 100%;\n  height: 1.5rem;\n  display: flex;\n  font-size: 0.8rem;\n  overflow: hidden;\n"]);return f=function(){return n},n}function h(){let n=(0,r._)(["\n  text-decoration: none;\n  color: ",";\n  cursor: pointer;\n  &:hover {\n    color: ",";\n  }\n"]);return h=function(){return n},n}let m=c.zo.div(a()),p=c.zo.div(d(),s),g=c.zo.div(f()),x=(0,c.zo)(i.rU)(h(),n=>{let{color:e}=n;return e},s);var v=()=>{let n=(0,l.v9)(n=>n.postIndexTableMaker.postIndexTable),[e,t]=(0,u.useState)(null);return(0,u.useEffect)(()=>{let e=()=>{if(0===n.length)return;let e=n.reduce((n,e)=>{let t=e.ref.getBoundingClientRect().y,r=n.ref.getBoundingClientRect().y;return t<=50&&50-t<50-r?e:n});t(e.ref.innerText)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[n]),(0,o.jsx)(m,{children:n.map((n,t)=>{let r=n.ref.innerText,i=r===e?s:"#828282";return(0,o.jsx)(x,{to:"".concat(r),activeClass:"active",spy:!0,smooth:!0,color:i,children:(0,o.jsxs)(g,{children:[Array.from({length:n.level}).map((n,e)=>(0,o.jsx)(p,{},e)),r]})},t)})})}},2336:function(n,e,t){"use strict";t.d(e,{IH:function(){return l},mc:function(){return c}});var r=t(64);let o={postIndexTable:[],currentContent:null},i=(0,r.oM)({name:"postIndexTableMaker",initialState:o,reducers:{add:(n,e)=>{let t=e.payload;n.postIndexTable.includes(t)||n.postIndexTable.push(e.payload)},reset:()=>o,setCurrentContent:(n,e)=>{n.currentContent=e.payload}}}),{add:l,reset:c,setCurrentContent:s}=i.actions;e.ZP=i.reducer},8672:function(n,e,t){"use strict";var r=t(64);let o=(0,r.oM)({name:"postSelector",initialState:{selectedPost:null},reducers:{select:(n,e)=>{n.selectedPost=e.payload}}}),{select:i}=o.actions;e.Z=o.reducer},9582:function(n,e,t){"use strict";var r=t(64),o=t(8672),i=t(2336);let l=(0,r.xC)({reducer:{postSelector:o.Z,postIndexTableMaker:i.ZP},middleware:n=>n({serializableCheck:!1}),devTools:!1,preloadedState:{}});e.Z=l},1396:function(n,e,t){n.exports=t(6685)},1172:function(n,e,t){"use strict";t.d(e,{w_:function(){return s}});var r=t(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),l=function(){return(l=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)},c=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&0>e.indexOf(r)&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)0>e.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]]);return t};function s(n){return function(e){return r.createElement(u,l({attr:l({},n.attr)},e),function n(e){return e&&e.map(function(e,t){return r.createElement(e.tag,l({key:t},e.attr),n(e.child))})}(n.child))}}function u(n){var e=function(e){var t,o=n.attr,i=n.size,s=n.title,u=c(n,["attr","size","title"]),a=i||e.size||"1em";return e.className&&(t=e.className),n.className&&(t=(t?t+" ":"")+n.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,u,{className:t,style:l(l({color:n.color||e.color},e.style),n.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),n.children)};return void 0!==i?r.createElement(i.Consumer,null,function(n){return e(n)}):e(o)}}}]);