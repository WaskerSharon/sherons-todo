(this["webpackJsonpsherons-todo"]=this["webpackJsonpsherons-todo"]||[]).push([[0],{14:function(t,e,c){},15:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(0),s=c(1),n=c.n(s),a=c(7),i=c.n(a),l=(c(14),c(3)),d=(c(15),c(8)),r=function(t){var e=t.setInputText,c=t.todos,s=t.setTodos,n=t.inputText,a=t.setStatus;return Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"input-container",children:[Object(o.jsx)("input",{value:n,onChange:function(t){e(t.target.value)},type:"text",className:"todo-input"}),Object(o.jsx)("button",{onClick:function(t){t.preventDefault(),s([].concat(Object(d.a)(c),[{text:n,completed:!1,id:1e3*Math.random()}])),e("")},className:"todo-button",type:"submit",children:Object(o.jsx)("i",{className:"fas fa-plus-square"})})]}),Object(o.jsx)("div",{className:"select",children:Object(o.jsxs)("select",{onChange:function(t){a(t.target.value)},name:"todos",className:"filter-todo",children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"completed",children:"Completed"}),Object(o.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=c(6),j=function(t){var e=t.setTodos,c=t.todos,s=t.todo,n=t.text;return Object(o.jsxs)("div",{className:"todo",children:[Object(o.jsx)("li",{className:"todo-item ".concat(s.completed?"completed":""," "),children:n}),Object(o.jsx)("button",{onClick:function(){e(c.map((function(t){return t.id===s.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(o.jsx)("i",{className:"fas fa-check"})}),Object(o.jsx)("button",{onClick:function(){e(c.filter((function(t){return t.id!==s.id})))},className:"trash-btn",children:Object(o.jsxs)("span",{className:"trash",children:[Object(o.jsx)("span",{}),Object(o.jsx)("i",{})]})})]})},b=function(t){var e=t.filteredTodos,c=t.todos,s=t.setTodos;return Object(o.jsx)("div",{className:"todo-container",children:Object(o.jsx)("ul",{className:"todo-list",children:e.map((function(t){return Object(o.jsx)(j,{setTodos:s,todos:c,todo:t,text:t.text},t.id)}))})})};var O=function(){var t=Object(s.useState)(""),e=Object(l.a)(t,2),c=e[0],n=e[1],a=Object(s.useState)([]),i=Object(l.a)(a,2),d=i[0],u=i[1],j=Object(s.useState)("all"),O=Object(l.a)(j,2),f=O[0],m=O[1],p=Object(s.useState)([]),x=Object(l.a)(p,2),h=x[0],v=x[1];Object(s.useEffect)((function(){N()}),[]),Object(s.useEffect)((function(){!function(){switch(f){case"completed":v(d.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(d.filter((function(t){return!1===t.completed})));break;default:v(d)}}(),g()}),[d,f]);var g=function(){localStorage.setItem("todos",JSON.stringify(d))},N=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{children:Object(o.jsx)("h1",{children:"Sheron's TODO List"})}),Object(o.jsx)(r,{inputText:c,todos:d,setTodos:u,setInputText:n,setStatus:m}),Object(o.jsx)(b,{filteredTodos:h,setTodos:u,todos:d})]})},f=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(e){var c=e.getCLS,o=e.getFID,s=e.getFCP,n=e.getLCP,a=e.getTTFB;c(t),o(t),s(t),n(t),a(t)}))};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.2b0880d3.chunk.js.map