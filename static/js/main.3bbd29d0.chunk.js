(this["webpackJsonplearning_log-web"]=this["webpackJsonplearning_log-web"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),s=(n(14),n.p+"static/media/logo.6ce24c58.svg"),i=(n(15),n(9)),l=n(3),u=n(2);function d(e,t,n,c){var r;c&&(r=JSON.stringify(c));var a=new XMLHttpRequest,o="http://localhost:8000/api".concat(t);a.responseType="json";var s=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var r=n[c].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}("csrftoken");a.open(e,o),a.setRequestHeader("Content-Type","application/json"),s&&(a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-CSRFToken",s)),a.onload=function(){403===a.status&&("Authentication credentials were not provided."===a.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(a.response,a.status)},a.onerror=function(e){console.log(e),n({message:"The request was an error"},400)},a.send(r)}function j(e,t){d("GET","/topics/".concat(e),t)}function b(e,t,n){var c="/topics/";e&&(c="/topics/?username=".concat(e)),null!==n&&void 0!==n&&(c=n.replace("http://localhost:8000/api","")),d("GET",c,t)}var p=n(5),f=n(0);function m(e){var t=e.topic;console.log(t);var n=window.location.pathname.match(Object(p.a)(/([0-9]+)/,{topicid:1})),c=e.className?e.className:"col-10 mx-auto col-md-6",r=n?n.groups.topicid:-1,a="".concat(t.id)==="".concat(r);return Object(f.jsxs)("div",{className:c,children:[Object(f.jsx)("div",{children:Object(f.jsx)("p",{children:t.post_topic})}),!0===a?null:Object(f.jsx)("button",{className:"btn btn-outline-primary",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"View"})]})}function O(e){var t=window.location.pathname.match(Object(p.a)(/([0-9]+)/,{topicid:1})),n=t?t.groups.topicid:-1,r=Object(c.useState)([]),a=Object(u.a)(r,2),o=a[0],s=a[1],i=Object(c.useState)([]),d=Object(u.a)(i,2),b=d[0],m=d[1],O=Object(c.useState)(!1),h=Object(u.a)(O,2),v=h[0],g=h[1];return Object(c.useEffect)((function(){var t=Object(l.a)(e.newEntries);t.length!==b.length&&m(t)}),[e.newEntries,b,o]),Object(c.useEffect)((function(){if(!1===v){j(n,(function(e,t){200===t?(s(e),g(!0)):alert("There was an error")}))}}),[o,v,g,n]),Object(f.jsx)("div",{children:Object(f.jsxs)("ul",{children:[b.map((function(e){return Object(f.jsx)("li",{children:e.post_entry},e.id)})),e.post_entry.map((function(e,t){return Object(f.jsx)("li",{className:"my-5 py-5 border bg-white text-dark rounded",children:e},t)}))]})})}function h(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],o=n[1],s=Object(c.useState)([]),i=Object(u.a)(s,2),d=i[0],j=i[1],p=Object(c.useState)(null),O=Object(u.a)(p,2),h=O[0],v=O[1],g=Object(c.useState)(!1),x=Object(u.a)(g,2),w=x[0],y=x[1];Object(c.useEffect)((function(){var t=Object(l.a)(e.newTopics).concat(a);t.length!==d.length&&j(t)}),[e.newTopics,d,a]),Object(c.useEffect)((function(){if(!1===w){b(e.username,(function(e,t){200===t?(v(e.next),o(e.results),y(!0)):alert("There was an error")}))}}),[a,w,y,e.username]);return Object(f.jsxs)(r.a.Fragment,{children:[d.map((function(e,t){return Object(f.jsx)(m,{topic:e,className:"text-center my-5 py-5 border mx-auto bg-white text-dark rounded"},"".concat(t,"-{item.id}"))})),null!==h&&Object(f.jsx)("button",{onClick:function(t){if(t.preventDefault(),null!==h){b(e.username,(function(e,t){if(200===t){v(e.next);var n=Object(l.a)(d).concat(e.results);o(n),j(n)}else alert("There was an error")}),h)}},className:"btn btn-outline-primary",children:" Load Next "})]})}function v(e){var t=r.a.createRef(),n=e.didTopic,c=function(e,t){201===t?n(e):(console.log(e),alert("An error occurred please try again."))};return Object(f.jsx)("div",{className:e.className,children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;d("POST","/topics/new_topic/",c,{post_topic:n}),t.current.value=""},children:[Object(f.jsx)("textarea",{ref:t,required:!0,className:"form-control form-control-sm",name:"topic"}),Object(f.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Topic"})]})})}function g(e){var t=window.location.pathname.match(Object(p.a)(/([0-9]+)/,{topicid:1})),n=t?t.groups.topicid:-1,c=r.a.createRef(),a=e.didEntry,o=function(e,t){201===t?a(e):(console.log(e),alert("An error occurred please try again."))};return Object(f.jsx)("div",{className:e.className,children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=c.current.value;d("POST","/topics/new_entry/",o,{topic:n,post_entry:t}),c.current.value=""},children:[Object(f.jsx)("textarea",{ref:c,required:!0,className:"form-control form-control-sm",name:"entry"}),Object(f.jsx)("button",{type:"submit",className:"btn btn-primary my-3",children:"Entry"})]})})}function x(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),r=n[0],a=n[1],o="false"!==e.canTopic;return Object(f.jsxs)("div",{className:"fw-bold",children:[!0===o&&Object(f.jsx)(v,{didTopic:function(e){var t=Object(l.a)(r);t.unshift(e),a(t)},className:"col-12 mb-3"}),Object(f.jsx)(h,Object(i.a)({newTopics:r},e))]})}function w(e){var t=e.topicId,n=Object(c.useState)(!1),r=Object(u.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(null),d=Object(u.a)(s,2),b=d[0],p=d[1],h=function(e,t){200===t?p(e):alert("There was an error finding your topic.")};Object(c.useEffect)((function(){!1===a&&(j(t,h),o(!0))}),[t,a,o]);var v=Object(c.useState)([]),x=Object(u.a)(v,2),w=x[0],y=x[1],N="false"!==t.canEntry;return Object(f.jsxs)("div",{children:[null===b?null:Object(f.jsx)(m,{topic:b,className:"fw-bold text-center"}),!0===N&&Object(f.jsx)(g,{didEntry:function(e){var t=Object(l.a)(w);t.unshift(e),y(t)},className:"col-12 mb-3"}),null===b?null:Object(f.jsx)(O,Object(i.a)({newEntries:w},b))]})}var y=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(f.jsxs)("p",{children:["Edit ",Object(f.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(f.jsx)("div",{children:Object(f.jsx)(x,{})}),Object(f.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},T=document.getElementById("root");T&&o.a.render(Object(f.jsx)(y,{}),T);var E=r.a.createElement,S=document.getElementById("Learning-Log");S&&o.a.render(E(x,S.dataset),S),document.querySelectorAll(".learning_posts-detail").forEach((function(e){o.a.render(E(w,e.dataset),e)})),N()}},[[17,1,2]]]);
//# sourceMappingURL=main.3bbd29d0.chunk.js.map