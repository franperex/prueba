let formatoAmPm = false;

function mostrarHora() {
    let reloj = document.getElementById('reloj');
    let ahora = new Date();
    if (formatoAmPm) {
        reloj.innerHTML = ahora.toLocaleTimeString('en-US');
    } else {
        reloj.innerHTML = ahora.toLocaleTimeString('en-GB');
    }

}

setInterval(mostrarHora, 1000);
document.getElementById("amPm").addEventListener("click", function () {
    formatoAmPm = true;
});
document.getElementById("btn24").addEventListener("click", function () {
    formatoAmPm = false;
});