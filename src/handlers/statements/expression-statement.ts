import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ExpressionStatement(context: ISerializationContext, ast: import("estree").ExpressionStatement, opts: ISerializationOptions): ISerializationResult {
    return { code: context.serialize(ast.expression, opts).code + ";", ast };
}
