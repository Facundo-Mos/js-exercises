/* 
Matemáticas.random()
¿Recuerdas el programa de lanzamiento de moneda del principio del capítulo? Aprendamos a usar un generador de números aleatorios para añadirle más diversión a nuestro programa.

En JavaScript, el Math.random()método devuelve un número decimal aleatorio entre 0 y 1.

Supongamos que imprimimos tres de ellos, de la siguiente manera:

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

La salida tendría tres números diferentes que se verían así:

0.0236966238022709
0.7397680104909345
0.4103022944399179

Aprenderemos más sobre qué es un método y qué Math.random()significa en un capítulo posterior.

Para obtener un número entero aleatorio entre 0 y 9:

Math.floor(Math.random() * 10);

Esto es multiplicar el número decimal por 10 y luego redondearlo hacia abajo al entero más cercano con Math.floor().

Así pues, los tres números anteriores se verían así:

0
7
4

Instrucciones
La Bola Mágica 8 es un popular juguete de oficina y de niños inventado en la década de 1940 para adivinar el futuro y pedir consejos. 🎱

Es una bola 8 de gran tamaño con algunas de las siguientes respuestas:

"Sí, definitivamente.",
"Decididamente es así.",
"Sin lugar a dudas.",
"Respuesta vaga, intenta de nuevo.",
"Pregunta más tarde.",
"Mejor no decirte ahora.",
"Mis fuentes dicen que no.",
"Las perspectivas no son buenas.",
"Muy dudoso."
Cree un programa magic8.js que pueda responder a cualquier pregunta de Sí o No con una respuesta diferente cada vez que se ejecute.

La salida debe tener el siguiente formato:

Question:       [Question]
Magic 8 Ball:   [Answer]

Por ejemplo:

Question:       Is Codédex better than Udemy yet?
Magic 8 Ball:   Better not tell you now. */


let pregunta = "hay posibilidades?";
let respuesta = Math.floor(Math.random() * 10);
if(respuesta == 1){
    console.log("Sí, definitivamente.");
} else if(respuesta === 2){
    console.log("Decididamente es así.");
} else if(respuesta === 3){
    console.log("Sin lugar a dudas.");
} else if(respuesta === 4){
    console.log("Respuesta vaga, intenta de nuevo.");
} else if(respuesta === 5){
    console.log("Pregunta más tarde.");
} else if(respuesta === 6){
    console.log("Mejor no decirte ahora.");
} else if(respuesta === 7){
    console.log("Las perspectivas no son buenas.");
} else if(respuesta === 8){
    console.log("Muy dudoso.");
} else if(console.log("Mis fuentes dicen que no."));

