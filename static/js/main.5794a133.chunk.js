(this["webpackJsonpcovid19-portal"]=this["webpackJsonpcovid19-portal"]||[]).push([[0],{17:function(t,e,n){t.exports=n(42)},22:function(t,e,n){},23:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},24:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(11),i=n.n(r),c=(n(22),n(23),n(24),n(12)),l=n(13),s=n(16),u=n(15),d=n(14),h=n.n(d),m=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={stateRegional:{}},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;h.a.get("https://api.rootnet.in/covid19-in/stats/latest").then((function(e){t.setState({stateRegional:e.data.data.regional})})).catch((function(t){console.error(t)}))}},{key:"render",value:function(){var t=this.state.stateRegional;return alert(this.state.stateRegional.length),o.a.createElement("div",null,t.length?t.map((function(t){return o.a.createElement("h3",null," ",t.confirmedCasesIndian)})):null)}}]),n}(a.Component);var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.5794a133.chunk.js.map