import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function BreakStatement(context: ISerializationContext, ast: import("estree").BreakStatement, opts: ISerializationOptions): ISerializationResult {
    if (ast.label) {
        return { code: "break " + context.serialize(ast.label, opts) + ";", ast };
    } else {
        return { code: "break;", ast };
    }
}
