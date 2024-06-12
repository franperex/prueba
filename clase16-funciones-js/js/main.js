/* Funciones 

function saludo (nombre, apellido){
    console.log("Hola ", nombre,"",apellido);
}

saludo("Francisco","Perez");
saludo("Luis","Suarez");
saludo("Lionel","Messi");
saludo("Fideo","Di Maria");*/

/*function saludoSerie(nombre, apellido, serieFavorita){
    return ("Hola "+ nombre+ " "+ apellido+" "+ "tu serie favorita es "+ serieFavorita);
}

console.log(saludoSerie("Francisco","Perez","Breaking Bad"));*/

/*
function longitud(nombre){
    return nombre.length;
}

document.write("El largo del nombre es: "+longitud("Francisco")+" letras");
*/

let titulo = document.querySelector("#titulo");
let parrafo = document.querySelectorAll(".parrafo");
let colorTituloBtn = document.querySelector("#ColorTitulo");
let fuenteParrafosBtn = document.querySelector("#FuenteParrafo")

console.log(titulo); //muestra h1 con id titulo
console.log(parrafo); //muestra los parrafos con clase parrafo
console.log("El texto dentro de h1 es: ", titulo.textContent); // muestra el contenido del h1

function cambiaColor(){
   titulo.classList.toggle('colorTitulo');
}

function cambiaFuente(){
 parrafo.forEach(parrafo =>{ 
    parrafo.classList.toggle('fuenteParra')
    })
}

colorTituloBtn.addEventListener('click', cambiaColor);
fuenteParrafosBtn.addEventListener('click', cambiaFuente);