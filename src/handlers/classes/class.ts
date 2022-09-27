import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function classSyntax(context: ISerializationContext, ast: import("estree").Class, opts: ISerializationOptions): ISerializationResult {
    let out = "class";
    if (ast.id) {
        out += " " + context.serialize(ast.id, opts).code;
    }
    if (ast.superClass) {
        out += " extends " + context.serialize(ast.superClass, opts).code;
    }
    if (opts.indent !== undefined) {
        out += " ";
    }

    out += context.serialize(ast.body, opts).code;
    return { code: out, ast };
}

export function ClassDeclaration(context: ISerializationContext, ast: import("estree").ClassDeclaration, opts: ISerializationOptions): ISerializationResult {
    return classSyntax(context, ast, opts);
}

export function ClassExpression(context: ISerializationContext, ast: import("estree").ClassExpression, opts: ISerializationOptions): ISerializationResult {
    return classSyntax(context, ast, opts);
}
