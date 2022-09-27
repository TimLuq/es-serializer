import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function RegExpLiteral(context: ISerializationContext, ast: import("estree").RegExpLiteral, _opts: ISerializationOptions): ISerializationResult {
    return { code: "/" + ast.regex.pattern + "/" + ast.regex.flags, ast };
}
