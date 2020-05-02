(function(e){function t(t){for(var n,u,i=t[0],s=t[1],l=t[2],d=0,f=[];d<i.length;d++)u=i[d],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&f.push(a[u][0]),a[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=s;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"1a9b":function(e,t,r){"use strict";var n=r("a077"),a=r.n(n);a.a},2791:function(e,t,r){},"2ea6":function(e,t,r){"use strict";var n=r("caf9"),a=r.n(n);a.a},"4d04":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Page",[r("Header"),r("Editor")],1)],1)},o=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page"},[e._t("default")],2)},i=[],s={name:"Page"},l=s,c=r("2877"),d=Object(c["a"])(l,u,i,!1,null,null,null),f=d.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page__editor editor"},[r("Form"),r("Result")],1)},p=[],m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"editor__column form-wrapper"},[r("form",{staticClass:"form"},[r("fieldset",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.markdown,expression:"markdown"}],attrs:{autofocus:""},domProps:{value:e.markdown},on:{keyup:e.keyup,input:function(t){t.target.composing||(e.markdown=t.target.value)}}})])])])},h=[],w=r("0e54"),_=r.n(w),b=r("edbf"),g=r.n(b),k={name:"Form",data:function(){return{markdown:""}},mounted:function(){this.previousStoredMarkdown?this.$data.markdown=this.previousStoredMarkdown:this.initialState()},methods:{initialState:function(){var e="# Start typing here :smile:";this.$data.markdown=e,this.$store.dispatch({type:"storeMarkdown",value:e}),this.parse(e)},keyup:function(){var e=this.rawMarkdown;this.parse(e),this.$store.dispatch({type:"storeMarkdown",value:e})},parse:function(e){var t=new g.a.EmojiConvertor,r=t.replace_colons(e),n=_()(r);return this.$store.dispatch({type:"storeHTML",value:n}),n}},computed:{rawMarkdown:function(){return this.$data.markdown},previousStoredMarkdown:function(){return this.$store.getters["markdown"]}}},y=k,M=(r("bb79"),Object(c["a"])(y,m,h,!1,null,null,null)),$=M.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"editor__column result-wrapper"},[r("div",{class:"markdown-flavored markdown-flavored--"+e.currentFlavor,domProps:{innerHTML:e._s(e.parsedHTML)}})])},O=[],F={name:"Result",computed:{parsedHTML:function(){return this.$store.getters.html},currentFlavor:function(){return this.$store.getters.flavor}}},S=F,x=(r("1a9b"),Object(c["a"])(S,j,O,!1,null,null,null)),P=x.exports,C={name:"Editor",components:{Form:$,Result:P}},E=C,H=(r("903d"),Object(c["a"])(E,v,p,!1,null,null,null)),T=H.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"page__header"},[r("h1",{staticClass:"header__title"},[e._v("Flavored Markdown")]),r("div",{staticClass:"header__menu"},[r("Menu")],1),r("div",{staticClass:"header__disclaimer"},[e._v(" Crafted with "),r("span",{staticClass:"heart",attrs:{"aria-label":"love"}},[e._v("♥")]),e._v(" by "),r("a",{attrs:{href:"https://jlozovei.dev",target:"_blank",rel:"noopener noreferrer"}},[e._v("jlozovei")]),e._v(" | © "+e._s(e.currentYear)+" ")])])},z=[],Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",[r("label",{attrs:{for:"md-style"}},[e._v("Style:")]),r("select",{attrs:{id:"md-style"},on:{change:e.setFlavor}},e._l(e.availableFlavors,(function(t){return r("option",{key:t.value,domProps:{value:t.value,selected:t.value===e.previousStoredFlavor}},[e._v(" "+e._s(t.name)+" ")])})),0)])},R=[],G={name:"Menu",data:function(){return{flavors:[{name:"Azure",value:"azure"},{name:"Bitbucket",value:"bitbucket"},{name:"GitHub",value:"github"},{name:"GitLab",value:"gitlab"},{name:"npm",value:"npm"},{name:"Yarn",value:"yarn"}]}},methods:{setFlavor:function(e){var t=e.target.value;this.$store.dispatch({type:"storeFlavor",value:t})}},computed:{availableFlavors:function(){return this.$data.flavors},previousStoredFlavor:function(){return this.$store.getters.flavor}}},J=G,A=(r("2ea6"),Object(c["a"])(J,Y,R,!1,null,"604e9a52",null)),B=A.exports,D={name:"Header",components:{Menu:B},data:function(){return{currentYear:(new Date).getFullYear()}}},N=D,q=(r("9757"),Object(c["a"])(N,L,z,!1,null,null,null)),I=q.exports,K={name:"app",components:{Page:f,Header:I,Editor:T}},Q=K,U=(r("034f"),Object(c["a"])(Q,a,o,!1,null,null,null)),V=U.exports,W=r("2f62"),X=r("bfa9"),Z=new X["a"]({key:"flavored-md",storage:window.localStorage});n["a"].use(W["a"]);var ee=new W["a"].Store({plugins:[Z.plugin],state:{editor:{markdown:"",html:""},flavor:"github"},mutations:{setMarkdown:function(e,t){e.editor.markdown=t},setHTML:function(e,t){e.editor.html=t},setFlavor:function(e,t){e.flavor=t}},actions:{storeMarkdown:function(e,t){var r=e.commit;r("setMarkdown",t.value)},storeHTML:function(e,t){var r=e.commit;r("setHTML",t.value)},storeFlavor:function(e,t){var r=e.commit;r("setFlavor",t.value)}},getters:{editor:function(e){return e.editor},markdown:function(e){return e.editor.markdown},html:function(e){return e.editor.html},flavor:function(e){return e.flavor}}});n["a"].config.productionTip=!1,new n["a"]({store:ee,render:function(e){return e(V)}}).$mount("#app")},"85ec":function(e,t,r){},"903d":function(e,t,r){"use strict";var n=r("9de3"),a=r.n(n);a.a},9757:function(e,t,r){"use strict";var n=r("4d04"),a=r.n(n);a.a},"9de3":function(e,t,r){},a077:function(e,t,r){},bb79:function(e,t,r){"use strict";var n=r("2791"),a=r.n(n);a.a},caf9:function(e,t,r){}});
//# sourceMappingURL=app.a95093b7.js.map