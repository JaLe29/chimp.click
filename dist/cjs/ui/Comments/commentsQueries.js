"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var apolloBoost=require("apollo-boost");function _taggedTemplateLiteral(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function _templateObject3(){var t=_taggedTemplateLiteral(["\n\tmutation createComment($text: String!, $code: String!, $user: String!, $authenticationType: AuthenticationType!) {\n\t\tcreateComment(data: { text: $text, code: $code, user: $user, authenticationType: $authenticationType }) {\n\t\t\tid\n\t\t\ttext\n\t\t\tcreatedAt\n\t\t\tuser\n\t\tauthenticationType,\n\t\t}\n\t}\n"]);return _templateObject3=function(){return t},t}function _templateObject2(){var t=_taggedTemplateLiteral(["\n\tsubscription newComment($code: String!) {\n\t\tnewComment (code: $code) {\n\t\t\tid\n\t\t\ttext\n\t\t\tcreatedAt\n\t\t\tuser\n\t\t\tauthenticationType\n\t\t}\n\t}\n"]);return _templateObject2=function(){return t},t}function _templateObject(){var t=_taggedTemplateLiteral(["\n\tquery getComments($code: String!) {\n\t\tgetComments(where: { code: $code }) {\n\t\t\tid\n\t\t\ttext\n\t\t\tcreatedAt\n\t\t\tuser\n\t\tauthenticationType\n\t\t}\n\t}\n"]);return _templateObject=function(){return t},t}var GET_COMMENTS=apolloBoost.gql(_templateObject()),SUBSCRIBE_NEW_COMMENT=apolloBoost.gql(_templateObject2()),ADD_COMMENT=apolloBoost.gql(_templateObject3());exports.ADD_COMMENT=ADD_COMMENT,exports.GET_COMMENTS=GET_COMMENTS,exports.SUBSCRIBE_NEW_COMMENT=SUBSCRIBE_NEW_COMMENT;