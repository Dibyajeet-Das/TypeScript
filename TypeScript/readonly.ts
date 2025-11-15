//readonly in type script 

type newDemo = {
    readonly _id : number,
    name: String,
    email: String
}

const user1: newDemo = {
    _id: 789,
    name: "rahul",
    email: "rahul1@gmail.com"
}


console.log(user1._id);
console.log(user1.name);
console.log(user1.email);


export{}