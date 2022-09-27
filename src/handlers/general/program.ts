import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function Program(context: ISerializationContext, ast: import("estree").Program, opts: ISerializationOptions): ISerializationResult {
    const code: string[] = [];
    for (const a of ast.body) {
        code.push(context.serialize(a, opts).code);
    }
    let m = "";
    if (opts.indent !== undefined) {
        m += "\n";
        for (let i = 0; i < opts.indent; i++) {
            m += "\t";
        }
    }
    return { code: code.join(m), ast };
}
