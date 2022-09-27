import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function VariableDeclarator(context: ISerializationContext, ast: import("estree").VariableDeclarator, opts: ISerializationOptions): ISerializationResult {
    let code = context.serialize(ast.id, opts).code;
    if (ast.init) {
        if (opts.indent !== undefined) {
            code += " = ";
        } else {
            code += "=";
        }
        code += context.serialize(ast.init, opts).code;
    }
    return { code, ast };
}
