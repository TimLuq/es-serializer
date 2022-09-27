import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ExportSpecifier(context: ISerializationContext, ast: import("estree").ExportSpecifier, opts: ISerializationOptions): ISerializationResult {
    let code = context.serialize(ast.local, opts).code;
    if (ast.exported.name != ast.local.name) {
        code += " as " + context.serialize(ast.exported, opts).code;
    }
    return { code, ast };
}
