"use strict";

// Part 1: The Grocery List
// Create the Array:
// Start with an array named groceriesList.
// Each item is an object with properties:
// name (string)
// amount (number)
// bought (boolean, false initially)
// Add a few sample items to your list.
var groceriesList = [{
  productName: "Avocado",
  price: 1,
  bought: false
}, {
  productName: "Tomato",
  price: 0.6,
  bought: true
}, {
  productName: "Eggs",
  price: 2.5,
  bought: true
}, {
  productName: "Milk",
  price: 1.5,
  bought: false
}, {
  productName: "Chocolate",
  price: 3,
  bought: false
}, {
  productName: "Sugar",
  price: 2,
  bought: false
}]; //arr.sort((a,b)=> a - b ) 

groceriesList.sort(function (a, b) {
  return a.bought - b.bought;
}); // Functions:
// displayGroceries():
// Prints the list to the console.

function displayGroceries() {
  console.log("Groceries List:");
  groceriesList.forEach(function (item) {
    if (item.bought === true) {
      console.log("- ".concat(item.productName, ", already bought"));
    } else {
      console.log("- ".concat(item.productName, ", price: ").concat(item.price, "\u20AC"));
    }
  });
}

var newProduct = {
  productName: "Bread",
  price: 1.2,
  bought: false
};
groceriesList.push(newProduct);
displayGroceries(); // Challenge: Sort so unbought items appear first. (done)
// addItem(name, amount): 
// Adds a new item or increases the quantity if it already exists.
// purchaseItem(name):
// Marks an item as bought.
//-------------------------------------------------------------------
// Create the Array:
// Name it shoppingReceipt.
// Each item is an object with:
// name (string)
// amount (number)
// pricePerItem (number)
// Functions:
// printReceipt():
// Nicely formats and prints the receipt to the console.
// calculateTotal():
// Returns the total cost of the purchase.
// findMostExpensiveItem():
// Returns the object representing the most expensive item.
// calculateAveragePrice():
// Returns the average price per item on the receipt.

var shoppingReceipt = [{
  productName: "Tomato",
  pricePerItem: 0.6,
  amount: 5
}, {
  productName: "Eggs",
  pricePerItem: 2.5,
  amount: 1
}];

function Receipt() {
  console.log("Receipt:");
  shoppingReceipt.forEach(function (item) {
    console.log("- ".concat(item.productName, ", ").concat(item.pricePerItem, "\u20AC x ").concat(item.amount, " (Total: ").concat(item.pricePerItem * item.amount, "\u20AC)"));
  });
}

Receipt();