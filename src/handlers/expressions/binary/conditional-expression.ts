import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ConditionalExpression(context: ISerializationContext, ast: import("estree").ConditionalExpression, opts: ISerializationOptions): ISerializationResult {
    let code = context.serialize(ast.test, opts).code;
    if (ast.test.type == "BinaryExpression" || ast.test.type == "LogicalExpression" || ast.test.type == "SequenceExpression" || ast.test.type == "AssignmentExpression" || ast.test.type == "AwaitExpression" ||  ast.test.type == "YieldExpression" || ast.test.type == "ConditionalExpression") {
        code = "(" + code + ")";
    }
    const d = opts.indent;
    if (d !== undefined) {
        code += " ? ";
    } else {
        code += "?";
    }
    code += context.serialize(ast.consequent, opts).code;
    if (d !== undefined) {
        code += " : ";
    } else {
        code += ":";
    }
    code += context.serialize(ast.alternate, opts).code;
    return { code, ast };
}
