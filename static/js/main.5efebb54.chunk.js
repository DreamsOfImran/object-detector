(this["webpackJsonpobject-detector"]=this["webpackJsonpobject-detector"]||[]).push([[0],{261:function(t,e,n){},267:function(t,e){},268:function(t,e){},276:function(t,e){},279:function(t,e){},280:function(t,e){},290:function(t,e,n){},293:function(t,e,n){"use strict";n.r(e);var r=n(86),c=n.n(r),i=n(233),o=n.n(i),a=(n(261),n(4)),u=n.n(a),s=n(11),f=n(234),d=n.n(f),h=(n(292),n(256)),l=n(5),p=function(t,e){t.forEach((function(t){var n=Object(l.a)(t.bbox,4),r=n[0],c=n[1],i=n[2],o=n[3],a=t.class,u="green";e.strokeStyle=u,e.font="18px Arial",e.fillStyle=u,e.beginPath(),e.fillText(a,r,c),e.rect(r,c,i,o),e.stroke()}))},b=(n(290),n(88)),j=function(){var t=Object(r.useRef)(null),e=Object(r.useRef)(null),n=function(){var t=Object(s.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.load();case 2:e=t.sent,setInterval((function(){c(e)}),10);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var n=Object(s.a)(u.a.mark((function n(r){var c,i,o,a,s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("undefined"===typeof t.current||null===t.current||4!==t.current.video.readyState){n.next=13;break}return c=t.current.video,i=t.current.video.videoWidth,o=t.current.video.videoHeight,t.current.video.width=i,t.current.video.height=o,e.current.width=i,e.current.height=o,n.next=10,r.detect(c);case 10:a=n.sent,s=e.current.getContext("2d"),p(a,s);case 13:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){n()}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)(d.a,{ref:t,muted:!0,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zIndex:9,width:640,height:480}}),Object(b.jsx)("canvas",{ref:e,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zIndex:9,width:640,height:480}})]})})};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root"))}},[[293,1,2]]]);
//# sourceMappingURL=main.5efebb54.chunk.js.map