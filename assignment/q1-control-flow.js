const env = "DEV";                              //Toggle between these values: "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password";    //declare database credential as devuser:password

switch (env) 
{
    case "STAGE":
    databaseCredential = "stageuser:password";      //if staging is declared in env, database credential will be stageuser: password
    break;

    case "PROD":
    databaseCredential = "produser:password";       //if production is declared in env, database credential will be produser: password
    break;

    case "DEV":
    // No change
    break;

    default:
    console.log("Invalid environment");             //Default case is added to handle invalid env case.
    break;
}//end of switch (env)

console.log(`Database credential for environment ${env} is ${databaseCredential}`); //print out the database environment credential