(function(e){function t(t){for(var i,o,r=t[0],c=t[1],l=t[2],u=0,h=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(h.length)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},s={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0051":function(e,t,n){"use strict";n("82ec")},"0ef3":function(e,t,n){},"245c":function(e,t,n){},"38f3":function(e,t,n){"use strict";n("0ef3")},6600:function(e,t,n){"use strict";n("245c")},"82ec":function(e,t,n){},ba8c:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"w-screen h-screen relative bg-gray-200",attrs:{id:"app"}},[n("canvas",{ref:"canvas",staticClass:"absolute inset-0",attrs:{width:"0",height:"0"},on:{mousedown:e.onMouseDown,mouseup:e.onMouseUp,mousemove:e.onMouseMove,mouseleave:e.onMouseLeave,mouseenter:e.onMouseEnter}}),n("Header",{attrs:{isDisabledSave:e.isDisabledSave,isDisabledUndo:e.isDisabledUndo,isDisabledRedo:e.isDisabledRedo},on:{save:e.saveHandler,clear:e.clearHandler,undo:e.undoHandler,redo:e.redoHandler}}),n("Pointer",e._b({attrs:{"is-hidden":e.isHiddenPointer}},"Pointer",e.pointer,!1))],1)},a=[],o=n("d4ec"),r=n("bee2"),c=n("262e"),l=n("2caf"),d=n("9ab4"),u=n("1b40"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header relative w-screen h-20 flex justify-center items-center bg-white transition-transform",class:e.collapseClass},[e._l(e.list,(function(t){return n("Item",e._g(e._b({key:t.event,attrs:{isDisabledSave:e.isDisabledSave,isDisabledUndo:e.isDisabledUndo,isDisabledRedo:e.isDisabledRedo}},"Item",t,!1),e.$listeners))})),n("div",{staticClass:"header-collapse absolute left-1/2 top-full w-12 h-12 flex justify-center items-center bg-white rounded-full transition cursor-pointer",on:{click:e.collapseHandler}},[n("i",{staticClass:"header-collapse-icon fas fa-chevron-up transition-transform",class:e.collapseClass})])],2)},b=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-item flex items-center mr-8 transition-opacity cursor-pointer hover:opacity-40",class:{disabled:!!e.disabledKey&&this[e.disabledKey]},on:{click:function(t){return e.$emit(e.event)}}},[n("i",{staticClass:"fas mr-2",class:["fa-"+e.icon,e.size]}),n("p",{staticClass:"uppercase"},[e._v(e._s(e.label))])])},p=[],f=function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(u["c"]);Object(d["a"])([Object(u["b"])()],f.prototype,"label",void 0),Object(d["a"])([Object(u["b"])()],f.prototype,"icon",void 0),Object(d["a"])([Object(u["b"])()],f.prototype,"size",void 0),Object(d["a"])([Object(u["b"])()],f.prototype,"event",void 0),Object(d["a"])([Object(u["b"])()],f.prototype,"disabledKey",void 0),Object(d["a"])([Object(u["b"])()],f.prototype,"isDisabledSave",void 0),Object(d["a"])([Object(u["b"])()],f.prototype,"isDisabledUndo",void 0),Object(d["a"])([Object(u["b"])()],f.prototype,"isDisabledRedo",void 0),f=Object(d["a"])([u["a"]],f);var y=f,j=y,O=(n("38f3"),n("2877")),g=Object(O["a"])(j,v,p,!1,null,"291f9294",null),x=g.exports,w=[{icon:"save",label:"save",event:"save",size:"text-2xl",disabledKey:"isDisabledSave"},{icon:"expand",label:"clear all",event:"clear",size:"text-2xl",disabledKey:"isDisabledSave"},{icon:"undo",label:"undo",event:"undo",size:"text-xl",disabledKey:"isDisabledUndo"},{icon:"redo",label:"redo",event:"redo",size:"text-xl",disabledKey:"isDisabledRedo"}],m=function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.isCollapse=!1,e}return Object(r["a"])(n,[{key:"collapseClass",get:function(){return{collapse:this.isCollapse}}},{key:"collapseHandler",value:function(){this.isCollapse=!this.isCollapse}}]),n}(u["c"]);Object(d["a"])([Object(u["b"])()],m.prototype,"isDisabledSave",void 0),Object(d["a"])([Object(u["b"])()],m.prototype,"isDisabledUndo",void 0),Object(d["a"])([Object(u["b"])()],m.prototype,"isDisabledRedo",void 0),m=Object(d["a"])([Object(u["a"])({components:{Item:x},data:function(){return{list:w}}})],m);var D=m,H=D,k=(n("6600"),Object(O["a"])(H,h,b,!1,null,"144a6d83",null)),C=k.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"pointer",staticClass:"pointer absolute rounded-full bg-black transition pointer-events-none",class:{hidden:e.isHidden},style:e.styleHandler})},_=[],P=function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.clientWidth=0,e.clientHeight=0,e}return Object(r["a"])(n,[{key:"styleHandler",get:function(){return{left:"".concat(this.x-this.clientWidth/2,"px"),top:"".concat(this.y-this.clientHeight/2,"px")}}},{key:"mounted",value:function(){var e=this.$refs.pointer;this.clientWidth=e.clientWidth,this.clientHeight=e.clientHeight}}]),n}(u["c"]);Object(d["a"])([Object(u["b"])()],P.prototype,"x",void 0),Object(d["a"])([Object(u["b"])()],P.prototype,"y",void 0),Object(d["a"])([Object(u["b"])()],P.prototype,"isHidden",void 0),P=Object(d["a"])([u["a"]],P);var S=P,R=S,U=(n("0051"),Object(O["a"])(R,M,_,!1,null,"99d21186",null)),$=U.exports,E=function(e){Object(c["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.isMouseDown=!1,e.x=0,e.y=0,e.base64="",e.current=0,e.history=[],e.isHiddenPointer=!1,e.pointer={x:0,y:0},e.canvas=null,e.context=null,e}return Object(r["a"])(n,[{key:"isDisabledSave",get:function(){return 0===this.history.length}},{key:"isDisabledUndo",get:function(){return 0===this.current}},{key:"isDisabledRedo",get:function(){return this.current===this.history.length}},{key:"mounted",value:function(){this.init()}},{key:"init",value:function(){this.canvas=this.$refs.canvas,this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.context=this.canvas.getContext("2d"),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.lineCap="round",this.context.strokeStyle="#000000",this.context.lineWidth=16}},{key:"saveHandler",value:function(){var e=document.createElement("a");e.href=this.base64,e.download="file.png",document.body.appendChild(e),e.click(),e.remove()}},{key:"clearHandler",value:function(){this.context&&this.canvas&&(this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.current=0,this.history=[])}},{key:"undoHandler",value:function(){this.isDisabledUndo||this.changeHistoryHandler(-1)}},{key:"redoHandler",value:function(){this.isDisabledRedo||this.changeHistoryHandler(1)}},{key:"changeHistoryHandler",value:function(e){this.context&&this.canvas&&(this.current+=e,this.context.clearRect(0,0,this.canvas.width,this.canvas.height),0!==this.current&&this.drawImageHandler(this.history[this.current-1]))}},{key:"drawCanvasHandler",value:function(e,t){this.context&&(this.context.beginPath(),this.context.moveTo(this.x,this.y),this.context.lineTo(e,t),this.context.stroke(),this.x=e,this.y=t)}},{key:"drawImageHandler",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=new Image;s.src=e,s.onload=function(){n=window.innerWidth/2-s.width/2,i=window.innerHeight/2-s.height/2,t.context.drawImage(s,n,i),t.base64=t.canvas.toDataURL()}}},{key:"onMouseDown",value:function(e){var t=e.clientX,n=e.clientY;this.isMouseDown=!0,this.x=t,this.y=n}},{key:"onMouseUp",value:function(){this.isMouseDown=!1,this.base64=this.canvas.toDataURL(),this.history.push(this.base64),this.current=this.history.length}},{key:"onMouseMove",value:function(e){var t=e.clientX,n=e.clientY;this.$set(this.pointer,"x",t),this.$set(this.pointer,"y",n),this.isMouseDown&&this.drawCanvasHandler(t,n)}},{key:"onMouseLeave",value:function(){this.isMouseDown=!1,this.isHiddenPointer=!0}},{key:"onMouseEnter",value:function(){this.isHiddenPointer=!1}}]),n}(u["c"]);E=Object(d["a"])([Object(u["a"])({components:{Header:C,Pointer:$}})],E);var I=E,K=I,W=Object(O["a"])(K,s,a,!1,null,null,null),z=W.exports;n("ba8c");i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(z)}}).$mount("#app")}});
//# sourceMappingURL=app.3da627ac.js.map