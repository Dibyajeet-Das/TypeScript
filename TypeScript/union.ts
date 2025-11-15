//unionTypes 

//by using this we can avoid using the any in our code 
let score : number | String = 33



// Assignment 1

// Create a variable userid that can store either a number or a string.
// ➡ Concept: Simple union type
// ➡ Hint: number | string


let  userid : number | string = 34;
//here we can call two types
userid = 34
userid = "34"
console.log(userid);


// Assignment 2

// Create a function printID(id) that accepts number or string and prints:
// "ID is number" if it's a number
// "ID is string" if it's a string
// ➡ Concept: Narrowing with typeof

function printID(id: number | string) {
    if(typeof id === "string") {
        console.log("ID is string");
    } else {
        console.log("ID is number");
    }
}

// Assignment 3

// Create a variable status that can be "loading" | "success" | "error".
// ➡ Concept: Literal union types
// ➡ Hint: "loading" | "success" | "error"


let requeststatus: "loading" | "success" | "error";

requeststatus =  "loading";
requeststatus =  "success";
requeststatus =  "error";



// Assignment 4

// Create a function move(direction) where direction can be:
// "up", "down", "left", "right"
// The function prints "Moved <direction>".
// ➡ Concept: Literal string unions

function move(direction:"up"| "down" |"left" | "right") : string{
    return `Moved ${direction}`;
}

console.log(move("up"));

// Level 3 — Union of Objects
// Assignment 5
// Define two types:
// type Admin = { role: "admin", access: string[] }
// type User  = { role: "user", points: number }
// Create a function printDetails(person) that:
// If role is "admin" → print access list
// If role is "user" → print points
// Concept: Discriminated unions using "role"

type Admin = { 
    role: "admin", 
    access: string[] 
}
type User = {
    role:"user",
    points: number
}
function printDetails(person : Admin | User) : any {
     if(person.role == "admin") {
        return `The ${person} print access list`;
     } else {
        return `The ${person} print access list`;
     }
}


// Assignment 6
// Make a LoginResponse type:
// { status: "success", token: string }
// { status: "error", message: string }
// Write a function handleLogin(res: LoginResponse) that prints the correct message.

type LoginResponse = | { status: "success", token: 1234 } | { status: "error", message: "failed to login" };

function handleLogin(res: LoginResponse) : any {
    if(res.status === "success"){
          return `The user has been log in ${res.token}`;
    } else {
        return `The user has been failed to log in ${res.message}`;
    }
}












export{}









