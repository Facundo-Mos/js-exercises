/* 
bucles while
En el último ejercicio, vimos una demostración del whilebucle. ¡Explorémoslo más a fondo!

El whilebucle utiliza una condición que es trueo false.

while (condition) {
  // Code here
}

Mientras sea condition, trueel código del whilebucle se ejecutará. De lo contrario, el bucle 
termina cuando se conditionconvierte en false.

La lógica es bastante similar a la de iflas sentencias. La diferencia radica en que, en lugar de 
ejecutarse una vez si una condición es verdadera, el whilebucle la ejecuta una y otra vez mientras 
dicha condición sea verdadera.

Instrucciones
¡Usemos un whilebucle para ver cuál podría ser tu número de la suerte!

En un archivo lucky-number.jsluckyNumber , define a y asígnale tu número favorito. A continuación, 
crea una guessvariable entre 1 y 10 usando los métodos Math.floor()y :Math.random()

const luckyNumber = 7
let guess = Math.floor(Math.random() * 10) + 1;

A continuación, crea un whilebucle que se ejecute mientras guessy luckyNumbersean diferentes. Cada vez, 
imprime el número incorrecto y luego imprime el luckyNumberfuera del bucle.

La salida debería verse así:

Nope, it isn't  5
Nope, it isn't  9
Nope, it isn't  4
My lucky number is 10! */

const luckyNumber = 2
let guess = Math.floor(Math.random() * 10) + 1;

while (guess !== luckyNumber){
    console.log("Nope, it isn't " + guess);
    guess = Math.floor(Math.random() * 10) + 1;
}
console.log("My lucky number is " + luckyNumber + "!");