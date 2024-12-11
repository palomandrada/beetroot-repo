"use strict";

//HOMERWORK ---------------------------------------------------
// 1. Request a user’s name and display the response “Hello, [name]”.
// let name = prompt('Hello, what is your name?');
// alert('Hello, ' + name);
// 2. Request a user’s year of birth, count his age, and display the result. Store the current year as a constant. 
var dateBirth = prompt("Please enter your year of birth (YYYY):");
var today = new Date(); //console.log(today.getUTCFullYear());

var currentYear = today.getUTCFullYear();
var age = currentYear - dateBirth;
alert("You are ".concat(age, " years old today.")); // 3. Request a length of a side of a square from a user and display the perimeter of the square. 
// let sideLength = prompt("Please enter the length of a side of the square:");
// let perimeter = sideLength * sideLength;
// alert(`The perimeter of the square is: ${perimeter}`);
// 4. Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time. 
// let distance = prompt("Enter the distance between the two cities (in km):");
// let time = prompt("Enter the time you want to cover this distance (in hours):");
// let speed = distance / time;
// alert(`To do ${distance} km in ${time} hours, your speed need to be ${speed} km/h.`);
// 5. A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive. 
// let driveGB = prompt("Enter the capacity of your flash drive (in GB):");
// let driveMB = driveGB * 1000; //1GB = 1000 MB 
// let file = 820;
// let numberOfFiles = (driveMB / file);
// alert(`A flash drive with ${flashGB} GB capacity can hold ${numberOfFiles} files of 820MB.`);
// 6. A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left. 
//let wallet = prompt ("Enter amount of money in your wallet (in euros):")
//let price = prompt ("Enter the price of the chocolate bar:")
//let choco = (wallet / price) 
//let change = wallet - (choco - price)
//alert(`With ${wallet} euros you can buy ${choco}. There will be ${change} euros left in your wallet.`)
// 7. The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest
// let deposit = prompt("Enter your bank deposit (in euros):");
// let interest = deposit * (5/100) * 2/12; 
// alert(`The interest on a deposit of ${deposit} over 2 months at a yearly interest rate of 5% is: ${interest} euros.`);