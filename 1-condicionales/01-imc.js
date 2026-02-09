/* Exponentes
JavaScript también puede realizar exponenciaciones como 2³ o 10².

En matemáticas escritas, podríamos ver un exponente como un número superíndice (como se muestra arriba), 
pero escribir números superíndices no siempre es fácil en los teclados modernos. 
En JavaScript, usamos esta **notación para la exponenciación. */

let score = 0;

score = 2 ** 2;      // score is 4
score = 2 ** 3;      // score is now 8
score = 2 ** 4;      // score is now 16
score = 2 ** 5;      // score is now 32

console.log(score);  // Output: 32

/* Nota: En el orden de operaciones, los exponentes se calculan antes de la multiplicación/división y la suma/resta. */



                                            //Exercises

/* El índice de masa corporal (IMC) fue creado por un matemático belga en la década de 1850 y lo utilizan los profesionales de la salud 
y la nutrición para estimar la grasa corporal humana en ciertas poblaciones.

Se calcula tomando el peso (masa) de un individuo en kilogramos y dividiéndolo por el cuadrado de su altura en metros.  */        

let peso = 80;
let altura = 178;
let imc = peso / (altura ** 2)
console.log(imc)
