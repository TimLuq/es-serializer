import { ISerializationContext, ISerializationOptions, ISerializationResult } from "../../interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function Literal(context: ISerializationContext, ast: import("estree").Literal, _opts: ISerializationOptions): ISerializationResult {
    const t = typeof ast.value;
    if (t == "string") {
        return { code: JSON.stringify(ast.value) };
    }
    if (t == "number") {
        return { code: (ast.value as number).toString() };
    }
    if (t == "bigint") {
        return { code: (ast.value as bigint).toString() + "n" };
    }
    if (t == "boolean") {
        return { code: t ? "true" : "false" };
    }
    if (t == "undefined") {
        return { code: "undefined" };
    }
    if (ast.value === null) {
        return { code: "null" };
    }
    if (ast.value instanceof RegExp) {
        return { code: ast.value.toString() };
    }
    let e = "Unexpected literal type '" + t + "'";
    if (ast.loc) {
        if (ast.loc.source) {
            e += " at " + ast.loc.source + ":";
        } else {
            e += " at position ";
        }
        e += ast.loc.start.line + ":" + ast.loc.start.column;
    }
    throw new Error(e);
}
