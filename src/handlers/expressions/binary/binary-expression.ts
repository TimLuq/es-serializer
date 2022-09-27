import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function BinaryExpression(context: ISerializationContext, ast: import("estree").BinaryExpression, opts: ISerializationOptions): ISerializationResult {
    const left = context.serialize(ast.left, opts).code;
    const right = context.serialize(ast.right, opts).code;
    let code = left;
    const indent = opts.indent !== undefined || ast.operator[0] == "i";
    if (indent) {
        code += " ";
    }
    code += ast.operator;
    if (indent) {
        code += " ";
    }
    code += right;
    return { code, ast };
}
