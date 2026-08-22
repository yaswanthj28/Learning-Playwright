//Example of var

var a=10; /*Global Scope     var is a keyword used to declare a variable in JavaScript. 
            a is the identifier or name of the variable.
            10 is the value assigned to the variable */
console.log(a);

function printa() { //Declaration of function printa
    var a = 20; //Local scope
    console.log(a);
    if(true) {
        var a = 30; 
        console.log(a);
    }
    console.log(a);
}
printa(); //Calling the function printa


//Example of let

let b=10; //Global scope
console.log(b);

function printb() {
    let b = 20; //Local scope
    console.log(b);
    if(true) {
        let b = 30;
        console.log(b);
    }
    console.log(b);
}
printb();

//Example of const

const pi=3.14; //Global scope
console.log(pi);
pi=3.14159; //This will throw an error because pi is a constant and cannot be reassigned

   