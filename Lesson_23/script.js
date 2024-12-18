// Request a three-digit number from a user and check whether it has identical digits.
// let userNumber = prompt("Enter a 3 digit number:");
// ////let transform = parseInt (userNumber) -> this transfor into only 1 number
// let [digit1, digit2, digit3] = userNumber;
// if (digit1 === digit2 && digit2 === digit3) {
//     console.log("The number has identical digits.");
//     alert("The number has identical digits.");
//   } else {
//     console.log("The number does not have identical digits.");
//     alert("The number does not have identical digits.");
//   }

// Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD, etc.) and gets the result. 
// const conversionRates = {
//     EUR: 0.91, // Example rate: 1 USD = 0.91 EUR
//     SEK: 11.1, // Example rate: 1 USD = 11.1 SEK
//     AUD: 1.55  // Example rate: 1 USD = 1.55 AUD
// };
// const usdAmount = parseFloat(prompt("Enter the amount in USD:"));
// const targetCurrency = prompt("Choose a currency to convert to (EUR, SEK, AUD):").toUpperCase();
// if (!isNaN(usdAmount) && usdAmount > 0 && conversionRates[targetCurrency]) {
//     const result = (usdAmount * conversionRates[targetCurrency]).toFixed(2);
//     alert(`${usdAmount} USD is approximately ${result} ${targetCurrency}.`);
// } else {
//     alert("Invalid input. Please enter a valid amount and select EUR, SEK, or AUD.");
// }


// Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, a new year, and also leap years.
//// Date Incrementer
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

