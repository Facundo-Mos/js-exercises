/* 
Funciones
¡En este capítulo, exploraremos funciones en JavaScript!

Las funciones son bloques de código que escribimos una vez y podemos usar más adelante en nuestros 
programas. Son útiles para dividir tareas en fragmentos más pequeños que pueden ejecutarse varias veces 
mediante el nombre de la función.

A continuación se muestra un ejemplo de una función definida que se utiliza más adelante:

function helloWorld() {
    console.log("Hello, World!");
}

helloWorld();

Todas las funciones en JavaScript utilizan paréntesis ( ), tanto cuando las creamos como 
cuando las usamos */




/* 
En el siguiente ejercicio, profundizaremos en cómo crear y usar funciones. Por ahora, demostraremos una función copiando y pegando lo siguiente en nuestro editor:
*/
function greetings() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;

    if (randomNumber == 1) {
        console.log("Howdy!");
    } else if (randomNumber == 2) {
        console.log("Hi there!");
    } else if (randomNumber == 3) {
        console.log("Hey what's happening?");
    } else if (randomNumber == 4) {
        console.log("Hola!");
    } else {
        console.log("Heya!");
    }
}

greetings();
greetings();
greetings();

/* Continúa y ejecuta este código. Según el valor de randomNumber, deberías ver un saludo diferente. */