var temps = [
      monday = [31, 32, 19, 37],
      tuesday = [32, 33, 18, 38],
     wednesday = [30, 34, 10, 35],
    thursday = [28, 30, 15, 27],
   friday = [35, 38, 22, 30]
];
function myArrayFunction(arr){
    newTemps = [...arr];
   averageDayTemp = [];
  for ( i = 0; i < 5; i++) {
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


module.exports = myArrayFunction;