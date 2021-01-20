(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{66:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),i=(r(0),r(85)),a={id:"behaviour",title:"Behaviour"},c={unversionedId:"behaviour",id:"version-6.1.x/behaviour",isDocsHomePage:!1,title:"Behaviour",description:"1. Any request passing through the proxy (and not matched by --skip-auth-regex) is checked for the proxy's session cookie (--cookie-name) (or, if allowed, a JWT token - see --skip-jwt-bearer-tokens).",source:"@site/versioned_docs/version-6.1.x/behaviour.md",slug:"/behaviour",permalink:"/oauth2-proxy/docs/behaviour",editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/versioned_docs/version-6.1.x/behaviour.md",version:"6.1.x",sidebar:"version-6.1.x/docs",previous:{title:"Installation",permalink:"/oauth2-proxy/docs/"},next:{title:"Overview",permalink:"/oauth2-proxy/docs/configuration/overview"}},s=[],u={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Any request passing through the proxy (and not matched by ",Object(i.b)("inlineCode",{parentName:"li"},"--skip-auth-regex"),") is checked for the proxy's session cookie (",Object(i.b)("inlineCode",{parentName:"li"},"--cookie-name"),") (or, if allowed, a JWT token - see ",Object(i.b)("inlineCode",{parentName:"li"},"--skip-jwt-bearer-tokens"),")."),Object(i.b)("li",{parentName:"ol"},"If authentication is required but missing then the user is asked to log in and redirected to the authentication provider (unless it is an Ajax request, i.e. one with ",Object(i.b)("inlineCode",{parentName:"li"},"Accept: application/json"),", in which case 401 Unauthorized is returned)"),Object(i.b)("li",{parentName:"ol"},"After returning from the authentication provider, the oauth tokens are stored in the configured session store (cookie, redis, ...) and a cookie is set"),Object(i.b)("li",{parentName:"ol"},"The request is forwarded to the upstream server with added user info and authentication headers (depending on the configuration)")),Object(i.b)("p",null,"Notice that the proxy also provides a number of useful ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/oauth2-proxy/docs/features/endpoints"}),"endpoints"),"."))}p.isMDXComponent=!0},85:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,f=l["".concat(a,".").concat(b)]||l[b]||d[b]||i;return r?o.a.createElement(f,c(c({ref:t},u),{},{components:r})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);