(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{11:function(e,n,a){},13:function(e,n,a){"use strict";a.r(n);var r=a(1),i=a(3),t=a.n(i),s=(a(9),a(4)),c=a(0),o=function(e){var n=e.name,a=e.email;return Object(c.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(c.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?150x150")}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:n}),Object(c.jsx)("p",{children:a})]})]})},l=function(e){var n=e.robots.map((function(e){return Object(c.jsx)(o,{name:e.name,email:e.email},e.id)}));return Object(c.jsx)("div",{children:n})},m=function(e){var n=e.searchChange;return Object(c.jsx)("div",{className:"pa2",children:Object(c.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robot",onChange:n})})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=(a(11),function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})});var d=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),a=n[0],i=n[1];return Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]),a.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:"ROBOFRIENDS"}),Object(c.jsx)(m,{searchChange:function(e){var n=h.filter((function(n){return n.name.toLowerCase().includes(e.target.value.toLowerCase())}));i(n)}}),Object(c.jsx)(u,{children:Object(c.jsx)(l,{robots:a})})]}):Object(c.jsx)("h2",{className:"tc",children:"Loading..."})};a(12);t.a.render(Object(c.jsx)(d,{}),document.getElementById("root"))},9:function(e,n,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.271fb1f2.chunk.js.map