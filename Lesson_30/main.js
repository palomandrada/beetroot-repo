// Create an object that describes a car 
// (manufacturer, model, year of release, average speed) and the following methods for working with this object:
const car = {
    manufacturer: "BMW",
    model: "Mini Cooper SE",
    yearOfRelease: 2020,
    averageSpeed: 80,
    price: 36900,
  }
  
//A method that displays the car info 
  function displayInfo() {
    console.log ("Car Information:"); 
    console.log(`- Model: ${item.model}`);
    console.log(`- Manufacturer: ${item.manufacturer}`);
    console.log(`- Year of Release: ${item.yearOfRelease}`);
    console.log(`- Average Speed: ${item.averageSpeed}km/h`);
    console.log(`- Price: ${item.price}€`);
  };
  

// A method for counting a time frame necessary to cover a given distance with the average speed. 
// t = d/s
// let distance = prompt ('Enter distance (in Km):');
// let travelHours = distance / car.averageSpeed; 
// let travelMinutes = travelHours * 60;
// alert (`The time needed to travel is ${travelMinutes} minutes`)
// Note that every 4 hours the driver has to take a 1-hour break.

calculateTravelTime(distance) {
  const travelTime = distance / car.averageSpeed; // Total hours of driving
  const breaks = Math.floor(travelTime / 4); // Number of 1-hour breaks //math.floor is use to round a number up 
  const totalTime = travelTime + breaks; // Total time including breaks

  const hours = Math.floor(totalTime);
  const minutes = Math.round((totalTime - hours) * 60);

  console.log(`To cover ${distance} km, it will take approximately ${hours} hours and ${minutes} minutes (including breaks).`);
  };

displayInfo();
calculateTravelTime(1000);


