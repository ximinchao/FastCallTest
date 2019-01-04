const assert = require("chai").assert;
const lib = require("../src");

describe("library test", function() {
    it("addTest test", async function() {
        this.timeout(10000);

        let res = await lib.testAdd(1, 2);
        assert.equal(res, 3, "first add failed");

        res = await lib.testAdd(2, 2);
        assert.equal(res, 4, "first add failed");
    });
});