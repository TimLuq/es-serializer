import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ReturnStatement(context: ISerializationContext, ast: import("estree").ReturnStatement, opts: ISerializationOptions): ISerializationResult {
    if (ast.argument) {
        return { code: "return " + context.serialize(ast.argument, opts).code + ";", ast };
    } else {
        return { code: "return;", ast };
    }
}
