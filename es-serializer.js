var t;const e=Symbol("__serializers");class r{constructor(){this[t]=new Map}addToContext(t){return t.addToContext(this),this}addHandler(t,r,o){const s=this[e].get(t);return!!(!s||r.override&&r.override(t,s.o))&&(this[e].set(t,{s:r,o:o}),!0)}handlerSupport(t){const r=this[e].get(t);return r?r.o:void 0}serialize(t,r){const o=this[e].get(t.type);if(o)return r||(r={}),o.s.serialize(this,t,r);let s="Unexpected AST type "+JSON.stringify(t.type);throw t.loc&&(s+=" at ",t.loc.source?s+=t.loc.source+":":s+="position ",s+=t.loc.start.line+":"+t.loc.start.column),new SyntaxError(s)}}t=e;export{r as SerializationContext,r as default};
//# sourceMappingURL=es-serializer.js.map
