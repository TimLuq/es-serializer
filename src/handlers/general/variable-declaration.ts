import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

export function VariableDeclaration(context: ISerializationContext, ast: import("estree").VariableDeclaration, opts: ISerializationOptions): ISerializationResult {
    let code = (ast.kind || "var") + " ";
    let fst = true;
    const indent = opts.indent !== undefined;
    for (const a of ast.declarations) {
        if (fst) {
            fst = false;
        } else if (indent) {
            code += ", ";
        } else {
            code += ",";
        }
        code += context.serialize(a, opts).code;
    }
    code += ";";
    return { code, ast };
}
