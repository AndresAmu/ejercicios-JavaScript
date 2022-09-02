function bienvenido() {
    console.log('Bienvenido a mi primera function')
}
bienvenido()

function bienvenidos() {
    return 'Bienvenidos guardaro en variable'
}
let mensaje = bienvenidos()
// console.log(mensaje)

// Partes de una funcion
//entradas (parametos), codigo, salida

function cuadradoNumero(num) {
    var resultado = num * num
    return resultado
}
var num = 5
var valor = cuadradoNumero(num)
// console.log(valor)


// FUncion que convierte de grados Fahrenheint a Celcius

// 32F = 0C, 68F = 20C.
// c = (F - 32) * 5/9

function convertirFAHaCelsius(gradoFah) {
    var celsius = (gradoFah - 32) * 5 / 9
    return celsius
}

var tempUno = convertirFAHaCelsius(32)
var tempDos = convertirFAHaCelsius(68)
// console.log(tempUno)
// console.log(tempDos)

//Calcular la edad de una persona sabiendo el año de nacimiento


function edadCalcular(anoNacimineto) {
    return 2022 - anoNacimineto
}
var edad1 = edadCalcular(1994)
var edad2 = edadCalcular(1990)
var edad3 = edadCalcular(2001)
// console.log(edad1)
// console.log(edad2)
// console.log(edad3)

