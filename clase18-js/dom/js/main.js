let titulo = document.getElementById('titulo');
let nombre = 'Francisco';
titulo.innerHTML = "Hola" + nombre;
console.log(titulo.innerHTML);

const categorias = [];
let entrada = prompt("Ingresar categoria (Escribir 'Esc' para salir)");

while (entrada.toUpperCase() != 'ESC'){
categorias.push(entrada.toUpperCase());
entrada = prompt("Ingresar categoria (Escribir 'Esc' para salir)");
}

console.log(categorias);

// Obtener elemento

let miSelect = document.getElementById('select');

for (const categoria of categorias){
    miSelect.innerHTML += '<option>' +categoria + '</option>';
}