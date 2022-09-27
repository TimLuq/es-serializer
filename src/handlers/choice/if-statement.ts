import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";


export function IfStatement(context: ISerializationContext, ast: import("estree").IfStatement, opts: ISerializationOptions): ISerializationResult {
    let code = "if";
    if (opts.indent !== undefined) {
        code += " (";
    } else {
        code += "(";
    }
    code += context.serialize(ast.test, opts).code;
    if (opts.indent !== undefined) {
        code += ") ";
    } else {
        code += ")";
    }
    code += context.serialize(ast.consequent, opts).code;
    if (ast.alternate) {
        const alt = context.serialize(ast.alternate, opts);
        if (opts.indent !== undefined) {
            code += " else ";
        } else if (alt.code.startsWith("{")) {
            code += "else";
        } else {
            code += "else ";
        }
        code += alt.code;
    }
    return { code, ast };
}
