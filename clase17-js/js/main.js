class Mascota {
    constructor(nombre) {
        this.nombre = nombre;
        this.adoptada = false;
    }
    //Método 
    adoptar() {
        this.adoptada = true;
    }
}
/* 
const inputMascota = document.getElementById("nuevaMascota");
const nombreMascota = inputMascota.value.trim();
console.log(inputMascota);
console.log(nombreMascota);
  */



//Funcion para agregar mascota a la lista 


function agregarMascota() {
    const inputMascota = document.getElementById("nuevaMascota");
    const nombreMascota = inputMascota.value.trim();

    if (nombreMascota !== "") {
        const nuevaMascota = new Mascota(nombreMascota);

        //Crear el elemento de la lista
        const elementoLista = document.createElement("li");
        elementoLista.textContent = nuevaMascota.nombre;

        // Crear boton eliminar
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar mascota";
        botonEliminar.addEventListener("click", function () {
            // Eliminar el elemento de la lista
            elementoLista.remove();
        });

        // Agregar clase si la mascota está adoptada

        if (nuevaMascota.adoptada) {
            elementoLista.classList.add("adoptada")
        }

        //Evento para indicar que fue adopatada
        elementoLista.addEventListener("click", function () {
            nuevaMascota.adoptar();
            elementoLista.classList.add("adoptada")

        })

        const listaMascota = document.getElementById("listaMascotas");
        elementoLista.appendChild(botonEliminar);
        listaMascota.appendChild(elementoLista)
        inputMascota.value = ""; //Limpia el input después de agregar mascotas
    }
}


const botonAgregarMascotas = document.getElementById("agregarMascota");
botonAgregarMascotas.addEventListener("click", agregarMascota)

document.getElementById("nuevaMascota").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        agregarMascota();

    }

})