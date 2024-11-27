const bookIdArr = ["NLB1", "NLB2", "NLB3", "NLB4"];                                                                                         //Declare a constant array list named book ID array                                                         
const bookTitle = ["Lord of the Rings", "Programming for Dummies", "Introduction to Software Testing", "How to be a Software Developer"];   //Declare a constant array list named book title.
let booksObj = {};                                                                                                                          //Initialize an empty object that can be used to populate with key - value pairs

function convert(keyArr, valueArr)
{
        let resultObj ={};                          //Create a local scoped object literal named result object
        
        for(let i = 0; i < keyArr.length; i++)      //Define a for loop that run based on keyArr's length
        resultObj[keyArr[i]] = valueArr[i];         //Inside the for loop, add the key and value to local scoped object, result object
        
        return resultObj;                           //Return the result object literal after the for loop code block.
}//end of function convert()

function printByKey(key)
{
    console.log(booksObj[key]);                     //Retrieve and display a value from the booksObj object based on specified key.
}//end of function printByKey()

booksObj = convert(bookIdArr, bookTitle);           //Assign results of the convert function to booksObj
printByKey("NLB2");                                 //Prints "Progamming for Dummies"

//Ignore the code below this line
module.exports = 
{
    convert
}