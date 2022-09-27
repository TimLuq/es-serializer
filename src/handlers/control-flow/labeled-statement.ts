import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function LabeledStatement(context: ISerializationContext, ast: import("estree").LabeledStatement, opts: ISerializationOptions): ISerializationResult {
    let code = context.serialize(ast.label, opts).code;
    if (opts.indent !== undefined) {
        code += ": ";
    } else {
        code += ":";
    }
    code += context.serialize(ast.body, opts).code;
    return { code, ast };
}
