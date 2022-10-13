import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function LogicalExpression(context: ISerializationContext, ast: import("estree").LogicalExpression, opts: ISerializationOptions): ISerializationResult {
    const d = opts.indent;
    const indent = d !== undefined || ast.operator[0] == "i";
    if (d !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        opts.indent!++;
    }
    const left = context.serialize(ast.left, opts).code;
    const right = context.serialize(ast.right, opts).code;
    let code: string;
    if (ast.left.type == "LogicalExpression" || ast.left.type == "SequenceExpression" || ast.left.type == "AssignmentExpression" || ast.left.type == "AwaitExpression" ||  ast.left.type == "YieldExpression") {
        code = "(" + left + ")";
    } else {
        code = left;
    }
    if (indent) {
        code += " ";
    }
    code += ast.operator;
    if (indent) {
        opts.indent = d;
        code += " ";
    }
    if (ast.right.type == "LogicalExpression" || ast.right.type == "SequenceExpression" || ast.right.type == "AssignmentExpression" || ast.right.type == "AwaitExpression" ||  ast.right.type == "YieldExpression") {
        code += "(" + right + ")";
    } else {
        code += right;
    }
    return { code, ast };
}
