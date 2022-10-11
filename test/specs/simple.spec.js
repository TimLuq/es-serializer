import { parse, serialize } from "../ctx.js";

import * as assert from "uvu/assert";
import { suite } from "uvu";
const test = suite("simple definitions");

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
test("simple iife", () => {
    const input = parse`(function(o) {
        let n = 0;
        for (const k in o) {
            n++;
        }
        return n;
    })({a:0,b:true})`;
    const res = serialize(input);
    assert.is(res, "(function(o) {\n\tlet n = 0;\n\tfor (const k in o) {\n\t\tn++;\n\t}\n\treturn n;\n})({ a: 0, b: true });");
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
test("simple if-else", () => {
    const input = parse`if (a == 0 && (b == 1 || c == 2)) {
        let i = 0;
        while (a < b || (i = a) == 0) {
            a++;
            i++;
        }
        console.log(i);
    } else {
        const m = "test";
        console.log(m);
    }`;
    const res = serialize(input);
    const expected = `
if (a == 0 && (b == 1 || c == 2)) {
\tlet i = 0;
\twhile (a < b || (i = a) == 0) {
\t\ta++;
\t\ti++;
\t}
\tconsole.log(i);
} else {
\tconst m = "test";
\tconsole.log(m);
}
`.trim();
    assert.is(res, expected);
});

test.run();
