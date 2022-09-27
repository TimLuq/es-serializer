import { parse, serialize } from "./ctx.js";

import { describe } from "./env.js";

describe("empty definitions", (test) => {
    test("empty arrow function", (expect) => {
        const input = parse`() => {}`;
        const res = serialize(input);
        expect(res).toBe("() => {};");
    });
    test("empty function", (expect) => {
        const input = parse`function empty() {}`;
        const res = serialize(input);
        expect(res).toBe("function empty() {}");
    });
    test("empty object", (expect) => {
        const input = parse`{}`;
        const res = serialize(input);
        expect(res).toBe("{}");
    });
    test("empty array", (expect) => {
        const input = parse`[]`;
        const res = serialize(input);
        expect(res).toBe("[];");
    });
    test("empty string", (expect) => {
        const input = parse`""`;
        const res = serialize(input);
        expect(res).toBe("\"\";");
    });
    test("empty template string", (expect) => {
        const input = parse`${"``"}`;
        const res = serialize(input);
        expect(res).toBe("``;");
    });
    test("empty class", (expect) => {
        const input = parse`class TestClass {}`;
        const res = serialize(input);
        expect(res).toBe("class TestClass {}");
    });
    test("empty import", (expect) => {
        const input = parse`import "someplace";`;
        const res = serialize(input);
        expect(res).toBe("import \"someplace\";");
    });
    test("empty default export", (expect) => {
        const input = parse`export default {};`;
        const res = serialize(input);
        expect(res).toBe("export default {};");
    });
});
