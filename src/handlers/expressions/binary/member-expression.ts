import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function MemberExpression(context: ISerializationContext, ast: import("estree").MemberExpression, opts: ISerializationOptions): ISerializationResult {
    let code = context.serialize(ast.object, opts).code;
    if (
        ast.object.type == "ArrowFunctionExpression" ||
            ast.object.type == "AwaitExpression" ||
            ast.object.type == "AssignmentExpression" || 
            ast.object.type == "BinaryExpression" ||
            ast.object.type == "ConditionalExpression" ||
            ast.object.type == "FunctionExpression" ||
            ast.object.type == "LogicalExpression" ||
            ast.object.type == "SequenceExpression" ||
            ast.object.type == "YieldExpression"
    ) {
        code = "(" + code + ")";
    }
    if (ast.computed) {
        code += "[";
    } else {
        code += ".";
    }
    code += context.serialize(ast.property, opts).code;
    if (ast.computed) {
        code += "]";
    }
    return { code, ast };
}
