(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{201:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},223:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(66),c=n.n(o),s=(n(201),n(26)),i=n.n(s),l=n(51),u=n(23),d=n(31),h=n(24),f=n(25),p=(n(203),n(204),n(3)),v=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={collapsed:!0},e.handleButtonClick=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.event;this.state.collapsed;return Object(p.jsxs)("div",{className:"Event",children:[Object(p.jsx)("h2",{className:"summary",children:e.summary}),Object(p.jsx)("p",{className:"location",children:e.location}),!1===this.state.collapsed&&Object(p.jsxs)("div",{className:"more-details",children:[Object(p.jsxs)("p",{className:"start-date",children:[Object(p.jsx)("label",{children:"Date: "}),e.start.dateTime]}),Object(p.jsxs)("p",{className:"event-description",children:[Object(p.jsx)("label",{children:"Event Details: "}),e.description]}),Object(p.jsx)("button",{className:"toggleEvent",onClick:this.handleButtonClick,children:"Hide Details"})]}),!0===this.state.collapsed&&Object(p.jsx)("button",{className:"toggleEvent",onClick:this.handleButtonClick,children:"Show Details"})]})}}]),n}(a.Component),b=v,m=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(p.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(b,{event:e})},e.id)}))})}}]),n}(a.Component),j=m,g=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color,backgroundColor:a.backgroundColor}},a.color=null,a.backgroundColor=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"Alert",children:Object(p.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),O=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(g),w=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(g),x=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="orange",a.backgroundColor="black",a}return n}(g),y=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:null},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"City Not Found. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"CitySearch",children:[Object(p.jsx)(O,{text:this.state.infoText}),Object(p.jsxs)("div",{className:"CitySearch-Input",children:[Object(p.jsx)("h4",{children:"City Search:"}),Object(p.jsx)("input",{type:"text",className:"city",placeholder:"Search for a city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(p.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(p.jsx)("b",{children:"See all cities"})})]})]})]})}}]),n}(a.Component),k=y,S=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,infoText:""},e.handleEventNumChange=function(t){var n=t.target.value;n<0||n>32?e.setState({infoText:"Please choose a number between 1 and 32"}):e.setState({numberOfEvents:n,infoText:""}),e.props.updateNumberOfEvents(n)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"NumberOfEvents",children:[Object(p.jsx)("div",{className:"Error-Alert",children:Object(p.jsx)(w,{text:this.state.infoText})}),Object(p.jsx)("h4",{children:"Number Of Events:"}),Object(p.jsx)("input",{type:"number",className:"number-input",value:this.state.numberOfEvents,onChange:function(t){return e.handleEventNumChange(t)}})]})}}]),n}(a.Component),E=S,N=n(190),T=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],C=n(119),W=n.n(C),A=n(75),Z=n.n(A),L=function(e){var t=e.map((function(e){return e.location}));return Object(N.a)(new Set(t))},I=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},q=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://garziurqxg.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,M(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,W.a.get("https://garziurqxg.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&q(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return Z.a.done(),e.abrupt("return",T);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),Z.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,D();case 11:if(!(n=e.sent)){e.next=21;break}return I(),a="https://garziurqxg.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+n,e.next=17,W.a.get(a);case 17:return(r=e.sent).data&&(o=L(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),Z.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=n(357),R=n(361),U=n(362),F=n(186),z=n(187),_=n(78),H=n(191);n(223);var P=function(e){return e.showWelcomeScreen?Object(p.jsxs)("div",{className:"WelcomeScreen",children:[Object(p.jsx)("h1",{children:"Welcome to Ev's Meet App!"}),Object(p.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(p.jsx)("div",{className:"button_cont",align:"center",children:Object(p.jsxs)("div",{class:"google-btn",children:[Object(p.jsx)("div",{class:"google-icon-wrapper",children:Object(p.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(p.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(p.jsx)("b",{children:"Sign in with google"})})]})}),Object(p.jsx)("a",{href:"https://acevelyn.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},Y=n(18),G=n(364),K=n(181),V=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(Y.a)(n,2),o=r[0],c=r[1];Object(a.useEffect)((function(){c((function(){return s()}))}),[t]);var s=function(){return["React","Javascript","Node","jQuery","AngularJS","Angular"].reduce((function(e,n){var a=t.filter((function(e){return e.summary.split(" ").includes(n)})).length;return 0!==a&&e.push({name:n,value:a}),e}),[])};return Object(p.jsx)(J.a,{height:400,children:Object(p.jsx)(G.a,{width:400,height:400,children:Object(p.jsx)(K.a,{data:o,cx:200,cy:200,labelLine:!1,outerRadius:80,fill:"#8884d8",dataKey:"value",label:function(e){var t=e.name,n=e.percent;return"".concat(t," ").concat((100*n).toFixed(0),"%")}})})})},X=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],currentLocation:"all",numberOfEvents:32,showWelcomeScreen:void 0},e.updateEvents=function(t){B().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a.slice(0,e.state.numberOfEvents),currentLocation:t})}))},e.updateNumberOfEvents=function(t){var n=t;e.setState({numberOfEvents:n}),e.updateEvents(e.state.currentLocation)},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(" ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,M(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&B().then((function(e){o.mounted&&o.setState({events:e,locations:L(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(p.jsx)("div",{className:"App"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("div",{className:"App-Header",children:[Object(p.jsx)("h1",{className:"title",children:"Ev's Meet App"}),Object(p.jsx)("p",{className:"header",children:"Your go-to app for events near you!"})]}),navigator.onLine?Object(p.jsx)(x,{text:" "}):Object(p.jsx)(x,{text:"You are offline, data is not up to date"}),Object(p.jsx)(k,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(p.jsx)(E,{numberOfEvents:this.state.numberOfEvents,updateNumberOfEvents:this.updateNumberOfEvents}),Object(p.jsxs)("div",{className:"data-vis-wrapper",children:[Object(p.jsx)("h3",{children:"Events in Each City"}),Object(p.jsx)(V,{events:this.state.events}),Object(p.jsx)(J.a,{height:400,children:Object(p.jsxs)(R.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(p.jsx)(U.a,{}),Object(p.jsx)(F.a,{type:"category",dataKey:"city",name:"city"}),Object(p.jsx)(z.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),Object(p.jsx)(_.a,{cursor:{strokeDasharray:"3 3"}}),Object(p.jsx)(H.a,{data:this.getData(),fill:"#8884d8"})]})})]}),Object(p.jsx)(j,{events:this.state.events}),Object(p.jsx)(P,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){D()}})]})}}]),n}(a.Component),Q=X,$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,365)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};n(188).config("fac523a0eb9e4eeb8f9911b24f31a2c9").install(),c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");$?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ee(t,e)}))}}(),te()}},[[356,1,2]]]);
//# sourceMappingURL=main.6f2575c1.chunk.js.map