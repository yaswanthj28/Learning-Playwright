let count = 42;
let negative = -100;
let bigint = 123n;
let hexadecimal_number = 0xFF;
let zero = 0;
let color_hex = 0xFF0000;
console.log(color_hex);

let octal_number = 0o12;
console.log(octal_number);

let binary_number = 0b1010;
let pi = 3.14;
let million = 1e6;
let tiny = 1.5e-4;
let singlequote = 'Hello World';
let doublequote = "it's a test";
let template_literal = `Hello World`;


console.log(count, negative, bigint, hexadecimal_number, zero, color_hex, octal_number, binary_number, pi, million, tiny, singlequote, doublequote, template_literal);

// Template Literal
let first_name = "Yaswanth";
let full_name = `Hi, ${first_name} varma`;
console.log(full_name);

// Array Literal
let colors = ["red", "green", "blue"];
console.log(colors);

// Object Literal
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: true
};
console.log(person);

// null literal
let nullvalue = null;
console.log(nullvalue);

// undefined literal
let undefinedvalue;
console.log(undefinedvalue);

// Template Literal
let message = `Hello, ${first_name} varma! You are learning JavaScript.`;
console.log(message);

// Regex Literal
let regex = /hello/gi;
console.log(regex);

// For path we use backward slash (\\) 
//path literal with double slash in the string
let path = "C:\\Users\\varma\\Documents\\test.txt";
console.log(path);

// For URL address we use forward slash (//) 
let address = "https://www.google.com";
console.log(address);

//empty, space and zero literals
let emptyString = "";
let spaceString = " ";
let zeroNumber = 0;

console.log(emptyString, spaceString, zeroNumber);

