import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function AssignmentPattern(context: ISerializationContext, ast: import("estree").AssignmentPattern, opts: ISerializationOptions): ISerializationResult {
    let code = context.serialize(ast.left, opts).code;
    code += opts.indent === undefined ? "=" : " = ";
    code += context.serialize(ast.right, opts).code;
    return { code, ast };
}
