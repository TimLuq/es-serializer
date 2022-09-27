import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ImportNamespaceSpecifier(context: ISerializationContext, ast: import("estree").ImportNamespaceSpecifier, opts: ISerializationOptions): ISerializationResult {
    const code = "* as " + context.serialize(ast.local, opts).code;
    return { code, ast };
}
