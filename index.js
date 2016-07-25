function bumpCounter() {
  var counter = 0
  //The bumpCounter() function has two inner functions: addBump() and getBumps()
  //These two functions need to be returned
  function addBump() {
    // The addBump() function should increase the counter by 1.
    counter += 1;
  }
  function getBumps() {
    // The getBumps() function should return the current count.
    return counter;
  }
  return {
    addBump,
    getBumps
  }
  // when returning more than one thing, put them in brackets

}



function createAnimal(animalType) {
  // Create an inner function in this createAnimal() function that also has one parameter, deadlyDevice.
  return function (deadlyDevice) {
    // This function then returns an object that forms our diabolical creation
    var object = { }
    // This object has two properties, animalType and deadlyDevice
    // that are the given arguments to both functions.
    object.animalType = animalType //parameter
    object.deadlyDevice = deadlyDevice //parameter
    return object;
  }
}

// Create a shark creator function by calling createAnimal() with the 'Shark' string.
// This should be assigned to a variable called sharkCreator.
var sharkCreator = createAnimal('Shark')

// Add a variable called sharkWithFrickinLaserbeam
// that is a combination of a 'Shark' and 'Laserbeam'.
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
// Add a variable called sharkWithFrickinCannon that
// is a combination of a 'Shark' and 'Cannons'.
var sharkWithFrickinCannon = sharkCreator('Cannon')
