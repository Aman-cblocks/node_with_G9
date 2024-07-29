const {add,sub} = require("./app")

// console.log(add(2,3))
// console.log(sub(4,3))

let a= {
    name:"jack",
    age:24
}

let b = a;
b.city="Delhi"

a.country="IN"

b={}
console.log(b)

