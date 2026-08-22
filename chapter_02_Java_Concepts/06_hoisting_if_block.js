let a = 10;
if (true) {
    console.log(a); // let is block scoped thus it will throw an error because a is not defined yet due to hoisting.
    let a = 20;
}




var b = 10;
if (true) {
    console.log(b); //var is function scoped thus it will print 10 because of hoisting. The declaration of b is hoisted to the top, but its assignment happens later.
    var b = 20;
}


const c = 10;
if (true) {
    console.log(c); // const is block scoped thus it will throw an error because c is not defined yet due to hoisting.
    const c = 20;
    console.log(c); // Cannot redeclare block-scoped variable 'c'.
    const c = 30;
    console.log(c); // Cannot redeclare block-scoped variable 'c'.
}