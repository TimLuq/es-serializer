import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function TryStatement(context: ISerializationContext, ast: import("estree").TryStatement, opts: ISerializationOptions): ISerializationResult {
    let code = "try";
    const ident = opts.indent !== undefined;
    if (ident) {
        code += " ";
    }
    code += context.serialize(ast.block, opts).code;
    if (ast.handler) {
        if (ident) {
            code += " ";
        }
        code += context.serialize(ast.handler, opts).code;
    }
    if (ast.finalizer) {
        if (ident) {
            code += " ";
        }
        code += context.serialize(ast.finalizer, opts).code;
    }
    return { code, ast };
}
