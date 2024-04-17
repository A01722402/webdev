function mostrarAlerta(){
    alert("Esto es una alerta")
  }
  
function solicitarConfirmacion(){
    let respuesta = confirm("¿Estás seguro?")
    if(respuesta){
      alert("Aceptaste")
    }else {
      alert("No aceptaste")
    }
  }
  
function solicitarInformacion(){
    let numero = prompt("¿Cuál es tu número?")
    
    if(numero){
      alert("Tu número +1 es: " + (parseInt(numero)+1))
    }else {
      alert("No has introducido número")
    }
  }

function compararNumeros(){
    let num1 = document.getElementById("numero1").value
    let num2 = document.getElementById("numero2").value

    if(num1 > num2){
      alert("El primer número es mayor")
    }else if(num1 < num2){
      alert("El segundo número es mayor")
    }else {
      alert("Los números son iguales")
    }
}

function tiposDatos(){
    alert("Revisa la consola")

    let miString = "Hello World"
    let miNumero = 42
    let miBool = true
    let miNull = null
    let miUndefined
    let miBigInt = BigInt(3)

    console.log("miString: " + miString)
    console.log("miNumero: " + miNumero)
    console.log("miBool: " + miBool)
    console.log("miNull: " + miNull)
    console.log("miUndefined: " + miUndefined)
    console.log("miBigInt: " + miBigInt)

    console.log("El tipo de miString es: " + typeof miString)
    console.log("El tipo de miNumero es: " + typeof miNumero)
    console.log("El tipo de miBool es: " + typeof miBool)
    console.log("El tipo de miNull es: " + typeof miNull)
    console.log("El tipo de miUndefined es: " + typeof miUndefined)
    console.log("El tipo de miBigInt es: " + typeof miBigInt)
}

function revisarDato(){
    let valor = document.getElementById("userValue").value

    if (!isNaN(valor)){
        alert("Es un número")
    } else if (valor == "true" || valor == "false" || valor == "TRUE" || valor == "FALSE" || valor == "True" || valor == "False"){
        alert("Es un booleano")
    } else if (valor == "null"){
        alert("Es un null")
    } else {
        alert("Es un string")
    }
}

function suma3(){
    let num1 = document.getElementById("primerNum").value
    let num2 = document.getElementById("segundoNum").value
    let num3 = document.getElementById("tercerNum").value

    let suma = parseInt(num1) + parseInt(num2) + parseInt(num3)

    console.log("La suma de los 3 es: " + suma)
}

function mult3(){
    let num1 = document.getElementById("primerNum").value
    let num2 = document.getElementById("segundoNum").value
    let num3 = document.getElementById("tercerNum").value

    let mult = parseInt(num1) * parseInt(num2) * parseInt(num3)

    console.log("La multiplicación de los 3 es: " + mult)
}

function strChecck3(){
    let num1 = document.getElementById("primerNum").value
    let num2 = document.getElementById("segundoNum").value
    let num3 = document.getElementById("tercerNum").value

    if(isNaN(num1) && isNaN(num2) && isNaN(num3)){
        console.log("Todos son strings")
    }else {
        console.log("No todos son strings")
    }
}

const esVocal = /^[aeiouAEIOU]$/i.test(x);
function vocalCheck(){
    let letra = document.getElementById("vocalCheck").value;
    if(esVocal.test(letra)){
        console.log("Es una vocal")
    } else {
        console.log("No es una vocal")
    }
}

function validarEdad(edad){
    if(edad < 18){
        alert("Eres menor de edad")
    } else {
        alert("Eres mayor de edad")
    }
}

function zooPen(){
    var zooAnimals = ["Zebra", "Rhino", "Giraffe", "Owl"];
    console.log(zooAnimals.length);
    console.log(zooAnimals[0]);
    console.log(zooAnimals[15]);
}

/*

Crear un arreglo 
let fruits = ['Apple', 'Banana']
console.log(fruits.length)

Accesar un elemento del arreglo usando el índice
let first = fruits[0]
let last = fruits[fruits.length - 1]

Iterar sobre un arreglo
fruits.forEach(function(item, index, array){
    console.log(item, index)
})

Agregar elementos al final del arreglo
let newLength = fruits.push('Orange')
console.log(fruits)

Eliminar un elemento del final del arreglo
let last = fruits.pop()

Eliminar un elemento del principio del arreglo
let first = fruits.shift()

Agregar un elemento al principio del arreglo
let newLength = fruits.unshift('Strawberry')

Encontrar el índice de un elemento en el arreglo
fruits.push('Mango')
let pos = fruits.indexOf('Banana')

Eliminar un elemento por su índice
let removedItem = fruits.splice(pos, 1)

*/

