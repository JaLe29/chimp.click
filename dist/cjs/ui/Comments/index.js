"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),reactHooks=require("@apollo/react-hooks"),formatDistanceToNow=_interopDefault(require("date-fns/formatDistanceToNow")),ApolloClient=_interopDefault(require("apollo-client")),apolloLinkHttp=require("apollo-link-http"),apolloCacheInmemory=require("apollo-cache-inmemory"),apolloLinkContext=require("apollo-link-context"),apolloLinkWs=require("apollo-link-ws"),apolloLink=require("apollo-link"),apolloUtilities=require("apollo-utilities"),apolloBoost=require("apollo-boost");function asyncGeneratorStep(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){asyncGeneratorStep(o,r,a,i,c,"next",e)}function c(e){asyncGeneratorStep(o,r,a,i,c,"throw",e)}i(void 0)}))}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){_defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_nonIterableRest()}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _iterableToArrayLimit(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function styleInject(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var css=".textArea {\n  border-radius: 5px;\n  width: calc(100% - 20px - 10px - 2px);\n  padding: 10px;\n  margin: 5px;\n  border: 1.5px solid;\n  resize: none;\n  font-family: inherit;\n  font-size: inherit; }\n  .textArea:focus {\n    outline: none; }\n\n.message {\n  height: 70px;\n  width: 100%; }\n\n.normal {\n  border-color: #288ce4; }\n\n.notFocused {\n  color: #b7b7b7 !important;\n  border-color: #b7b7b7 !important; }\n\n.error {\n  border-color: red !important; }\n\n.promo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  float: right;\n  font-size: 10px;\n  margin-top: -3px;\n  margin-right: 5px; }\n  .promo img {\n    width: 30px; }\n\n.textAreaWrapper {\n  display: flex; }\n",css$1={textArea:"textArea",message:"message",normal:"normal",notFocused:"notFocused",error:"error",promo:"promo",textAreaWrapper:"textAreaWrapper"};styleInject(css);var TextArea=function(e){var t=e.className,n=e.sendButtonContent,r=e.onSubmit,a=e.hasSendButton,o=e.setInputState,i=e.inputState,c=e.placeholder,s=_slicedToArray(React.useState(!1),2),l=s[0],u=s[1],p=_slicedToArray(React.useState(""),2),m=p[0],d=p[1],f=!1;React.useEffect((function(){return function(){void 0}}),[i,o]);var _=function(e){if(13===e.keyCode&&!1===e.shiftKey){f=!0;var t=m.trim();if(0===t.length)return;return r(t),void d("")}if(f)f=!1;else{var n=e.target.value||"";"\n"!==n&&d(n)}},h=[css$1.textArea];return l?h.push(css$1.normal):h.push(css$1.notFocused),React__default.createElement(React__default.Fragment,null,React__default.createElement("div",{className:[t,css$1.textAreaWrapper].join(" ")},React__default.createElement("textarea",{value:m,onChange:_,onKeyDown:_,onFocus:function(){return u(!0)},onBlur:function(){return u(!1)},className:h.join(" "),placeholder:c}),a&&React__default.createElement("button",{onClick:function(){var e=m.trim();0!==e.length&&(r(e),d(""))}},n)))},TextArea$1=React__default.memo(TextArea),css$2=".comment {\n  display: flex;\n  padding: 5px;\n  text-align: start;\n  word-break: break-all; }\n  .comment .headerWrapper {\n    display: flex; }\n  .comment .profilePhoto {\n    height: 35px;\n    width: 35px;\n    border-radius: 5px;\n    margin-right: 5px; }\n  .comment .name {\n    color: #288ce4;\n    font-size: 10px;\n    font-weight: bold; }\n  .comment .date {\n    font-size: 10px;\n    padding-left: 5px; }\n  .comment .text {\n    margin: 0px;\n    white-space: pre-wrap;\n    overflow-wrap: break-word; }\n",css$3={comment:"comment",headerWrapper:"headerWrapper",profilePhoto:"profilePhoto",name:"name",date:"date",text:"text"};styleInject(css$2);var Comment=function(e){var t=e.showMessageTime,n=e.messageTextClassName,r=e.messageHeaderClassName,a=e.text,o=e.user,i=e.createdAt,c=e.users,s=e.authenticationType,l=React.useCallback((function(){return formatDistanceToNow(new Date(i),{addSuffix:!0})}),[i]),u="simple"===s;return React__default.createElement("div",{className:css$3.comment},c[o]&&c[o].image&&React__default.createElement("img",{className:css$3.profilePhoto,src:c[o].image,alt:c[o].name}),React__default.createElement("div",null,React__default.createElement("div",{className:[css$3.headerWrapper,r].join(" ")},React__default.createElement("div",{className:css$3.name},u?o:c[o]?c[o].name:"Unknown user"),t&&React__default.createElement("div",{className:css$3.date},l())),React__default.createElement("p",{className:[css$3.text,n].join(" ")},a)))},HOST="suite.chimp.click",uri=function(e){return"".concat(e,"://").concat(HOST,"/graphql")};function apolloClient(e){var t=apolloLinkHttp.createHttpLink({uri:uri("http".concat("s"))}),n=new apolloLinkWs.WebSocketLink({uri:uri("ws".concat("s")),options:{lazy:!0,reconnect:!0,connectionParams:function(){return{headers:{clientauthorization:e}}}}}),r=apolloLinkContext.setContext((function(t,n){return{headers:_objectSpread2({},n.headers,{clientauthorization:e}),onError:function(e){var t=e.graphQLErrors,n=e.networkError;t&&console.error(t),n&&console.error("[Network error]: ".concat(n))}}}));return new ApolloClient({link:apolloLink.split((function(e){var t=e.query,n=apolloUtilities.getMainDefinition(t);return"OperationDefinition"===n.kind&&"subscription"===n.operation}),n,r.concat(t)),cache:new apolloCacheInmemory.InMemoryCache})}var DIRECTION={TOP:"top",BOTTOM:"bottom"},DEFAULT_DIRECTION=DIRECTION.TOP,DEFAULT_TEXT_AREA_PLACEHOLDER="Join the discussion...";function _templateObject3(){var e=_taggedTemplateLiteral(["\n\tmutation createComment($text: String!, $code: String!, $user: String!, $authenticationType: AuthenticationType!) {\n\t\tcreateComment(data: { text: $text, code: $code, user: $user, authenticationType: $authenticationType }) {\n\t\t\tid\n\t\t\ttext\n\t\t\tcreatedAt\n\t\t\tuser\n\t\t\tauthenticationType,\n\t\t}\n\t}\n"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral(["\n\tsubscription newComment($code: String!) {\n\t\tnewComment (code: $code) {\n\t\t\tid\n\t\t\ttext\n\t\t\tcreatedAt\n\t\t\tuser\n\t\t\tauthenticationType\n\t\t}\n\t}\n"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral(["\n\tquery getComments($code: String!) {\n\t\tgetComments(where: { code: $code }) {\n\t\t\tid\n\t\t\ttext\n\t\t\tcreatedAt\n\t\t\tuser\n\t\tauthenticationType\n\t\t}\n\t}\n"]);return _templateObject=function(){return e},e}var GET_COMMENTS=apolloBoost.gql(_templateObject()),SUBSCRIBE_NEW_COMMENT=apolloBoost.gql(_templateObject2()),ADD_COMMENT=apolloBoost.gql(_templateObject3()),Comments=function(e){var t=e.showMessageTime,n=e.wrapperClassName,r=e.textAreaClassName,a=e.messagesAreaClassName,o=e.messageHeaderClassName,i=e.messageTextClassName,c=e.showTextWhenEmpty,s=e.code,l=e.authKey,u=e.users,p=e.user,m=e.authenticationType,d=e.direction,f=e.hasSendButton,_=e.sendButtonContent,h=React.useRef(),y=_slicedToArray(React.useState([]),2),b=y[0],g=y[1],T=reactHooks.useQuery(GET_COMMENTS,{variables:{code:s}}),x=T.loading,C=T.data,v=T.refetch,E=_slicedToArray(reactHooks.useMutation(ADD_COMMENT),1)[0],A=React.useCallback((function(e){var t=e.subscriptionData.data.newComment,n=d===DIRECTION.TOP;g(n?[t].concat(_toConsumableArray(b)):[].concat(_toConsumableArray(b),[t]))}),[g,b,h]);reactHooks.useSubscription(SUBSCRIBE_NEW_COMMENT,{onSubscriptionData:A,variables:{code:s}});var O=_slicedToArray(React.useState("ready"),2),w=O[0],R=O[1],S=React.useCallback(function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({variables:{authenticationType:m,text:t,code:s,user:p}});case 2:R("done");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[E,l,b,s]);React.useEffect((function(){g([]),v()}),[v,s,l]),React.useEffect((function(){h.current&&(h.current.scrollTop=Number.MAX_SAFE_INTEGER)}));var N=React.useCallback((function(){return d===DIRECTION.TOP?C.getComments:_toConsumableArray(C.getComments).reverse()}),[C,d]),j=d===DIRECTION.TOP;h.current&&(h.current.scrollTop=Number.MAX_SAFE_INTEGER);var k=p&&React__default.createElement(TextArea$1,{className:r,onSubmit:S,inputState:w,setInputState:R,placeholder:e.textAreaPlaceholder,hasSendButton:f,sendButtonContent:_}),D=b.map((function(e){return React__default.createElement(Comment,_extends({key:e.id},e,{users:u,messageTextClassName:i,messageHeaderClassName:o,showMessageTime:t}))}));return React__default.createElement("div",{className:n},j&&k,x?"LOADING":React__default.createElement(React__default.Fragment,null,c&&0===b.length&&0===C.getComments.length?"EMPTY":React__default.createElement("div",{className:a,ref:h},j&&D,N().map((function(e){return React__default.createElement(Comment,_extends({key:e.id},e,{users:u,messageTextClassName:i,messageHeaderClassName:o,showMessageTime:t}))})),!j&&D)),!j&&k)},CommentsWrapper=function(e){var t=e.authKey;return React__default.createElement(reactHooks.ApolloProvider,{client:apolloClient(t)},React__default.createElement(Comments,e))};CommentsWrapper.defaultProps={direction:DEFAULT_DIRECTION,textAreaPlaceholder:DEFAULT_TEXT_AREA_PLACEHOLDER,showTextWhenEmpty:!1,showMessageTime:!0,hasSendButton:!0,sendButtonContent:"Send"},exports.default=CommentsWrapper;
