const addFunc = (a, b, c) => 
{
    return a + b + c;               //Accepts 3 parameters and return their sum
}//end of const addFunc

const isDivisibleBy5 = (num1) =>    //Accepts 1 parameter num1 and checks if number is divisible by 5
{
    if (num1 % 5 == 0)
    {
        return true;                //Returns true if number is divisible by 5
    }//End of if
    else 
    {
        return false;               //Returns false if number is not divisible by 5
    }//End of else
}//End of const isDivisibleBy5

module.exports = 
{
    addFunc,
    isDivisibleBy5
}