import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function MetaProperty(_context: ISerializationContext, ast: import("estree").MetaProperty, _opts: ISerializationOptions): ISerializationResult {
    const code = ast.meta + "." + ast.property;
    return { code, ast };
}
