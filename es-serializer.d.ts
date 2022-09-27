import { IAst, ISerializationContext, ISerializationOptions, ISerializationResult, ISerializer, ISerializerOptions } from "./interfaces";
declare const symSers: unique symbol;
interface IAddedHandler {
    s: ISerializer;
    o: ISerializerOptions;
}
declare class SerializationContext implements ISerializationContext {
    readonly [symSers]: Map<string, IAddedHandler>;
    addToContext(ser: ISerializer): this;
    addHandler(type: string, ser: ISerializer, serOptions: ISerializerOptions): boolean;
    handlerSupport(type: string): ISerializerOptions | undefined;
    serialize(ast: IAst, options?: ISerializationOptions): ISerializationResult;
}
export { SerializationContext };
export default SerializationContext;
