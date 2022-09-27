import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ExportDefaultDeclaration(context: ISerializationContext, ast: import("estree").ExportDefaultDeclaration, opts: ISerializationOptions): ISerializationResult {
    let code = "export default ";
    code += context.serialize(ast.declaration, opts).code;
    code += ";";
    return { code, ast };
}
