// Code your solution in this file.
function lowerCaseDrivers(list) {
  return list.map(function(driver){
    return driver.toLowerCase()
  })
}

function nameToAttributes(list){
	return list.map(function(driver) {
		const driverFirst = driver.split(' ')[0];
		const driverLast = driver.split(' ')[1];

		return { firstName: driverFirst, lastName: driverLast };
// firstName is considered a key, driverFirst is considered a value.
	});
}


function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}

//{ name: 'Bobby',   hometown: 'Pittsburgh'  },

//'Bobby is from Pittsburgh',
