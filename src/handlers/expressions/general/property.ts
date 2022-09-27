import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Property(context: ISerializationContext, ast: import("estree").Property, opts: ISerializationOptions): ISerializationResult {
    let code = "";
    if (ast.kind === "get") {
        code = "get ";
    } else if (ast.kind === "set") {
        code = "set ";
    }
    if (ast.computed) {
        code += "[";
    }
    code += context.serialize(ast.key, opts).code;
    if (ast.computed) {
        code += "]";
    }
    if (ast.shorthand && !ast.computed && (opts.es === undefined || opts.es > 2015)) {
        return { code, ast };
    }
    if (opts.indent !== undefined) {
        code += ": ";
    } else {
        code += ":";
    }
    code += context.serialize(ast.value, opts).code;
    return { code, ast };
}
