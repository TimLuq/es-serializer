import { parse, serialize } from "../ctx.js";

import * as assert from "uvu/assert";
import { suite } from "uvu";
const test = suite("empty definitions");

test("empty arrow function", () => {
    const input = parse`() => {}`;
    const res = serialize(input);
    assert.is(res, "() => {};");
});
test("empty function", () => {
    const input = parse`function empty() {}`;
    const res = serialize(input);
    assert.is(res, "function empty() {}");
});
test("empty object", () => {
    const input = parse`{}`;
    const res = serialize(input);
    assert.is(res, "{}");
});
test("empty array", () => {
    const input = parse`[]`;
    const res = serialize(input);
    assert.is(res, "[];");
});
test("empty string", () => {
    const input = parse`""`;
    const res = serialize(input);
    assert.is(res, "\"\";");
});
test("empty template string", () => {
    const input = parse`${"``"}`;
    const res = serialize(input);
    assert.is(res, "``;");
});
test("empty class", () => {
    const input = parse`class TestClass {}`;
    const res = serialize(input);
    assert.is(res, "class TestClass {}");
});
test("empty import", () => {
    const input = parse`import "someplace";`;
    const res = serialize(input);
    assert.is(res, "import \"someplace\";");
});
test("empty default export", () => {
    const input = parse`export default {};`;
    const res = serialize(input);
    assert.is(res, "export default {};");
});

test.run();
