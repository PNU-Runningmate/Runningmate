(this.webpackJsonprunning=this.webpackJsonprunning||[]).push([[0],{105:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},116:function(e,t){},117:function(e,t,n){},118:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},151:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(33),s=n.n(i),a=(n(86),n(87),n(10)),o=n.n(a),r=(n(105),n(1));o.a.defaults.withCredentials=!0;var d=function(){return Object(r.jsxs)("div",{id:"login_page",children:[Object(r.jsx)("div",{id:"welcome",children:"Welcome!"}),Object(r.jsx)("div",{id:"runningmate",children:"RunningMate"}),Object(r.jsx)("img",{id:"image",src:"img/back2.png",alt:"mypic",className:"image01"}),Object(r.jsx)("div",{style:{marginTop:"10px"},children:Object(r.jsx)("a",{href:"http://localhost:5000/api/auth/kakao",children:Object(r.jsx)("img",{src:"img/login2.png",alt:"loginimg",style:{marginTop:"50px",paddingLeft:"40px",paddingRight:"40px",width:"100%"}})})})]})},l=(n(107),function(){return Object(r.jsx)("div",{style:{height:"100vh"},id:"sum",children:Object(r.jsx)(d,{className:"LoginForm2"})})}),j=n(8),b=n(7),u=(n(108),"http://localhost:5000"),m="http://localhost:3000";var h=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)(""),a=Object(b.a)(s,2),d=a[0],l=a[1],j=Object(c.useState)(""),m=Object(b.a)(j,2),h=m[0],O=m[1];return Object(c.useEffect)((function(){o.a.get("".concat(u,"/latest")).then((function(e){console.log(e.data.latest_record),i(e.data.latest_record.length),l(e.data.latest_record.runningtime),O(e.data.latest_record.pace)})).catch((function(e){console.log(e)}))}),[]),Object(r.jsx)("div",{children:Object(r.jsxs)("div",{id:"privious",children:[Object(r.jsx)("div",{id:"record",children:Object(r.jsx)("div",{children:"\xa0\xa0\ub098\uc758 \ucd5c\uadfc \uae30\ub85d\xa0\xa0"})}),Object(r.jsxs)("div",{id:"elements",children:[Object(r.jsxs)("div",{id:"elements_1",children:[Object(r.jsx)("div",{children:"\uac70\ub9ac"}),Object(r.jsxs)("div",{id:"num",children:[n,"km"]})]}),Object(r.jsxs)("div",{id:"elements_2",children:[Object(r.jsx)("div",{children:"\uc2dc\uac04"}),Object(r.jsxs)("div",{id:"num",children:[d,"\uc2dc\uac04"]})]}),Object(r.jsxs)("div",{id:"elements_3",children:[Object(r.jsx)("div",{children:"\ud398\uc774\uc2a4"}),Object(r.jsxs)("div",{id:"num",children:[h,"km/h"]})]})]})]})})};var O=function(e){var t=e.nickname,n=e.rank,c=e.time;console.log(c);var i=c.toString().split(".");return Object(r.jsxs)("div",{id:"rank_elements",children:[Object(r.jsx)("div",{id:"number",children:n+1}),Object(r.jsx)("div",{children:t}),Object(r.jsxs)("div",{children:[i[0],"h"]})]})};var x=function(){var e=Object(c.useState)("1km"),t=Object(b.a)(e,2),n=t[0],i=t[1],s=Object(c.useState)([]),a=Object(b.a)(s,2),d=a[0],l=a[1];return Object(c.useEffect)((function(){o.a.get("".concat(u,"/rank?ranklength=").concat(n)).then((function(e){return l(e.data)})).catch((function(e){console.log(e)}))}),[n]),Object(r.jsx)("div",{id:"postbody",children:Object(r.jsxs)("div",{id:"rank",children:[Object(r.jsxs)("select",{className:"select_box",onChange:function(e){i(e.target.value)},children:[Object(r.jsx)("option",{children:"1km"}),Object(r.jsx)("option",{children:"3km"}),Object(r.jsx)("option",{children:"5km"}),Object(r.jsx)("option",{children:"10km"})]}),Object(r.jsx)("label",{className:"ranking",children:"\xa0\uad6c\uac04 \uc21c\uc704"}),Object(r.jsxs)("div",{id:"rank_elements1",children:[Object(r.jsx)("div",{children:"\uc21c\uc704"}),Object(r.jsx)("div",{children:"\uc774\ub984"}),Object(r.jsx)("div",{children:"\uae30\ub85d"})]}),d.map((function(e,t){return Object(r.jsx)(O,{nickname:e.nickname,time:e.runningtime,rank:t},t)}))]})})},g=n(170);o.a.defaults.withCredentials=!0;var v=function(e){var t=function(){var e=localStorage.getItem("RoomUrl");return e?"room".concat(e):"create_room"}(),n=Object(j.f)(),i=Object(c.useState)(""),s=Object(b.a)(i,2),a=s[0],d=s[1],l=new Date,m=l.getMonth()+1,O=l.getDate(),v=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][l.getDay()];return Object(c.useEffect)((function(){o.a.get("".concat(u,"/main")).then((function(e){d("\uc548\ub155\ud558\uc138\uc694 ".concat(e.data.nickname,"\ub2d8"))})).catch((function(e){return d(e.response.data.error)}))}),[]),Object(r.jsxs)("div",{className:"background",children:[Object(r.jsxs)("div",{id:"up-nav-var",children:[Object(r.jsxs)("div",{id:"helloword",children:[Object(r.jsx)("div",{id:"username",children:a}),Object(r.jsx)("div",{id:"date",children:m+"-"+O+"-"+v})]}),Object(r.jsx)("div",{children:Object(r.jsx)(g.a,{onClick:function(e){e.preventDefault(),o.a.get("http://localhost:5000/api/auth/logout").then((function(e){console.log(e)})).catch((function(e){console.log(e)})),n.push("/")},id:"logout_btn2",children:"Logout"})})]}),Object(r.jsx)(h,{}),Object(r.jsx)(x,{}),Object(r.jsxs)("div",{id:"bottom-nav-bar",children:[Object(r.jsx)("button",{id:"nav-button",onClick:function(){n.push("/main")},children:Object(r.jsx)("img",{src:"img/home.png",alt:"mypic",className:"home_img"})}),Object(r.jsx)("button",{id:"nav-button",onClick:function(){n.push("/".concat(t))},children:Object(r.jsx)("img",{src:"img/message.png",alt:"mypic",className:"home_img"})}),Object(r.jsx)("button",{id:"nav-button",onClick:function(){n.push("/info")},children:Object(r.jsx)("img",{src:"img/info.png",alt:"mypic",className:"home_img"})})]})]})},f=(n(116),function(e){var t=e.history;return Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:function(){t.goBack()},children:"\ub4a4\ub85c\uac00\uae30"}),Object(r.jsx)("br",{}),"\uc5ec\uae30\ub294 \uce5c\uad6c\ubaa9\ub85d \ud398\uc774\uc9c0!! \uc544\uc9c1 \ubbf8\uc644\uc131"]})}),p=(n(117),n(36)),k=n(28);n(118);var y=function(e){var t=e.length,n=e.runningtime,c=e.pace,i=e.date,s=e.location,a=i.slice(0,10);return Object(r.jsx)(k.b,{to:{pathname:"/map",state:{location:s,runningtime:n,date:i,length:t,pace:c}},style:{textDecoration:"none",color:"black"},children:Object(r.jsx)("div",{className:"boxcover",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsxs)("div",{className:"day",children:[a,Object(r.jsx)("hr",{})]}),Object(r.jsxs)("div",{className:"history_name",children:[Object(r.jsx)("div",{className:"history_names",children:"\uac70\ub9ac"}),Object(r.jsx)("div",{className:"history_names",children:"\uc2dc\uac04"}),Object(r.jsx)("div",{className:"history_names",children:"\ud3c9\uade0 \ud398\uc774\uc2a4"})]}),Object(r.jsxs)("div",{className:"history_element",children:[Object(r.jsx)("div",{className:"km2",children:t}),Object(r.jsx)("div",{className:"average",children:n}),Object(r.jsx)("div",{className:"time",children:c})]}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{})]})})})};var N=function(e){var t=function(){var e=localStorage.getItem("RoomUrl");return e?"room".concat(e):"create_room"}(),n=Object(j.f)(),i=Object(c.useState)([]),s=Object(b.a)(i,2),a=(s[0],s[1],window.kakao),o=e.location.state,d=o.location,l=o.pace,u=o.length,m=o.runningtime,h=o.date.toString().split("T");return Object(c.useEffect)((function(){!function(){var e=document.getElementById("map"),t={center:new a.maps.LatLng(d[0].latitude,d[0].longitude),level:2},n=new a.maps.Map(e,t),c=[];d.map((function(e){c.push(new a.maps.LatLng(e.latitude,e.longitude))})),new a.maps.Polyline({path:c,strokeWeight:5,strokeColor:"#FFAE00",strokeOpacity:.7,strokeStyle:"solid"}).setMap(n)}()}),[]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{id:"title2",children:[Object(r.jsx)("button",{id:"back-btn",onClick:function(){n.goBack()},children:Object(r.jsx)(p.a,{})}),Object(r.jsx)("div",{id:"title-name",children:h[0]}),Object(r.jsx)("div",{children:"\xa0\xa0\xa0"})]}),Object(r.jsxs)("div",{id:"info",children:[Object(r.jsx)("div",{id:"len",children:"\ud0ac\ub85c\ubbf8\ud130"}),Object(r.jsx)("div",{id:"time",children:"\uc2dc\uac04"}),Object(r.jsx)("div",{id:"pace",children:"\ud3c9\uade0 \ud398\uc774\uc2a4"})]}),Object(r.jsxs)("div",{id:"info2",children:[Object(r.jsxs)("div",{id:"len2",children:["\xa0\xa0\xa0",u]}),Object(r.jsxs)("div",{id:"time2",children:["\xa0\xa0\xa0",m]}),Object(r.jsx)("div",{id:"pace2",children:l})]}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{id:"map",style:{width:"415px",height:"425px"}})}),Object(r.jsxs)("div",{id:"bottom-nav-bar",children:[Object(r.jsx)("button",{id:"nav-button",onClick:function(){n.push("/main")},children:Object(r.jsx)("img",{src:"img/home.png",alt:"mypic",className:"home_img"})}),Object(r.jsx)("button",{id:"nav-button",onClick:function(){n.push("/".concat(t))},children:Object(r.jsx)("img",{src:"img/message.png",alt:"mypic",className:"home_img"})}),Object(r.jsx)("button",{id:"nav-button",onClick:function(){n.push("/info")},children:Object(r.jsx)("img",{src:"img/info.png",alt:"mypic",className:"home_img"})})]})]})},w=(n(153),n(120),n(76)),_=function(e){var t=e.history,n=function(){var e=localStorage.getItem("RoomUrl");return e?"room".concat(e):"create_room"}(),i=Object(c.useRef)(),s=Object(c.useState)([]),a=Object(b.a)(s,2),d=a[0],l=a[1];return Object(r.jsxs)("div",{className:"background",children:[Object(r.jsx)("div",{className:"previous",children:"\ucd5c\uadfc\ud65c\ub3d9"}),Object(r.jsx)("div",{className:"statics"}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"search",children:[Object(r.jsx)("input",{ref:i,type:"date",className:"searchbox"}),Object(r.jsx)("button",{type:"submit",onClick:function(){o.a.get("".concat(u,"/date?rday=").concat(i.current.value)).then((function(e){return l(e.data)})).catch((function(e){alert(e.response.data.message),t.push("/")}))},className:"searchbutton",children:Object(r.jsx)(w.a,{})})]}),d.map((function(e,t){return Object(r.jsx)(y,{date:e.createdAt,length:e.length,runningtime:e.runningtime,pace:e.pace,location:e.location},t)})),Object(r.jsxs)("div",{id:"bottom-nav-bar",children:[Object(r.jsx)("button",{id:"nav-button",onClick:function(){t.push("/main")},children:Object(r.jsx)("img",{src:"img/home.png",alt:"mypic",className:"home_img"})}),Object(r.jsx)("button",{id:"nav-button",onClick:function(){t.push("/".concat(n))},children:Object(r.jsx)("img",{src:"img/message.png",alt:"mypic",className:"home_img"})}),Object(r.jsx)("button",{id:"nav-button",onClick:function(){t.push("/info")},children:Object(r.jsx)("img",{src:"img/info.png",alt:"mypic",className:"home_img"})})]})]})},S=n(171),C=n(172);n(121);var R,U=function(e){var t=function(){var e=localStorage.getItem("RoomUrl");return e?"room".concat(e):"create_room"}(),n=Object(j.f)(),i=Object(c.useRef)(),s=Object(c.useRef)();return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{id:"title",children:[Object(r.jsx)("button",{id:"back-btn",onClick:function(){n.goBack()},children:Object(r.jsx)(p.a,{})}),Object(r.jsx)("div",{id:"title2"}),Object(r.jsx)("div",{children:"\xa0\xa0\xa0\xa0\xa0"})]}),Object(r.jsx)("div",{id:"box",children:Object(r.jsxs)(S.a,{bg:"Light",style:{width:"20rem"},id:"card",children:[Object(r.jsx)(S.a.Header,{children:"\ubc29 \uc0dd\uc131\ud558\uae30"}),Object(r.jsx)("div",{id:"room_title",children:"\ubc29 \uc81c\ubaa9 :"}),Object(r.jsx)("input",{id:"roomtitle",ref:s,placeholder:"\ubc29\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694"}),Object(r.jsx)("br",{}),Object(r.jsxs)("form",{children:[Object(r.jsx)("div",{id:"distance",children:"\ub2ec\ub9b4 \uac70\ub9ac :"}),Object(r.jsxs)("select",{ref:i,style:{width:"17rem"},id:"select",children:[Object(r.jsx)("option",{value:"select",children:"\ub2ec\ub9b4 \uac70\ub9ac\ub97c \uc785\ub825\ud558\uc138\uc694"}),[{key:1,name:"1km"},{key:3,name:"3km"},{key:5,name:"5km"},{key:10,name:"10km"}].map((function(e){return Object(r.jsx)("option",{value:e.name,children:e.name},e.key)}))]})]}),Object(r.jsx)("div",{id:"createbutton",children:Object(r.jsx)(C.a,{type:"button",onClick:function(){"select"===i.current.value?alert("\uac70\ub9ac\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694"):o.a.get("".concat(u,"/test?title=").concat(s.current.value,"&length=").concat(i.current.value)).then((function(e){localStorage.setItem("RoomUrl",e.data.redirect_url),n.push("/room".concat(e.data.redirect_url))})).catch((function(e){alert(e.response.data.message),n.push("/")}))},id:"roombutton",variant:"info",children:"\ud655\uc778"})})]})}),Object(r.jsxs)("div",{id:"bottom-nav-bar",children:[Object(r.jsx)("button",{id:"nav-button",onClick:function(){n.push("/main")},children:Object(r.jsx)("img",{src:"img/home.png",alt:"mypic",className:"home_img"})}),Object(r.jsx)("button",{id:"nav-button",onClick:function(){n.push("/".concat(t))},children:Object(r.jsx)("img",{src:"img/message.png",alt:"mypic",className:"home_img"})}),Object(r.jsx)("button",{id:"nav-button",onClick:function(){n.push("/info")},children:Object(r.jsx)("img",{src:"img/info.png",alt:"mypic",className:"home_img"})})]})]})},L=n(26),E=n(6),I=n(12),M=n(77),B=n.n(M);var P=function(e,t){var n=Object(c.useRef)(),i=Object(c.useState)([]),s=Object(b.a)(i,2),a=s[0],o=s[1],r=Object(c.useState)([]),d=Object(b.a)(r,2),l=d[0],j=d[1],m=Object(c.useState)(!1),h=Object(b.a)(m,2),O=h[0],x=h[1],g=Object(c.useState)(!1),v=Object(b.a)(g,2),f=v[0],p=v[1];function k(e){var t={latitude:e.coords.latitude,longitude:e.coords.longitude};console.log(t),n.current.emit("Start",t)}function y(){console.log("Geolocation Error:Can not get a geo information")}Object(c.useEffect)((function(){return n.current=B.a.connect("".concat(u),{query:{roomId:e},withCredentials:!0}),n.current.emit("newUser"),n.current.on("Ready",(function(e){j(e)})),n.current.on("newChatMessage",(function(e){var t=Object(E.a)(Object(E.a)({},e),{},{ownedByCurrentUser:e.senderId===n.current.id});o((function(e){return[].concat(Object(L.a)(e),[t])}))})),n.current.on("newUser",(function(e){j(e)})),n.current.on("Start",(function(){p(!0),R=navigator.geolocation.watchPosition(k,y)})),n.current.on("Running",(function(e){j(e)})),n.current.on("arrive",(function(){N()})),n.current.on("userLeave",(function(){n.current.emit("newUser")})),function(){n.current.disconnect()}}),[e]),Object(c.useEffect)((function(){!function(e){var t,n=0,c=Object(I.a)(e);try{for(c.s();!(t=c.n()).done;)t.value.status&&(n+=1)}catch(i){c.e(i)}finally{c.f()}e.length>0&&n===e.length?x(!0):x(!1)}(l)}),[l]);var N=function(){console.log("stop",R),navigator.geolocation.clearWatch(R),n.current.emit("arrive")};return{Stop:N,start:f,socketRef:n,allReady:O,users:l,messages:a,sendMessage:function(e){n.current.emit("newChatMessage",{body:e,senderId:n.current.id})},sendReady:function(e){n.current.emit("Ready")},sendStart:function(){n.current.emit("Loading",t)}}};n(50);var T=function(e){return Object(r.jsx)("button",{id:"kakao-link-btn",onClick:function(){window.Kakao.Link.sendDefault({objectType:"feed",content:{title:"\ub7ec\ub2dd\uba54\uc774\ud2b8",description:"\ud568\uaed8 \ub2ec\ub824\uc694 \ud5d0\ub5a1\ud5d0\ub5a1",imageUrl:"null",link:{mobileWebUrl:"".concat(m,"/room"),webUrl:"".concat(m,"/room?")}},buttons:[{title:"\ubc14\ub85c\uac00\uae30",link:{mobileWebUrl:"".concat(m,"/room").concat(e.url),webUrl:"".concat(m,"/room").concat(e.url)}}]})},children:"\ucd08\ub300\ud558\uae30"})};var D=function(e){new URLSearchParams(window.location.search).get("room_id");var t=Object(c.useRef)(),n=Object(c.useState)(!1),i=Object(b.a)(n,2),s=i[0],a=i[1],o=Object(c.useState)(""),d=Object(b.a)(o,2),l=d[0],j=d[1],u=e.allReady,m=e.users,h=e.messages,O=e.sendMessage,x=e.sendReady,g=e.sendStart,v=e.socketRef,f=m.length,p=function(){O(l),j("")};return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"par-bar",children:[Object(r.jsxs)("div",{className:"current",children:["\ud604\uc7ac\ucc38\uc5ec\uc778\uc6d0: ",f,"\uba85"]}),Object(r.jsxs)("div",{className:"par-box",children:[Object(r.jsx)("div",{className:"par"}),Object(r.jsx)("div",{className:"name",children:m.map((function(e,t){return Object(r.jsxs)("div",{id:"ready_state",children:[Object(r.jsx)("div",{className:"myname",children:e.nickname},t),Object(r.jsx)("div",{className:"myname2",children:e.status?"Ready":""},t)]})}))}),Object(r.jsxs)("div",{className:"ready",children:[Object(r.jsx)("button",{id:"cancel_btn",type:"button",ref:t,onClick:function(e){a(!s),x(),t.current.style.backgroundColor=s?"#67BDEC":"lightgray"},children:s?"\ucde8\uc18c":"\uc900\ube44"}),u&&(console.log(v.current.id),console.log(m[0].socket_id),m[0].socket_id==v.current.id)?Object(r.jsx)("button",{id:"start_btn",onClick:g,children:"\uc2dc\uc791"}):Object(r.jsx)("div",{})]})]})]}),Object(r.jsx)("div",{className:"chatting",children:Object(r.jsx)("div",{className:"content",children:Object(r.jsx)("ul",{className:"messages-list",children:h.map((function(e,t){return Object(r.jsx)("div",{className:"message-box-".concat(e.ownedByCurrentUser?"my-message":"received-message"),children:Object(r.jsx)("li",{className:"message-item ".concat(e.ownedByCurrentUser?"my-message":"received-message"),children:e.ownedByCurrentUser?"".concat(e.body):"".concat(e.nickname,":").concat(e.body)},t)},t)}))})})}),Object(r.jsxs)("div",{className:"chat-bar",children:[Object(r.jsx)("input",{type:"text",name:"chat",size:"32",id:"chat-message",placeholder:"chatting",onChange:function(e){j(e.target.value)},onKeyPress:function(e){"Enter"==e.key&&p()},value:l}),Object(r.jsx)("button",{type:"button",id:"chat-message2",onClick:p,children:"\uc804\uc1a1"})]})]})},F=n(79),W=n(78);n(151);var A=function(e){var t=Object(c.useState)(!0),n=Object(b.a)(t,2),i=n[0],s=n[1],a=e.Stop,o=e.users,d=e.Length,l=Number(d.slice(0,d.length-2)),j=Object(c.useState)(!0),u=Object(b.a)(j,2),m=u[0],h=u[1];return Object(c.useEffect)((function(){setTimeout((function(){h(!1)}),2e3)}),[]),Object(r.jsxs)("div",{id:"main",children:[m?Object(r.jsx)(W.a,{id:"spinner",animation:"border",variant:"info"}):o.map((function(e,t){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{id:"info3",children:[Object(r.jsxs)("div",{id:"nickname",children:[e.nickname," - "]}),Object(r.jsxs)("div",{id:"percent",children:["\xa0",Math.round(o[t].distance/l*100)," %"]})]}),Object(r.jsx)("div",{id:"bar",children:Object(r.jsx)(F.a,{id:"progress",animated:!0,now:o[t].distance/l*100,label:"".concat(Math.round(o[t].distance/l*100))})}),Object(r.jsx)("br",{}),Object(r.jsx)("hr",{})]},t)})),Object(r.jsx)("div",{id:"fin",children:i?Object(r.jsx)("button",{id:"finish_btn",onClick:function(){a(),s(!1)},children:"\uc885\ub8cc"}):null})]})};var J=function(){localStorage.getItem("RoomUrl")||localStorage.setItem("RoomUrl",window.location.search);var e=Object(j.f)(),t=new URLSearchParams(window.location.search).get("title"),n=new URLSearchParams(window.location.search).get("length"),i=new URLSearchParams(window.location.search).get("room_id"),s=P(i,n),a=s.users,d=s.start,l=s.allReady,b=s.messages,m=s.sendMessage,h=s.sendReady,O=s.sendStart,x=s.Stop,g=s.socketRef;return console.log("users",a),Object(c.useEffect)((function(){o.a.get("".concat(u,"/room")).catch((function(t){alert(t.response.data.message),e.push("/")}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"nav",children:[Object(r.jsx)("button",{id:"back",onClick:function(){localStorage.removeItem("RoomUrl"),e.push("/main")},children:Object(r.jsx)(p.a,{})}),Object(r.jsx)("div",{className:"km",children:n}),Object(r.jsx)("div",{children:t}),Object(r.jsx)("div",{className:"edit"}),Object(r.jsx)(T,{url:window.location.search})]}),d?Object(r.jsx)(A,{users:a,Stop:x,Length:n}):Object(r.jsx)(D,{users:a,allReady:l,messages:b,sendMessage:m,sendReady:h,sendStart:O,socketRef:g})]})};var K=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{component:l,path:"/",exact:!0}),Object(r.jsx)(j.a,{component:v,path:"/main"}),Object(r.jsx)(j.a,{component:U,path:"/create_room"}),Object(r.jsx)(j.a,{component:J,path:"/room"}),Object(r.jsx)(j.a,{component:f,path:"/friend"}),Object(r.jsx)(j.a,{component:_,path:"/info"}),Object(r.jsx)(j.a,{component:N,path:"/map"})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,173)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};n(152);s.a.render(Object(r.jsx)(k.a,{children:Object(r.jsx)(K,{})}),document.getElementById("root")),q()},50:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){}},[[154,1,2]]]);
//# sourceMappingURL=main.e79d322d.chunk.js.map