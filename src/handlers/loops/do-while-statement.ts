import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function DoWhileStatement(context: ISerializationContext, ast: import("estree").DoWhileStatement, opts: ISerializationOptions): ISerializationResult {
    let code = "do";
    const ident = opts.indent !== undefined;
    if (ident) {
        code += " ";
    }
    code += context.serialize(ast.body, opts).code;
    if (ident) {
        code += " while (";
    } else {
        code += "while(";
    }
    code += context.serialize(ast.test, opts).code + ");";
    return { code, ast };
}
