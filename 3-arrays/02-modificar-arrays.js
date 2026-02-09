/* 
Índice
Bien, ahora sabemos cómo crear una matriz y almacenar datos en ella. Pero ¿cómo podemos acceder y 
modificar sus elementos?

Para acceder a un solo elemento de una matriz, primero debemos aprender sobre el índice.

Un índice es la posición de un elemento en una matriz.

Por ejemplo: */

let fruits = ["strawberries 🍓", "blueberries 🫐", "bananas 🍌"];
/* 
El elemento en el índice 0 es "strawberries 🍓".
El elemento en el índice 1 es "blueberries 🫐".
El elemento en el índice 2 es "bananas 🍌".
Para acceder a un solo elemento de una matriz, utilizamos la notación de corchetes !*/

console.log(fruits[0]); 

/* 
El código anterior usa la notación de corchetes para recuperar el valor del primer elemento del 
fruitsarray. Pero espera... si este es el primer elemento, ¿por qué usamos 0?

Los índices de matriz comienzan en 0, no en 1. ¡Descubrirás que este es el caso de la mayoría de los 
lenguajes de programación!

También podemos utilizar la notación de corchetes para cambiar el valor de un elemento existente: */

let pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

pokemon[2] = "Pikachu";

console.log(pokemon);
// Output: ["Bulbasaur", "Charmander", "Pikachu"]

/* 
También podemos usarlo para asignar un nuevo valor a un índice que aún no existe. El siguiente ejemplo 
añade un nuevo elemento al final del array:
 */
let meetings = [4, 4, 1, 3, 2];

meetings[5] = 0;

console.log(meetings);
// Output: [4, 4, 1, 3, 2, 0]
/* 
Nota: Tenga cuidado al crear nuevos elementos como este, ya que puede terminar creando 
undefinedelementos entre el último elemento anterior y el último elemento nuevo:
 */
let temperature = [75, 69, 71, 64];

temperature[6] = 88;

console.log(temperature);
// Output: [75, 69, 71, 64, undefined, undefined, 88]

/* Instrucciones
¡Usemos la notación de corchetes de matriz para personalizar una lista para un viaje al supermercado!

Copie y pegue la siguiente matriz en un archivo index.js : */

let groceryList = ["🥛 Milk", "🥑 Avocado", "🥚 Eggs", "🍞 Bread"];

/* ¡Parece que no necesitamos huevos! ¡Pero sí mantequilla y jabón para lavar la ropa!

Utilice la notación entre corchetes para:

Reemplazar "🥚 Eggs"con "🧈 Butter".
Añadir "🧼 Laundry soap"al final de la groceryListmatriz.
Por último, registre la groceryListmatriz actualizada en la consola. */



groceryList[2] = "🧈 Butter";
groceryList[4] = "🧼 Laundry soap";
// si quiero agregar un dato al final del array sin saber cuantos datos contiene puedo hacerlo con push
//groceryList.push("🧼 Laundry soap")
console.log(groceryList);
