import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function NewExpression(context: ISerializationContext, ast: import("estree").NewExpression, opts: ISerializationOptions): ISerializationResult {
    let code = "new " + context.serialize(ast.callee, opts).code;
    const d = opts.indent;
    if (d !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        opts.indent!++;
    }
    code += "(";
    let f = true;
    for (const c of ast.arguments) {
        if (f) {
            f = false;
        } else if (d === undefined) {
            code += ",";
        } else {
            code += ", ";
        }
        code += context.serialize(c, opts).code;
    }
    code += ")";
    return { code, ast };
}
