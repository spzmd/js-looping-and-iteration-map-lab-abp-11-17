// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(e){
    return e.toLowerCase()
  })
}

function nameToAttributes(names){
  return names.map(function(name) {
    let fName = name.split(" ")[0]
    let lName = name.split(" ")[1]
    return {firstName: fName, lastName: lName}
// firstName is considered a key, fName is considered a value.      
  })
}
/*const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function lowerCaseDrivers(drivers, string) {
  return drivers.push(driver => driver.toLowerCase() === string.toLowerCase() );
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.slice(0, string.length) === string);
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string);
}*/
