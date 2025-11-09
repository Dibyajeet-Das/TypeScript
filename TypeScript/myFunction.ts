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


console.log(addNumber(2))
console.log(getValue("Dibyajeet Das"))
console.log(signUp("rahul","rahul@gamil.com",false))
console.log(loginUser("D","D@D.com"))

export {}