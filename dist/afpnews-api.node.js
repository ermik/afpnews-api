!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AfpNews=t():e.AfpNews=t()}(global,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.w={},r(r.s=16)}([function(e,t){e.exports=require("babel-runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("babel-runtime/core-js/promise")},function(e,t){e.exports=require("babel-runtime/regenerator")},function(e,t){e.exports=require("babel-runtime/core-js/object/assign")},function(e,t){e.exports=require("btoa")},function(e,t){e.exports=require("lucene-query-parser")},function(e,t){e.exports=require("babel-runtime/helpers/toConsumableArray")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildQuery=void 0;var n,a=c(r(2)),u=c(r(1)),s=c(r(0)),o=c(r(6)),i=(t.buildQuery=(n=(0,s.default)(a.default.mark(function e(t){var r,n;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t&&""!==t){e.next=3;break}return e.abrupt("return",[]);case 3:return r=(0,i.parse)(t),n=f(r),e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",u.default.reject(e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])})),function(e){return n.apply(this,arguments)}),r(5));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return"<implicit>"===e.operator?[].concat((0,o.default)(f(e.left)),(0,o.default)(f(e.right))):"AND"===e.operator?[{and:[].concat((0,o.default)(f(e.left)),(0,o.default)(f(e.right)))}]:"OR"===e.operator?[{or:[].concat((0,o.default)(f(e.left)),(0,o.default)(f(e.right)))}]:e.operator?void 0:e.left?[].concat((0,o.default)(f(e.left))):"-"===e.prefix?[{exclude:[{name:"<implicit>"===e.field?"news":e.field,contains:[e.term]}]}]:[{name:"<implicit>"===e.field?"news":e.field,in:[e.term.toLowerCase()]}]}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.defaultSearchParams={products:["news","multimedia","photo"],langs:["fr","en","es","de","pt","ar"],urgencies:[1,2,3,4,5],queryString:"",size:10,dateFrom:"now-1M",dateTo:"now",sortField:"published",sortOrder:"desc"}},function(e,t){e.exports=require("axios")},function(e,t){e.exports=require("form-data")},function(e,t){e.exports=require("babel-runtime/helpers/typeof")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.post=t.get=void 0;var n,a,u=l(r(3)),s=l(r(11)),o=l(r(2)),i=l(r(1)),c=l(r(0)),f=(t.get=(n=(0,c.default)(o.default.mark(function e(t,r){var n,a=r.params,u=r.headers;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.default)({method:"get",url:t,params:a,headers:u});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",i.default.reject(e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])})),function(e,t){return n.apply(this,arguments)}),t.post=(a=(0,c.default)(o.default.mark(function e(t){var r,n,a,c,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=arguments[2],h=d.formData,k=d.headers;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"object"!==(void 0===h?"undefined":(0,s.default)(h))){e.next=11;break}for(n in r=new f.default,h)r.append(n,h[n]);return"function"==typeof r.getHeaders&&(k=(0,u.default)({},k,r.getHeaders())),e.next=7,p.default.post(t,r,{headers:k});case 7:return a=e.sent,e.abrupt("return",a.data);case 11:return e.next=13,p.default.post(t,l,{headers:k});case 13:return c=e.sent,e.abrupt("return",c.data);case 15:e.next=20;break;case 17:return e.prev=17,e.t0=e.catch(0),e.abrupt("return",i.default.reject(e.t0));case 20:case"end":return e.stop()}},e,this,[[0,17]])})),function(e){return a.apply(this,arguments)}),l(r(10))),p=l(r(9));function l(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=require("url")},function(e,t){e.exports=require("babel-runtime/helpers/createClass")},function(e,t){e.exports=require("babel-runtime/helpers/classCallCheck")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=h(r(3)),a=h(r(2)),u=h(r(1)),s=h(r(0)),o=h(r(15)),i=h(r(14)),c=r(13),f=r(12),p=r(8),l=r(7),d=h(r(4));function h(e){return e&&e.__esModule?e:{default:e}}var k=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.apiKey,n=t.clientId,a=t.clientSecret,u=t.baseUrl;(0,o.default)(this,e),this.apiKey={apiKey:r,clientId:n,clientSecret:a},this.baseUrl=u||"https://api.afp.com",this.resetToken()}return(0,i.default)(e,[{key:"authenticate",value:function(){var e=(0,s.default)(a.default.mark(function e(t){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.apiKey){e.next=16;break}if(!t){e.next=5;break}return e.abrupt("return",this.requestAuthenticatedToken(t));case 5:if(null!==this.token){e.next=9;break}throw new Error("You need to authenticate with credentials once");case 9:if(!1!==this.isTokenValid){e.next=13;break}return e.abrupt("return",this.requestRefreshToken());case 13:return e.abrupt("return",u.default.resolve(this.token));case 14:e.next=21;break;case 16:if(!t){e.next=20;break}throw new Error("You need an api key to make authenticated requests");case 20:return e.abrupt("return",this.requestAnonymousToken());case 21:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"requestAnonymousToken",value:function(){var e=(0,s.default)(a.default.mark(function e(){var t;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.get)(this.authUrl,{params:{grant_type:"anonymous"},json:!0});case 3:return t=e.sent,e.abrupt("return",this.parseToken(t));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",u.default.reject(e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"requestAuthenticatedToken",value:function(){var e=(0,s.default)(a.default.mark(function e(t){var r,n=t.username,s=t.password;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.post)(this.authUrl,{},{formData:{username:n,password:s,grant_type:"password"},headers:{Authorization:"Basic "+this.apiKey},json:!0});case 3:return r=e.sent,e.abrupt("return",this.parseToken(r));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",u.default.reject(e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},{key:"requestRefreshToken",value:function(){var e=(0,s.default)(a.default.mark(function e(){var t;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.post)(this.authUrl,{},{formData:{refresh_token:this.token.refreshToken,grant_type:"refresh_token"},headers:{Authorization:"Basic "+this.apiKey}});case 3:return t=e.sent,e.abrupt("return",this.parseToken(t));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",u.default.reject(e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"parseToken",value:function(e){var t=e.access_token,r=e.refresh_token,n=e.expires_in;return this.token={accessToken:t,refreshToken:r,tokenExpires:+new Date+1e3*n},u.default.resolve(this.token)}},{key:"resetToken",value:function(){this.token={accessToken:null,refreshToken:null,tokenExpires:null}}},{key:"search",value:function(){var e=(0,s.default)(a.default.mark(function e(t){var r,s,o,i,c,p,d,h,k,b,v,y,x,m,w,_,g;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,n.default)({},this.defaultSearchParams,t),s=r.products,o=r.size,i=r.dateFrom,c=r.dateTo,p=r.urgencies,d=r.queryString,h=r.langs,k=r.sortField,b=r.sortOrder,e.next=3,this.authenticate();case 3:return(v={and:[],fullText:!0}).and.push({name:"lang",in:h}),v.and.push({name:"product",in:s}),v.and.push({name:"urgency",in:p}),e.prev=7,e.next=10,(0,l.buildQuery)(d);case 10:y=e.sent,v.and=v.and.concat(y),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),v=d;case 17:return x={maxRows:o,sortField:k,sortOrder:b,dateRange:{from:i,to:c},query:v},e.prev=18,e.next=21,(0,f.post)(this.searchUrl,x,{headers:{Authorization:"Bearer "+this.token.accessToken,"Content-Type":"application/json"}});case 21:return m=e.sent,w=m.response,_=w.docs,g=w.numFound,e.abrupt("return",u.default.resolve({documents:_||[],count:g}));case 26:return e.prev=26,e.t1=e.catch(18),e.abrupt("return",u.default.reject(e.t1));case 29:case"end":return e.stop()}},e,this,[[7,14],[18,26]])}));return function(t){return e.apply(this,arguments)}}()},{key:"authUrl",get:function(){return(0,c.resolve)(this.baseUrl,"/oauth/token")}},{key:"apiKey",get:function(){return this._apiKey},set:function(e){var t=e.apiKey,r=e.clientId,n=e.clientSecret;this._apiKey=r&&n?(0,d.default)(r+":"+n):t}},{key:"isTokenValid",get:function(){return this.token&&this.token.tokenExpires>+new Date}},{key:"token",get:function(){return this._accessToken&&this._tokenExpires&&this._refreshToken?{accessToken:this._accessToken,tokenExpires:this._tokenExpires,refreshToken:this._refreshToken}:null},set:function(e){var t=e.accessToken,r=e.refreshToken,n=e.tokenExpires;this._accessToken=t,this._refreshToken=r,this._tokenExpires=n}},{key:"searchUrl",get:function(){return(0,c.resolve)(this.baseUrl,"/v1/api/search")}},{key:"defaultSearchParams",get:function(){return p.defaultSearchParams}},{key:"buildQuery",get:function(){return l.buildQuery}}]),e}();t.default=k}]).default});