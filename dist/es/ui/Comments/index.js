import e,{useState as t,useEffect as n,useCallback as r}from"react";import{ApolloProvider as o,useQuery as a,useMutation as i,useSubscription as c}from"@apollo/react-hooks";import{gql as u}from"apollo-boost";import m from"date-fns/formatDistanceToNow";import l from"apollo-client";import{createHttpLink as s}from"apollo-link-http";import{InMemoryCache as p}from"apollo-cache-inmemory";import{setContext as d}from"apollo-link-context";import{WebSocketLink as f}from"apollo-link-ws";import{split as h}from"apollo-link";import{getMainDefinition as _}from"apollo-utilities";function y(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function E(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function A(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var j="textArea-module_textArea__jOs0v",S="textArea-module_normal__252TE",T="textArea-module_notFocused__39uMv",k="textArea-module_promo__6uESg";A(".textArea-module_textArea__jOs0v {\n  border-radius: 5px;\n  width: calc(100% - 20px - 10px - 2px);\n  padding: 10px;\n  margin: 5px;\n  border: 1.5px solid;\n  resize: none;\n  font-family: inherit;\n  font-size: inherit; }\n  .textArea-module_textArea__jOs0v:focus {\n    outline: none; }\n\n.textArea-module_message__356sA {\n  height: 70px;\n  width: 100%; }\n\n.textArea-module_normal__252TE {\n  border-color: #288ce4; }\n\n.textArea-module_notFocused__39uMv {\n  color: #b7b7b7 !important;\n  border-color: #b7b7b7 !important; }\n\n.textArea-module_error__3cOzU {\n  border-color: red !important; }\n\n.textArea-module_promo__6uESg {\n  float: right;\n  font-size: 10px;\n  margin-top: -3px;\n  margin-right: 5px; }\n");var P=e.memo((function(r){var o=r.onSubmit,a=r.setInputState,i=r.inputState,c=O(t(!1),2),u=c[0],m=c[1],l=O(t(""),2),s=l[0],p=l[1],d=!1;n((function(){var e;return"done"===i&&(e=setTimeout((function(){m(!1),a("ready")}),2e3)),function(){e&&clearTimeout(e)}}),[i,a]);var f=function(e){if(13===e.keyCode&&!1===e.shiftKey){d=!0;var t=s.trim();if(0===t.length)return;return o(t),void p("")}if(d)d=!1;else{var n=e.target.value||"";p(n)}},h=[j];return u?h.push(S):h.push(T),e.createElement(e.Fragment,null,["sending","done"].includes(i)?"DONE":e.createElement("textarea",{value:s,onChange:f,onKeyDown:f,onFocus:function(){return m(!0)},onBlur:function(){return m(!1)},className:h.join(" "),placeholder:"Join the discussion..."}),e.createElement("div",{className:k},"Power by ",e.createElement("a",{href:"https://chimp.click",rel:"noopener noreferrer",target:"_blank"},"chimp.click")))})),C="comment-module_comment__1VBGu",N="comment-module_headerWrapper__2zqKy",z="comment-module_profilePhoto__1OoMA",B="comment-module_name__1-F6F",D="comment-module_date__2-IUq",$="comment-module_text__1W5B4";A(".comment-module_comment__1VBGu {\n  display: flex;\n  padding: 5px;\n  text-align: start;\n  word-break: break-all; }\n  .comment-module_comment__1VBGu .comment-module_headerWrapper__2zqKy {\n    display: flex; }\n  .comment-module_comment__1VBGu .comment-module_profilePhoto__1OoMA {\n    height: 35px;\n    width: 35px;\n    border-radius: 5px;\n    margin-right: 5px; }\n  .comment-module_comment__1VBGu .comment-module_name__1-F6F {\n    color: #288ce4;\n    font-size: 10px;\n    font-weight: bold; }\n  .comment-module_comment__1VBGu .comment-module_date__2-IUq {\n    font-size: 10px;\n    padding-left: 5px; }\n  .comment-module_comment__1VBGu .comment-module_text__1W5B4 {\n    margin: 0px;\n    white-space: pre-wrap;\n    overflow-wrap: break-word; }\n");var F=function(t){var n=t.text,o=t.user,a=t.createdAt,i=t.users,c=t.authenticationType,u=r((function(){return m(new Date(a),{addSuffix:!0})}),[a]),l="simple"===c;return e.createElement("div",{className:C},i[o]&&i[o].image&&e.createElement("img",{className:z,src:i[o].image,alt:i[o].name}),e.createElement("div",null,e.createElement("div",{className:N},e.createElement("div",{className:B},l?o:i[o]?i[o].name:"Unknown user"),e.createElement("div",{className:D},u())),e.createElement("p",{className:$},n)))},G=function(e){return"".concat(e,"://").concat("suite.chimp.click","/graphql")};function q(){var e=w(["\n\tmutation createComment($text: String!, $code: String!, $user: String!, $authenticationType: AuthenticationType!) {\n\t\tcreateComment(data: { text: $text, code: $code, user: $user, authenticationType: $authenticationType }) {\n\t\t\tid\n\t\t\ttext\n\t\t\tcreatedAt\n\t\t\tuser\n\t\tauthenticationType,\n\t\t}\n\t}\n"]);return q=function(){return e},e}function I(){var e=w(["\n\tsubscription newComment($code: String!) {\n\t\tnewComment (code: $code) {\n\t\t\tid\n\t\t\ttext\n\t\t\tcreatedAt\n\t\t\tuser\n\t\t\tauthenticationType\n\t\t}\n\t}\n"]);return I=function(){return e},e}function K(){var e=w(["\n\tquery getComments($code: String!) {\n\t\tgetComments(where: { code: $code }) {\n\t\t\tid\n\t\t\ttext\n\t\t\tcreatedAt\n\t\t\tuser\n\t\tauthenticationType\n\t\t}\n\t}\n"]);return K=function(){return e},e}var V=u(K()),M=u(I()),U=u(q()),W=function(o){var u=o.code,m=o.authKey,l=o.users,s=o.user,p=o.authenticationType,d=O(t([]),2),f=d[0],h=d[1],_=a(V,{variables:{code:u}}),v=_.loading,b=_.data,x=_.refetch,w=O(i(U),1)[0],A=r((function(e){var t=e.subscriptionData.data.newComment;h([t].concat(E(f)))}),[h,f]);c(M,{onSubscriptionData:A,variables:{code:u}});var j=O(t("ready"),2),S=j[0],T=j[1],k=r(function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w({variables:{authenticationType:p,text:t,code:u,user:s}});case 2:T("done");case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){y(a,r,o,i,c,"next",e)}function c(e){y(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}(),[w,m,f,u]);return n((function(){h([]),x()}),[x,u,m]),e.createElement("div",null,s&&e.createElement(P,{onSubmit:k,inputState:S,setInputState:T}),v?"LOADING":e.createElement(e.Fragment,null,0===f.length&&0===b.getComments.length?"EMPTY":e.createElement(e.Fragment,null,f.map((function(t){return e.createElement(F,g({key:t.id},t,{users:l}))})),b.getComments.map((function(t){return e.createElement(F,g({key:t.id},t,{users:l}))})))))};export default function(t){var n,r,a,i,c=t.code,u=t.authKey,m=t.users,y=t.user,v=t.authenticationType;return e.createElement(o,{client:(n=u,r=s({uri:G("http".concat("s"))}),a=new f({uri:G("ws".concat("s")),options:{lazy:!0,reconnect:!0,connectionParams:function(){return{headers:{authorization:n}}}}}),i=d((function(e,t){return{headers:x({},t.headers,{authorization:n}),onError:function(e){var t=e.graphQLErrors,n=e.networkError;t&&console.error(t),n&&console.error("[Network error]: ".concat(n))}}})),new l({link:h((function(e){var t=e.query,n=_(t);return"OperationDefinition"===n.kind&&"subscription"===n.operation}),a,i.concat(r)),cache:new p}))},e.createElement(W,{code:c,authKey:u,users:m,user:y,authenticationType:v}))}
