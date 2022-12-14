import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CallExpression(context: ISerializationContext, ast: import("estree").CallExpression, opts: ISerializationOptions): ISerializationResult {
    let code = context.serialize(ast.callee, opts).code;
    if (
        ast.callee.type == "ArrowFunctionExpression" ||
            ast.callee.type == "AwaitExpression" ||
            ast.callee.type == "AssignmentExpression" || 
            ast.callee.type == "BinaryExpression" ||
            ast.callee.type == "ConditionalExpression" ||
            ast.callee.type == "FunctionExpression" ||
            ast.callee.type == "LogicalExpression" ||
            ast.callee.type == "SequenceExpression"
    ) {
        code = "(" + code + ")";
    }
    const d = opts.indent;
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
