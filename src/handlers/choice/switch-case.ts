import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";


export function SwitchCase(context: ISerializationContext, ast: import("estree").SwitchCase, opts: ISerializationOptions): ISerializationResult {
    let code = "case ";
    if (ast.test) {
        code += context.serialize(ast.test, opts).code + ":";
    } else {
        code = "default:";
    }

    let ident = "";
    const d = opts.indent;
    if (d !== undefined) {
        ident = "\n";
        for (let i = 0; i < d; i++) {
            ident += "\t";
        }
        ident += "\t";
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        opts.indent! += 1;
    }
    if (ast.consequent.length) {
        for (const c of ast.consequent) {
            code += ident + context.serialize(c, opts).code;
        }
    }
    if (d !== undefined) {
        opts.indent = d;
    }
    return { code, ast };
}
