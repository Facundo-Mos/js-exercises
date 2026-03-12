/* El coche de tus sueños
# Propiedades
En el último ejercicio, mostramos un objeto completo junto con sus pares key: .value

¿Y si solo quisiéramos mostrar un único valor del objeto? Podemos hacerlo haciendo referencia a una de sus propiedades.

Una propiedad es lo mismo que el par key: valuede un objeto.

A continuación se muestra un ejemplo de propiedades en acción:

const stadium = {
    name: "Dodger Stadium",
    location: "Los Angeles, CA",
    capacity: 56000,
    soldOut: false
};

Este stadiumobjeto tiene cuatro propiedades:

.name
.location
.capacity
.soldOut
# Notación de puntos
Podemos acceder al valor de una sola propiedad con un punto:

console.log(stadium.name);    // Dodger Stadium

Mientras la propiedad exista, podemos acceder a su valor. De lo contrario, obtendremos undefined:

console.log(stadium.events);  // undefined

Instrucciones
¡Usemos propiedades de objetos y notación de puntos para diseñar el auto de tus sueños! 🚗💨

Primero, crea un nuevo carobjeto:

const car = { };

Luego, utilice la notación de puntos para agregar las siguientes propiedades:

Una .modelpropiedad (cadena), como "Tesla" o "Honda".
Una .yearpropiedad (entera) que indica cuándo se fabricó el automóvil.
Una .colorpropiedad (cadena) del automóvil.
Una .usedpropiedad (booleana) que puede ser trueo false.
Por último, registre un mensaje de cadena en la consola que incluya las propiedades que definió para el carobjeto:

I'm looking for a white 2024 Honda that is used.

Si la .usedpropiedad es false, el mensaje debe decir lo siguiente:

I'm looking for a white 2024 Honda that is new. */

const car = {
    name: "volkswagen",
    model: "polo",
    year: 2018,
    color: "grey",
    used: true,
}
if (car.used) {
    console.log(`I'm looking for a ${car.color} ${car.year} ${car.name} ${car.model} that is used.`);
} else {
    console.log(`I'm looking for a ${car.color} ${car.year} ${car.name} ${car.model} that is new.`);
}   