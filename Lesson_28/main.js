//// Write all possible variants of creating functions-----------------------------------------------------------------------------
////FUNCTION DECLARATION (define reusable code)
function square1(number) {
    return number * number;
}
let answear = square1 (10);
console.log(answear);

////FUNCTION EXPRESSION (define fuctions as values or variables)
const square2 = function (number) {
    return number * number;
  };
console.log (`Square is: ${square2 (20)}`);

//ARROW FUNCTI0N 
const square3 = (number) => number * number; 
console.log (`Square is: ${square3 (30)}`)

// 2. Create a function that will print the number of arguments passed to it.
function argumentsCount (){
    console.log (`Number of arguments: ${arguments.length}`);
}
argumentsCount (1,2,3,4,5,6,7,8,9);

// 3. Write a function that takes 2 numbers and returns :

// -1, if the first number is less than the second; 

// 1 - if the first number is greater than the second; 

// 0 - if the numbers are equal.

function compareNumbers (a,b) {
    if (a < b) {
        return -1;
    } else if (a > b){
        return 1;
    } else if (a === b) 
        return 0;
}

console.log (compareNumbers(10,10));


// 4. Write a function that takes three separate digits and converts them into one number. For example: the digits 1, 4, 9 will be converted to the number 149.
function numbers (a,b,c) {
    const combineNumbers = `${a}${b}${c}`;
    return combineNumbers;
}
console.log (numbers (1,4,9))


// 5. Write a function that takes the length and width of a rectangle and calculates its area. If you pass 1 parameter to the function, it calculates the area of the square

function Area (lenght, width) {
    if (width === undefined) {
        return lenght * lenght
    } else { 
        return lenght * width
    }
}

console.log(`The area is ${Area(5, 10)}`);
console.log(`The area is ${Area(2)}`);