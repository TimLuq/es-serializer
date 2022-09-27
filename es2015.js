import{x as e,I as t,L as o,R as n,P as i,F as r,E as s,B as a,a as c,D as d,W as l,b as u,c as f,d as p,C as m,e as x,S as z,f as S,T as E,g,h as y,i as v,j as h,k as b,l as D,m as C,V as w,n as T,o as I,A,O as k,p as F,U as O,q as P,r as j,s as L,t as q,M as B,u as N,v as M,N as R,w as U}from"./with-statement-0067d2bb.js";function W(e,t,o){let n="class";return t.id&&(n+=" "+e.serialize(t.id,o).code),t.superClass&&(n+=" extends "+e.serialize(t.superClass,o).code),void 0!==o.indent&&(n+=" "),n+=e.serialize(t.body,o).code,{code:n,ast:t}}const V=Object.assign({},{Identifier:t,Literal:o,RegExpLiteral:n,Program:i,FunctionExpression:r,ExpressionStatement:s,BlockStatement:a,EmptyStatement:c,DebuggerStatement:d,WithStatement:l,ReturnStatement:u,LabeledStatement:f,BreakStatement:p,ContinueStatement:m,IfStatement:x,SwitchStatement:z,SwitchCase:S,ThrowStatement:E,TryStatement:g,CatchClause:y,WhileStatement:v,DoWhileStatement:h,ForStatement:b,ForInStatement:D,FunctionDeclaration:C,VariableDeclaration:w,VariableDeclarator:T,ThisExpression:I,ArrayExpression:A,ObjectExpression:k,Property:F,UnaryExpression:O,UpdateExpression:P,BinaryExpression:j,AssignmentExpression:L,LogicalExpression:q,MemberExpression:B,ConditionalExpression:N,CallExpression:M,NewExpression:R,SequenceExpression:U,ForOfStatement:function(e,t,o){let n="for";const i=void 0!==o.indent;return n+=i?" (":"(",n+=e.serialize(t.left,o).code+" of "+e.serialize(t.right,o).code,n+=i?") ":")",n+=e.serialize(t.body,o).code,{code:n,ast:t}},Super:function(e,t,o){return{code:"super",ast:t}},SpreadElement:function(e,t,o){let n="...";return n+=e.serialize(t.argument,o).code,{code:n,ast:t}},ArrowFunctionExpression:function(e,t,o){let n="";if(t.async&&(n="async "),t.generator&&(n+="*"),n+="(",t.params.length){let i=!0;for(const r of t.params)i?i=!1:void 0!==o.indent?n+=", ":n+=",",n+=e.serialize(r,o).code}return void 0!==o.indent?n+=") => ":n+=")=>",n+=e.serialize(t.body,o).code,{code:n,ast:t}},YieldExpression:function(e,t,o){let n="yield";return t.delegate&&(n+="*"),t.argument?(n+=" ",{code:n+e.serialize(t.argument,o),ast:t}):{code:n,ast:t}},TemplateLiteral:function(e,t,o){let n="`",i=0;const r=o.indent;for(void 0!==r&&o.indent++;i<t.expressions.length;)n+=e.serialize(t.quasis[i],o).code,n+="${"+e.serialize(t.expressions[i],o).code+"}",i++;return n+=e.serialize(t.quasis[i],o).code+"`",o.indent=r,{code:n,ast:t}},TaggedTemplateExpression:function(e,t,o){return{code:e.serialize(t.tag,o).code+e.serialize(t.quasi,o).code,ast:t}},TemplateElement:function(e,t,o){return{code:t.value.raw,ast:t}},ObjectPattern:function(e,t,o){let n="{";const i=o.indent;let r="";if(void 0!==i){r+="\n";for(let e=0;e<i;e++)r+="\t";o.indent++}const s=r;void 0!==i&&(r+="\t");let a=!0;for(const i of t.properties)a?a=!1:n+=",",n+=r+e.serialize(i,o).code;return!a&&s&&(n+=s),n+="}",o.indent=i,{code:n,ast:t}},ArrayPattern:function(e,t,o){let n="[";const i=o.indent;let r="";if(void 0!==i){r+="\n";for(let e=0;e<i;e++)r+="\t";o.indent++}const s=r;void 0!==i&&(r+="\t");let a=!0;for(const i of t.elements)a?a=!1:n+=",",n+=r,i&&(n+=e.serialize(i,o).code);return!a&&s&&(n+=s),n+="]",o.indent=i,{code:n,ast:t}},RestElement:function(e,t,o){let n="...";return n+=e.serialize(t.argument,o).code,{code:n,ast:t}},AssignmentPattern:function(e,t,o){let n=e.serialize(t.left,o).code;return n+=void 0===o.indent?"=":" = ",n+=e.serialize(t.right,o).code,{code:n,ast:t}},ClassBody:function(e,t,o){if(!t.body.length)return{code:"{}",ast:t};let n="{";const i=o.indent;let r="",s="";if(void 0!==i){r+="\n";for(let e=0;e<i;e++)r+="\t";s=r,r+="\t",o.indent++}for(const i of t.body)n+=r+e.serialize(i,o).code;return n+=s+"}",{code:n,ast:t}},MethodDefinition:function(t,o,n){let i="";return o.static&&(i="static "),"get"==o.kind?i="get ":"set"==o.kind&&(i="set "),o.computed&&(i+="["),i+=t.serialize(o.key,n).code,o.computed&&(i+="]"),i+=e(t,o.value,n).code,{code:i,ast:o}},ClassDeclaration:function(e,t,o){return W(e,t,o)},ClassExpression:function(e,t,o){return W(e,t,o)},MetaProperty:function(e,t,o){return{code:t.meta+"."+t.property,ast:t}},ImportDeclaration:function(e,t,o){let n="import",i=!0;const r=o.indent,s=[];for(const r of t.specifiers)"ImportSpecifier"!=r.type?(i?(i=!1,n+=" "):void 0!==o.indent?n+=", ":n+=",",n+=e.serialize(r,o).code):s.push(r);if(s.length){i?n+=void 0!==r?" {":"{":void 0!==o.indent?n+=", {":n+=",{",i=!0;for(const t of s)i?i=!1:void 0!==o.indent?n+=", ":n+=",",n+=e.serialize(t,o).code}return void 0===r&&s.length||(n+=" "),t.specifiers.length&&(n+="from "),n+=e.serialize(t.source,o).code+";",{code:n,ast:t}},ImportSpecifier:function(e,t,o){let n=e.serialize(t.imported,o).code;return t.imported.name!=t.local.name&&(n+=" as "+e.serialize(t.local,o).code),{code:n,ast:t}},ImportDefaultSpecifier:function(e,t,o){return{code:e.serialize(t.local,o).code,ast:t}},ImportNamespaceSpecifier:function(e,t,o){return{code:"* as "+e.serialize(t.local,o).code,ast:t}},ExportNamedDeclaration:function(e,t,o){let n="export";if(t.declaration)return n+=" "+e.serialize(t.declaration,o).code,{code:n,ast:t};let i=!0;const r=o.indent;n+=void 0!==r?" { ":"{";for(const r of t.specifiers)i?i=!1:void 0!==o.indent?n+=", ":n+=",",n+=e.serialize(r,o).code;return n+=void 0!==r?" }":"}",t.source&&(void 0!==r&&(n+=" "),n+="from "+e.serialize(t.source,o).code),n+=";",{code:n,ast:t}},ExportSpecifier:function(e,t,o){let n=e.serialize(t.local,o).code;return t.exported.name!=t.local.name&&(n+=" as "+e.serialize(t.exported,o).code),{code:n,ast:t}},ExportDefaultDeclaration:function(e,t,o){let n="export default ";return n+=e.serialize(t.declaration,o).code,n+=";",{code:n,ast:t}},ExportAllDeclaration:function(e,t,o){let n="export * from ";return n+=e.serialize(t.source,o).code,n+=";",{code:n,ast:t}}}),H={support:[]},J={addToContext(e){for(const t of Object.keys(V))e.addHandler(t,this,H)},serialize(e,t,o){const n=V[t.type];if(n)return n(e,t,o);let i="Unexpected AST type "+JSON.stringify(t.type)+" for ES5";throw t.loc&&(i+=" at ",t.loc.source?i+=t.loc.source+":":i+="position ",i+=t.loc.start.line+":"+t.loc.start.column),new SyntaxError(i)}};export{J as default};
//# sourceMappingURL=es2015.js.map
