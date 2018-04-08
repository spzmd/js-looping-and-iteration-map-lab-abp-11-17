// Code your solution in this file.
function lowerCaseDrivers(list) {
  return list.map(function(driver){
    return driver.toLowerCase()
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

function 

//{ name: 'Bobby',   hometown: 'Pittsburgh'  },

//'Bobby is from Pittsburgh', 