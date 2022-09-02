function bienvenido() {
    console.log('Bienvenido a mi primera function')
}
bienvenido()

function bienvenidos() {
    return 'Bienvenidos guardaro en variable'
}
let mensaje = bienvenidos()
console.log(mensaje)

// Partes de una funcion
//entradas (parametos), codigo, salida

function cuadradoNumero(num) {
    var resultado = num * num
    return resultado
}
var num = 5
var valor = cuadradoNumero(num)
console.log(valor)

