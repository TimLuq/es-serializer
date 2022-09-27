import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function SwitchStatement(context: ISerializationContext, ast: import("estree").SwitchStatement, opts: ISerializationOptions): ISerializationResult {
    let code = "switch";
    if (opts.indent !== undefined) {
        code += " (";
    } else {
        code += "(";
    }
    code += context.serialize(ast.discriminant, opts).code;
    let ident = "";
    let m = "";
    if (opts.indent !== undefined) {
        code += ") {";
        ident = "\n";
        for (let i = 0; i < opts.indent; i++) {
            ident += "\t";
        }
        m = ident;
        ident += "\t";
    } else {
        code += "){";
    }
    if (ast.cases.length) {
        const d = opts.indent;
        if (d !== undefined) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            opts.indent! += 1;
        }
        for (const c of ast.cases) {
            code += ident + context.serialize(c, opts).code;
        }
        if (d !== undefined) {
            opts.indent = d;
        }
        code += m;
    }
    code += "}";
    return { code, ast };
}
