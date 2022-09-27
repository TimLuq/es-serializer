export interface ISerializationOptions {
    indent?: number;
    es?: number;
}

export interface ISerializationResult {
    code: string;
    ast?: IAst;
}


export interface SrcLocation {
    start: LinePosition;
    end: LinePosition;
    source?: string | null | undefined;
}

export interface LinePosition {
    line: number;
    column: number;
}

export interface IAst {
    type: string;
    loc?: SrcLocation | null;
}

export interface ISerializerOptions {
    support: string[];
}

export interface ISerializer {
    addToContext(context: ISerializationContext): void;
    serialize(context: ISerializationContext, ast: IAst, opts: ISerializationOptions): ISerializationResult;
    override?(type: string, otherOptions: ISerializerOptions): boolean;
}

export interface ISerializationContext {
    addToContext(ser: ISerializer): this;

    addHandler(type: string, ser: ISerializer, serOptions: ISerializerOptions): boolean;

    handlerSupport(type: string): ISerializerOptions | undefined;

    serialize(ast: IAst, options?: ISerializationOptions): ISerializationResult;
}