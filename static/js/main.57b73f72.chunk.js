(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(3),c=n.n(s),o=(n(12),n(4)),i=n(5),h=n(7),l=n(6),u=(n(13),n(14),n(0));var d=function(e){return Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)("img",{alt:"star war",src:"https://robohash.org/".concat(e.id,"?set=set2&size=180x180")}),Object(u.jsx)("h3",{children:e.star.name}),Object(u.jsx)("h4",{children:e.star.gender})]},e.star.name)},j=(n(16),function(e){return Object(u.jsx)("div",{className:"card-list",children:e.stars.map((function(e,t){return Object(u.jsx)(d,{id:t,star:e},t)}))})});n(17);var p=function(e){var t=e.placeholder,n=e.handleChange;return Object(u.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})},f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleSearch=function(t){e.setState({searchField:t.target.value})},e.state={Header:"Hello Star War",starWars:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),fetch("https://swapi.dev/api/people/").then((function(e){return e.json()})).then((function(t){return e.setState({starWars:t.results})}))}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate"),console.log(this.state.starWars)}},{key:"render",value:function(){var e=this.state,t=e.starWars,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:this.state.Header}),Object(u.jsx)(p,{placeholder:"search stars",handleChange:this.handleSearch}),Object(u.jsx)(j,{stars:a})]})}}]),n}(a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.57b73f72.chunk.js.map