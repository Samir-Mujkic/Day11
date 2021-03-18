

var myNestedArray = [["Toblerone", 5],["Milka",3]];
function myNestedFunction(arr) {
  //Only change code below this line
 
   myNestedArray = [...arr]
  
  return myNestedArray;

//Only change code above this line
}
myNestedFunction(myNestedArray);
console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;


