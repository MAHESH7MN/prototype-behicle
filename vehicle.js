
var fourWheeler = {
    fuelType: 'Petrol',
    wheels: 4,
    start: function () {
      console.log('Engine started');
    },
    stop: function () {
      console.log('Engine stopped');
    }
  };
  
 
  var sedan = Object.create(fourWheeler);
  sedan.model = 'Sedan';
  sedan.numDoors = 4;
  sedan.openTrunk = function () {
    console.log('Trunk opened');
  };
  
  
  var suv = Object.create(fourWheeler);
  suv.model = 'SUV';
  suv.offRoadMode = function () {
    console.log('Off-road mode activated');
  };
  
 
  console.log(sedan.model); 
  sedan.start(); 
  suv.offRoadMode(); 
  