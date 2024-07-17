const tarjeta = document.getElementById("tarjetas");

function eliminarTarjeta(botonEliminar){
  let tarjeta = botonEliminar.closest('.col-md-4');
  
  if (tarjeta) {
    tarjeta.remove(); 
  } else {
    console.error('No se pudo encontrar el elemento padre para eliminar.');
  }
}


function agregarCita() {
  let autor = document.getElementById("textAutor").value;
  let citaPref = document.getElementById("textCita").value;
  let citaTarjeta = document.createElement('div');
  citaTarjeta.classList.add('col-md-4', 'col-sm-6', 'col-12', 'my-5');
  citaTarjeta.innerHTML = `<div class="card" style="width: 100%;">

                    <div class="card-body">
                         <h5 class="card-title">${autor}</h5>
                       <p class="card-text">${citaPref}</p>
                      <button class="btn btn-danger" onclick="eliminarTarjeta(this)">Eliminar cita</button>
                     </div>
                 </div>`;
  tarjeta.appendChild(citaTarjeta);
  document.getElementById("textAutor").value = "";
  document.getElementById("textCita").value = "";
}
const botonAgrego = document.getElementById("agregarBtn");
botonAgrego.addEventListener("click", agregarCita);



// //permitir buscar con Enter
// document.getElementById("nuevaBusqueda").addEventListener("keyup", function (event) {
//   if (event.key === "Enter") {
//     buscarCita();
//   }
// })
