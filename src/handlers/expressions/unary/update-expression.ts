import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function UpdateExpression(context: ISerializationContext, ast: import("estree").UpdateExpression, opts: ISerializationOptions): ISerializationResult {
    let code = context.serialize(ast.argument, opts).code;
    if (!ast.prefix) {
        code += ast.operator;
    } else {
        code = ast.operator + code;
    }
    return { code, ast };
}
