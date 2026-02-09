/* 
Añadiendo elementos
Como aprendimos anteriormente, puedes usar un índice de matriz para un elemento existente para reemplazar 
el valor de ese elemento: */

const bandMembers = ["J.C.", "Joey", "Chris", "Lance", "Justin"];

bandMembers[1] = "Nick";

console.log(bandMembers);
// Output: ["J.C.", "Nick", "Chris", "Lance", "Justin"]



/* Además, puedes agregar más elementos a tus matrices con métodos integrados.

Los métodos son fragmentos de código que algunas variables pueden usar para realizar acciones específicas, como generar un nuevo valor. Se denominan con notación de punto, similar a la .lengthpropiedad.

Nota: El primer método que encontramos fue console.log()el del Capítulo 1.

Por ejemplo, puede agregar nuevos elementos al principio y al final de una matriz con los métodos .unshift()y , respectivamente:.push() */

/* 
myArray.unshift(newValue);

myArray.push(newValue); 


*/
/*


Se newValueconoce como un parámetro que pasamos al método. Algunos métodos usan parámetros, mientras 
que otros no.

También puede agregar múltiples elementos con los métodos .push()y .unshift()separando cada nuevo 
valor con una coma (es decir, .push(newValue1, newValue2);).

Nota: por cada nuevo elemento agregado a una matriz con el .unshift()método, los índices de los otros 
elementos se desplazan hacia arriba en 1.

# Eliminación de elementos
No sólo podemos agregar elementos a una matriz, también podemos eliminarlos con los 
métodos .shift()y .pop().

El .shift()método elimina y devuelve el primer elemento de una matriz, desplazando los índices de los 
elementos restantes hacia atrás en 1.

Por el contrario, el .pop()método elimina y devuelve el último 
elemento de una matriz:
*/
const greeks = ["Zeus", "Hera", "Poseidon", "Apollo", "Hermes", "Dionysus", "Hades"];

const shiftedElement = greeks.shift();
const poppedElement = greeks.pop();

console.log(shiftedElement);
console.log(poppedElement);
console.log(greeks);

/*
Output:
Zeus
Hades
["Hera", "Poseidon", "Apollo", "Hermes", "Dionysus"]
*/
/* 
Nota: Por "retorna", queremos decir que greeks.shift()produce un único valor, el primer elemento eliminado, que puede usarse en otra parte del programa (por ejemplo, imprimirse o almacenarse en una variable).

Instrucciones
¡Es hora de poner a prueba estos métodos personalizando una lista de reproducción de música! 🎵

Dentro de un archivo index.js , copie y pegue la siguiente matriz: 
*/

const musicPlaylist = [
    "Tom Sawyer",
    "Sabotage",
    "I Wanna Dance With Somebody",
    "Don't Speak",
    "Bulls On Parade",
    "Thriller",
    "The Breaks",
    "Brick",
    "Aeroplane Over the Sea",
    "Tubthumping"
];
/* 
A continuación, hagamos lo siguiente:

Eliminar el primer y el último elemento.
Añade un nuevo elemento al final de la matriz.
Añade dos nuevos elementos al comienzo de la matriz.
¡Luego, registre su musicPlaylistmatriz actualizada en la consola! 
*/

const cancion1 = musicPlaylist.shift();
const cancion2 = musicPlaylist.pop();
console.log(musicPlaylist, cancion1, cancion2); //aca quite las dos canciones

musicPlaylist.push("Hello Cotto") //aca agregue una al final
console.log(musicPlaylist);

musicPlaylist.unshift("Gasolina", "Vacaciones"); //aca agregue dos al inicio
console.log(musicPlaylist);