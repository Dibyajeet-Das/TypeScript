//functions in TypeScript 
//function addNumber(num : number) : number here we can make a function behave like 
//it should return a number only 
function addNumber(num : number) : number{
    return num + 2;
}

function getValue(student: string) {
      return student.toUpperCase();
}

function signUp(name : string , email : string , present : boolean) {

}

let loginUser = (name: string , email: string 
    , present: boolean = false
) => {}


const userValue = (S: String) : String => {
    return "";
}

const hero = ["Spiderman","Thor","Doctor Strange"]

hero.map((hero:String) => {
    return `hero is ${hero}`
})

//dont use void instead of that use never 

//using "never"
//a function or expression that never returns either because it throws an error or loops forever.
function handleError(passData:String) :never {
    throw new Error();
}

console.log(addNumber(2))
console.log(getValue("Dibyajeet Das"))
console.log(signUp("rahul","rahul@gamil.com",false))
console.log(loginUser("D","D@D.com"))

export {}