(this.webpackJsonpchecknewmovie=this.webpackJsonpchecknewmovie||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/logo.38aea866.png"},44:function(e,t,a){e.exports={Logo:"Header_Logo__2GT5f"}},51:function(e,t,a){e.exports={CardInList:"ListItem_CardInList__1X3_z"}},54:function(e,t,a){e.exports=a(82)},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=a(30),i=a(18),s=a(19),u=a(24),m=a(20),g=a(25),p=a(42),h="https://image.tmdb.org/t/p/original",d="c77614016b93433d8ba60347728e7098",v=a.n(p).a.create({baseURL:"https://api.themoviedb.org/3/"}),f=a(27),E=a(84),b=a(86),y=a(28),k=a(53),C=a(13),w=a(47),j=a(43),L=a.n(j),O=a(44),D=a.n(O),_=function(e){return r.a.createElement(y.a,{bg:"light",expand:"lg"},r.a.createElement(y.a.Brand,{href:"#home"},r.a.createElement(w.a,{className:D.a.Logo,src:L.a,roundedCircle:!0})),r.a.createElement(k.a,{className:"mr-auto"},r.a.createElement("h3",null,"Lorem, ipsum dolor ")),r.a.createElement(C.a,{className:"mr-2",variant:"outline-success"},"Log In"),r.a.createElement(C.a,{variant:"outline-success"},"Singh in"))},N=(a(81),a(85)),P=a(51),S=a.n(P),A=a(87),I=a(88),x=function(e){return r.a.createElement("div",{className:S.a.CardInList},r.a.createElement(A.a,null,r.a.createElement(I.a,{style:{width:"15rem"}},r.a.createElement(I.a.Img,{variant:"top",src:e.poster}),r.a.createElement(I.a.Body,null,r.a.createElement(I.a.Title,null,e.title),r.a.createElement(A.a.Collapse,{eventKey:"0"},r.a.createElement("div",null,r.a.createElement(I.a.Text,null,e.about),r.a.createElement(C.a,{variant:"primary"},"Go somewhere"))),r.a.createElement(A.a.Toggle,{as:C.a,variant:"link",eventKey:"0"},"More")))))},F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={data:{},page:1,catArr:[]},a.selectOtherPage=function(e){a.setState({page:e})},a.getDataForLastWeek=function(e,t){v.get("discover/movie?api_key="+e+"&page="+t+"&sort_by=popularity.desc").then((function(e){a.setState({data:e.data.results})})).catch((function(e){console.log(e)})).then((function(){}))},a.mapDataArry=function(e,t){var n=[];for(var c in e)0===a.state.catArr.length?n.push(e[c]):e[c].genre_ids.some((function(e){return a.props.cat.includes(e)}))&&n.push(e[c]);return n.map((function(e){return r.a.createElement(x,{key:e.id,title:e.name,about:e.overview,poster:h+e.poster_path})}))},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.page!==e.page&&this.getDataForLastWeek(d,this.state.page),this.props.cat!==e.cat&&this.setState({catArr:this.props.cat})}},{key:"componentDidMount",value:function(){this.getDataForLastWeek(d,this.state.page)}},{key:"render",value:function(){var e=[];return e=this.mapDataArry(this.state.data,null),r.a.createElement("div",null,r.a.createElement(E.a,{className:"justify-content-around"},r.a.createElement(N.a,null,e.map((function(e){return e})))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.page!==t.page?{page:e.page}:null}}]),t}(n.Component),W=a(90),B=function(e){var t,a=[];t=e.active;for(var n=function(n){a.push(r.a.createElement(W.a.Item,{key:n,active:n===t,onClick:function(){e.click(n)}},n))},c=1;c<=50;c++)n(c);return r.a.createElement("div",null,r.a.createElement(W.a,null,a))},T=a(52),H=a(89),M=function(e){var t=e.cat.map((function(e){return r.a.createElement(T.a,{variant:"outline-dark",key:e.id,value:e.id},e.name)}));return r.a.createElement(f.a,{className:"mt-3 "},r.a.createElement(H.a,{type:"checkbox",name:"cat",vertical:!0,onChange:e.selected},t))},U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={currentPageNumber:1,catagories:[],selectedCatagories:[]},a.getCatData=function(e,t){e.get("genre/movie/list?api_key="+t+"&language=en-US").then((function(e){var t=[],n=e.data.genres;for(var r in n)t.push(n[r]);a.setState({catagories:t})})).catch((function(e){console.log(e)}))},a.selectPaginationPage=function(e){var t=Object(l.a)({},a.state);t.currentPageNumber=e,a.setState(Object(l.a)({},t))},a.selectedCatagoriesHandler=function(e){a.setState({selectedCatagories:e})},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getCatData(v,d)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(f.a,null,r.a.createElement(E.a,null,r.a.createElement(b.a,{md:2},r.a.createElement(M,{cat:this.state.catagories,selected:this.selectedCatagoriesHandler})),r.a.createElement(b.a,null,r.a.createElement(F,{page:this.state.currentPageNumber,cat:this.state.selectedCatagories})),r.a.createElement(b.a,{md:1},"Filleter")),r.a.createElement(E.a,null,r.a.createElement(b.a,null,r.a.createElement(B,{currentPageNum:this.state.currentPageNumber,click:function(t){e.selectPaginationPage(t)}})))),r.a.createElement("footer",null,"ADS"))}}]),t}(n.Component);var G=function(){return r.a.createElement(U,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(40);o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[54,1,2]]]);
//# sourceMappingURL=main.c1e17b57.chunk.js.map