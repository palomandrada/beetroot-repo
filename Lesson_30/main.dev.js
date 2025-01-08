"use strict";

// Create an object that describes a car 
// (manufacturer, model, year of release, average speed) and the following methods for working with this object:
var car = {
  manufacturer: "BMW",
  model: "Mini Cooper SE",
  yearOfRelease: 2020,
  averageSpeed: 80,
  price: 36900
}; //A method that displays the car info 

function displayInfo() {
  console.log("Car Information:");
  console.log("- Model: ".concat(item.model));
  console.log("- Manufacturer: ".concat(item.manufacturer));
  console.log("- Year of Release: ".concat(item.yearOfRelease));
  console.log("- Average Speed: ".concat(item.averageSpeed, "km/h"));
  console.log("- Price: ".concat(item.price, "\u20AC"));
}

; // A method for counting a time frame necessary to cover a given distance with the average speed. 
// t = d/s
// let distance = prompt ('Enter distance (in Km):');
// let travelHours = distance / car.averageSpeed; 
// let travelMinutes = travelHours * 60;
// alert (`The time needed to travel is ${travelMinutes} minutes`)

var distance = prompt('Enter distance (in Km):');
var travelHours = distance / car.averageSpeed;

if (travelHours % 4 === 0) {
  ++travelHours;
} else {}

alert("The time needed to travel is ".concat(travelMinutes, " minutes")); // Note that every 4 hours the driver has to take a 1-hour break.