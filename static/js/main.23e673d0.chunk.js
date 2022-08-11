(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),o=t(6),r=t.n(o),c=(t(16),t(3));t(18);var s=function(e){return n.a.createElement("div",{style:{height:"35px"}},e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type))," :",e.alert.msg))},i=t(4);function m(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(i.b,{className:"navbar-brand",to:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.b,{className:"nav-link",to:"/about"},e.aboutText))))),n.a.createElement("div",{className:"form-check form-switch"},n.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode}),n.a.createElement("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault"},"Dark Mode")))}function d(e){var a=Object(l.useState)(""),t=Object(c.a)(a,2),o=t[0],r=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{style:{color:"light"===e.mode?"black":"white"}},e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"inputBox",className:"form-label"}),n.a.createElement("textarea",{className:"form-control",onChange:function(e){r(e.target.value)},value:o,id:"inputBox",rows:"5",placeholder:"Enter text here",style:{backgroundColor:"light"===e.mode?"white":"#283158",color:"light"===e.mode?"black":"white"}})),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var a=o.toUpperCase();r(a),e.showAlert("TEXT CHANGED TO UPPERCASE","success")}},"Convert to UpperCase"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-1 my-1",onClick:function(){for(var a=o.toLowerCase().split(" "),t=0;t<a.length;t++)a[t]=a[t].charAt(0).toUpperCase()+a[t].slice(1);var l=a.join(" ");r(l),e.showAlert("Text Changed To Title Case","success")}},"Convert to Title Case"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-1 my-3",onClick:function(){var a=o.toLowerCase();r(a),e.showAlert("text changed to lowercase","success")}},"Convert to Lower Case"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-1 my-1",onClick:function(){r(""),e.showAlert("Cleared Text","success")}},"Clear Text"),n.a.createElement("button",{disabled:0===o.length,className:"btn btn-primary mx-1 my-1",onClick:function(){for(var a=o.split(" "),t=0;t<a.length;t++){for(var l=a[t],n="",c=0;c<l.length;c++)l.charAt(c)===l.charAt(c).toUpperCase()?n+=l.charAt(c).toLowerCase():n+=l.charAt(c).toUpperCase();a[t]=n}var s=a.join(" ");r(s),e.showAlert("Inversed Case of the text","success")}},"Inverse Case"),n.a.createElement("div",{className:"container",style:{color:"light"===e.mode?"black":"white"}},n.a.createElement("h4",{className:"my-3 mx-10"},"Your Text Summary"),n.a.createElement("p",null,o.split(" ").filter(function(e){return 0!==e.length}).length,n.a.createElement("i",null," words")," ",n.a.createElement("b",null,"and "),o.length,n.a.createElement("i",null," characters")),n.a.createElement("p",null,.008*o.split(" ").filter(function(e){return 0!==e.length}).length,n.a.createElement("i",null," Minutes to read")),n.a.createElement("h3",null,"Preview"),n.a.createElement("p",null,o)))}var h=t(0);function u(e){var a={color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"rgb(66 47 95)":"white"};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h3",{className:"mx-10 my-10"},"About Us"),n.a.createElement("div",{className:"accordion",id:"accordionExample",style:a},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:a},n.a.createElement("strong",null,"Accordion Item #1"))),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},n.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:a},n.a.createElement("strong",null,"Accordion Item #2"))),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:a},n.a.createElement("strong",null,"Accordion Item #3"))),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the"," ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))))))}var b=function(){var e=Object(l.useState)("light"),a=Object(c.a)(e,2),t=a[0],o=a[1],r=Object(l.useState)(null),b=Object(c.a)(r,2),p=b[0],g=b[1],E=function(e,a){g({msg:e,type:a}),setTimeout(function(){g(null)},1200)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null,n.a.createElement(m,{title:"TextUtils",aboutText:"About Us",mode:t,toggleMode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="#340e44",E("Dark Mode Enabled","success"),document.title="TextUtils - Dark Mode"):(o("light"),document.body.style.backgroundColor="white",E("Dark Mode Disabled","danger"),document.title="TextUtils - Light Mode")}}),n.a.createElement(s,{alert:p}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/",element:n.a.createElement(d,{heading:"Enter the text to analyze",showAlert:E,mode:t})}),n.a.createElement(h.a,{exact:!0,path:"/about",element:n.a.createElement(u,{mode:t})})))))};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)))},7:function(e,a,t){e.exports=t(20)}},[[7,2,1]]]);
//# sourceMappingURL=main.23e673d0.chunk.js.map