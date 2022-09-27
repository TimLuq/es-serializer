import { IfStatement } from "./handlers/choice/if-statement";
import { SwitchCase } from "./handlers/choice/switch-case";
import { SwitchStatement } from "./handlers/choice/switch-statement";
import { ClassDeclaration, ClassExpression } from "./handlers/classes/class";
import { ClassBody } from "./handlers/classes/class-body";
import { MethodDefinition } from "./handlers/classes/method-definition";
import { BreakStatement } from "./handlers/control-flow/break-statement";
import { ContinueStatement } from "./handlers/control-flow/continue-statement";
import { LabeledStatement } from "./handlers/control-flow/labeled-statement";
import { ReturnStatement } from "./handlers/control-flow/return-statement";
import { CatchClause } from "./handlers/exceptions/catch-clause";
import { ThrowStatement } from "./handlers/exceptions/throw-statement";
import { TryStatement } from "./handlers/exceptions/try-statement";
import { AssignmentExpression } from "./handlers/expressions/binary/assignment-expression";
import { BinaryExpression } from "./handlers/expressions/binary/binary-expression";
import { CallExpression } from "./handlers/expressions/binary/call-expression";
import { ConditionalExpression } from "./handlers/expressions/binary/conditional-expression";
import { LogicalExpression } from "./handlers/expressions/binary/logical-expression";
import { MemberExpression } from "./handlers/expressions/binary/member-expression";
import { NewExpression } from "./handlers/expressions/binary/new-expression";
import { SequenceExpression } from "./handlers/expressions/binary/sequence-expression";
import { ArrayExpression } from "./handlers/expressions/general/array-expression";
import { ArrowFunctionExpression } from "./handlers/expressions/general/arrow-function-expression";
import { ObjectExpression } from "./handlers/expressions/general/object-expression";
import { Property } from "./handlers/expressions/general/property";
import { Super } from "./handlers/expressions/general/super";
import { TaggedTemplateExpression } from "./handlers/expressions/general/tagged-template-expression";
import { ThisExpression } from "./handlers/expressions/general/this-expression";
import { YieldExpression } from "./handlers/expressions/general/yield-expression";
import { UnaryExpression } from "./handlers/expressions/unary/unary-expression";
import { UpdateExpression } from "./handlers/expressions/unary/update-expression";
import { ArrayPattern } from "./handlers/general/array-pattern";
import { AssignmentPattern } from "./handlers/general/assignment-pattern";
import { FunctionDeclaration, FunctionExpression } from "./handlers/general/function";
import { Identifier } from "./handlers/general/identifier";
import { Literal } from "./handlers/general/literal";
import { MetaProperty } from "./handlers/general/meta-property";
import { ObjectPattern } from "./handlers/general/object-pattern";
import { Program } from "./handlers/general/program";
import { RegExpLiteral } from "./handlers/general/regexp-literal";
import { RestElement } from "./handlers/general/rest-element";
import { SpreadElement } from "./handlers/general/spread-element";
import { TemplateElement, TemplateLiteral } from "./handlers/general/template-literal";
import { VariableDeclaration } from "./handlers/general/variable-declaration";
import { VariableDeclarator } from "./handlers/general/variable-declarator";
import { DoWhileStatement } from "./handlers/loops/do-while-statement";
import { ForInStatement } from "./handlers/loops/for-in-statement";
import { ForOfStatement } from "./handlers/loops/for-of-statement";
import { ForStatement } from "./handlers/loops/for-statement";
import { WhileStatement } from "./handlers/loops/while-statement";
import { ExportAllDeclaration } from "./handlers/modules/export-all-declaration";
import { ExportDefaultDeclaration } from "./handlers/modules/export-default-declaration";
import { ExportNamedDeclaration } from "./handlers/modules/export-named-declaration";
import { ExportSpecifier } from "./handlers/modules/export-specifier";
import { ImportDeclaration } from "./handlers/modules/import-declaration";
import { ImportDefaultSpecifier } from "./handlers/modules/import-default-specifier";
import { ImportNamespaceSpecifier } from "./handlers/modules/import-namespace-specifier";
import { ImportSpecifier } from "./handlers/modules/import-specifier";
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

    FunctionDeclaration,
    VariableDeclaration,
    VariableDeclarator,

    ThisExpression,
    ArrayExpression,
    ObjectExpression,
    Property,

    UnaryExpression,
    UpdateExpression,
    
    BinaryExpression,
    AssignmentExpression,
    LogicalExpression,
    MemberExpression,
    ConditionalExpression,
    CallExpression,
    NewExpression,
    SequenceExpression,

    /// ES2015
    
    ForOfStatement,
    Super,
    SpreadElement,

    ArrowFunctionExpression,
    YieldExpression,

    TemplateLiteral,
    TaggedTemplateExpression,
    TemplateElement,

    ObjectPattern,
    ArrayPattern,
    RestElement,
    AssignmentPattern,

    ClassBody,
    MethodDefinition,
    ClassDeclaration,
    ClassExpression,
    MetaProperty,

    ImportDeclaration,
    ImportSpecifier,
    ImportDefaultSpecifier,
    ImportNamespaceSpecifier,

    ExportNamedDeclaration,
    ExportSpecifier,
    ExportDefaultDeclaration,
    ExportAllDeclaration,
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
