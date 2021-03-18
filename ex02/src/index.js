var temps = [
       [31, 32, 19, 37],
       [32, 33, 18, 38],
      [30, 34, 10, 35],
     [28, 30, 15, 27],
    [35, 38, 22, 30]
];
function myArrayFunction(arr){
    newTemps = [...arr];
   averageDayTemp = [];
  for ( i = 0; i < arr.lenhth; i++) {
   (averageDayTemp = temps[0] / 4 + "," +
    temps[1] / 4 + "," +
    temps[2] / 4 +  "," +
     temps[3] / 4 + "," +
     temps[4] / 4 )
  
};
return averageDayTemp





} 
myArrayFunction(averageDayTemp);
console.log(myArrayFunction(averageDayTemp));


module.exports = myArrayFunction;function myMutation(arr) {
  prviString = [arr];
 if(  prviString.includes(["hey"], ["Hello"], ["qrstu"], ["Army"], ["Aarmy"], ["line"],["for"], ["neo"], ["no"], ["date"], ["Zebra"], ["Ole"])){
  return true;
 } else {
   return false;
 }
  }
console.log(myMutation(["hello", "hey"]));
console.log(myMutation(["hello", "Hello"]));
console.log(myMutation(["Zvxwvutsvqponmlkjihgfedcba", "qrstu"]));
console.log(myMutation(["Mary", "Army"]));
console.log(myMutation(["Mary", "Aarmy"]));
console.log(myMutation(["Alien", "line"]));
console.log(myMutation(["floor", "for"]));
console.log(myMutation(["hello", "neo"]));
console.log(myMutation(["voodoo", "no"]));
console.log(myMutation(["ate", "date"]));
console.log(myMutation(["Tiger", "Zebra"]));
console.log(myMutation(["Noel", "Ole"]));
module.exports = myMutation;
