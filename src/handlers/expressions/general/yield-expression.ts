import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../../interfaces";

export function YieldExpression(context: ISerializationContext, ast: import("estree").YieldExpression, opts: ISerializationOptions): ISerializationResult {
    let code = "yield";
    if (ast.delegate) {
        code += "*";
    }
    if (ast.argument) {
        code += " ";
        return { code: code + context.serialize(ast.argument, opts).code, ast };
    } else {
        return { code, ast };
    }
}
