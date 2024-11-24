//Declare student list array and populate the array list with student names.
const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson"]

function printStudentNames()
{
   for(let i = 0; i < studentList.length; i++)      
   console.log(studentList[i]);                 //Repeatedly print out all student names in the array list.
}//end of function printStudentNames()

printStudentNames();

// Ignore the code below this line
module.exports = 
{
    studentList,
    printStudentNames
}