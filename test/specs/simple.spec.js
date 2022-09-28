import { parse, serialize } from "../ctx.js";

import * as assert from "uvu/assert";
import { suite } from "uvu";
const test = suite("empty definitions");

test("simple arrow function", () => {
    const input = parse`(a, b, c, ...other) => {
        return (a + b + c) + other.join(",");
    }`;
    const res = serialize(input);
    assert.is(res, "(a, b, c, ...other) => {\n\treturn ((a + b) + c) + other.join(\",\");\n};");
});
test("simple function", () => {
    const input = parse`function empty(a, b, c, d, e, ...other) {
        return (a + b) + c + d + (e + other.join(","));
    }`;
    const res = serialize(input);
    assert.is(res, "function empty(a, b, c, d, e, ...other) {\n\treturn (((a + b) + c) + d) + (e + other.join(\",\"));\n}");
});
test("simple object", () => {
    const input = parse`const r={a:0,b:true,c:""}`;
    const res = serialize(input);
    assert.is(res, "const r = {\n\ta: 0,\n\tb: true,\n\tc: \"\"\n};");
});
test("simple array", () => {
    const input = parse`[0,true,""]`;
    const res = serialize(input);
    assert.is(res, "[\n\t0,\n\ttrue,\n\t\"\"\n];");
});
test("simple string", () => {
    const input = parse`"abc\"abc"`;
    const res = serialize(input);
    assert.is(res, "\"abc\\\"abc\";");
});
test("simple template string", () => {
    const input = parse`${"`abc${123}abc`"}`;
    const res = serialize(input);
    assert.is(res, "`abc${123}abc`;");
});
test("simple class", () => {
    const input = parse`class TestClass {
        constructor() {
            this.a = 0;
        }
        set something(a) {
            this.a = a;
        }
        get something() {
            return this.a;
        }
        get_something() {
            return this.a;
        }
        set_something(a) {
            this.a = a;
        }
    }`;
    const res = serialize(input);
    assert.is(res, "class TestClass {\n\tconstructor() {\n\t\tthis.a = 0;\n\t}\n\tset something(a) {\n\t\tthis.a = a;\n\t}\n\tget something() {\n\t\treturn this.a;\n\t}\n\tget_something() {\n\t\treturn this.a;\n\t}\n\tset_something(a) {\n\t\tthis.a = a;\n\t}\n}");
});

test.run();
