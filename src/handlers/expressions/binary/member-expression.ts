import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function MemberExpression(context: ISerializationContext, ast: import("estree").MemberExpression, opts: ISerializationOptions): ISerializationResult {
    let code = context.serialize(ast.object, opts).code;
    if (ast.computed) {
        code += "[";
    } else {
        code += ".";
    }
    code += context.serialize(ast.property, opts).code;
    if (ast.computed) {
        code += "]";
    }
    return { code, ast };
}
