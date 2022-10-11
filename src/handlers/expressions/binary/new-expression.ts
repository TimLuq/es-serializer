import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function NewExpression(context: ISerializationContext, ast: import("estree").NewExpression, opts: ISerializationOptions): ISerializationResult {
    let code = "new";
    const callee = context.serialize(ast.callee, opts).code;
    const d = opts.indent;
    if (ast.callee.type == "BinaryExpression" || ast.callee.type == "LogicalExpression" || ast.callee.type == "SequenceExpression" || ast.callee.type == "AssignmentExpression" || ast.callee.type == "AwaitExpression") {
        if (d !== undefined) {
            code += " ";
        }
        code += "(" + callee + ")";
    } else {
        code += " " + callee;
    }
    if (d !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        opts.indent!++;
    }
    code += "(";
    let f = true;
    for (const c of ast.arguments) {
        if (f) {
            f = false;
        } else if (d === undefined) {
            code += ",";
        } else {
            code += ", ";
        }
        const cc = context.serialize(c, opts).code;
        if (ast.callee.type == "SequenceExpression") {
            code += "(" + cc + ")";
        } else {
            code += cc;
        }
    }
    code += ")";
    opts.indent = d;
    return { code, ast };
}
