"use strict";
//Tuples a concept that is only available for the typescript world not present in 
//javascript
Object.defineProperty(exports, "__esModule", { value: true });
// Typically an array contains zero to many objects of a
// single type. TypeScript has special analysis around
// arrays which contain multiple types, and where the order
// in which they are indexed is important.
// These are called tuples. Think of them as a way to
// connect some data, but with less syntax than keyed objects.
//they are fixed cant be change
var user;
user = ["Rahul", 278, true];
var rgb = [25666, 256667, 245666];
// Assignment 1: Basic Tuple
// Create a tuple named userInfo that stores:
// username (string)
// age (number)
// Assign a correct value.
var userInfo = ["sachin", 23];
// Assignment 2: Tuple With Three Types
// Create a tuple named employeeData that stores:
// employee name (string)
// employee id (number)
// isActive (boolean)
var employeeData = ["Mahesh", 2145, true];
