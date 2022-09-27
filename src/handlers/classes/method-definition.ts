import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";
import { funcDefSyntax } from "../general/function";

export function MethodDefinition(context: ISerializationContext, ast: import("estree").MethodDefinition, opts: ISerializationOptions): ISerializationResult {
    let code = "";
    if (ast.static) {
        code = "static ";
    }
    if (ast.kind == "get") {
        code = "get ";
    } else if (ast.kind == "set") {
        code = "set ";
    }
    if (ast.computed) {
        code += "[";
    }
    code += context.serialize(ast.key, opts).code;
    if (ast.computed) {
        code += "]";
    }
    code += funcDefSyntax(context, ast.value, opts).code;
    return { code, ast };
}
