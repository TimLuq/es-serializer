import{I as e,L as t,R as a,P as s,F as n,E as r,B as o,a as i,D as p,W as c,b as l,c as m,d as S,C as x,e as E,S as u,f as d,T as h,g as y,h as f,i as b,j as g,k as w,l as C,m as D,V as T,n as j,o as F,A as L,O,p as k,U as A,q as B,r as I,s as U,t as W,M as N,u as P,v as R,N as V,w as q}from"./with-statement-a34ec986.js";const M=Object.assign({},{Identifier:e,Literal:t,RegExpLiteral:a,Program:s,FunctionExpression:n,ExpressionStatement:r,BlockStatement:o,EmptyStatement:i,DebuggerStatement:p,WithStatement:c,ReturnStatement:l,LabeledStatement:m,BreakStatement:S,ContinueStatement:x,IfStatement:E,SwitchStatement:u,SwitchCase:d,ThrowStatement:h,TryStatement:y,CatchClause:f,WhileStatement:b,DoWhileStatement:g,ForStatement:w,ForInStatement:C,FunctionDeclaration:D,VariableDeclaration:T,VariableDeclarator:j,ThisExpression:F,ArrayExpression:L,ObjectExpression:O,Property:k,UnaryExpression:A,UpdateExpression:B,BinaryExpression:I,AssignmentExpression:U,LogicalExpression:W,MemberExpression:N,ConditionalExpression:P,CallExpression:R,NewExpression:V,SequenceExpression:q}),v={support:[]},z={addToContext(e){for(const t of Object.keys(M))e.addHandler(t,this,v)},serialize(e,t,a){const s=M[t.type];if(s)return s(e,t,a);let n="Unexpected AST type "+JSON.stringify(t.type)+" for ES5";throw t.loc&&(n+=" at ",t.loc.source?n+=t.loc.source+":":n+="position ",n+=t.loc.start.line+":"+t.loc.start.column),new SyntaxError(n)}};export{z as default};
//# sourceMappingURL=es5.js.map
