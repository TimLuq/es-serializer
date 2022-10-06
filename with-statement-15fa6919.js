function e(e,t,n){let i="if";if(void 0!==n.indent?i+=" (":i+="(",i+=e.serialize(t.test,n).code,void 0!==n.indent?i+=") ":i+=")",i+=e.serialize(t.consequent,n).code,t.alternate){const o=e.serialize(t.alternate,n);void 0!==n.indent?i+=" else ":o.code.startsWith("{")?i+="else":i+="else ",i+=o.code}return{code:i,ast:t}}function t(e,t,n){let i="case ";t.test?i+=e.serialize(t.test,n).code+":":i="default:";let o="";const r=n.indent;if(void 0!==r){o="\n";for(let e=0;e<r;e++)o+="\t";o+="\t",n.indent+=1}if(t.consequent.length)for(const r of t.consequent)i+=o+e.serialize(r,n).code;return void 0!==r&&(n.indent=r),{code:i,ast:t}}function n(e,t,n){let i="switch";void 0!==n.indent?i+=" (":i+="(",i+=e.serialize(t.discriminant,n).code;let o="",r="";if(void 0!==n.indent){i+=") {",o="\n";for(let e=0;e<n.indent;e++)o+="\t";r=o,o+="\t"}else i+="){";if(t.cases.length){const s=n.indent;void 0!==s&&(n.indent+=1);for(const r of t.cases)i+=o+e.serialize(r,n).code;void 0!==s&&(n.indent=s),i+=r}return i+="}",{code:i,ast:t}}function i(e,t,n){return t.label?{code:"break "+e.serialize(t.label,n).code+";",ast:t}:{code:"break;",ast:t}}function o(e,t,n){return t.label?{code:"continue "+e.serialize(t.label,n).code+";",ast:t}:{code:"continue;",ast:t}}function r(e,t,n){let i=e.serialize(t.label,n).code;return void 0!==n.indent?i+=": ":i+=":",i+=e.serialize(t.body,n).code,{code:i,ast:t}}function s(e,t,n){return t.argument?{code:"return "+e.serialize(t.argument,n).code+";",ast:t}:{code:"return;",ast:t}}function c(e,t,n){let i="catch";const o=void 0!==n.indent;return o&&(i+=" "),t.param&&(i+="("+e.serialize(t.param,n).code+")",o&&(i+=" ")),i+=e.serialize(t.body,n).code,{code:i,ast:t}}function d(e,t,n){return{code:"throw "+e.serialize(t.argument,n).code+";",ast:t}}function a(e,t,n){let i="try";const o=void 0!==n.indent;return o&&(i+=" "),i+=e.serialize(t.block,n).code,t.handler&&(o&&(i+=" "),i+=e.serialize(t.handler,n).code),t.finalizer&&(o&&(i+=" "),i+=e.serialize(t.finalizer,n).code),{code:i,ast:t}}function l(e,t,n){const i=n.indent,o=void 0!==i,r=e.serialize(t.left,n).code,s=e.serialize(t.right,n).code;let c=r;return o&&(c+=" "),c+=t.operator,o&&(n.indent=i,c+=" "),c+=s,{code:c,ast:t}}function u(e,t,n){const i=n.indent,o=void 0!==n.indent||"i"==t.operator[0];void 0!==i&&n.indent++;const r=e.serialize(t.left,n).code,s=e.serialize(t.right,n).code;let c;return c="BinaryExpression"==t.left.type||"LogicalExpression"==t.left.type||"SequenceExpression"==t.left.type?"("+r+")":r,o&&(c+=" "),c+=t.operator,o&&(n.indent=i,c+=" "),"BinaryExpression"==t.right.type||"LogicalExpression"==t.right.type||"SequenceExpression"==t.right.type?c+="("+s+")":c+=s,{code:c,ast:t}}function f(e,t,n){let i=e.serialize(t.callee,n).code;"BinaryExpression"!=t.callee.type&&"LogicalExpression"!=t.callee.type&&"SequenceExpression"!=t.callee.type||(i="("+i+")");const o=n.indent;void 0!==o&&n.indent++,i+="(";let r=!0;for(const s of t.arguments){r?r=!1:i+=void 0===o?",":", ";const c=e.serialize(s,n).code;"SequenceExpression"==t.callee.type?i+="("+c+")":i+=c}return i+=")",n.indent=o,{code:i,ast:t}}function p(e,t,n){let i=e.serialize(t.test,n).code;const o=n.indent;return i+=void 0!==o?" ? ":"?",i+=e.serialize(t.consequent,n).code,i+=void 0!==o?" : ":":",i+=e.serialize(t.alternate,n).code,{code:i,ast:t}}function z(e,t,n){const i=n.indent,o=void 0!==i||"i"==t.operator[0];void 0!==i&&n.indent++;const r=e.serialize(t.left,n).code,s=e.serialize(t.right,n).code;let c;return c="LogicalExpression"==t.left.type||"SequenceExpression"==t.left.type?"("+r+")":r,o&&(c+=" "),c+=t.operator,o&&(n.indent=i,c+=" "),"LogicalExpression"==t.right.type||"SequenceExpression"==t.right.type?c+="("+s+")":c+=s,{code:c,ast:t}}function v(e,t,n){let i=e.serialize(t.object,n).code;return"BinaryExpression"!=t.object.type&&"LogicalExpression"!=t.object.type&&"SequenceExpression"!=t.object.type||(i="("+i+")"),t.computed?i+="[":i+=".",i+=e.serialize(t.property,n).code,t.computed&&(i+="]"),{code:i,ast:t}}function g(e,t,n){let i="new";const o=e.serialize(t.callee,n).code,r=n.indent;"BinaryExpression"==t.callee.type||"LogicalExpression"==t.callee.type||"SequenceExpression"==t.callee.type?(void 0!==r&&(i+=" "),i+="("+o+")"):i+=" "+o,void 0!==r&&n.indent++,i+="(";let s=!0;for(const o of t.arguments){s?s=!1:i+=void 0===r?",":", ";const c=e.serialize(o,n).code;"SequenceExpression"==t.callee.type?i+="("+c+")":i+=c}return i+=")",n.indent=r,{code:i,ast:t}}function y(e,t,n){let i="",o=!0;const r=n.indent;for(const s of t.expressions){o?o=!1:i+=void 0===r?",":", ";const t=e.serialize(s,n).code;"SequenceExpression"==s.type?i+="("+t+")":i+=t}return{code:i,ast:t}}function h(e,t,n){let i="[";const o=t.elements.length,r=n.indent;if(o>2&&void 0!==r){n.indent++;let o="\n";for(let e=0;e<r;e++)o+="\t";const s=o;o+="\t";let c=!0;for(const r of t.elements)c?c=!1:i+=",",i+=o+(r?e.serialize(r,n).code:"");i+=s,n.indent=r}else if(0!=o){let o=!0;for(const s of t.elements)o?o=!1:i+=void 0!==r?", ":",",i+=s?e.serialize(s,n).code:""}return i+="]",{code:i,ast:t}}function x(e,t,n){let i="{";const o=t.properties.length,r=n.indent;if(o>2&&void 0!==r){n.indent++;let o="\n";for(let e=0;e<r;e++)o+="\t";const s=o;o+="\t";let c=!0;for(const r of t.properties)c?c=!1:i+=",",i+=o+(r?e.serialize(r,n).code:"");i+=s,n.indent=r}else if(0!=o){let o=!0;void 0!==r&&(i+=" ");for(const s of t.properties)o?o=!1:i+=void 0!==r?", ":",",i+=s?e.serialize(s,n).code:"";void 0!==r&&(i+=" ")}return i+="}",{code:i,ast:t}}function b(e,t,n){let i="";return"get"===t.kind?i="get ":"set"===t.kind&&(i="set "),t.computed&&(i+="["),i+=e.serialize(t.key,n).code,t.computed&&(i+="]"),t.shorthand&&!t.computed&&(void 0===n.es||n.es>2015)||(void 0!==n.indent?i+=": ":i+=":",i+=e.serialize(t.value,n).code),{code:i,ast:t}}function E(e,t,n){return{code:"this",ast:t}}function m(e,t,n){let i=e.serialize(t.argument,n).code;return t.prefix?i=t.operator.length>1?t.operator+" "+i:t.operator+i:i+=t.operator,{code:i,ast:t}}function q(e,t,n){let i=e.serialize(t.argument,n).code;return t.prefix?i=t.operator+i:i+=t.operator,{code:i,ast:t}}function S(e,t,n){let i="(";if(t.params.length){let o=!0;for(const r of t.params)o?o=!1:void 0!==n.indent?i+=", ":i+=",",i+=e.serialize(r,n).code}return void 0!==n.indent?i+=") ":i+=")",i+=e.serialize(t.body,n).code,{code:i,ast:t}}function w(e,t,n){let i="function";return t.async&&(i="async "+i),t.generator&&(i+="*"),t.id&&(i+=" "+e.serialize(t.id,n).code),i+=S(e,t,n).code,{code:i,ast:t}}function j(e,t,n){return w(e,t,n)}function k(e,t,n){return{code:t.name,ast:t}}function L(e,t,n){const i=typeof t.value;if("string"==i)return{code:JSON.stringify(t.value)};if("number"==i)return{code:t.value.toString()};if("bigint"==i)return{code:t.value.toString()+"n"};if("boolean"==i)return{code:i?"true":"false"};if("undefined"==i)return{code:"undefined"};if(null===t.value)return{code:"null"};if(t.value instanceof RegExp)return{code:t.value.toString()};let o="Unexpected literal type '"+i+"'";throw t.loc&&(t.loc.source?o+=" at "+t.loc.source+":":o+=" at position ",o+=t.loc.start.line+":"+t.loc.start.column),new Error(o)}function B(e,t,n){const i=[];for(const o of t.body)i.push(e.serialize(o,n).code);let o="";if(void 0!==n.indent){o+="\n";for(let e=0;e<n.indent;e++)o+="\t"}return{code:i.join(o),ast:t}}function W(e,t,n){return{code:"/"+t.regex.pattern+"/"+t.regex.flags,ast:t}}function N(e,t,n){let i=(t.kind||"var")+" ",o=!0;const r=void 0!==n.indent;for(const s of t.declarations)o?o=!1:i+=r?", ":",",i+=e.serialize(s,n).code;return i+=";",{code:i,ast:t}}function O(e,t,n){let i=e.serialize(t.id,n).code;return t.init&&(void 0!==n.indent?i+=" = ":i+="=",i+=e.serialize(t.init,n).code),{code:i,ast:t}}function R(e,t,n){let i="do";const o=void 0!==n.indent;return o&&(i+=" "),i+=e.serialize(t.body,n).code,i+=o?" while (":"while(",i+=e.serialize(t.test,n).code+");",{code:i,ast:t}}function U(e,t,n){let i="for";const o=void 0!==n.indent;return i+=o?" (":"(",i+=e.serialize(t.left,n).code+" in "+e.serialize(t.right,n).code,i+=o?") ":")",i+=e.serialize(t.body,n).code,{code:i,ast:t}}function A(e,t,n){let i="for";const o=void 0!==n.indent;i+=o?" (":"(";let r=!0;if(t.init){const o=e.serialize(t.init,n).code;i+=o,r=!o.endsWith(";")}return r&&(o&&t.test?i+="; ":i+=";"),t.test&&(i+=e.serialize(t.test,n).code),o&&t.update?i+="; ":i+=";",t.update&&(i+=e.serialize(t.update,n).code),i+=o?") ":")",i+=e.serialize(t.body,n).code,{code:i,ast:t}}function C(e,t,n){let i="while";return void 0!==n.indent?i+=" (":i+="(",i+=e.serialize(t.test,n).code,void 0!==n.indent?i+=") ":i+=")",i+=e.serialize(t.body,n).code,{code:i,ast:t}}function D(e,t,n){const i=[],o=n.indent;void 0!==o&&n.indent++;for(const o of t.body)i.push(e.serialize(o,n).code);if(n.indent=o,void 0!==o&&i.length){let e="\n";for(let t=0;t<o;t++)e+="\t";const t=e+"\t";return{code:"{"+t+i.join(t)+e+"}"}}return{code:"{"+i.join("")+"}",ast:t}}function F(e,t,n){return{code:"debugger;",ast:t}}function I(e,t,n){return{code:";",ast:t}}function J(e,t,n){return{code:e.serialize(t.expression,n).code+";",ast:t}}function M(e,t,n){let i="while";return void 0!==n.indent?i+=" (":i+="(",i+=e.serialize(t.object,n).code,void 0!==n.indent?i+=") ":i+=")",i+=e.serialize(t.body,n).code,{code:i,ast:t}}export{h as A,D as B,o as C,F as D,J as E,j as F,k as I,L,v as M,g as N,x as O,B as P,W as R,n as S,d as T,m as U,N as V,M as W,I as a,s as b,r as c,i as d,e,t as f,a as g,c as h,C as i,R as j,A as k,U as l,w as m,O as n,E as o,b as p,q,u as r,l as s,z as t,p as u,f as v,y as w,S as x};
//# sourceMappingURL=with-statement-15fa6919.js.map
