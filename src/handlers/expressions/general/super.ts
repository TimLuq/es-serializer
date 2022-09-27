import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Super(_context: ISerializationContext, ast: import("estree").Super, _opts: ISerializationOptions): ISerializationResult {
    return { code: "super", ast };
}
