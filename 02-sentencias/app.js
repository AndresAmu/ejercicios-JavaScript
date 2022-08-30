var nombre = "Andrés"
var edad = 60

if (edad < 12) {
    console.log(nombre, ' es un niño')
} else if ((edad > 11) && (edad < 18)) {
    console.log(nombre, ' es un adolecente')
} else if ((edad > 17) && (edad < 60)) {
    console.log(nombre, ' en un adulto')
} else {
    console.log(nombre, ' es un asiano')
}