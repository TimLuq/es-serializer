import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ForInStatement(context: ISerializationContext, ast: import("estree").ForInStatement, opts: ISerializationOptions): ISerializationResult {
    let code = "for";
    const indent = opts.indent;
    if (indent !== undefined) {
        code += " (";
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        opts.indent!++;
    } else {
        code += "(";
    }
    code += context.serialize(ast.left, opts).code;
    if (code.endsWith(";")) {
        code = code.substring(0, code.length - 1);
    }
    code += " in " + context.serialize(ast.right, opts).code;
    if (indent !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        opts.indent = indent;
        code += ") ";
    } else {
        code += ")";
    }
    code += context.serialize(ast.body, opts).code;
    return { code, ast };
}
