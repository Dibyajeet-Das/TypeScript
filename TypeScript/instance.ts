//instanceof and Type Predicates


//it is only being used with the new keyword

fucntion logvalue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// using type predicates 




export {}