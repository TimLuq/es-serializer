import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ContinueStatement(context: ISerializationContext, ast: import("estree").ContinueStatement, opts: ISerializationOptions): ISerializationResult {
    if (ast.label) {
        return { code: "continue " + context.serialize(ast.label, opts).code + ";", ast };
    } else {
        return { code: "continue;", ast };
    }
}
