/* # Bucles
¡Otra forma popular en la que podemos controlar el flujo de nuestro código JavaScript es con bucles!

Pronto notarás que a veces necesitas repetir una acción específica varias veces en un programa. 
Esto puede parecer normal al principio, pero con el tiempo puede volverse abrumador.

Por ejemplo, ¿qué pasaría si quisiéramos decir "¡Beetlejuice!" exactamente tres veces? 
Podríamos escribir simplemente tres console.log()enunciados:*/

console.log("Beetlejuice!");
console.log("Beetlejuice!");
console.log("Beetlejuice!");

/* Esto podría no parecer malo para 3 afirmaciones. ¿Pero qué pasa con 20? ¿O 100? ¿O miles o más?

En programación, los bucles se utilizan para repetir un bloque de código en función de una determinada 
condición.

El funcionamiento de los bucles es similar a cómo los coches pueden dar una vuelta en una rotonda y 
salir cuando se cumple una determinada condición (como tomar la salida deseada):





Aprenderemos más sobre el whilebucle en el próximo ejercicio. Pero por ahora, demostraremos cómo 
funciona imitando el clásico juego de " Pato, Pato, Ganso" .

En el juego, un jugador camina alrededor de un círculo de compañeros para acariciarles la cabeza. 
Dirán "Pato" o "Ganso". Si dicen "Ganso", la persona a la que acariciaron lo persigue alrededor del 
círculo para que lo toquen. Después de tocarlo, es su turno para caminar alrededor del círculo.

En un archivo llamado duck-duck-goose.js , copiemos y peguemos lo siguiente: */

let randomNumber = Math.floor(Math.random() * 10);

while (randomNumber !== 7) {
    console.log("Duck 🦆");
    randomNumber = Math.floor(Math.random() * 10);
}

console.log("Goose! 🦢");

/*Luego, ejecute este código y observe lo que se imprime en la terminal. */