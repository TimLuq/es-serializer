import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ImportDeclaration(context: ISerializationContext, ast: import("estree").ImportDeclaration, opts: ISerializationOptions): ISerializationResult {
    let code = "import";
    let f = true;
    const d = opts.indent;
    const combine = [];
    for (const o of ast.specifiers) {
        if (o.type == "ImportSpecifier") {
            combine.push(o);
            continue;
        }
        if (f) {
            f = false;
            code += " ";
        } else if (opts.indent !== undefined) {
            code += ", ";
        } else {
            code += ",";
        }
        code += context.serialize(o, opts).code;
    }
    if (combine.length) {
        if (f) {
            if (d !== undefined) {
                code += " {";
            } else {
                code += "{";
            }
        } else if (opts.indent !== undefined) {
            code += ", {";
        } else {
            code += ",{";
        }
        f = true;
        for (const o of combine) {
            if (f) {
                f = false;
            } else if (opts.indent !== undefined) {
                code += ", ";
            } else {
                code += ",";
            }
            code += context.serialize(o, opts).code;
        }
    }
    if (d !== undefined || !combine.length) {
        code += " ";
    }
    if (ast.specifiers.length) {
        code += "from ";
    }
    code += context.serialize(ast.source, opts).code + ";";
    return { code, ast };
}
