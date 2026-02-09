/* Sintaxis de la función
En JavaScript, usamos la functionpalabra clave para definir una función con un nombre y luego un 
conjunto de paréntesis:

function myFunction() {
  // Code here
}

myFunction();

Nota: Los nombres de las funciones de JavaScript normalmente están en camelCase, al igual que las 
variables.

Podemos escribir el cuerpo de nuestra función entre llaves { }. Esto podría incluir cualquier elemento 
aprendido hasta ahora, como definiciones de variables, bucles y sentencias condicionales.

Después de definir una función, podemos usarla o "llamarla" más tarde en nuestro programa usando su nombre 
entre paréntesis.





                                        # devolver----> return
Otra parte importante de las funciones de JavaScript es la returnpalabra clave.

En su mayor parte, las funciones procesan nuestro código y producen un resultado que registramos en la 
consola.

A continuación se muestra un ejemplo de una helloWorld()función que devuelve una cadena:

function helloWorld() {
    return "Hello, World! 🌎";
}

helloWorld();

Llamar a esta función devuelve la cadena, pero debemos usar console.log()para que aparezca en la consola:

console.log(helloWorld());
// Output: Hello, World! 🌎






Instrucciones
¡Practiquemos la definición de funciones creando un temporizador de cuenta regresiva!

Defina una countdown()función con la functionpalabra clave. Luego, agreguemos lo siguiente al cuerpo 
de la función:

Un bucle que itera hacia abajo desde ese 10 hasta 1.
Dentro del bucle, imprime el número actual.
Fuera del bucle, devuelve la cadena "¡Despegue! 🚀"
¡Por último, llama a la countdown()función y recuerda registrarla en la consola! */


function countdown() {
    for(let i = 10; i  > 0; i-- ) {
    console.log(i)
    } return"¡Despegue! 🚀"
}
console.log(countdown())
