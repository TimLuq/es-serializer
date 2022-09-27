import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function EmptyStatement(context: ISerializationContext, ast: import("estree").EmptyStatement, _opts: ISerializationOptions): ISerializationResult {
    return { code: ";", ast };
}
