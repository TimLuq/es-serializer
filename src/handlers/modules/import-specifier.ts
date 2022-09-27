import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ImportSpecifier(context: ISerializationContext, ast: import("estree").ImportSpecifier, opts: ISerializationOptions): ISerializationResult {
    let code = context.serialize(ast.imported, opts).code;
    if (ast.imported.name != ast.local.name) {
        code += " as " + context.serialize(ast.local, opts).code;
    }
    return { code, ast };
}
