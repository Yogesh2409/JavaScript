console.log("This is JS7");
function greet(naam, text="Good Morning"){
    console.log(text + " " + naam)
    console.log(naam + " is a bad boy")
}
function sum(a, b, c){
    let d = a + b + c;
    return d;
}
function largest(a,b){
    if(a>b){
        console.log(a + " is greatest")
    }
    else{
        console.log(b + " is greatest")
    }
}
let name = "Abhishek";
let name1 = "Pritish";
let name2 = "Pratyush";
let name3 = "Leroy";
let greetText = "Good Evening";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);
let returnVal = sum(1,2,3);
console.log(returnVal);
largest(29,23)



// console.log(name + " is a bad boy")
// console.log(name1 + " is a bad boy")
// console.log(name2 + " is a bad boy")
// console.log(name3 + " is a bad boy")