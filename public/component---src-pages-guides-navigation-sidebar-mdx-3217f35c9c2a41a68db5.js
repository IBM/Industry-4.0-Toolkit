(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{408:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),r=a(417);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o,l={},s=(o="PageDescription",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),c={_frontmatter:l},b=r.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(b,i({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"One of the most important pieces of making a working site is to define your navigation items. This allows the theme to inform the SideNav component as well as the next/previous components at the bottom of each page.")),Object(n.b)("h2",{id:"yaml-data"},"Yaml data"),Object(n.b)("p",null,"Unfortunately, genenerating left nav contents purely from the pages directory has some fatal flaws. It makes it very difficult to establish the order of items or to hide items all together. In ",Object(n.b)("inlineCode",{parentName:"p"},"src/data/nav-items.yaml"),", you’ll list your nav items in order."),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"- title: Menu\n  pages:\n    - title: Page 1\n      path: /menu/Page-1\n    - title: Page 2\n      path: /menu/Page-2\n- title: Single Page\n  pages:\n    - path: /single-page\n")),Object(n.b)("p",null,"Some important things to note here:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You only need to link to the first tab if using page tabs"),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"title")," refers to the menu and item text, it’s allowed to have spaces"),Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"path")," refer to the relative path to the mdx file in your pages"),Object(n.b)("li",{parentName:"ul"},"You can make a ",Object(n.b)("inlineCode",{parentName:"li"},"Page/index.mdx")," file if you’d prefer to have assets in a folder.\nThe path would still just look like ",Object(n.b)("inlineCode",{parentName:"li"},"/Page"))))}p.isMDXComponent=!0},415:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/garage-developer-guide"}}}')},416:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":""}}}}}')},417:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(415),i=a(0),o=a.n(i),l=a(105),s=a.n(l),c=a(195),b=a(127),p=a(3),u=a.n(p),m=a(383),d=function(e){var t,a=e.title,r=e.tabs,i=void 0===r?[]:r;return Object(n.b)("div",{className:u()(m.pageHeader,(t={},t[m.withTabs]=i.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},a)))))},g=a(416),h=a(384),f=function(e){var t=e.relativePagePath,a=e.repository,r=g.data.site.siteMetadata.repository,i=a||r,o=i.baseUrl,l=o+"/tree/master"+i.subDirectory+"/src/pages"+t;return o?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},O=a(193),j=(a(59),a(26)),v=a(385);var y=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=s()(e,{lower:!0}),o=i===r,l=new RegExp(r+"(?!-)"),c=a.replace(l,i);return Object(n.b)("li",{key:e,className:u()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(n.b)(j.Link,{className:v.link,to:""+c},e))}));return Object(n.b)("div",{className:v.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:v.list},i))))))},r}(o.a.Component),N=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,l=t.frontmatter,p=void 0===l?{}:l,u=t.relativePagePath,m=t.titleType,g=p.tabs,h=p.title,j=p.theme,v=p.description,x=p.keywords,w=r.data.site.pathPrefix,P=w?i.pathname.replace(w,""):i.pathname,k=g?P.split("/").slice(-1)[0]||s()(g[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:j,pageTitle:h,pageDescription:v,pageKeywords:x,titleType:m},Object(n.b)(d,{title:o?Object(n.b)(o,null):h,label:"label",tabs:g}),g&&Object(n.b)(y,{slug:P,tabs:g,currentTab:k}),Object(n.b)(N.a,{padded:!0},a,Object(n.b)(f,{relativePagePath:u})),Object(n.b)(O.a,{pageContext:t,location:i,slug:P,tabs:g,currentTab:k}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-navigation-sidebar-mdx-3217f35c9c2a41a68db5.js.map