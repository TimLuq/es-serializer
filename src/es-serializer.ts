import { IAst, ISerializationContext, ISerializationOptions, ISerializationResult, ISerializer, ISerializerOptions } from "./interfaces";

interface IAddedHandler {
    s: ISerializer;
    o: ISerializerOptions;
}

export class SerializationContext implements ISerializationContext {
    #sers = new Map<string, IAddedHandler>();

    public addToContext(ser: ISerializer): this {
        ser.addToContext(this);
        return this;
    }

    public addHandler(type: string, ser: ISerializer, serOptions: ISerializerOptions): boolean {
        const t = this.#sers.get(type);
        if (t && (!ser.override || !ser.override(type, t.o))) {
            return false;
        }
        this.#sers.set(type, { s: ser, o: serOptions });
        return true;
    }

    public handlerSupport(type: string): ISerializerOptions | undefined {
        const t = this.#sers.get(type);
        return t ? t.o : undefined;
    }

    public serialize(ast: IAst, options?: ISerializationOptions): ISerializationResult {
        const t = this.#sers.get(ast.type);
        if (t) {
            if (!options) {
                options = {};
            }
            return t.s.serialize(this, ast, options);
        }
        let e = "Unexpected AST type " + JSON.stringify(ast.type);
        if (ast.loc) {
            e += " at ";
            if (ast.loc.source) {
                e += ast.loc.source + ":";
            } else {
                e += "position ";
            }
            e += ast.loc.start.line + ":" + ast.loc.start.column;
        }
        throw new SyntaxError(e);
    }
}
