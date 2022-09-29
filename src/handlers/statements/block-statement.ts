import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function BlockStatement(context: ISerializationContext, ast: import("estree").BlockStatement, opts: ISerializationOptions): ISerializationResult {
    const code: string[] = [];
    const indent = opts.indent;
    if (indent !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        opts.indent!++;
    }
    for (const a of ast.body) {
        code.push(context.serialize(a, opts).code);
    }
    opts.indent = indent;
    if (indent !== undefined && code.length) {
        let m = "\n";
        for (let i = 0; i < indent; i++) {
            m += "\t";
        }
        const n = m + "\t";
        return { code: "{" + n + code.join(n) + m + "}" };
    } else {
        return { code: "{" + code.join("") + "}", ast };
    }
}
