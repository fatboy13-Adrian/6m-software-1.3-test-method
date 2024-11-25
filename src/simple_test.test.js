const { addFunc, isDivisibleBy5 } = require("./sample");    // Import the functions to test

describe("Test Suite for sample.js functions", () => 
{
    it("should add 3 numbers", () =>
    {
        const result = addFunc(1, 3, 4);
        expect(result).toBe(7);
    });//End of it should add 3 numbers

    it("should check divisibility by 5", () => 
    {
        const result = isDivisibleBy5(1283);
        expect(result).toBe(false);
    });//End of it should check divisibility by 5

    it("should return true for numbers divisible by 5", () => 
    {
        const result = isDivisibleBy5(10);
        expect(result).toBe(true);
    });//End of it should return true if number is divisible by 5
}); //End of describe