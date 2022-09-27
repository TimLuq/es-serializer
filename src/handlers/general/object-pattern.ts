import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ObjectPattern(context: ISerializationContext, ast: import("estree").ObjectPattern, opts: ISerializationOptions): ISerializationResult {
    let code = "{";
    const d = opts.indent;
    let indent = "";
    if (d !== undefined) {
        indent += "\n";
        for (let i = 0; i < d; i++) {
            indent += "\t";
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        opts.indent!++;
    }
    const m = indent;
    if (d !== undefined) {
        indent += "\t";
    }
    let f = true;
    for (const a of ast.properties) {
        if (f) {
            f = false;
        } else {
            code += ",";
        }
        code += indent + context.serialize(a, opts).code;
    }
    if (!f && m) {
        code += m;
    }
    code += "}";
    opts.indent = d;
    return { code, ast };
}
