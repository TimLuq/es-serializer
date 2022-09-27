import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function TemplateLiteral(context: ISerializationContext, ast: import("estree").TemplateLiteral, opts: ISerializationOptions): ISerializationResult {
    let code = "`";
    let i = 0;
    const d = opts.indent;
    if (d !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        opts.indent!++;
    }
    while (i < ast.expressions.length) {
        code += context.serialize(ast.quasis[i], opts).code;
        code += "${" + context.serialize(ast.expressions[i], opts).code + "}";
        i++;
    }
    code += context.serialize(ast.quasis[i], opts).code + "`";
    opts.indent = d;
    return { code, ast };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function TemplateElement(_context: ISerializationContext, ast: import("estree").TemplateElement, _opts: ISerializationOptions): ISerializationResult {
    return { code: ast.value.raw, ast };
}

