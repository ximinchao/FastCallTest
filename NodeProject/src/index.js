const path = require("path");
const fastcall = require("fastcall");
const Library = fastcall.Library;

const lib = new Library(path.resolve(__dirname, "TestLib.dll"));
lib.asyncFunction("int TestAdd(int a, int b)");

const { TestAdd } = lib.interface;

const testAdd = async (a, b) => {
    console.log("before dll called");
    const c = await TestAdd(a, b);
    console.log("after dll called");
    return c;
};

module.exports = { testAdd };
