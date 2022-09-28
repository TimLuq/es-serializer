import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SequenceExpression(context: ISerializationContext, ast: import("estree").SequenceExpression, opts: ISerializationOptions): ISerializationResult {
    let code = "";
    let f = true;
    const d = opts.indent;
    for (const c of ast.expressions) {
        if (f) {
            f = false;
        } else if (d === undefined) {
            code += ",";
        } else {
            code += ", ";
        }
        const cc = context.serialize(c, opts).code;
        if (c.type == "SequenceExpression") {
            code += "(" + cc + ")";
        } else {
            code += cc;
        }
    }
    return { code, ast };
}
