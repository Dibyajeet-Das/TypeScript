//enums

//consts where we can declare our value some times its not need to decalre the varaibale types in it 

//if the first value you declare anyhting value so other var will also except a value 


// Enums allow a developer to define a set of named constants. 
// Using enums can make it easier to document intent, or create a set of distinct cases. 
// TypeScript provides both numeric and string-based enums.
//They can auto-assign numbers

const enum tuser {

    place,
    id,
    designation,
    name = "new",

}

const value = tuser.name;



export{}