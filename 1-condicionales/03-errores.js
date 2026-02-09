/* Errores en JavaScript
Cuenta la leyenda que el 9 de septiembre de 1947, un equipo de informáticos de la Universidad de Harvard encontró una polilla atrapada en el libro de registro de la computadora Harvard Mark II. Una de las integrantes del equipo, 
la pionera en informática Grace Hopper , reportó el error y escribió:

“Primer caso real de un error detectado”.

Notas de Grace Hopper que incluyen el primer error real encontrado en un sistema informático que no funcionaba correctamente.

Sin embargo, el término “bug”, que significa error técnico, se remonta incluso antes, a 1878, con Thomas Edison. 🐛

A estas alturas del curso, es posible que hayas encontrado uno o dos errores al ejecutar el código. Estos son algunos de los más comunes:

SyntaxError: sucede cuando hay código JavaScript no válido mientras se ejecuta el programa.
ReferenceError:sucede cuando intentas utilizar una variable que no está definida.
TypeError:sucede cuando se hace un mal uso de un tipo de datos durante una operación.
Si aún no te has dado cuenta, gestionar errores y superarlos es algo cotidiano para cualquier desarrollador. Saber identificar y abordar diferentes tipos de errores forma parte de ser un gran programador. 💪

¡Vamos a explorarlos a continuación! */



/* # Error de sintaxis
Uno de los errores más comunes que encontrarás es el SyntaxError. Este tipo de errores se debe a algún error en el código JavaScript, como la falta de un punto o un paréntesis.

console.log("Hello, World! 🌍"

El código anterior producirá lo siguiente SyntaxError:

console.log("Hello, World! 🌍"
                    ^^^^^^^^^^^^^^^^^^

SyntaxError: missing ) after argument list

El mensaje de error es bastante sencillo aquí: nos falta el paréntesis de cierre )en console.log().

Nota: Sin embargo, tenga en cuenta que los mensajes de error pueden no ser siempre tan claros y requerir un verdadero trabajo de detective para rastrear dónde ocurrieron realmente los errores.

Para evitar un error SyntaxError, conviene escribir el código en un editor que resalte o subraye el código no válido. De esta forma, es más probable que detectes estos errores antes de ejecutar el código. */



/* # Error de referencia
Otro error común que encontrarás es el ReferenceError.
En pocas palabras, este tipo de error ocurre cuando intentas utilizar una variable que aún no se ha definido.

Por ejemplo:

let score = x + 2;

console.log(score);

El código anterior daría como resultado lo siguiente:

let score = x + 2;
                 ^

ReferenceError: x is not defined
Obtenemos un error ReferenceErrorporque no definimos una xvariable y, por lo tanto, JavaScript no sabe cómo avanzar.
Para evitar un ReferenceError, asegúrese de que todas las variables se hayan definido al menos con leto constde antemano. Según el programa que utilice, puede usar ctrl+ fpara buscar un nombre de variable específico. */





/* # Error de tipo
Al trabajar con variables de varios tipos de datos en JavaScript, es probable que te encuentres con el TypeError.

Este es especialmente el caso cuando se intenta cambiar el valor de una constvariable constante:

const meaningOfLife = 42;

meaningOfLife = 43;

Al ejecutar el código anterior se registrará lo siguiente en la consola:

meaningOfLife = 43;
              ^

TypeError: Assignment to constant variable.

Para evitar la TypeErrorrelación con la constpalabra clave, haga dos cosas:

Asegúrese de que todas sus variables estén al menos definidas con lety const.
Úselo sólo constpara variables que no desee cambiar; úselo letpara aquellas que puedan cambiar.
# Bono: Buscador de frutas */



/* Este pequeño programa tiene algunos errores: */

let apples = 5;
let oranges = 15;
let bananas = 3;

console.log("I have " + apples + " apples 🍎);
console.log("I have" +  oranges + "oranges 🍊"

/* ¡Ay, no! ¡Hay un montón de errores! ¿Podrías ser el detective de errores y encontrarlos corrigiéndolos con los mensajes de error?
Consejo: Si ves muchos mensajes de error, ¡no te preocupes! Desplázate siempre hacia arriba, empieza por el primer error (el de arriba) e intenta solucionarlo primero. Y siéntete libre de 
//comentar una o dos líneas para determinar dónde está el problema mediante el proceso de eliminación.
¡Feliz depuración! */

//FORMA CORRECTA
let apples = 5;
let oranges = 15;
let bananas = 3;

console.log("I have " + apples + " apples 🍎");
console.log("I have " +  oranges + " oranges 🍊"); //comentar la forma equivocada para ver el resultado