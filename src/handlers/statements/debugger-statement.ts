import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function DebuggerStatement(context: ISerializationContext, ast: import("estree").DebuggerStatement, _opts: ISerializationOptions): ISerializationResult {
    return { code: "debugger;", ast };
}
