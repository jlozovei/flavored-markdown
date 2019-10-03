(function(t){function e(e){for(var n,i,s=e[0],u=e[1],l=e[2],d=0,f=[];d<s.length;d++)i=s[d],a[i]&&f.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"1a9b":function(t,e,r){"use strict";var n=r("58f1"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Page",[r("Header"),r("Editor")],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[t._t("default")],2)},s=[],u={name:"Page"},l=u,c=r("2877"),d=Object(c["a"])(l,i,s,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page__editor editor"},[r("Form"),r("Result")],1)},v=[],m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor__column form-wrapper"},[r("form",{staticClass:"form"},[r("fieldset",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],attrs:{autofocus:""},domProps:{value:t.markdown},on:{keyup:t.keyup,input:function(e){e.target.composing||(t.markdown=e.target.value)}}})])])])},h=[],w=r("339e"),_=r.n(w),b=r("edbf"),k=r.n(b),g={name:"Form",data:function(){return{markdown:""}},mounted:function(){this.previousStoredMarkdown?this.$data.markdown=this.previousStoredMarkdown:this.initialState()},methods:{initialState:function(){var t="# Start typing here :smile:";this.$data.markdown=t,this.$store.dispatch({type:"storeMarkdown",value:t}),this.parse(t)},keyup:function(){var t=this.rawMarkdown;this.parse(t),this.$store.dispatch({type:"storeMarkdown",value:t})},parse:function(t){var e=new k.a.EmojiConvertor,r=e.replace_colons(t),n=new _.a.Converter({simplifiedAutoLink:!0,tasklists:!0,tables:!0,strikethrough:!0}),a=n.makeHtml(r);this.$store.dispatch({type:"storeHTML",value:a})}},computed:{rawMarkdown:function(){return this.$data.markdown},previousStoredMarkdown:function(){return this.$store.getters["markdown"]}}},y=g,M=(r("bb79"),Object(c["a"])(y,m,h,!1,null,null,null)),j=M.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor__column result-wrapper"},[r("div",{staticClass:"markdown-flavored markdown-flavored--github",domProps:{innerHTML:t._s(t.parsedHTML)}})])},$=[],x={name:"Result",computed:{parsedHTML:function(){return this.$store.getters.html}}},C=x,S=(r("1a9b"),Object(c["a"])(C,O,$,!1,null,null,null)),H=S.exports,P={name:"Editor",components:{Form:j,Result:H}},T=P,E=(r("903d"),Object(c["a"])(T,p,v,!1,null,null,null)),L=E.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"page__header"},[r("h1",{staticClass:"header__title"},[t._v("Flavored Markdown")]),r("div",{staticClass:"header__menu"}),r("div",{staticClass:"header__disclaimer"},[t._v("\n    Crafted with "),r("span",{staticClass:"heart",attrs:{"aria-label":"love"}},[t._v("♥")]),t._v(" by\n    "),r("a",{attrs:{href:"https://jlozovei.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("jlozovei")]),t._v("\n    | © "+t._s(t.currentYear)+"\n  ")])])},R=[],Y={name:"Header",data:function(){return{currentYear:(new Date).getFullYear()}}},z=Y,J=(r("9757"),Object(c["a"])(z,F,R,!1,null,null,null)),A=J.exports,D={name:"app",components:{Page:f,Header:A,Editor:L}},N=D,q=(r("034f"),Object(c["a"])(N,a,o,!1,null,null,null)),B=q.exports,G=r("2f62"),I=r("bfa9"),K=new I["a"]({key:"flavored-md",storage:window.localStorage});n["a"].use(G["a"]);var Q=new G["a"].Store({plugins:[K.plugin],state:{editor:{markdown:"",html:""},flavor:"github"},mutations:{setMarkdown:function(t,e){t.editor.markdown=e},setHTML:function(t,e){t.editor.html=e},setFlavor:function(t,e){t.flavor=e}},actions:{storeMarkdown:function(t,e){var r=t.commit;r("setMarkdown",e.value)},storeHTML:function(t,e){var r=t.commit;r("setHTML",e.value)},storeFlavor:function(t,e){var r=t.commit;r("setHTML",e.value)}},getters:{editor:function(t){return t.editor},markdown:function(t){return t.editor.markdown},html:function(t){return t.editor.html},flavor:function(t){return t.flavor}}});n["a"].config.productionTip=!1,new n["a"]({store:Q,render:function(t){return t(B)}}).$mount("#app")},"58f1":function(t,e,r){},"64a9":function(t,e,r){},"903d":function(t,e,r){"use strict";var n=r("aa6f"),a=r.n(n);a.a},9757:function(t,e,r){"use strict";var n=r("fddd"),a=r.n(n);a.a},aa6f:function(t,e,r){},bb79:function(t,e,r){"use strict";var n=r("e41c"),a=r.n(n);a.a},e41c:function(t,e,r){},fddd:function(t,e,r){}});
//# sourceMappingURL=app.7d69f259.js.map