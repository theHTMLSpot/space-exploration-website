(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[795],{8071:function(e,t,s){Promise.resolve().then(s.bind(s,9749))},9749:function(e,t,s){"use strict";s.r(t);var o=s(7437),n=s(2265),c=s(8497),r=s.n(c);t.default=function(){let[e,t]=(0,n.useState)(null),[s,c]=(0,n.useState)(null);(0,n.useEffect)(()=>{fetch("/json/data.json").then(e=>{if(console.log("Response status:",e.status),!e.ok)throw Error("Network response was not ok "+e.statusText);return e.json()}).then(e=>{console.log("Fetched data:",e),t(e)}).catch(e=>{console.error("Error fetching the data:",e),c(e),t(null)})},[]);let a=e?e.technology.map(e=>(0,o.jsxs)("div",{className:r().technologyItem,children:[(0,o.jsx)("h2",{children:e.name}),(0,o.jsx)("img",{src:e.images.portrait,alt:e.name}),(0,o.jsx)("p",{children:e.description})]},e.name)):null;return(0,o.jsx)("div",{className:r().page,children:(0,o.jsxs)("div",{className:r().technology,id:"destination",children:[(0,o.jsxs)("div",{className:r().crewtext,children:[(0,o.jsx)("h1",{children:"Our Crew"}),(0,o.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore aspernatur molestias doloremque esse odio atque voluptate facere, delectus rem distinctio commodi soluta aut autem est nemo dolorum obcaecati quae quo!"})]}),s?(0,o.jsxs)("p",{children:["Error fetching data: ",s.message]}):e?a:(0,o.jsx)("p",{children:"Loading..."})]})})}},8497:function(e){e.exports={page:"tech_page__gJ3CS",technology:"tech_technology__iVuxv",technologyItem:"tech_technologyItem__LttcY",crewtext:"tech_crewtext__9p9mF"}}},function(e){e.O(0,[435,971,23,744],function(){return e(e.s=8071)}),_N_E=e.O()}]);