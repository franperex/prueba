/*let pasos = 100;
while(pasos > 1 )
    {
        document.write("Te quedan: ", pasos, "pasos", "<br>");
        pasos = pasos-1;
    }
if (pasos==1){
    document.write("Solo falta 1 paso");
}
*/

/* let objetos = ["Varita", "Libro", "Lechuza", "Caldero"];
 
let resultado = objetos.map(objeto => {  
  return "Objeto: " +objeto;
}); 
console.log(resultado);
*/

//Ejercicio 1 Recorrer un array de números con el método .map() y crear un nuevo array que indique el número y si el número es par o impar.
         /*     const numeros=[2,3,4,5,6,7,8,9];

            let clasificacion = numeros.map(numero => {
            let esono
            if (numero % 2 === 0) {
                esono = "es par";
            }
            else {
                esono = "no es par";
            }
            return {
                numero: numero,
                condicion: esono
            };
            })
            console.log(clasificacion);
        */
  
// Ejercicio 2 Crea un array de strings con nombres y luego guardá en una variable nombresCortos un nuevo array con los nombres que tengan 5 o menos letras.

/**/let nombres = ['Juan','Francisco','Belen','Lucrecia','Ana','Mariana'];

let nombresCortos = nombres.filter(nombre => nombre.length <= 5 );

console.log(nombresCortos);


/*
let objetos = ['pipa', 'taza', 'lapiz'];
objetos.forEach(function(objetos, indica, arreglo){
    console.log("El objeto es: ", objetos, indica, arreglo); //esto muestra todo, se puede indicar para que muestre lo que quieras.
})
*/