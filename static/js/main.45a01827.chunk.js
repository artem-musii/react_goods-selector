(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),o=c(4),a=c(5),r=c(8),d=c(7),l=c(1),i=(c(13),c(14),c(6)),u=c.n(i),b=c(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(r.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.addToSelected=function(t){e.setState({selectedGood:t})},e.removeFromSelected=function(){e.setState({selectedGood:""})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("main",{className:"section container",children:[this.state.selectedGood?Object(b.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(this.state.selectedGood," is selected"),Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return e.removeFromSelected()}})]}):Object(b.jsx)("h1",{className:"title",children:"No goods selected"}),Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:j.map((function(t){return Object(b.jsxs)("tr",{"data-cy":"Good",className:u()({"has-background-success-light":t===e.state.selectedGood}),children:[Object(b.jsx)("td",{children:e.state.selectedGood===t?Object(b.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return e.removeFromSelected()},children:"-"}):Object(b.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.addToSelected(t)},children:"+"})}),Object(b.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})}}]),c}(l.Component);n.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.45a01827.chunk.js.map