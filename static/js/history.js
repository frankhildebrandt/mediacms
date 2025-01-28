!function(){"use strict";var e,t={34638:function(e,t,n){var r=n(92541),o=n(10376);(0,r.X)("page-history",o.HistoryPage)},84234:function(e,t,n){n.r(t),n.d(t,{CircleIconButton:function(){return r.M},FilterOptions:function(){return o.j},FiltersToggleButton:function(){return i._},MaterialIcon:function(){return u.O},NavigationContentApp:function(){return a.o},NavigationMenuList:function(){return c.S},Notifications:function(){return l.T},NumericInputWithUnit:function(){return s.O},PopupMain:function(){return f.W8},PopupTop:function(){return f.HF},SpinnerLoader:function(){return p.i},UserThumbnail:function(){return y.q}});var r=n(17714),o=n(47446),i=n(2915),u=n(2299),a=n(72917),c=n(5671),l=n(72436),s=n(15517),f=n(60940),p=n(26309),y=n(86142)},40824:function(e,t,n){n.r(t),n.d(t,{LazyLoadItemListAsync:function(){return m}}),n(92070),n(52004),n(28407),n(56394),n(38288),n(55677),n(92129),n(24655),n(20288),n(54458),n(23675),n(74517),n(99751),n(38833),n(10815),n(55090),n(79174);var r=n(35466),o=n(98578),i=n(62546),u=n(58982),a=n(32832),c=n(83632),l=n(28986);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e){var t,n,u=(t=(0,i.useItemListLazyLoad)(e),n=13,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=u[0],f=u[1],p=u[2],m=u[3],g=u[4],h=u[5],b=u[6],v=u[7],O=u[8],P=u[9],w=u[10],j=u[11],S=u[12];return(0,r.useEffect)((function(){return m(new l.g(e.pageItems,e.maxItems,e.firstItemRequestUrl,e.requestUrl,h,b)),o.PageStore.on("window_scroll",v),o.PageStore.on("document_visibility_change",O),v(),function(){o.PageStore.removeListener("window_scroll",v),o.PageStore.removeListener("document_visibility_change",O),p&&(p.cancelAll(),m(null))}}),[]),f?s.length?r.createElement("div",{className:g.listOuter},j(),r.createElement("div",{ref:P,className:"items-list-wrap"},r.createElement("div",{ref:w,className:g.list},s.map((function(t,n){return r.createElement(c.H,y({key:n},(0,c.j)(e,t,n)))})))),S()):null:r.createElement(a.K,{className:g.listOuter})}m.propTypes=f({},u.ItemListAsync.propTypes),m.defaultProps=f(f({},u.ItemListAsync.defaultProps),{},{pageItems:2})},36191:function(e,t,n){n.r(t),n.d(t,{PageHeader:function(){return r.m},PageMain:function(){return o.r},PageSidebar:function(){return i.$},PageSidebarContentOverlay:function(){return u.a}});var r=n(97038),o=n(29198),i=n(22947),u=n(41542)},31567:function(e,t,n){n.r(t),n.d(t,{ProfileHistoryPage:function(){return b}}),n(25101),n(13080),n(52004),n(28407),n(56394),n(38288),n(55677),n(92129),n(24655);var r=n(35466),o=n(3074),i=n.n(o),u=n(43613),a=n(98578),c=n(25910),l=n(68556),s=n(26970),f=n(40824);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(b,e);var t,n,o,i,p=(o=b,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(o);if(i){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(t=p.call(this,e,"author-history")).state={resultsCount:null},t.getCountFunc=t.getCountFunc.bind(g(t)),t}return t=b,(n=[{key:"getCountFunc",value:function(e){this.setState({resultsCount:e})}},{key:"pageContent",value:function(){var e=this;return[this.state.author?r.createElement(l.Z,{key:"ProfilePagesHeader",author:this.state.author,type:"history"}):null,this.state.author?r.createElement(s.Z,{key:"ProfilePagesContent"},r.createElement(u.ApiUrlConsumer,null,(function(t){return r.createElement(c.MediaListWrapper,{title:e.props.title+(null!==e.state.resultsCount?" ("+e.state.resultsCount+")":""),className:"items-list-ver"},r.createElement(f.LazyLoadItemListAsync,{itemsCountCallback:e.getCountFunc,requestUrl:t.user.history,hideAuthor:!a.PageStore.get("config-media-item").displayAuthor,hideViews:!a.PageStore.get("config-media-item").displayViews,hideDate:!a.PageStore.get("config-media-item").displayPublishDate,canEdit:!1}))}))):null]}}])&&y(t.prototype,n),b}(n(64982).a);b.propTypes={title:i().string.isRequired},b.defaultProps={title:"History"}},10376:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.HistoryPage=t.AnonymousHistoryPage=void 0;var u=i(n(35466)),a=n(43613),c=n(98578),l=n(62546),s=n(6484),f=n(25910),p=n(40824),y=n(31567),d=n(37637),m=n(6484);t.AnonymousHistoryPage=function(e){var t=e.id,n=void 0===t?"history-media":t,r=e.title,o=void 0===r?m.translateString("History"):r,i=u.useState(null),l=i[0],s=i[1];return u.default.createElement(d.Page,{id:n},u.default.createElement(a.ApiUrlConsumer,null,(function(e){return u.default.createElement(f.MediaListWrapper,{title:o+(null!==l?" ("+l+")":""),className:"search-results-wrap items-list-hor"},u.default.createElement(p.LazyLoadItemListAsync,{singleLinkContent:!1,horizontalItemsOrientation:!0,itemsCountCallback:s,requestUrl:e.user.history,hideViews:!c.PageStore.get("config-media-item").displayViews,hideAuthor:!c.PageStore.get("config-media-item").displayAuthor,hideDate:!c.PageStore.get("config-media-item").displayPublishDate}))})))},t.HistoryPage=function(){var e=l.useUser(),n=e.username,r=e.isAnonymous||!c.PageStore.get("config-options").pages.profile.includeHistory;return r||(s.addClassname(document.getElementById("page-history"),"profile-page-history"),window.MediaCMS.profileId=n),r?u.default.createElement(t.AnonymousHistoryPage,null):u.default.createElement(y.ProfileHistoryPage,null)}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}r.m=t,e=[],r.O=function(t,n,o,i){if(!n){var u=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<n.length;c++)(!1&i||u>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(a=!1,i<u&&(u=i));a&&(e.splice(l--,1),t=o())}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,o,i]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=908,function(){var e={908:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,u=n[0],a=n[1],c=n[2],l=0;for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(c)var s=c(r);for(t&&t(n);l<u.length;l++)i=u[l],r.o(e,i)&&e[i]&&e[i][0](),e[u[l]]=0;return r.O(s)},n=self.webpackChunkmediacms_frontend=self.webpackChunkmediacms_frontend||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[431],(function(){return r(34638)}));o=r.O(o)}();