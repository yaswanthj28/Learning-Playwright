function getUserStatusget(){
    console.log(status_code); //This will print undefined because of hoisting. The declaration of status_code is hoisted to the top, but its assignment happens later.


    var status_code = 200;
    console.log(status_code); //This will print 200 because of hoisting. The declaration of status_code is hoisted to the top, but its assignment happens later.
}
getUserStatusget();


function getUserStatusLet(){
    console.log(status_code_let); //This will throw an error because status_code_let is not defined yet due to hoisting
    let status_code_let = 201;
    console.log(status_code_let); //This will print 201 because of hoisting. The declaration of status_code_let is hoisted to the top, but its assignment happens later.
}
getUserStatusLet();
