import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Identifier(context: ISerializationContext, ast: import("estree").Identifier, _opts: ISerializationOptions): ISerializationResult {
    return { code: ast.name, ast };
}
