import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ForOfStatement(context: ISerializationContext, ast: import("estree").ForOfStatement, opts: ISerializationOptions): ISerializationResult {
    let code = "for";
    const indent = opts.indent !== undefined;
    if (indent) {
        code += " (";
    } else {
        code += "(";
    }
    code += context.serialize(ast.left, opts).code + " of " + context.serialize(ast.right, opts).code;
    if (indent) {
        code += ") ";
    } else {
        code += ")";
    }
    code += context.serialize(ast.body, opts).code;
    return { code, ast };
}
