import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ClassBody(context: ISerializationContext, ast: import("estree").ClassBody, opts: ISerializationOptions): ISerializationResult {
    if (!ast.body.length) {
        return { code: "{}", ast };
    }
    let code = "{";
    const d = opts.indent;
    let indent = "";
    let m = "";
    if (d !== undefined) {
        indent += "\n";
        for (let i = 0; i < d; i++) {
            indent += "\t";
        }
        m = indent;
        indent += "\t";
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        opts.indent!++;
    }
    for (const b of ast.body) {
        code += indent + context.serialize(b, opts).code;
    }
    code += m + "}";
    opts.indent = d;
    return { code, ast };
}
