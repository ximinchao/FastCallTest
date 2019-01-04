//const assert = require("chai").assert;
const lib = require("../src");

test("testAdd test", async function() {
    let res = 0;
    res = await lib.testAdd(1, 2);
    expect(res).toEqual(3);
    res = await lib.testAdd(2, 2);
    expect(res).toEqual(4);
});
