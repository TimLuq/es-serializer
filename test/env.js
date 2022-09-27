export function describe(desc, f) {
    f(test);
}

function test(t, f) {
    f(expect.bind(undefined, t));
}

class Expect {
    constructor(t, v) {
        this.t = t;
        this.v = v;
    }

    toBe(v) {
        if (v !== this.v) {
            throw new Error(this.t + ": expected " + JSON.stringify(this.v) + " to be " + JSON.stringify(v));
        }
    }
}

function expect(t, v) {
    return new Expect(t, v);
}


