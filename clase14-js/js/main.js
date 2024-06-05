//Condicionales en JS

//if else if else

let numero = 5;
if (numero > 3) {
    console.log("El número es mayor que 3");
}
else if (numero == 3) {
    console.log("El numero es 3");
}

else {
    console.log("El número es menor que 3");
}


//Ejercicio

let dia = new Date().getDate();

switch (dia) {
    case 0:
        console.log("Es domingo");
        break;
    case 1:
        console.log("Es lunes");
        break;
    case 2:
        console.log("Es martes");
        break;
    case 3:
        console.log("Es miercoles");
        break;
    case 4:
        console.log("Es jueves");
        break;
    case 5:
        console.log("Es viernes");
        break;
    case 6:
        console.log("Es sabado");
        break;
}


//ejercicio 1

let numerox = parseInt(prompt("Ingrese un número"));
if (numerox > 1000){
    alert("El numero es mayor a 1000");
}

//ejercicio 2

let texto = prompt("Ingrese un texto:");
if (texto == "hola"){
    alert("Usted ingresó hola");
}

//ejercicio 3

let numeroxx = parseInt(prompt("Ingrese otro numero"));
if (numeroxx >= 10 && numeroxx <= 50 ){
    alert("Su numero esta entre 10 y 50");
}
else {
    alert("Su numero no esta entre 10 y 50");
}


//ejercicio 4

let numeroz = parseInt(prompt("Ingrese another numero"));
if (numeroz > 10 ){
    document.write("Tu numero es mayor a 10");
}
else if (numeroz <= 10 ){
    document.write("Tu numero es menor o igual a 10");
}
else {
    document.write("No ingresaste un numero");
}