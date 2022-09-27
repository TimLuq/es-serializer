import { ISerializationOptions, ISerializationResult, ISerializationContext } from "../../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ThisExpression(context: ISerializationContext, ast: import("estree").ThisExpression, _opts: ISerializationOptions): ISerializationResult {
    return { code: "this", ast };
}
