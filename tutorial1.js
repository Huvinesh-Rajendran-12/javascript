/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/

var myName = "Huvinesh";

myName = 8

let ourName = "Huvinesh-fam"

const pi = 3.14 

console.log(ourName);

/* 
    Javascript var is case sensitive 
*/

// addtion 

var sum = 10 + 0; 
console.log(sum);

// Quoting strings with double quotes

var sentence = "Hello I am \"Huvinesh\" "; 
console.log(sentence);

// length of a string 

ourname_length = 0;
ourname_length = sentence.length;
console.log(ourname_length);

// bracket notation 

var name = "Huvinesh";
first_letter_name = name[0];
console.log(first_letter_name);

last_letter_name = name[name.length - 1];
console.log(last_letter_name);

// function 

function wordBlanks(myNoun,myAdjective, myVerb, myAdverb){
    var result = ""; 
    result += "The " + myAdjective + myNoun + myVerb + myAdverb; 
    return result;
}

console.log(wordBlanks("Dog"," cute "," barking ", " cooks "));

// array 

var ourArray = ["John",23];
console.log(ourArray);

var myArray = [[24,25]];
console.log(myArray);

console.log(ourArray[0]);

ourArray[0] = 45;
console.log(ourArray)