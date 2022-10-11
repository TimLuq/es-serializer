import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function UnaryExpression(context: ISerializationContext, ast: import("estree").UnaryExpression, opts: ISerializationOptions): ISerializationResult {
    let code = context.serialize(ast.argument, opts).code;
    if (ast.argument.type == "BinaryExpression" || ast.argument.type == "LogicalExpression" || ast.argument.type == "SequenceExpression" || ast.argument.type == "AssignmentExpression" || ast.argument.type == "AwaitExpression") {
        code = "(" + code + ")";
    }
    if (!ast.prefix) {
        code += ast.operator;
    } else if (ast.operator.length > 1) {
        code = ast.operator + " " + code;
    } else {
        code = ast.operator + code;
    }
    return { code, ast };
}
