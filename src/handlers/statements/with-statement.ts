import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function WithStatement(context: ISerializationContext, ast: import("estree").WithStatement, opts: ISerializationOptions): ISerializationResult {
    let code = "while";
    if (opts.indent !== undefined) {
        code += " (";
    } else {
        code += "(";
    }
    code += context.serialize(ast.object, opts).code;
    if (opts.indent !== undefined) {
        code += ") ";
    } else {
        code += ")";
    }
    code += context.serialize(ast.body, opts).code;
    return { code, ast };
}
