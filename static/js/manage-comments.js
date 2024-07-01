!function(){"use strict";var e,t={5381:function(e,t,n){var r=n(2541),o=(n(5101),n(3080),n(2004),n(8407),n(6394),n(8288),n(5677),n(2129),n(4655),n(5466)),i=n(3074),a=n.n(i),u=n(3613),l=n(541),c=n(5910),s=n(9700);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return e+"?"+t+(""===t?"":"&")+"page="+n}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(f,e);var t,n,r,i,a=(r=f,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(i){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(t=a.call(this,e,"manage-comments")).state={resultsCount:null,requestUrl:u.ApiUrlContext._currentValue.manage.comments,currentPage:1,sortingArgs:"",sortBy:"add_date",ordering:"desc",refresh:0},t.getCountFunc=t.getCountFunc.bind(y(t)),t.onTablePageChange=t.onTablePageChange.bind(y(t)),t.onColumnSortClick=t.onColumnSortClick.bind(y(t)),t.onItemsRemoval=t.onItemsRemoval.bind(y(t)),t.onItemsRemovalFail=t.onItemsRemovalFail.bind(y(t)),t}return t=f,(n=[{key:"onTablePageChange",value:function(e,t){this.setState({currentPage:t,requestUrl:v(u.ApiUrlContext._currentValue.manage.comments,this.state.sortingArgs,t)})}},{key:"getCountFunc",value:function(e){this.setState({resultsCount:e})}},{key:"onColumnSortClick",value:function(e,t){var n="sort_by="+e+"&ordering="+t;this.setState({sortBy:e,ordering:t,sortingArgs:n,requestUrl:v(u.ApiUrlContext._currentValue.manage.comments,n,this.state.currentPage)})}},{key:"onItemsRemoval",value:function(e){this.setState({resultsCount:null,refresh:this.state.refresh+1,requestUrl:u.ApiUrlContext._currentValue.manage.comments},(function(){e?l.PageActions.addNotification("The comments deleted successfully.","commentsRemovalSucceed"):l.PageActions.addNotification("The comment deleted successfully.","commentRemovalSucceed")}))}},{key:"onItemsRemovalFail",value:function(e){e?l.PageActions.addNotification("The comments removal failed. Please try again.","commentsRemovalFailed"):l.PageActions.addNotification("The comment removal failed. Please try again.","commentRemovalFailed")}},{key:"pageContent",value:function(){return o.createElement(c.MediaListWrapper,{title:this.props.title+(null===this.state.resultsCount?"":" ("+this.state.resultsCount+")"),className:"search-results-wrap items-list-hor"},o.createElement(s.d,{pageItems:50,manageType:"comments",key:this.state.requestUrl+"["+this.state.refresh+"]",itemsCountCallback:this.getCountFunc,requestUrl:this.state.requestUrl,onPageChange:this.onTablePageChange,sortBy:this.state.sortBy,ordering:this.state.ordering,onRowsDelete:this.onItemsRemoval,onRowsDeleteFail:this.onItemsRemovalFail,onClickColumnSort:this.onColumnSortClick}))}}])&&m(t.prototype,n),f}(n(8204).T);g.propTypes={title:a().string.isRequired},g.defaultProps={title:"Manage comments"},(0,r.X)("page-manage-comments",g)},7446:function(e,t,n){n(2070),n(5466);var r=n(3074),o=n.n(r);n(2299),o().string.isRequired,o().string.isRequired,o().func.isRequired},2915:function(e,t,n){n(2004),n(8407),n(6394),n(8288),n(5677),n(2129),n(4655),n(288),n(4458),n(3675);var r=n(5466),o=n(3074),i=n.n(o),a=n(2299);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){var t,n,o=(t=(0,r.useState)(e.active),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],l=o[1];return r.createElement("div",{className:"mi-filters-toggle"},r.createElement("button",{className:i?"active":"","aria-label":"Filter",onClick:function(){l(!i),void 0!==e.onClick&&e.onClick()}},r.createElement(a.O,{type:"filter_list"}),r.createElement("span",{className:"filter-button-label"},r.createElement("span",{className:"filter-button-label-text"},"FILTERS"))))}l.propTypes={onClick:i().func,active:i().bool},l.defaultProps={active:!1}},4234:function(e,t,n){n.d(t,{CircleIconButton:function(){return r.M},MaterialIcon:function(){return o.O},NavigationMenuList:function(){return i.S},Notifications:function(){return a.T},PopupMain:function(){return u.W8},SpinnerLoader:function(){return l.i}});var r=n(7714),o=(n(7446),n(2915),n(2299)),i=(n(2917),n(5671)),a=n(2436),u=(n(5517),n(940)),l=n(6309);n(6142)},940:function(e,t,n){n.d(t,{W8:function(){return i}});var r=n(5466),o=r.forwardRef((function(e,t){return void 0!==e.children?r.createElement("div",{ref:t,className:"popup"+(void 0!==e.className?" "+e.className:""),style:e.style},e.children):null}));function i(e){return void 0!==e.children?r.createElement("div",{className:"popup-main"+(void 0!==e.className?" "+e.className:""),style:e.style},e.children):null}t.ZP=o}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}r.m=t,e=[],r.O=function(t,n,o,i){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],i=e[c][2];for(var u=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(u=!1,i<a&&(a=i));u&&(e.splice(c--,1),t=o())}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=800,function(){var e={800:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],u=n[1],l=n[2],c=0;for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(l)var s=l(r);for(t&&t(n);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[a[c]]=0;return r.O(s)},n=self.webpackChunkmediacms_frontend=self.webpackChunkmediacms_frontend||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[431],(function(){return r(5381)}));o=r.O(o)}();