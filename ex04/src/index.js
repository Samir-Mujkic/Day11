//Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
//End of monitorsListArray array
function myMonitorsFunction(arr) {

  newMonitorsList = [...arr];
  monitorsList = [];
  var i;
  for (i = 0; i < newMonitorsList.length; i++) {
    monitorsList.push([newMonitorsList[i], i + 1]);
  return monitorsList;
  
}
}
myMonitorsFunction(monitorsListArray);
console.log(myMonitorsFunction(monitorsList));
module.exports = myMonitorsFunction;