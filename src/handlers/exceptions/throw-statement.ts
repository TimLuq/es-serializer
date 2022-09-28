import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ThrowStatement(context: ISerializationContext, ast: import("estree").ThrowStatement, opts: ISerializationOptions): ISerializationResult {
    return { code: "throw " + context.serialize(ast.argument, opts).code + ";", ast };
}
