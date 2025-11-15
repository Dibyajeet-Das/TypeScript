"use strict";
//unionTypes 
Object.defineProperty(exports, "__esModule", { value: true });
//by using this we can avoid using the any in our code 
var score = 33;
// Assignment 1
// Create a variable userid that can store either a number or a string.
// ➡ Concept: Simple union type
// ➡ Hint: number | string
var userid = 34;
//here we can call two types
userid = 34;
userid = "34";
console.log(userid);
// Assignment 2
// Create a function printID(id) that accepts number or string and prints:
// "ID is number" if it's a number
// "ID is string" if it's a string
// ➡ Concept: Narrowing with typeof
function printID(id) {
    if (typeof id === "string") {
        console.log("ID is string");
    }
    else {
        console.log("ID is number");
    }
}
// Assignment 3
// Create a variable status that can be "loading" | "success" | "error".
// ➡ Concept: Literal union types
// ➡ Hint: "loading" | "success" | "error"
var requeststatus;
requeststatus = "loading";
requeststatus = "success";
requeststatus = "error";
// Assignment 4
// Create a function move(direction) where direction can be:
// "up", "down", "left", "right"
// The function prints "Moved <direction>".
// ➡ Concept: Literal string unions
function move(direction) {
    return "Moved ".concat(direction);
}
console.log(move("up"));
function printDetails(person) {
    if (person.role == "admin") {
        return "The ".concat(person, " print access list");
    }
    else {
        return "The ".concat(person, " print access list");
    }
}
function handleLogin(res) {
    if (res.status === "success") {
        return "The user has been log in ".concat(res.token);
    }
    else {
        return "The user has been failed to log in ".concat(res.message);
    }
}
