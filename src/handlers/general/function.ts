import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function funcDefSyntax(context: ISerializationContext, ast: import("estree").FunctionDeclaration | import("estree").FunctionExpression, opts: ISerializationOptions): ISerializationResult {
    let code = "(";
    if (ast.params.length) {
        let fst = true;
        for (const a of ast.params) {
            if (fst) {
                fst = false;
            } else if (opts.indent !== undefined) {
                code += ", ";
            } else {
                code += ",";
            }
            code += context.serialize(a, opts).code;
        }
    }
    if (opts.indent !== undefined) {
        code += ") ";
    } else {
        code += ")";
    }

    code += context.serialize(ast.body, opts).code;
    return { code, ast };
}

export function FunctionDeclaration(context: ISerializationContext, ast: import("estree").FunctionDeclaration | import("estree").FunctionExpression, opts: ISerializationOptions): ISerializationResult {
    let code = "function";
    if (ast.async) {
        code = "async " + code;
    }
    if (ast.generator) {
        code += "*";
    }
    if (ast.id) {
        code += " " + context.serialize(ast.id, opts).code;
    }
    code += funcDefSyntax(context, ast, opts).code;
    return { code, ast };
}

export function FunctionExpression(context: ISerializationContext, ast: import("estree").FunctionExpression, opts: ISerializationOptions): ISerializationResult {
    return FunctionDeclaration(context, ast, opts);
}
