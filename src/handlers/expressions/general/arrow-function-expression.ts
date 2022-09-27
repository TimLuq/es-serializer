import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ArrowFunctionExpression(context: ISerializationContext, ast: import("estree").ArrowFunctionExpression, opts: ISerializationOptions): ISerializationResult {
    let out = "";
    if (ast.async) {
        out = "async ";
    }
    if (ast.generator) {
        out += "*";
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
        out += ") => ";
    } else {
        out += ")=>";
    }

    out += context.serialize(ast.body, opts).code;
    return { code: out, ast };
}
