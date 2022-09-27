import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SpreadElement(context: ISerializationContext, ast: import("estree").SpreadElement, opts: ISerializationOptions): ISerializationResult {
    let code = "...";
    code += context.serialize(ast.argument, opts).code;
    return { code, ast };
}
