////Prompts to start the calculator
let num1 = parseFloat(prompt ("Enter first number:"));
let num2 = parseFloat(prompt ("Enter second number:"));
let operation = parseFloat (prompt ("Enter operation: +, -, * or /"));

////Prompt to get the result
let result; 

////Check inputs 

if (isNaN (num1) || isNaN(num2)) {
    alert ("Invalid input. Please enter numbers only.")
} else {
    switch (operation) {
        case "+":
            result = num1 + num2;
            alert(`The result is: ${result}`);
            break;
        case "-":
            result = num1 - num2;
            alert(`The result is: ${result}`);
            break;
        case "*":
            result = num1 * num2;
            alert(`The result is: ${result}`);
            break;
        case "/":
            if (num2 === 0) {
                alert("Division by zero is not allowed");
            } else {
                result = num1 / num2;
                alert(`The result is: ${result}`);
            }
            break;
        default:
            alert("Invalid operation. Please choose +, -, *, or /.");
    }
}

////---------------------------------------
////Using functions

// function calculator() {
//     let num1, num2, result;
//     function getNumber(promptMessage) {
//         let number;
//         while (true) {
//             const input = prompt(promptMessage);
//             number = parseFloat(input);
//             if (!isNaN(number)) {
//                 return number;
//             }
//             alert("Invalid input. Please enter a valid number.");
//         }
//     }
// } 

// num1 = getNumber("Enter the first number:");
// num2 = getNumber("Enter the second number:");

// function doOperation() {
//     while (true) {
//         const operation = prompt("Enter operation: +, -, * or /");
//         if (["+", "-", "*", "/"].includes(operation)) {
//             return operation;
//         }
//         alert("Invalid operation. Please choose +, -, *, or /.");
//     }
// }

// const operation = getOperation();

// // Perform the calculation
// switch (operation) {
//     case "+":
//         result = num1 + num2;
//         break;
//     case "-":
//         result = num1 - num2;
//         break;
//     case "*":
//         result = num1 * num2;
//         break;
//     case "/":
//         if (num2 === 0) {
//             alert("Division by zero is not allowed!");
//         }
//         result = num1 / num2;
//         break;
//     default:
//         console.log("Invalid operation. Please choose +, -, *, or /.");   
// }

// console.log(`The result is: ${result}`);

// calculator();