//Create a myPetsArray array here
var myPetsArray = ["Dog", "Cat"]
//End of myPetsArray array

function myArrayFunction(myPets) {
  var myNewPets = [...myPets];
  //Only change code below this line
  myNewPets.push("Bird", "Fish");


  var firstPet = myNewPets.shift();
  var secondPet = myNewPets.pop();
  myNewPets.unshift("lion");

  return myNewPets;
//Only change code above this line
}
myArrayFunction(myPetsArray);
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;