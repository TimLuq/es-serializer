import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ObjectExpression(context: ISerializationContext, ast: import("estree").ObjectExpression, opts: ISerializationOptions): ISerializationResult {
    let code = "{";
    const l = ast.properties.length;
    const d = opts.indent;
    if (l > 2 && d !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        opts.indent!++;
        let indent = "\n";
        for (let i = 0; i < d; i++) {
            indent += "\t";
        }
        const m = indent;
        indent += "\t";
        let f = true;
        for (const a of ast.properties) {
            if (f) {
                f = false;
            } else {
                code += ",";
            }
            code += indent + (a ? context.serialize(a, opts).code : "");
        }
        code += m;
        opts.indent = d;
    } else if (l != 0) {
        let f = true;
        if (d !== undefined) {
            code += " ";
        }
        for (const a of ast.properties) {
            if (f) {
                f = false;
            } else if (d !== undefined) {
                code += ", ";
            } else {
                code += ",";
            }
            code += (a ? context.serialize(a, opts).code : "");
        }
        if (d !== undefined) {
            code += " ";
        }
    }
    code += "}";
    return { code, ast };
}
