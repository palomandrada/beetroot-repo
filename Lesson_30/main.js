// Create an object that describes a car 
// (manufacturer, model, year of release, average speed) and the following methods for working with this object:
// A method that displays the car info 
// A method for counting a time frame necessary to cover a given distance with the average speed. 
// Note that every 4 hours the driver has to take a 1-hour break.
// t = d/s

const car = {
    manufacturer: "BMW",
    model: "Mini Cooper SE",
    yearOfRelease: 2020,
    averageSpeed: 80,
    price: 36900,
    
    displayInfo: function() {
      console.log("Car Information:"); 
      console.log(`- Model: ${this.model}`);
      console.log(`- Manufacturer: ${this.manufacturer}`);
      console.log(`- Year of Release: ${this.yearOfRelease}`);
      console.log(`- Average Speed: ${this.averageSpeed}km/h`);
      console.log(`- Price: ${this.price}€`);
    },

    calculateTravelTime(distance) {
      const travelTime = distance / car.averageSpeed; // Total hours of driving
      const breaks = Math.floor(travelTime / 4); // Number of 1-hour breaks //math.floor is use to round a number down 
      const totalTime = travelTime + breaks; // Total time including breaks

      const hours = Math.floor(totalTime);
      const minutes = Math.round((totalTime - hours) * 60);

      console.log(`To cover ${distance} km, it will take approximately ${hours} hours and ${minutes} minutes (including breaks).`);
    },
  };

car.displayInfo();
car.calculateTravelTime(420);


// A method for displaying the time. 
// A method for changing the time by a given amount of seconds. 
// A method for changing the time by a given amount of minutes.  
// A method for changing the time by a given amount of hours. 
// Note that in the last three methods changing one part may influence another. 
// For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75».

const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  displayTime: function() {
      console.log(`Currect time is: ${this.hours} h., ${this.minutes} min., ${this.seconds} sec.`);
  },
  changeSeconds(secondsFromUser) {
      this.seconds = this.seconds + secondsFromUser;
      if (this.seconds >= 60) {
        this.minutes = Math.floor(this.seconds / 60);
        this.seconds = this.seconds - (this.minutes * 60);
      } 
      if (this.minutes >= 60) {
        this.hours = Math.floor(this.minutes / 60);
        this.minutes = this.minutes - (this.hours * 60);
      }
  },
  resetSecondsValue() {
      this.seconds = 0;
  }, 
  changeMinutes (minutesFromUser) {
    this.minutes = this.minutes + minutesFromUser;  
    if (this.minutes >= 60) {
      this.hours = Math.floor(this.minutes / 60);
      this.minutes = this.minutes - (this.hours * 60);
    }
  },
  changeHours (hoursFromUser) {
    this.hours = this.hours + hoursFromUser;
  }

};
time.changeSeconds(time.seconds); 
time.changeMinutes(time.minutes); 
time.changeHours(time.hours)
time.displayTime ();