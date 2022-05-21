//Arrays 

//Array - An ordered collection of values
//List of comments on IG post
//Collection of levels in a game
//Songs in playlist

let myArray = ['ice', 'cheese', 'cereal'];
let lotto = [45,12,23,25,34];
let myCollection = [12, "dog", true, null, NaN];
new Array(); //create new array



//Array Indices

//like strings, array indices start at 0.



//Modifying Arrays

//Arrays are mutable, unlike strings

let list = ['Cheese sauce', 'milk'];

list[1] = 'Whole milk'; //replaces an existing entry in the array
list[list.length] = 'Ice Cream'; //adds an entry to the end of an array



//Push, pop, shift, and unshift

//push, pop, shift, and unshift are very popular array methods

let bestChopinPieces = [
    'Ballade No.4 Op.52', 
    'Nocturne Op.48 No.1', 
    'Sonata No.2 Op.35'
];

bestChopinPieces.push('Etude Op.10 No.1'); //appends to the end of the array
bestChopinPieces.push('Sauce');
bestChopinPieces.pop(); //removes the last element form the array

bestChopinPieces.unshift('Concerto No.1 Op.11'); //Adds element to beginning of array
bestChopinPieces.shift(); //Removes element from beginning of array
bestChopinPieces.unshift('Concerto No.1 Op.11', 'Barcarolle Op.60'); //unshift can take multiple entries. (entries are made in array in same order as method input)



//More methods

//concat merges more than one array 

let bestChopinPieces2 = ['Etude Op.10 No.12', 'Nocturne Op.62 No.1'];
bestChopinPieces.concat(bestChopinPieces2); //appends elements of input array to end of original array.
//concat does not mutate the original array, but creates a copy

//includes takes a value and returns a boolean designating whether or not array contains that value

bestChopinPieces.includes("Ballade No.4 Op.52"); //returns true
bestChopinPieces.includes("hurt"); //returns false

//indexOf takes a value and returns the index of that value, or -1 if it doesnt exist

bestChopinPieces.indexOf('Etude Op.10 No.1'); //returns 5
bestChopinPieces.indexOf('sus'); //returns -1

//reverse reverses an array

//bestChopinPieces.reverse(); //mutates and returns reversed array

//join returns a single string of all array elements

bestChopinPieces.join(" "); //returns a string with each entry with a space between;

//slice makes a new array from a selected portion of the original

bestChopinPieces.slice(0, 3); //returns 0 to 3rd elements, non inclusive

//splice changes the contents of array by removing or replacing existing elements and/or adding new elements
bestChopinPieces.splice(1, 0, 'Polonaise No.6 Op.53'); //adds element to the first index and doesnt remove anything
//splice returns the deleted values
bestChopinPieces.splice(1, 1);
//splice(startIdx, deleteCount, itemsToInsert);

//sort sorts an array of strings alphabetically and numbers based on first UTF char code
//almost no one uses sort



//Reference types

let fruit = "orange";
let color = fruit;
fruit = 'watermelon'; //fruit returns watermelon, and color still returns orange

//primitive types literally store their values, but more complex types store references to the value

let nums [5, 6, 7, 8];
let otherNums = nums; //pointing to same thing in memory as nums
nums.push(9); // nums and other nums are both impacted 



//Const with arrays

const city = 'NYC';

const myEggs = ['brown', 'brown'];
myEggs.push(purple);

//cant be reassigned but can be mutated with methods

const foods = ['milk'];
foods.push('sauce');

//const is most common with arrays



//nested arrays - arrays can be stored inside other arrays

const composerFamousPiece = [
    ["Rachmaninoff", "Concerto No.2"], 
    ["Chopin", "Nocturne In C# Minor"],
    ["Beethoven", "Symphony 9"]
];

composerFamousPiece[2[1]]; //returns "Symphony 9"