import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ForInStatement(context: ISerializationContext, ast: import("estree").ForInStatement, opts: ISerializationOptions): ISerializationResult {
    let code = "for";
    const indent = opts.indent !== undefined;
    if (indent) {
        code += " (";
    } else {
        code += "(";
    }
    code += context.serialize(ast.left, opts).code + " in " + context.serialize(ast.right, opts).code;
    if (indent) {
        code += ") ";
    } else {
        code += ")";
    }
    code += context.serialize(ast.body, opts).code;
    return { code, ast };
}
