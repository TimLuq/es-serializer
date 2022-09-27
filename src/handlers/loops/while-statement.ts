import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function WhileStatement(context: ISerializationContext, ast: import("estree").WhileStatement, opts: ISerializationOptions): ISerializationResult {
    let code = "while";
    if (opts.indent !== undefined) {
        code += " (";
    } else {
        code += "(";
    }
    code += context.serialize(ast.test, opts).code;
    if (opts.indent !== undefined) {
        code += ") ";
    } else {
        code += ")";
    }
    code += context.serialize(ast.body, opts).code;
    return { code, ast };
}
