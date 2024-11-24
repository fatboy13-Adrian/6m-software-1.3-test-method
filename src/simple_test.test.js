// Import the functions to test
const {addFunc, isDivisbleBy5} = require("./sample");

describe("Test Suite for sample.js functions", ()=>
{
    it("should add 3 numbers", ()=>
    {
        const result = addFunc(1, 3, 4);
        expect(result).toBe(8);
    })

    it("should check divisibility by 5", ()=>
    {
        const result = isDivisbleBy5(1283);
        expect(result).toBe(false);
    })
})