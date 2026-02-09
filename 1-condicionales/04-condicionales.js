/* En el capítulo “Condicionales”, exploraremos cómo los programas “toman decisiones” al evaluar diferentes condiciones e 
introducir lógica en nuestro código */

/* Antes de profundizar en cómo se realizan las declaraciones condicionales en el próximo ejercicio, 
¡hagamos una demostración usando un lanzamiento de moneda!

Crea un programa coin.js y escribe lo siguiente: */
let num = Math.random();

if (num > 0.5) {
    console.log("cara");
} else {
    console.log("cruz");
}