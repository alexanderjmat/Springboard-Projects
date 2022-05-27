//this function takes in two parameters and returns the difference of the two;

function difference(a, b) {
    return a - b; 
}


//this function takes in two parameters and returns the product of the two;

function product(x, y) {
    return x * y;
}


//this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined

function printDay(day) {
    if (day == 1) {
        return "Sunday"
    }
    if (day == 2) {
        return "Monday"
    }
    if (day == 3) {
        return "Tuesday"
    }
    if (day == 4) {
        return "Wednesday"
    }
    if (day == 5) {
        return "Thursday"
    }
    if (day == 6) {
        return "Friday"
    }
    if (day == 7) {
        return "Saturday"
    }
    else {
        return undefined;
    }

}


//this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

function lastElement(array) {
    return array.pop();
}


//this function takes in two parameters (both numbers). If the first is greater than the second, this function returns “First is greater”. If the second number is greater than the first, the function returns “Second is greater”. Otherwise the function returns “Numbers are equal”

function numberCompare(i, j) {
    if (i > j) {
        return "First is greater";
    }
    if (i < j) {
        return "Second is greater";
    }
    else {
        return "Numbers are equal";
    }
}


//this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.
 
function singleLetterCount(word, letter) {
    let letterCount = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].includes(letter.toUpperCase())) {
            letterCount ++;
        }
        if (word[i].includes(letter.toLowerCase())) {
            letterCount++;
        }
    }
    console.log(letterCount);
    if (letterCount !== 0) {
        return letterCount;
    }
    else {
        return false;
    }
}



//this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.
//This one I had to look at the solution to fully solve
function multipleLetterCount(string){
    string = string.toLowerCase();
    let obj = {};
    for(let i = 0; i < string.length; i++){
      if (obj[string[i]] === undefined){
        obj[string[i]] = 1;
      } else {
        obj[string[i]]++;
      }
    }
    return obj;
  }

console.log(multipleLetterCount('hellopp'));


// This function should take in at most four parameters (an array, command, location, and value).
// If the command is “remove” and the location is “end”, the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is “remove” and the location is “beginning”, the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is “add” and the location is “beginning”, the function should add the value (fourth parameter) to the beginning of the array and return the array.
// If the command is “add” and the location is “end”, the function should add the value (fourth parameter) to the end of the array and return the array.

function arrayManipulation(arr, command, location, value) {
    if (command == "remove" && location == "end") {
        return arr.pop();
    }
    if (command == "remove" && location == "beginning") {
        return arr.shift();
    }
    if (command == "add" && location == "beginning") {
        arr.unshift(value);
        return arr;
    }
    if (command == "add" && location == "end") {
        arr.push(value);
        return arr;
    }
    else {
        return "Invalid, please try again.";
    }
}


//A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome(‘a man a plan a canal Panama’); returns true

function isPalindrome(word) {
    let firstWord = '';
    let secondWord = '';

    for (let char in word) {
        firstWord += word[char];
    }
    console.log(firstWord);

    for (let i = word.length - 1; i >= 0; i--) {
        secondWord += word[i];
    }
    console.log(secondWord);

    if (firstWord == secondWord) {
        return true;
    }
    else {
        return false;
    }
}