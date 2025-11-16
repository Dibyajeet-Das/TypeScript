//classes 

class User {

    place : string
    name : string 

    constructor(name:string , place : string) {
        this.name = name,
        this.place = place 
    }
}


//in professional way we can write like this 
// class User {
//     constructor(
//      public name:string , 
//      public place : string) { 
//     }
// }

const display = new User("dibya", "bhubaneswar");




export {}