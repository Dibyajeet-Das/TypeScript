//interface in typescript 

//interfaces can be reopened 
//interface genrally a naming field for the objects

interface User {

    readonly dbid:number,
    name:string,
    googleId?:string,
    stringTrail(): string,
    getticket(ticketID: number, person: number): number

}



interface User {
    gtihubtoken:String
}



interface Admin extends User  {
    adminid: string ,
    acesscardId: number 
}

const detail: Admin | User = {
    dbid:87,
    name:"aklesh",
    gtihubtoken:"thuiklMBJ34HnlkO23Q",
    adminid:"6785",
    acesscardId: 9088876,
    googleId:"897050656opkl",
    getticket:(ticketID:67858, person:23456) =>{
        return 10;
    },
    stringTrail() {
        return "some-string";
    }

}






// Type aliases and interfaces are very similar, 
// and in many cases you can choose between them freely. 
// Almost all features of an interface are available in type, 
// the key distinction is that a type cannot be re-opened to add new properties vs 
// an interface which is always extendable.


// Interface	
// Extending an interface
//Adding new fields to an existing interface


// Type
// Extending a type via intersections
//A type cannot be changed after being created







export{}