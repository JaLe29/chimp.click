import e,{useCallback as t}from"react";import m from"date-fns/formatDistanceToNow";var n="comment-module_comment__1VBGu",o="comment-module_headerWrapper__2zqKy",a="comment-module_profilePhoto__1OoMA",d="comment-module_name__1-F6F",r="comment-module_date__2-IUq",c="comment-module_text__1W5B4";!function(e,t){void 0===t&&(t={});var m=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===m&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".comment-module_comment__1VBGu {\n  display: flex;\n  padding: 5px;\n  text-align: start;\n  word-break: break-all; }\n  .comment-module_comment__1VBGu .comment-module_headerWrapper__2zqKy {\n    display: flex; }\n  .comment-module_comment__1VBGu .comment-module_profilePhoto__1OoMA {\n    height: 35px;\n    width: 35px;\n    border-radius: 5px;\n    margin-right: 5px; }\n  .comment-module_comment__1VBGu .comment-module_name__1-F6F {\n    color: #288ce4;\n    font-size: 10px;\n    font-weight: bold; }\n  .comment-module_comment__1VBGu .comment-module_date__2-IUq {\n    font-size: 10px;\n    padding-left: 5px; }\n  .comment-module_comment__1VBGu .comment-module_text__1W5B4 {\n    margin: 0px;\n    white-space: pre-wrap;\n    overflow-wrap: break-word; }\n");export default function(l){var _=l.text,i=l.user,u=l.createdAt,s=l.users,p=l.authenticationType,f=t((function(){return m(new Date(u),{addSuffix:!0})}),[u]),x="simple"===p;return e.createElement("div",{className:n},s[i]&&s[i].image&&e.createElement("img",{className:a,src:s[i].image,alt:s[i].name}),e.createElement("div",null,e.createElement("div",{className:o},e.createElement("div",{className:d},x?i:s[i]?s[i].name:"Unknown user"),e.createElement("div",{className:r},f())),e.createElement("p",{className:c},_)))}
