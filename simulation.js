// Vehicle constructor function
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed || 0;
    this.fuelType = fuelType;
  }
  
  // Adding common methods to the Vehicle prototype
  Vehicle.prototype.accelerate = function(increment) {
    increment = increment || 5;
    this.speed += increment;
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
  };
  
  Vehicle.prototype.brake = function(decrement) {
    decrement = decrement || 5;
    this.speed = Math.max(0, this.speed - decrement);
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
  };
  
  Vehicle.prototype.refuel = function() {
    console.log(`${this.brand} ${this.model} is refueling.`);
  };
  
  // Car constructor function inheriting from Vehicle
  function Car(brand, model, speed, fuelType, numberOfWheels) {
    // Call the Vehicle constructor to set common properties
    Vehicle.call(this, brand, model, speed, fuelType);
    
    this.numberOfWheels = numberOfWheels || 4;
  }
  
  
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  
  
  Car.prototype.honk = function() {
    console.log(`${this.brand} ${this.model} is honking!`);
  };
  
  
  function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    
    Vehicle.call(this, brand, model, speed, fuelType);
    
    this.numberOfEngines = numberOfEngines || 2;
    this.hasLandingGear = hasLandingGear || true;
  }
  
  
  Airplane.prototype = Object.create(Vehicle.prototype);
  Airplane.prototype.constructor = Airplane;
  
  
  Airplane.prototype.takeOff = function() {
    console.log(`${this.brand} ${this.model} is taking off!`);
  };
  
  
  var myCar = new Car("Toyota", "Camry", 40, "Gasoline", 4);
  var myAirplane = new Airplane("Boeing", "747", 600, "Jet Fuel", 4, true);
  
  myCar.accelerate(); 
  myCar.brake();     
  myCar.refuel();    
  myCar.honk(); 
  
  myAirplane.accelerate();  
  myAirplane.refuel();     
  myAirplane.takeOff();    
  