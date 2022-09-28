import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function BinaryExpression(context: ISerializationContext, ast: import("estree").BinaryExpression, opts: ISerializationOptions): ISerializationResult {
    const d = opts.indent;
    const indent = opts.indent !== undefined || ast.operator[0] == "i";
    if (d !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        opts.indent!++;
    }
    const left = context.serialize(ast.left, opts).code;
    const right = context.serialize(ast.right, opts).code;
    let code: string;
    if (ast.left.type == "BinaryExpression" || ast.left.type == "LogicalExpression" || ast.left.type == "SequenceExpression") {
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
    if (ast.right.type == "BinaryExpression" || ast.right.type == "LogicalExpression" || ast.right.type == "SequenceExpression") {
        code += "(" + right + ")";
    } else {
        code += right;
    }
    return { code, ast };
}
