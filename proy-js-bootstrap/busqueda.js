
const tarjetaBusqueda = document.getElementById("tarjetasBusqueda");
const titulo = document.getElementById("tituloBusqueda");

function buscarCita() {
  
  let tituloB = document.createElement('h1');

  titulo.innerHTML = '';
  
  tituloB.innerHTML = `
        Resultados de la busqueda: "${document.getElementById("nuevaBusqueda").value}"
        `;

  titulo.appendChild(tituloB);

  let terminoBusqueda = document.getElementById("nuevaBusqueda").value.toLowerCase();

  // tarjetaBusqueda.innerHTML = '' ;

  fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(citas => {
      tarjetaBusqueda.innerHTML = ''; //limpia las tarjetas antes de cada consulta
      let citasFiltradas = citas.filter(cita => cita.author.toLowerCase().includes(terminoBusqueda));

      // Mostrar todas las citas encontradas
      citasFiltradas.forEach(cita => {
        let citaTarjetaB = document.createElement('div');
        citaTarjetaB.classList.add('col-md-4', 'col-sm-6', 'col-12', 'my-5');
        citaTarjetaB.innerHTML = `
        <div class="card" style="width: 100%;">
                                  <div class="card-body">
                                      <h5 class="card-title">${cita.author}</h5>
                                      <p class="card-text">${cita.text}</p>
                                  </div>
                                </div>
                                `;
        tarjetaBusqueda.appendChild(citaTarjetaB);
      });

      // Mostrar un mensaje si no se encontraron citas
      if (citasFiltradas.length === 0) {
        tarjetaBusqueda.innerHTML = `<p>No se encontraron citas que coincidan con "${terminoBusqueda}".</p>`;
      }
    })
    .catch(error => {
      console.error('Error al buscar cita:', error);
    });

}



const botonBuscar = document.getElementById("buscarBtn");
botonBuscar.addEventListener("click", buscarCita);


// ESTO NO es Necesario parece
// //permitir buscar con Enter
// document.getElementById("nuevaBusqueda").addEventListener("keyup", function (event) {
//   if (event.key === "Enter") {
//     // buscarCita();
//
//   }
// })
