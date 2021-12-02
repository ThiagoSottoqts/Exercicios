var celsius = Number(prompt('Digite sua temperâtura em celsius'))
var kelvin = Number(prompt('Digite sua temperâtura em kelvin'))


var celsiusToKelvin = celsius + 273.45
console.log(celsiusToKelvin)

var celsiusToFahrenheit = celsius * 1.8 + 32
console.log(celsiusToFahrenheit)

var kelvinToFahrenheit = 1.8 * (kelvin - 273) + 32
console.log(kelvinToFahrenheit) 