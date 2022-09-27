export interface Describe {
    (desc: string, env: (test: Test) => void): void;
}
export interface Test {
    (test: string, env: (expect: ExpectFn) => void): void | Promise<void>;
}
export interface ExpectFn {
    (v: any): Expect;
}
export interface Expect {
    toBe(v: any): void;
}

export const describe: Describe;
