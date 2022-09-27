import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function FunctionDeclaration(context: ISerializationContext, ast: import("estree").FunctionDeclaration | import("estree").FunctionExpression, opts: ISerializationOptions): ISerializationResult {
    let out = "function";
    if (ast.async) {
        out = "async " + out;
    }
    if (ast.generator) {
        out += "*";
    }
    if (ast.id) {
        out += " " + context.serialize(ast.id, opts).code;
    }

    out += "(";
    if (ast.params.length) {
        let fst = true;
        for (const a of ast.params) {
            if (fst) {
                fst = false;
            } else if (opts.indent !== undefined) {
                out += ", ";
            } else {
                out += ",";
            }
            out += context.serialize(a, opts).code;
        }
    }
    if (opts.indent !== undefined) {
        out += ") ";
    } else {
        out += ")";
    }

    out += context.serialize(ast.body, opts).code;
    return { code: out, ast };
}

export function FunctionExpression(context: ISerializationContext, ast: import("estree").FunctionExpression, opts: ISerializationOptions): ISerializationResult {
    return FunctionDeclaration(context, ast, opts);
}
