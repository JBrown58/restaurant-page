(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),i=n.n(r),o=n(645),a=n.n(o),d=n(667),c=n.n(d),l=new URL(n(14),n.b),s=a()(i()),u=c()(l);s.push([e.id,"@font-face {\n  font-family: OpenSans-Regular;\n  src: url("+u+") format('truetype');\n}\n\nbody {\n  margin: 0;\n  font-family: OpenSans-Regular;\n  background-image: linear-gradient(\n    to right,\n    #1e3c72,\n    #2a5298,\n    #2e7d9e,\n    #289f9e,\n    #23a99f\n  );\n}\n\n.header {\n  display: flex;\n  justify-content: space-evenly;\n  color: red;\n  height: 25px;\n  margin-bottom: 30px;\n  margin-top: 30px;\n}\n\n#img {\n  width: 100%;\n  height: auto;\n}\n\n.grid-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  height: 20rem;\n  padding: 75px;\n  gap: 50px;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  height: 400px;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  align-content: center;\n  align-items: flex-end;\n}\n\nform div input {\n  margin-left: 20px;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  flex-wrap: nowrap;\n}\n\n#text-div {\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n}\n\np.para {\n  width: 53rem;\n  margin-top: 150px;\n  font-size: 24px;\n  color: white;\n  font-weight: 300;\n}\n\n#img2,\n#img3,\n#img4,\n#img5 {\n  width: 90%;\n  height: 60%;\n}\n\n.contact-div {\n  text-align: center;\n}\n\nbutton {\n  font-size: 16px;\n  font-weight: bold;\n  padding-right: 20px;\n  padding-left: 20px;\n  border: none;\n  border-radius: 4px;\n  color: #fff;\n  background-color: #ff0000;\n  cursor: pointer;\n  transition: background-color 0.3s, transform 0.3s;\n}\n\nbutton:hover {\n  background-color: #0056b3;\n}\n\nbutton:active {\n  transform: scale(0.95);\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.title-div {\n  font-size: 32px;\n  font-weight: bolder;\n  text-align: center;\n  color: #22ff00;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  line-height: 1.2;\n}\n",""]);const p=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&a[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),t.push(s))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],d=0;d<e.length;d++){var c=e[d],l=r.base?c[0]+r.base:c[0],s=o[l]||0,u="".concat(l," ").concat(s);o[l]=s+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=i(m,r);r.byIndex=d,t.splice(d,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var d=n(o[a]);t[d].references--}for(var c=r(e,i),l=0;l<o.length;l++){var s=n(o[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},14:(e,t,n)=>{e.exports=n.p+"77c09223204154ae8d43.ttf"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/",n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{function e(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),i=document.createElement("p"),o=document.createElement("div"),a=document.createElement("button"),d=document.createElement("button"),c=document.createElement("button");e.appendChild(t),e.appendChild(r),e.appendChild(n),t.appendChild(o),t.appendChild(a),t.appendChild(d),t.appendChild(c),n.appendChild(i),o.classList="title-div",r.classList="img-div",i.classList="para",t.classList="header",a.setAttribute("id","btn1"),d.setAttribute("id","btn2"),c.setAttribute("id","btn3"),n.setAttribute("id","text-div"),o.innerHTML="Really Great Restaurant",a.innerHTML="Home",d.innerHTML="Menu",c.innerHTML="Contact",i.innerHTML="We cook up bright, bold Korean dishes that are totally unique in Vancouver, you won't find our flavors and colors anywhere else. And we serve it all hot, fast and in a format that’s affordable and comfortable for urban Vancouverites to enjoy.";const l=new Image;l.src="./images/bacon.jpeg",l.setAttribute("id","img"),r.appendChild(l),a.disabled=!0}var t=n(379),r=n.n(t),i=n(795),o=n.n(i),a=n(569),d=n.n(a),c=n(565),l=n.n(c),s=n(216),u=n.n(s),p=n(589),m=n.n(p),f=n(28),h={};function g(e){e.forEach((e=>{e.disabled=!1}))}function b(e){let t;t=e.currentTarget!==btn1?document.body.querySelectorAll(":not(.header):not(#content):not(.title-div):not(button)"):document.body.querySelectorAll(":not(#content"),t.forEach((e=>{e.outerHTML=""}))}function v(t){g(document.querySelectorAll("button")),t.currentTarget.disabled=!0,b(t),e(),E()}function y(e){g(document.querySelectorAll("button")),e.currentTarget.disabled=!0,b(e),function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div");e.appendChild(t).classList="grid-container",t.appendChild(n).classList="grid-item",t.appendChild(r).classList="grid-item",t.appendChild(i).classList="grid-item",t.appendChild(o).classList="grid-item";const a=new Image;a.src=mushroomImage,a.setAttribute("id","img2"),n.appendChild(a);const d=new Image;d.src=pepperoniImage,d.setAttribute("id","img3"),r.appendChild(d);const c=new Image;c.src=cheeseOnionImage,c.setAttribute("id","img4"),i.appendChild(c);const l=new Image;l.src=onionsImage,l.setAttribute("id","img5"),o.appendChild(l)}(),E()}function x(e){g(document.querySelectorAll("button")),e.currentTarget.disabled=!0,b(e),function(){const e=document.getElementById("content"),t=document.createElement("form"),n=document.createElement("div"),r=document.createElement("input"),i=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),d=document.createElement("div"),c=document.createElement("div"),l=document.createElement("label"),s=document.createElement("input"),u=document.createElement("label"),p=document.createElement("input"),m=document.createElement("label"),f=document.createElement("input"),h=document.createElement("label");t.classList="form",n.classList="form-container",c.classList="contact-div",r.setAttribute("type","text"),r.setAttribute("id","firstname"),r.setAttribute("name","fname"),l.setAttribute("for","fname"),s.setAttribute("type","text"),s.setAttribute("id","lastname"),s.setAttribute("name","lname"),u.setAttribute("for","lname"),p.setAttribute("type","email"),p.setAttribute("id","mail"),p.setAttribute("name","email"),m.setAttribute("for","email"),f.setAttribute("type","tel"),f.setAttribute("id","telephone"),f.setAttribute("name","tele"),h.setAttribute("for","tele"),l.innerHTML="First Name",u.innerHTML="Last Name",m.innerHTML="Email Address",h.innerHTML="Telephone #",c.innerHTML="Contact Us",i.appendChild(l),i.appendChild(r),o.appendChild(u),o.appendChild(s),a.appendChild(m),a.appendChild(p),d.appendChild(h),d.appendChild(f),t.appendChild(i),t.appendChild(o),t.appendChild(a),t.appendChild(d),r.parentNode.insertBefore(l,r),s.parentNode.insertBefore(u,s),p.parentNode.insertBefore(m,p),p.parentNode.insertBefore(m,p),f.parentNode.insertBefore(h,f),n.appendChild(c),e.appendChild(n),n.appendChild(t)}(),E()}function E(){const e=document.getElementById("btn1"),t=document.getElementById("btn2"),n=document.getElementById("btn3");e.addEventListener("click",v),t.addEventListener("click",y),n.addEventListener("click",x)}h.styleTagTransform=m(),h.setAttributes=l(),h.insert=d().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,e(),E()})()})();