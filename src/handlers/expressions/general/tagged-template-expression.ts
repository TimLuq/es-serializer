import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function TaggedTemplateExpression(context: ISerializationContext, ast: import("estree").TaggedTemplateExpression, opts: ISerializationOptions): ISerializationResult {
    const code = context.serialize(ast.tag, opts).code + context.serialize(ast.quasi, opts).code;
    return { code, ast };
}
