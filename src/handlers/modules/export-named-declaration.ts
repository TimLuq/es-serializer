import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function ExportNamedDeclaration(context: ISerializationContext, ast: import("estree").ExportNamedDeclaration, opts: ISerializationOptions): ISerializationResult {
    let code = "export";
    if (ast.declaration) {
        code += " " + context.serialize(ast.declaration, opts).code;
        return { code, ast };
    }
    let f = true;
    const d = opts.indent;
    if (d !== undefined) {
        code += " { ";
    } else {
        code += "{";
    }
    for (const o of ast.specifiers) {
        if (f) {
            f = false;
        } else if (opts.indent !== undefined) {
            code += ", ";
        } else {
            code += ",";
        }
        code += context.serialize(o, opts).code;
    }
    if (d !== undefined) {
        code += " }";
    } else {
        code += "}";
    }
    if (ast.source) {
        if (d !== undefined) {
            code += " ";
        }
        code += "from " + context.serialize(ast.source, opts).code;
    }
    code += ";";
    return { code, ast };
}
