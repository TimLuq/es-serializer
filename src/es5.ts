import { IfStatement } from "./handlers/choice/if-statement";
import { SwitchCase } from "./handlers/choice/switch-case";
import { SwitchStatement } from "./handlers/choice/switch-statement";
import { BreakStatement } from "./handlers/control-flow/break-statement";
import { ContinueStatement } from "./handlers/control-flow/continue-statement";
import { LabeledStatement } from "./handlers/control-flow/labeled-statement";
import { ReturnStatement } from "./handlers/control-flow/return-statement";
import { CatchClause } from "./handlers/exceptions/catch-clause";
import { ThrowStatement } from "./handlers/exceptions/throw-statement";
import { TryStatement } from "./handlers/exceptions/try-statement";
import { BinaryExpression } from "./handlers/expressions/binary/binary-expression";
import { ArrayExpression } from "./handlers/expressions/general/array-expression";
import { ObjectExpression } from "./handlers/expressions/general/object-expression";
import { Property } from "./handlers/expressions/general/property";
import { ThisExpression } from "./handlers/expressions/general/this-expression";
import { UnaryExpression } from "./handlers/expressions/unary/unary-expression";
import { UpdateExpression } from "./handlers/expressions/unary/update-expression";
import { FunctionDeclaration, FunctionExpression } from "./handlers/general/function";
import { Identifier } from "./handlers/general/identifier";
import { Literal } from "./handlers/general/literal";
import { Program } from "./handlers/general/program";
import { RegExpLiteral } from "./handlers/general/regexp-literal";
import { VariableDeclaration } from "./handlers/general/variable-declaration";
import { VariableDeclarator } from "./handlers/general/variable-declarator";
import { DoWhileStatement } from "./handlers/loops/do-while-statement";
import { ForInStatement } from "./handlers/loops/for-in-statement";
import { ForStatement } from "./handlers/loops/for-statement";
import { WhileStatement } from "./handlers/loops/while-statement";
import { BlockStatement } from "./handlers/statements/block-statement";
import { DebuggerStatement } from "./handlers/statements/debugger-statement";
import { EmptyStatement } from "./handlers/statements/empty-statement";
import { ExpressionStatement } from "./handlers/statements/expression-statement";
import { WithStatement } from "./handlers/statements/with-statement";
import { IAst, ISerializationContext, ISerializationOptions, ISerializationResult, ISerializer, ISerializerOptions } from "./interfaces";

const syn = Object.assign({} as { [k: string]: (context: ISerializationContext, ast: IAst, opts: ISerializationOptions) => ISerializationResult }, {
    Identifier,
    Literal,
    RegExpLiteral,
    Program,
    FunctionExpression,

    ExpressionStatement,
    BlockStatement,
    EmptyStatement,
    DebuggerStatement,
    WithStatement,

    ReturnStatement,
    LabeledStatement,
    BreakStatement,
    ContinueStatement,

    IfStatement,
    SwitchStatement,
    SwitchCase,

    ThrowStatement,
    TryStatement,
    CatchClause,

    WhileStatement,
    DoWhileStatement,
    ForStatement,
    ForInStatement,

    VariableDeclaration,
    VariableDeclarator,
    FunctionDeclaration,

    ThisExpression,
    ArrayExpression,
    ObjectExpression,
    Property,

    UnaryExpression,
    UpdateExpression,
    
    BinaryExpression,
});

const defaultOpts: ISerializerOptions = {
    support: []
};

const esSerializer5: ISerializer = {
    addToContext(context: ISerializationContext) {
        for (const k of Object.keys(syn)) {
            context.addHandler(k, this, defaultOpts);
        }
    },
    serialize(context: ISerializationContext, ast: IAst, opts: ISerializationOptions): ISerializationResult {
        const t = syn[ast.type];
        if (t) {
            return t(context, ast, opts);
        }
        let e = "Unexpected AST type " + JSON.stringify(ast.type) + " for ES5";
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
};

export default esSerializer5;
