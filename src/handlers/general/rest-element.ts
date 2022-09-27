import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function RestElement(context: ISerializationContext, ast: import("estree").RestElement, opts: ISerializationOptions): ISerializationResult {
    let code = "...";
    code += context.serialize(ast.argument, opts).code;
    return { code, ast };
}
