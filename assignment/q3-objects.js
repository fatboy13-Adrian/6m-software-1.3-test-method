/*
    Task:
    You are to convert the given two arrays (bookIdArr & bookTitle) into an object (booksObj) with four key value pairs:
    - NLB1 -> Lord of the Rings
    - NLB2 -> Programming for Dummies
    - NLB3 -> Introduction to Software Testing
    - NLB4 -> How to be a Software Developer

    Tips: 
    - Use a for loop and utilizes the index variable as a running number.
    - Be sure got use google!
*/

const bookIdArr = ["NLB1", "NLB2", "NLB3", "NLB4"];                                                                                         //Declare a constant array list named book ID array                                                         
const bookTitle = ["Lord of the Rings", "Programming for Dummies", "Introduction to Software Testing", "How to be a Software Developer"];   //Declare a constant array list named book title.
let booksObj = {};                                                                                                                          //Initialize an empty object that can be used to populate with key - value pairs

function convert(keyArr, valueArr)
{
    // Add code here
    /*
        Tips:
        - Step 1: Create a local scoped object literal.
        - Step 2: Define a for-loop that run based on keyArr's length.
        - Step 3: Within the for-loop, add the key and value to the local scoped object.
        - Step 4: Write a return statement to return the object literal after the for-loop code block.
    */
}//end of function convert()

function printByKey(key)
{
    console.log(booksObj[key]);     //Retrieve and display a value from the booksObj object based on specified key.
}//end of function printByKey()

booksObj = convert(bookIdArr, bookTitle);       //Assign results of the convert function to booksObj
printByKey("NLB2");                             //Prints "Progamming for Dummies"

//Ignore the code below this line
module.exports = 
{
    convert
}