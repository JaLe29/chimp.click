import r from"apollo-client";import{createHttpLink as o}from"apollo-link-http";import{InMemoryCache as t}from"apollo-cache-inmemory";import{setContext as e}from"apollo-link-context";import{WebSocketLink as n}from"apollo-link-ws";import{split as i}from"apollo-link";import{getMainDefinition as c}from"apollo-utilities";function a(r,o,t){return o in r?Object.defineProperty(r,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[o]=t,r}function l(r,o){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),t.push.apply(t,e)}return t}function p(r){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?l(Object(t),!0).forEach((function(o){a(r,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(t,o))}))}return r}var u=function(r){return"".concat(r,"://").concat("suite.chimp.click","/graphql")};export default function(a){var l=o({uri:u("http".concat("s"))}),f=new n({uri:u("ws".concat("s")),options:{lazy:!0,reconnect:!0,connectionParams:function(){return{headers:{clientauthorization:a}}}}}),s=e((function(r,o){return{headers:p({},o.headers,{clientauthorization:a}),onError:function(r){var o=r.graphQLErrors,t=r.networkError;o&&console.error(o),t&&console.error("[Network error]: ".concat(t))}}}));return new r({link:i((function(r){var o=r.query,t=c(o);return"OperationDefinition"===t.kind&&"subscription"===t.operation}),f,s.concat(l)),cache:new t})}
