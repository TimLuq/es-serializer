import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function CatchClause(context: ISerializationContext, ast: import("estree").CatchClause, opts: ISerializationOptions): ISerializationResult {
    let code = "catch";
    const ident = opts.indent !== undefined;
    if (ident) {
        code += " ";
    }
    if (ast.param) {
        code += "(" + context.serialize(ast.param, opts).code + ")";
        if (ident) {
            code += " ";
        }
    }
    code += context.serialize(ast.body, opts).code;
    return { code, ast };
}
