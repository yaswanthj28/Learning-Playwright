console.log(a); //This will print undefined because of hoisting. The declaration of a is hoisted to the top, but its assignment happens later.
var a = 5;
console.log(a); //This will print 5 because of hoisting. The declaration of a is hoisted to the top, but its assignment happens later.



console.log(b);
let b = 10;
console.log(b); //This will throw an error because b is not defined yet due to hoisting
