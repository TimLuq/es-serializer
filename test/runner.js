import { readdirSync } from "fs";

(async function main() {
    const files = readdirSync("./test").filter((x) => x.endsWith(".spec.js"));
    /** @type {[string, Promise<Error | Array<Error | Promise<Error[]>>>][]} */
    const proms = [];
    let successes = 0;
    let errors = 0;
    for (const f of files) {
        proms.push([f, import("./" + f)]);
    }
    for (const [f, t] of proms) {
        try {
            let res = (await t);
            if (!Array.isArray(res)) {
                res = [res];
            }
            for (const e0 of res) {
                const e = await e0;
                if (!e) {
                    successes += 1;
                } else {
                    errors += 1;
                    console.error(e.stack || e);
                }
            }
        } catch (e) {
            console.error(e.stack || e);
            errors += 1;
        }
    }
    console.log(successes + "/" + (successes + errors) + " succeeded");
})();
