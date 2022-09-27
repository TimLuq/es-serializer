import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ForStatement(context: ISerializationContext, ast: import("estree").ForStatement, opts: ISerializationOptions): ISerializationResult {
    let code = "for";
    const indent = opts.indent !== undefined;
    if (indent) {
        code += " (";
    } else {
        code += "(";
    }
    if (ast.init) {
        code += context.serialize(ast.init, opts).code;
    }
    if (indent && ast.test) {
        code += "; ";
    } else {
        code += ";";
    }
    if (ast.test) {
        code += context.serialize(ast.test, opts).code;
    }
    if (indent && ast.update) {
        code += "; ";
    } else {
        code += ";";
    }
    if (ast.update) {
        code += context.serialize(ast.update, opts).code;
    }
    if (indent) {
        code += ") ";
    } else {
        code += ")";
    }
    code += context.serialize(ast.body, opts).code;
    return { code, ast };
}
