"use strict";

// Create an object that describes a car 
// (manufacturer, model, year of release, average speed) and the following methods for working with this object:
// A method that displays the car info 
// A method for counting a time frame necessary to cover a given distance with the average speed. 
// Note that every 4 hours the driver has to take a 1-hour break.
// t = d/s
var car = {
  manufacturer: "BMW",
  model: "Mini Cooper SE",
  yearOfRelease: 2020,
  averageSpeed: 80,
  price: 36900,
  displayInfo: function displayInfo() {
    console.log("Car Information:");
    console.log("- Model: ".concat(this.model));
    console.log("- Manufacturer: ".concat(this.manufacturer));
    console.log("- Year of Release: ".concat(this.yearOfRelease));
    console.log("- Average Speed: ".concat(this.averageSpeed, "km/h"));
    console.log("- Price: ".concat(this.price, "\u20AC"));
  },
  calculateTravelTime: function calculateTravelTime(distance) {
    var travelTime = distance / car.averageSpeed; // Total hours of driving

    var breaks = Math.floor(travelTime / 4); // Number of 1-hour breaks //math.floor is use to round a number down 

    var totalTime = travelTime + breaks; // Total time including breaks

    var hours = Math.floor(totalTime);
    var minutes = Math.round((totalTime - hours) * 60);
    console.log("To cover ".concat(distance, " km, it will take approximately ").concat(hours, " hours and ").concat(minutes, " minutes (including breaks)."));
  }
};
car.displayInfo();
car.calculateTravelTime(420); // A method for displaying the time. 
// A method for changing the time by a given amount of seconds. 
// A method for changing the time by a given amount of minutes.  
// A method for changing the time by a given amount of hours. 
// Note that in the last three methods changing one part may influence another. 
// For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75».

var time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  displayTime: function displayTime() {
    console.log("Currect time is: ".concat(this.hours, " h., ").concat(this.minutes, " min., ").concat(this.seconds, " sec."));
  },
  changeSeconds: function changeSeconds(secondsFromUser) {
    this.seconds = this.seconds + secondsFromUser;

    if (this.seconds >= 60) {
      this.minutes = Math.floor(this.seconds / 60);
      this.seconds = this.seconds - this.minutes * 60;
    }

    if (this.minutes >= 60) {
      this.hours = Math.floor(this.minutes / 60);
      this.minutes = this.minutes - this.hours * 60;
    }
  },
  resetSecondsValue: function resetSecondsValue() {
    this.seconds = 0;
  },
  changeMinutes: function changeMinutes(minutesFromUser) {
    this.minutes = this.minutes + minutesFromUser;

    if (this.minutes >= 60) {
      this.hours = Math.floor(this.minutes / 60);
      this.minutes = this.minutes - this.hours * 60;
    }
  },
  changeHours: function changeHours(hoursFromUser) {
    this.hours = this.hours + hoursFromUser;
  }
};
time.changeSeconds(time.seconds);
time.changeMinutes(time.minutes);
time.changeHours(time.hours);
time.displayTime();