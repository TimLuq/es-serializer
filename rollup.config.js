import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

/** @type {import("rollup").RollupOptions} */
const conf = {
    input: [
        "src/index.ts",
        "src/es5.ts",
        "src/es2015.ts",
        "src/es-serializer.ts",
    ],
    plugins: [
        typescript(),
        terser(),
    ],
    output: [
        { format: "es", dir: "./", sourcemap: true }
    ],
};

export default conf;
