/* 
Tabla de multiplicar del 25
# La propiedad .length
A veces, necesitamos saber cuántos elementos hay en la matriz que estamos usando. ¿Cómo podemos obtener esta información?

En JavaScript, los arrays son variables especiales que poseen propiedades de datos que podemos usar. Una de estas propiedades se llama .lengthy genera un entero que indica la longitud del array (o su número de elementos).

arrayName.length;

Nota: La propiedad .length se utiliza con un punto o notación de punto.

La longitud de una matriz también se puede almacenar en una variable separada:*/

const testScores = [78, 96, 100, 88, 85, 81, 79];
const numberOfScores = testScores.length;

console.log(numberOfScores); // Output: 7

/*
# Recorriendo matrices
Un uso común de la .lengthpropiedad de una matriz es trabajar con bucles (es decir, el forbucle):*/

const musicNotes = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti"];

for (let i = 0; i < musicNotes.length; i++) {
    console.log(musicNotes[i]);
}

/*
Usando la notación de corchetes, podemos acceder al siguiente elemento de la matriz con la ivariable de bucle.

Nota: Nombramos la variable del iterador ipero técnicamente podemos darle cualquier nombre siempre que sea consistente a lo largo del bucle.

También podemos utilizar matrices con el while bucle:*/

const musicNotes1 = ["Do", "Re", "Mi", "Fa", "So", "La", "Ti"];
let counter = 0;

while (counter < musicNotes.length) {
    console.log(musicNotes[counter]);
    counter++;
}
/*
Nota: Al usar matrices con bucles, es probable que se produzca el notable error "off-by-one" que ocurre cuando se intenta acceder a un índice que no existe o si se comienza el índice con 1 en lugar de 0.

Instrucciones
¡Practiquemos el uso de matrices con bucles recitando nuestras tablas de multiplicar !

Muchos profesores creen que se debe memorizar una tabla de 9 x 9 (es decir, 9 x 0hasta 9 x 9).

Dentro de un archivo index.js , cree las siguientes variables:

Una multiplevariable que debe establecerse en un número entero mayor que 0.
Una numbersmatriz de números enteros del 0 al 9.
Luego, usa un forbucle para iterar por el numbersarray y multiplicar un número dado por multiplecada vez. Después, imprime los resultados en la consola.

Si elige 9 para su multiple, la salida debería verse así:

9 x 0 = 0
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36
9 x 5 = 45
9 x 6 = 54
9 x 7 = 63
9 x 8 = 72
9 x 9 = 81 */



let multiple = 9;
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

for(let i = 0; i < 10; i ++) {
    let resultado = i * 9;
    console.log(`${numbers[i]} x ${multiple} = ${resultado}`);
}