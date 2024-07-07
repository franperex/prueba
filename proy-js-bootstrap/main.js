const tarjeta = document.getElementById("tarjetas");
function cargarIniciales() {
  fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(cita => {
      for (let i = 0; i < 3; i++) {
        // console.log(cita[i].text);
        let citaTarjeta = document.createElement('div');
        citaTarjeta.classList.add('col-md-4', 'col-sm-6', 'col-12', 'my-5');
        citaTarjeta.innerHTML = `<div class="card" style="width: 100%;">

                    <div class="card-body">
                        <h5 class="card-title">${cita[i].author}</h5>
                        <p class="card-text">${cita[i].text}</p>

                    </div>
                </div>`;
        tarjeta.appendChild(citaTarjeta);
      }

    })
}

function buscarCita() {
  let terminoBusqueda = document.getElementById("nuevaBusqueda").value.toLowerCase();
  tarjeta.innerHTML = '' ;

  fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(citas => {

      let citasFiltradas = citas.filter(cita => cita.text.toLowerCase().includes(terminoBusqueda));
      
      // Mostrar todas las citas encontradas
      citasFiltradas.forEach(cita => {
        let citaTarjeta = document.createElement('div');
        citaTarjeta.classList.add('col-md-4', 'col-sm-6', 'col-12', 'my-5');
        citaTarjeta.innerHTML = `
        <div class="card" style="width: 100%;">
                                  <div class="card-body">
                                      <h5 class="card-title">${cita.author}</h5>
                                      <p class="card-text">${cita.text}</p>
                                  </div>
                                </div>
                                `;
        tarjeta.appendChild(citaTarjeta);
      });

      // Mostrar un mensaje si no se encontraron citas
      if (citasFiltradas.length === 0) {
        tarjeta.innerHTML = `<p>No se encontraron citas que coincidan con "${terminoBusqueda}".</p>`;
      }
    })
    .catch(error => {
      console.error('Error al buscar cita:', error);
    });

}

cargarIniciales();

const botonBuscar = document.getElementById("buscarBtn");
botonBuscar.addEventListener("click", buscarCita);

//permitir buscar con Enter
document.getElementById("nuevaBusqueda").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    buscarCita();
  }
})
