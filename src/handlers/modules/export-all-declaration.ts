import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ExportAllDeclaration(context: ISerializationContext, ast: import("estree").ExportAllDeclaration, opts: ISerializationOptions): ISerializationResult {
    let code = "export * from ";
    code += context.serialize(ast.source, opts).code;
    code += ";";
    return { code, ast };
}
