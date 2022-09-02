// var nombre = "Andrés"
// var edad = 60

// if (edad < 12) {
//     console.log(nombre, ' es un niño')
// } else if ((edad > 11) && (edad < 18)) {
//     console.log(nombre, ' es un adolecente')
// } else if ((edad > 17) && (edad < 60)) {
//     console.log(nombre, ' en un adulto')
// } else {
//     console.log(nombre, ' es un asiano')
// }

/****************************** */
/*Operador ternario*/

// var nombre = 'Andrés'
// var edad = 17

// edad >= 18 ? console.log(nombre, ' es mayor de edad') :
//     console.log(nombre, ' es menor de edad')


/***************************************** 
Sentencia Switch 
******************************************/

// var meses = 4;
// switch (meses) {
//     case 1:
//         console.log('Enero');
//         break;
//     case 2:
//         console.log('Febrero');
//         break;
//     case 3:
//         console.log('Marzo');
//         break
//     case 4:
//         console.log('Abril');
//         break
//     default:
//         console.log('Mes no considerado')
// }

/***************************************** 
Sentencias For

******************************************/

// for (var i = 0; i <= 10; i++) {
//     console.log(i)
    
// }


// /***************************************** 
// Sentencias While

// ******************************************/

// var j = 0
// while (j <= 10) {
//     console.log(j)
//     j++
// }

// /***************************************** 
// Sentencias do..while

// ******************************************/

// var x = 0
// do {
//     x++
//     console.log(x)
// } while (x <= 10)

var edad = '10' // JS lo declara como valor falso

if (edad){
    console.log('Variable esta definida')
}else{
    console.log('Variable no definida')
}

// Operadores de igualdad

if(edad === 10){
    console.log('Variable con coersión')
}else {
    console.log('Variable sin coersión')
}