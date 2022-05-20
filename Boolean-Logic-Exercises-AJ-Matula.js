//Part I



2 == "2"; //returns true
2 === 2; //returns true
10 % 3; //returns 1
10 % 3 === 1; //returns true
true && false; //returns false
false || true; //returns true
true || false; //returns true


//Part II



let isLearning = true;
if(isLearning){
  console.log("Keep it up!");
} else {
  console.log("Pretty sure you are learning....");
}

//What should the above code console.log?
//"Keep it up!"

//Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work alone?
//Because the variables store their boolean values from the initial assignment. 
//...They only need to be called to return a boolean value. 


let firstVariable;
let secondVariable = "";
let thirdVariable = 1;
let secretMessage = "Shh!";

if(firstVariable){
  console.log("first");
} else if(firstVariable || secondVariable){
  console.log("second");
} else if(firstVariable || thirdVariable){
  console.log("third");
} else {
  console.log("fourth");
}

//What should the above code console.log? Why?
//"third" will log to the console because it is the first expression with a true truthy value.
//... firstVariable is undefined, and undefined is falsy, secondVariable is an empty string, and empty strings are falsy

//What is the value of firstVariable when it is initialized?
//The value of firstVariable is undefined

//Is the value of firstVariable a 'truthy' value? Why?
//firstVariable is falsy because it is undefined, and undefined expressions are always falsy in JS

//Is the value of secondVariable a 'truthy' value? Why?
//secondVariable is falsy because it is an empty string, and empty strings are always falsy in JS

//Is the value of thirdVariable a 'truthy' value? Why? 
//thirdVariable is truthy because it is a number, and all numbers evaluate to truthy in JS



//Part III



//Write an if statement that console.log’s “Over 0.5” if Math.random returns a number greater than 0.5.
//Otherwise console.log “Under 0.5”.

let randomNum = Math.random();

if (randomNum >= 0.5) {
    console.log("Over 0.5");
}
else {
    console.log("Under 0.5");
}

//What is a falsey value? List all the falsey values in Javascript
//A falsey value is a value that always evaluates to false
//Falsey values: undefined, null, NaN, "", 0, false