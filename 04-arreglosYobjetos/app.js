// Opereaciones con  arrays

var frutas = ['Banana', 'Pera', 'Manzana', 'Naranjas']
console.log(frutas)

// for (var i = 0; i <= frutas.length - 1; i++) {
//     console.log(frutas[i])
// }

// frutas.forEach(function(e, index, array){
//     console.log(e)
// })

frutas.push('Manzana') // Agrergo al final de array
console.log(frutas)
frutas.unshift('Uvas')
console.log(frutas) // Agrergo al final de array
frutas.pop()
console.log(frutas) // Elimino ultimo elemento del array
frutas.shift()
console.log(frutas) // Elimina primer elemento del array

var pos = frutas.indexOf('Pera')
console.log(pos)
