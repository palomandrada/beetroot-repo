// //1.Ask the user for their age and determine whether they are a child (0-11), teenager (12-17), adult (18_59), or pensioner (60...), and allow for the possibility of entering incorrect data.
// //ask user for age
// let age = prompt("Please enter your age:");
// // get number
// age = Number(age);
// // check
// if (isNaN(age) || age < 0) {
//     alert("Invalid input. Please enter a valid age.");
// } else if (age <= 11) {
//     alert("You are a child.");
// } else if (age <= 17) {
//     alert("You are a teenager.");
// } else if (age <= 59) {
//     alert("You are an adult.");
// } else {
//     alert("You are a pensioner.");
// }
// //2. Ask the user for a number from 0 to 9 and display the special character that is located on this key (1 !, 2 @, 3 #, etc.).
// let userNumber = prompt ("Please enter a number from 0 to 9");
// userNumber = Number(userNumber);
// if (isNaN(userNumber) || userNumber < 0 || userNumber > 9) {
//     alert("Invalid unput. Enter a number from 0 to 9");
// } else if (userNumber === 1) {
//     alert ("!");
// } else if (userNumber === 2) {
//     alert ("@");
// } else if (userNumber === 3) {
//     alert ("#");
// } else if (userNumber === 4) {
//     alert ("$");
// } else if (userNumber === 5) {
//     alert ("%");
// } else if (userNumber === 6) {
//     alert ("^");
// } else if (userNumber === 7) {
//     alert ("&");
// } else if (userNumber === 8) {
//     alert ("*");
// } else if (userNumber === 9) {
//     alert ("(")
// } else if (userNumber === 0) {
//     alert (")");
// }
//3. Game “Guess the number”. Ask the user to guess a number from 0 to 100 and guess it in the following way: each iteration of the loop, divide the range of numbers in half, write the result in N and ask the user “Is your number > N, <N or == N?”. Depending on what the user says, reduce the range. The initial range is from 0 to 100, divide it in half and get 50. If the user has indicated that their number is > 50, then change the range to 50 to 100. And so on until the user selects == N (it will be useful to read about the algorithm: “binary search”).//
"use strict";