(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{37:function(e,t,a){e.exports=a(58)},42:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),o=a.n(r),i=(a(42),a(26)),l=a(11),m=a(62),u=function(e){var t=e.movieId,a=e.image,n=e.movieName,r=e.landingPage,o=e.characterName;return r?c.a.createElement(m.a,{lg:6,md:8,xs:24},c.a.createElement("div",{style:{position:"relative"}},c.a.createElement("a",{href:"/Movie-App/movie/".concat(t)},c.a.createElement("img",{src:a,alt:n,style:{width:"100%",height:"320px"}})))):c.a.createElement(m.a,{lg:6,md:8,xs:24},c.a.createElement("div",{style:{position:"relative"}},c.a.createElement("img",{src:null===a?"https://via.placeholder.com/320?text=No+Image":a,alt:o,style:{width:"100%",height:"320px"}})))},s="https://api.themoviedb.org/3/",p="https://image.tmdb.org/t/p/",v="96abf0f0c3cf0198a3e16c6fc6402000",g=function(e){var t=e.image,a=e.title,n=e.text;return c.a.createElement("div",{style:{background:"linear-gradient(to bottom, rgba(0,0,0,0) 39%,\n        rgba(0,0,0,0) 41%,\n        rgba(0,0,0,0.65) 100%),\n        url('".concat(t,"'), #1c1c1c"),height:"500px",backgroundSize:"100%, cover",backgroundPosition:"center, center",width:"100%",position:"relative"}},c.a.createElement("div",null,c.a.createElement("div",{style:{position:"absolute",maxWidth:"500px",bottom:"2rem",marginLeft:"2rem",color:"white"}},c.a.createElement("h2",null," ",a," "),c.a.createElement("p",{style:{color:"white",fontSize:"1rem"}},n))))},h=a(61),b=(a(28),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(),m=Object(l.a)(o,2),b=m[0],d=m[1],E=Object(n.useState)(),f=Object(l.a)(E,2),y=f[0],j=f[1];Object(n.useEffect)((function(){var e="".concat(s,"movie/popular?api_key=").concat(v,"&language=en-US&page=1");w(e)}),[]);var w=Object(n.useCallback)((function(e){fetch(e).then((function(e){return e.json()})).then((function(e){r([].concat(Object(i.a)(a),Object(i.a)(e.results))),j(e.page),1===e.page&&d(e.results[0])}))}),[a]),_=Object(n.useCallback)((function(){var e="".concat(s,"movie/popular?api_key=").concat(v,"&language=en-US&page=").concat(y+1);w(e)}),[y]);return c.a.createElement("div",{style:{width:"100%",margin:"0"}},b&&c.a.createElement(g,{image:"".concat(p,"original").concat(b.backdrop_path),title:b.original_title,text:b.overview}),c.a.createElement("div",{style:{width:"85%",margin:"1rem auto"}},c.a.createElement("h2",null,"Movie by latest"),c.a.createElement("hr",null),c.a.createElement(h.a,{gutter:[16,16]},a&&a.map((function(e,t){return c.a.createElement(c.a.Fragment,{key:t},c.a.createElement(u,{landingPage:!0,image:e.poster_path&&"".concat(p,"w500").concat(e.poster_path),movieId:e.id,movieName:e.original_title}))})))),c.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},c.a.createElement("button",{type:"button",onClick:_},"Load More")))}),d=a(60),E=function(e){var t=e.movie;return c.a.createElement(d.a,{title:"Movie Info",bordered:!0},c.a.createElement(d.a.Item,{label:"Title"},t.original_title),c.a.createElement(d.a.Item,{label:"release_date"},t.release_date),c.a.createElement(d.a.Item,{label:"revenue"},t.revenue),c.a.createElement(d.a.Item,{label:"runtime"},t.runtime),c.a.createElement(d.a.Item,{label:"vote_average",column:2},t.vote_average),c.a.createElement(d.a.Item,{label:"vote_count"},t.vote_count),c.a.createElement(d.a.Item,{label:"status"},t.status),c.a.createElement(d.a.Item,{label:"popularity"},t.popularity))},f=function(e){var t=e.match.params.movieId,a=Object(n.useState)(),r=Object(l.a)(a,2),o=r[0],i=r[1],m=Object(n.useState)(),b=Object(l.a)(m,2),d=b[0],f=b[1],y=Object(n.useState)(!1),j=Object(l.a)(y,2),w=j[0],_=j[1];Object(n.useEffect)((function(){var e="".concat(s,"movie/").concat(t,"/credits?api_key=").concat(v),a="".concat(s,"movie/").concat(t,"?api_key=").concat(v);fetch(a).then((function(e){return e.json()})).then((function(e){i(e)})),fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e.cast),f(e.cast)}))}),[]);return c.a.createElement("div",null,o&&c.a.createElement(g,{image:"".concat(p,"original").concat(o.backdrop_path),title:o.original_title,text:o.overview}),c.a.createElement("div",{style:{width:"85%",margin:"1rem auto"}},o&&c.a.createElement(E,{movie:o}),c.a.createElement("br",null),c.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"2rem"}},c.a.createElement("button",{type:"button",onClick:function(){_(!w)}},"Toggle Actor View")),w&&c.a.createElement(h.a,{gutter:[16,16]},d&&d.map((function(e,t){return c.a.createElement(c.a.Fragment,{key:t},c.a.createElement(u,{image:e.profile_path&&"".concat(p,"w500").concat(e.profile_path),characterName:e.name}))})))))},y=a(3);var j=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(y.c,null,c.a.createElement(y.a,{path:"/Movie-App/movie/:movieId",component:f}),c.a.createElement(y.a,{path:"/",exact:!0,component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(23);o.a.render(c.a.createElement(w.a,{basename:"/Movie-App"},c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.059f8261.chunk.js.map