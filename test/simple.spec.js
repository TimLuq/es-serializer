import { parse, serialize } from "./ctx.js";

import { describe } from "./env.js";

describe("empty definitions", (test) => {
    test("simple arrow function", (expect) => {
        const input = parse`(a, b, c, ...other) => {
            return (a + b + c) + other.join(",");
        }`;
        const res = serialize(input);
        expect(res).toBe("(a, b, c, ...other) => {\n\treturn (a + b + c) + other.join(",");\n};");
    });
    test("simple function", (expect) => {
        const input = parse`function empty(a, b, c, ...other) {
            return (a + b + c) + other.join(",");
        }`;
        const res = serialize(input);
        expect(res).toBe("function empty() {\n\treturn (a + b + c) + other.join(",");\n}");
    });
    test("simple object", (expect) => {
        const input = parse`{a:0,b:true,c:""}`;
        const res = serialize(input);
        expect(res).toBe("{\n\ta: 0,\n\tb: true,\n\tc: \"\"\n}");
    });
    test("empty array", (expect) => {
        const input = parse`[0,true,""]`;
        const res = serialize(input);
        expect(res).toBe("[\n\t0,\n\ttrue,\n\t\"\"\n]");
    });
    test("simple string", (expect) => {
        const input = parse`"abc\"abc"`;
        const res = serialize(input);
        expect(res).toBe("\"abc\\\"abc\";");
    });
    test("simple template string", (expect) => {
        const input = parse`${"`"}abc\${123}abc${"`"}`;
        const res = serialize(input);
        expect(res).toBe("`abc${123}abc`;");
    });
    test("simple class", (expect) => {
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
        expect(res).toBe("class TestClass {\n\tconstructor() {\n\t\tthis.a = 0;\n\t}\n\tset something(a) {\n\t\tthis.a = a;\n\t}\n\tget something() {\n\t\treturn this.a;\n\t}\n\tget_something() {\n\t\treturn this.a;\n\t}\n\tset_something(a) {\n\t\tthis.a = a;\n\t}\n}");
    });
});
