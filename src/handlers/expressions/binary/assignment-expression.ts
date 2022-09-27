import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function AssignmentExpression(context: ISerializationContext, ast: import("estree").AssignmentExpression, opts: ISerializationOptions): ISerializationResult {
    const d = opts.indent;
    const indent = d !== undefined;
    if (indent) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        opts.indent!++;
    }
    const left = context.serialize(ast.left, opts).code;
    const right = context.serialize(ast.right, opts).code;
    let code = left;
    if (indent) {
        code += " ";
    }
    code += ast.operator;
    if (indent) {
        opts.indent = d;
        code += " ";
    }
    code += right;
    return { code, ast };
}
