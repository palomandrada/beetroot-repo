//CLASS EXERCISE - PHONE FORMATTER---------------------------
//Write a function that accepts an array of 10 integers (0-9),
//returns the numbers in the format of a phone 
// (xxx) xxx-xxxx


//TO DO: 
//1. Create array 
//2. Create formater (function) 
//3. check if what they are writing is correct (another function?)


const phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(formatter(phoneNumber));

function formatter(numbers) {
    //if (isNaN (phoneNumber) || numbers.length !== 10);
    return `(${phoneNumber[0]}${phoneNumber[1]}${phoneNumber[2]}) ${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}-${phoneNumber[6]}${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}`;
}


