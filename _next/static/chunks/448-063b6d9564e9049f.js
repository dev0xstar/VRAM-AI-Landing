(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[448],{5924:function(e,i,o){"use strict";i.Z=function(){for(var e,i,o=0,n="";o<arguments.length;)(e=arguments[o++])&&(i=function r(e){var i,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e){if(Array.isArray(e))for(i=0;i<e.length;i++)e[i]&&(o=r(e[i]))&&(n&&(n+=" "),n+=o);else for(i in e)e[i]&&(n&&(n+=" "),n+=i)}return n}(e))&&(n&&(n+=" "),n+=i);return n}},5710:function(e,i,o){"use strict";o.d(i,{PB:function(){return NextSeo}});var n=o(5271),s=o(3992),a=o.n(s);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var l=["keyOverride"],h={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},buildOpenGraphMediaTags=function(e,i,o){void 0===i&&(i=[]);var s=void 0===o?{}:o,a=s.defaultWidth,l=s.defaultHeight;return i.reduce(function(i,o,s){return i.push(n.createElement("meta",{key:"og:"+e+":0"+s,property:"og:"+e,content:o.url})),o.alt&&i.push(n.createElement("meta",{key:"og:"+e+":alt0"+s,property:"og:"+e+":alt",content:o.alt})),o.secureUrl&&i.push(n.createElement("meta",{key:"og:"+e+":secure_url0"+s,property:"og:"+e+":secure_url",content:o.secureUrl.toString()})),o.type&&i.push(n.createElement("meta",{key:"og:"+e+":type0"+s,property:"og:"+e+":type",content:o.type.toString()})),o.width?i.push(n.createElement("meta",{key:"og:"+e+":width0"+s,property:"og:"+e+":width",content:o.width.toString()})):a&&i.push(n.createElement("meta",{key:"og:"+e+":width0"+s,property:"og:"+e+":width",content:a.toString()})),o.height?i.push(n.createElement("meta",{key:"og:"+e+":height"+s,property:"og:"+e+":height",content:o.height.toString()})):l&&i.push(n.createElement("meta",{key:"og:"+e+":height"+s,property:"og:"+e+":height",content:l.toString()})),i},[])},buildTags=function(e){var i,o,s,a,p,c=[];e.titleTemplate&&(h.templateTitle=e.titleTemplate);var u="";e.title?(u=e.title,h.templateTitle&&(u=h.templateTitle.replace(/%s/g,function(){return u}))):e.defaultTitle&&(u=e.defaultTitle),u&&c.push(n.createElement("title",{key:"title"},u));var d=e.noindex||h.noindex||e.dangerouslySetAllPagesToNoIndex,f=e.nofollow||h.nofollow||e.dangerouslySetAllPagesToNoFollow,m="";if(e.robotsProps){var g=e.robotsProps,v=g.nosnippet,y=g.maxSnippet,w=g.maxImagePreview,b=g.maxVideoPreview,E=g.noarchive,_=g.noimageindex,S=g.notranslate,k=g.unavailableAfter;m=(v?",nosnippet":"")+(y?",max-snippet:"+y:"")+(w?",max-image-preview:"+w:"")+(E?",noarchive":"")+(k?",unavailable_after:"+k:"")+(_?",noimageindex":"")+(b?",max-video-preview:"+b:"")+(S?",notranslate":"")}if(d||f?(e.dangerouslySetAllPagesToNoIndex&&(h.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(h.nofollow=!0),c.push(n.createElement("meta",{key:"robots",name:"robots",content:(d?"noindex":"index")+","+(f?"nofollow":"follow")+m}))):c.push(n.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+m})),e.description&&c.push(n.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&c.push(n.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&c.push(n.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){c.push(n.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&c.push(n.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&c.push(n.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&c.push(n.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&c.push(n.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(i=e.openGraph)&&i.title||u)&&c.push(n.createElement("meta",{key:"og:title",property:"og:title",content:(null==(a=e.openGraph)?void 0:a.title)||u})),(null!=(o=e.openGraph)&&o.description||e.description)&&c.push(n.createElement("meta",{key:"og:description",property:"og:description",content:(null==(p=e.openGraph)?void 0:p.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&c.push(n.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var G=e.openGraph.type.toLowerCase();c.push(n.createElement("meta",{key:"og:type",property:"og:type",content:G})),"profile"===G&&e.openGraph.profile?(e.openGraph.profile.firstName&&c.push(n.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&c.push(n.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&c.push(n.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&c.push(n.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===G&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,i){c.push(n.createElement("meta",{key:"book:author:0"+i,property:"book:author",content:e}))}),e.openGraph.book.isbn&&c.push(n.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&c.push(n.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,i){c.push(n.createElement("meta",{key:"book:tag:0"+i,property:"book:tag",content:e}))})):"article"===G&&e.openGraph.article?(e.openGraph.article.publishedTime&&c.push(n.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&c.push(n.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&c.push(n.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,i){c.push(n.createElement("meta",{key:"article:author:0"+i,property:"article:author",content:e}))}),e.openGraph.article.section&&c.push(n.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,i){c.push(n.createElement("meta",{key:"article:tag:0"+i,property:"article:tag",content:e}))})):("video.movie"===G||"video.episode"===G||"video.tv_show"===G||"video.other"===G)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,i){e.profile&&c.push(n.createElement("meta",{key:"video:actor:0"+i,property:"video:actor",content:e.profile})),e.role&&c.push(n.createElement("meta",{key:"video:actor:role:0"+i,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,i){c.push(n.createElement("meta",{key:"video:director:0"+i,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,i){c.push(n.createElement("meta",{key:"video:writer:0"+i,property:"video:writer",content:e}))}),e.openGraph.video.duration&&c.push(n.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&c.push(n.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,i){c.push(n.createElement("meta",{key:"video:tag:0"+i,property:"video:tag",content:e}))}),e.openGraph.video.series&&c.push(n.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(h.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(h.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&c.push.apply(c,buildOpenGraphMediaTags("image",e.openGraph.images,{defaultWidth:h.defaultOpenGraphImageWidth,defaultHeight:h.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(h.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(h.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&c.push.apply(c,buildOpenGraphMediaTags("video",e.openGraph.videos,{defaultWidth:h.defaultOpenGraphVideoWidth,defaultHeight:h.defaultOpenGraphVideoHeight})),e.openGraph.audio&&c.push.apply(c,buildOpenGraphMediaTags("audio",e.openGraph.audio)),e.openGraph.locale&&c.push(n.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&c.push(n.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&c.push(n.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var i,o,s=e.keyOverride,a=function(e,i){if(null==e)return{};var o,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],i.indexOf(o)>=0||(s[o]=e[o]);return s}(e,l);c.push(n.createElement("meta",_extends({key:"meta:"+(null!=(i=null!=(o=null!=s?s:a.name)?o:a.property)?i:a.httpEquiv)},a)))}),null!=(s=e.additionalLinkTags)&&s.length&&e.additionalLinkTags.forEach(function(e){var i;c.push(n.createElement("link",_extends({key:"link"+(null!=(i=e.keyOverride)?i:e.href)+e.rel},e)))}),c},WithHead=function(e){return n.createElement(a(),null,buildTags(e))},NextSeo=function(e){var i=e.title,o=e.themeColor,s=e.noindex,a=void 0!==s&&s,l=e.nofollow,h=e.robotsProps,p=e.description,c=e.canonical,u=e.openGraph,d=e.facebook,f=e.twitter,m=e.additionalMetaTags,g=e.titleTemplate,v=e.defaultTitle,y=e.mobileAlternate,w=e.languageAlternates,b=e.additionalLinkTags,E=e.useAppDir,_=void 0!==E&&E;return n.createElement(n.Fragment,null,_?buildTags({title:i,themeColor:o,noindex:a,nofollow:l,robotsProps:h,description:p,canonical:c,facebook:d,openGraph:u,additionalMetaTags:m,twitter:f,titleTemplate:g,defaultTitle:v,mobileAlternate:y,languageAlternates:w,additionalLinkTags:b}):n.createElement(WithHead,{title:i,themeColor:o,noindex:a,nofollow:l,robotsProps:h,description:p,canonical:c,facebook:d,openGraph:u,additionalMetaTags:m,twitter:f,titleTemplate:g,defaultTitle:v,mobileAlternate:y,languageAlternates:w,additionalLinkTags:b}))};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g")},5814:function(e,i){"use strict";var o,n;Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){for(var o in i)Object.defineProperty(e,o,{enumerable:!0,get:i[o]})}(i,{PrefetchKind:function(){return o},ACTION_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return a},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return h},ACTION_PREFETCH:function(){return p},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u}});let s="refresh",a="navigate",l="restore",h="server-patch",p="prefetch",c="fast-refresh",u="server-action";(n=o||(o={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),e.exports=i.default)},1829:function(e,i,o){"use strict";function getDomainLocale(e,i,o,n){return!1}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),o(3512),("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),e.exports=i.default)},3977:function(e,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return b}});let n=o(1351),s=n._(o(5271)),a=o(3866),l=o(2685),h=o(8215),p=o(1876),c=o(7661),u=o(473),d=o(2376),f=o(792),m=o(1829),g=o(8071),v=o(5814),y=new Set;function prefetch(e,i,o,n,s,a){if(!a&&!(0,l.isLocalURL)(i))return;if(!n.bypassPrefetchedCheck){let s=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,a=i+"%"+o+"%"+s;if(y.has(a))return;y.add(a)}let h=a?e.prefetch(i,s):e.prefetch(i,o,n);Promise.resolve(h).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,h.formatUrl)(e)}let w=s.default.forwardRef(function(e,i){let o,n;let{href:h,as:y,children:w,prefetch:b=null,passHref:E,replace:_,shallow:S,scroll:k,locale:G,onClick:T,onMouseEnter:O,onTouchStart:L,legacyBehavior:M=!1,...x}=e;o=w,M&&("string"==typeof o||"number"==typeof o)&&(o=s.default.createElement("a",null,o));let R=s.default.useContext(u.RouterContext),C=s.default.useContext(d.AppRouterContext),z=null!=R?R:C,A=!R,N=!1!==b,W=null===b?v.PrefetchKind.AUTO:v.PrefetchKind.FULL,{href:H,as:P}=s.default.useMemo(()=>{if(!R){let e=formatStringOrUrl(h);return{href:e,as:y?formatStringOrUrl(y):e}}let[e,i]=(0,a.resolveHref)(R,h,!0);return{href:e,as:y?(0,a.resolveHref)(R,y):i||e}},[R,h,y]),I=s.default.useRef(H),j=s.default.useRef(P);M&&(n=s.default.Children.only(o));let D=M?n&&"object"==typeof n&&n.ref:i,[U,V,F]=(0,f.useIntersection)({rootMargin:"200px"}),Y=s.default.useCallback(e=>{(j.current!==P||I.current!==H)&&(F(),j.current=P,I.current=H),U(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[P,D,H,F,U]);s.default.useEffect(()=>{z&&V&&N&&prefetch(z,H,P,{locale:G},{kind:W},A)},[P,H,V,G,N,null==R?void 0:R.locale,z,A,W]);let K={ref:Y,onClick(e){M||"function"!=typeof T||T(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),z&&!e.defaultPrevented&&function(e,i,o,n,a,h,p,c,u,d){let{nodeName:f}=e.currentTarget,m="A"===f.toUpperCase();if(m&&(function(e){let i=e.currentTarget,o=i.getAttribute("target");return o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,l.isLocalURL)(o)))return;e.preventDefault();let navigate=()=>{let e=null==p||p;"beforePopState"in i?i[a?"replace":"push"](o,n,{shallow:h,locale:c,scroll:e}):i[a?"replace":"push"](n||o,{forceOptimisticNavigation:!d,scroll:e})};u?s.default.startTransition(navigate):navigate()}(e,z,H,P,_,S,k,G,A,N)},onMouseEnter(e){M||"function"!=typeof O||O(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),z&&(N||!A)&&prefetch(z,H,P,{locale:G,priority:!0,bypassPrefetchedCheck:!0},{kind:W},A)},onTouchStart(e){M||"function"!=typeof L||L(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),z&&(N||!A)&&prefetch(z,H,P,{locale:G,priority:!0,bypassPrefetchedCheck:!0},{kind:W},A)}};if((0,p.isAbsoluteUrl)(P))K.href=P;else if(!M||E||"a"===n.type&&!("href"in n.props)){let e=void 0!==G?G:null==R?void 0:R.locale,i=(null==R?void 0:R.isLocaleDomain)&&(0,m.getDomainLocale)(P,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);K.href=i||(0,g.addBasePath)((0,c.addLocale)(P,e,null==R?void 0:R.defaultLocale))}return M?s.default.cloneElement(n,K):s.default.createElement("a",{...x,...K},o)}),b=w;("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),e.exports=i.default)},792:function(e,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=o(5271),s=o(5022),a="function"==typeof IntersectionObserver,l=new Map,h=[];function useIntersection(e){let{rootRef:i,rootMargin:o,disabled:p}=e,c=p||!a,[u,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),m=(0,n.useCallback)(e=>{f.current=e},[]);(0,n.useEffect)(()=>{if(a){if(c||u)return;let e=f.current;if(e&&e.tagName){let n=function(e,i,o){let{id:n,observer:s,elements:a}=function(e){let i;let o={root:e.root||null,margin:e.rootMargin||""},n=h.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(i=l.get(n)))return i;let s=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let i=s.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;i&&o&&i(o)})},e);return i={id:o,observer:a,elements:s},h.push(o),l.set(o,i),i}(o);return a.set(e,i),s.observe(e),function(){if(a.delete(e),s.unobserve(e),0===a.size){s.disconnect(),l.delete(n);let e=h.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&h.splice(e,1)}}}(e,e=>e&&d(e),{root:null==i?void 0:i.current,rootMargin:o});return n}}else if(!u){let e=(0,s.requestIdleCallback)(()=>d(!0));return()=>(0,s.cancelIdleCallback)(e)}},[c,o,i,u,f.current]);let g=(0,n.useCallback)(()=>{d(!1)},[]);return[m,u,g]}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),e.exports=i.default)},3992:function(e,i,o){e.exports=o(1247)},5024:function(e,i,o){e.exports=o(3977)},5289:function(e,i,o){e.exports=o(8527)},3988:function(e,i,o){"use strict";o.d(i,{Z:function(){return esm_useWindowSize}});var n=o(5271),esm_useEffectOnce=function(e){(0,n.useEffect)(e,[])},esm_useUnmount=function(e){var i=(0,n.useRef)(e);i.current=e,esm_useEffectOnce(function(){return function(){return i.current()}})},esm_useRafState=function(e){var i=(0,n.useRef)(0),o=(0,n.useState)(e),s=o[0],a=o[1],l=(0,n.useCallback)(function(e){cancelAnimationFrame(i.current),i.current=requestAnimationFrame(function(){a(e)})},[]);return esm_useUnmount(function(){cancelAnimationFrame(i.current)}),[s,l]},s="undefined"!=typeof window,esm_useWindowSize=function(e){var i=void 0===e?{}:e,o=i.initialWidth,a=i.initialHeight,l=i.onChange,h=esm_useRafState({width:s?window.innerWidth:void 0===o?1/0:o,height:s?window.innerHeight:void 0===a?1/0:a}),p=h[0],c=h[1];return(0,n.useEffect)(function(){if(s){var handler_1=function(){var e=window.innerWidth,i=window.innerHeight;c({width:e,height:i}),l&&l(e,i)};return function(e){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];e&&e.addEventListener&&e.addEventListener.apply(e,i)}(window,"resize",handler_1),function(){!function(e){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];e&&e.removeEventListener&&e.removeEventListener.apply(e,i)}(window,"resize",handler_1)}}},[]),p}},9425:function(e,i,o){"use strict";function t(e,i,o){return Math.max(e,Math.min(i,o))}o.d(i,{Z:function(){return Lenis}});let Animate=class Animate{advance(e){var i,o,n;if(!this.isRunning)return;let s=!1;if(this.lerp)this.value=(i=this.value,o=this.to,(1-(n=1-Math.exp(-(60*this.lerp)*e)))*i+n*o),Math.round(this.value)===this.to&&(this.value=this.to,s=!0);else{this.currentTime+=e;let i=t(0,this.currentTime/this.duration,1);s=i>=1;let o=s?1:this.easing(i);this.value=this.from+(this.to-this.from)*o}this.onUpdate?.(this.value,s),s&&this.stop()}stop(){this.isRunning=!1}fromTo(e,i,{lerp:o=.1,duration:n=1,easing:s=e=>e,onStart:a,onUpdate:l}){this.from=this.value=e,this.to=i,this.lerp=o,this.duration=n,this.easing=s,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=l}};let Dimensions=class Dimensions{constructor({wrapper:e,content:i,autoResize:o=!0,debounce:n=250}={}){var s;let a;this.wrapper=e,this.content=i,o&&(this.debouncedResize=(s=this.resize,function(){let e=arguments,i=this;clearTimeout(a),a=setTimeout(function(){s.apply(i,e)},n)}),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}};let Emitter=class Emitter{constructor(){this.events={}}emit(e,...i){let o=this.events[e]||[];for(let e=0,n=o.length;e<n;e++)o[e](...i)}on(e,i){return this.events[e]?.push(i)||(this.events[e]=[i]),()=>{this.events[e]=this.events[e]?.filter(e=>i!==e)}}off(e,i){this.events[e]=this.events[e]?.filter(e=>i!==e)}destroy(){this.events={}}};let n=100/6;let VirtualScroll=class VirtualScroll{constructor(e,{wheelMultiplier:i=1,touchMultiplier:o=1}){this.element=e,this.wheelMultiplier=i,this.touchMultiplier=o,this.touchStart={x:null,y:null},this.emitter=new Emitter,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,i){return this.emitter.on(e,i)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}onTouchStart=e=>{let{clientX:i,clientY:o}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=i,this.touchStart.y=o,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{let{clientX:i,clientY:o}=e.targetTouches?e.targetTouches[0]:e,n=-(i-this.touchStart.x)*this.touchMultiplier,s=-(o-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=i,this.touchStart.y=o,this.lastDelta={x:n,y:s},this.emitter.emit("scroll",{deltaX:n,deltaY:s,event:e})};onTouchEnd=e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:i,deltaY:o,deltaMode:s}=e;i*=1===s?n:2===s?this.windowWidth:1,o*=1===s?n:2===s?this.windowHeight:1,i*=this.wheelMultiplier,o*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:o,event:e})};onWindowResize=()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}};let Lenis=class Lenis{constructor({wrapper:e=window,content:i=document.documentElement,wheelEventsTarget:o=e,eventsTarget:n=o,smoothWheel:s=!0,syncTouch:a=!1,syncTouchLerp:l=.075,touchInertiaMultiplier:h=35,duration:p,easing:c=e=>Math.min(1,1.001-Math.pow(2,-10*e)),lerp:u=!p&&.1,infinite:d=!1,orientation:f="vertical",gestureOrientation:m="vertical",touchMultiplier:g=1,wheelMultiplier:v=1,autoResize:y=!0,__experimental__naiveDimensions:w=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:e,deltaY:i,event:o})=>{if(o.ctrlKey)return;let n=o.type.includes("touch"),s=o.type.includes("wheel");if(this.options.syncTouch&&n&&"touchstart"===o.type&&!this.isStopped&&!this.isLocked)return void this.reset();let a=0===e&&0===i,l="vertical"===this.options.gestureOrientation&&0===i||"horizontal"===this.options.gestureOrientation&&0===e;if(a||l)return;let h=o.composedPath();if((h=h.slice(0,h.indexOf(this.rootElement))).find(e=>{var i,o,a,l,h;return(null===(i=e.hasAttribute)||void 0===i?void 0:i.call(e,"data-lenis-prevent"))||n&&(null===(o=e.hasAttribute)||void 0===o?void 0:o.call(e,"data-lenis-prevent-touch"))||s&&(null===(a=e.hasAttribute)||void 0===a?void 0:a.call(e,"data-lenis-prevent-wheel"))||(null===(l=e.classList)||void 0===l?void 0:l.contains("lenis"))&&!(null===(h=e.classList)||void 0===h?void 0:h.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void o.preventDefault();if(this.isSmooth=this.options.syncTouch&&n||this.options.smoothWheel&&s,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();o.preventDefault();let p=i;"both"===this.options.gestureOrientation?p=Math.abs(i)>Math.abs(e)?i:e:"horizontal"===this.options.gestureOrientation&&(p=e);let c=n&&this.options.syncTouch,u=n&&"touchend"===o.type&&Math.abs(p)>5;u&&(p=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+p,Object.assign({programmatic:!1},c?{lerp:u?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-e),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:i,wheelEventsTarget:o,eventsTarget:n,smoothWheel:s,syncTouch:a,syncTouchLerp:l,touchInertiaMultiplier:h,duration:p,easing:c,lerp:u,infinite:d,gestureOrientation:m,orientation:f,touchMultiplier:g,wheelMultiplier:v,autoResize:y,__experimental__naiveDimensions:w},this.animate=new Animate,this.emitter=new Emitter,this.dimensions=new Dimensions({wrapper:e,content:i,autoResize:y}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=a||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new VirtualScroll(n,{touchMultiplier:g,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,i){return this.emitter.on(e,i)}off(e,i){return this.emitter.off(e,i)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){let i=e-(this.time||e);this.time=e,this.animate.advance(.001*i)}scrollTo(e,{offset:i=0,immediate:o=!1,lock:n=!1,duration:s=this.options.duration,easing:a=this.options.easing,lerp:l=!s&&this.options.lerp,onComplete:h,force:p=!1,programmatic:c=!0}={}){if(!this.isStopped&&!this.isLocked||p){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let o;if("string"==typeof e?o=document.querySelector(e):(null==e?void 0:e.nodeType)&&(o=e),o){if(this.options.wrapper!==window){let e=this.options.wrapper.getBoundingClientRect();i-=this.isHorizontal?e.left:e.top}let n=o.getBoundingClientRect();e=(this.isHorizontal?n.left:n.top)+this.animatedScroll}}if("number"==typeof e){if(e+=i,e=Math.round(e),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):e=t(0,e,this.limit),o)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(null==h||h(this));if(!c){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:a,lerp:l,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(e,i)=>{this.isScrolling=!0,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),c&&(this.targetScroll=e),i||this.emit(),i&&(this.reset(),this.emit(),null==h||h(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){var e;return this.options.infinite?(this.animatedScroll%(e=this.limit)+e)%e:this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,i){this.rootElement.classList.toggle(e,i),this.emitter.emit("className change",this)}}}}]);