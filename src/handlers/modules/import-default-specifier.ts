import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ImportDefaultSpecifier(context: ISerializationContext, ast: import("estree").ImportDefaultSpecifier, opts: ISerializationOptions): ISerializationResult {
    const code = context.serialize(ast.local, opts).code;
    return { code, ast };
}
