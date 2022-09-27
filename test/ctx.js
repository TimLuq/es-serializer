import es2015 from "../es2015.js";
import SerializationContext from "../es-serializer.js";
import { parse as acornParse } from "../node_modules/acorn/dist/acorn.mjs";

/**
 * 
 * @param {TemplateStringsArray} input 
 * @param  {...unknown} params 
 * @returns 
 */
export function parse(input, ...params) {
    let o = "";
    let i = 0;
    while (i != params.length) {
        o += input.raw[i] + params[i];
        i++;
    }
    o += input.raw[i];
    return acornParse(o, { ecmaVersion: 2015, sourceType: "module" });
}

const ctx = new SerializationContext();
ctx.addToContext(es2015);

export function serialize(input) {
    return ctx.serialize(input, { indent: 0 }).code;
}