/* 
Métodos de matriz
A medida que trabajes más y más con matrices, ¡comenzarás a descubrir otros métodos interesantes 
que podemos usar para ellas!

En este ejercicio, repasaremos los métodos .indexOf()y .includes().

# .indexOf()
Quizás recuerdes que usamos el índice para obtener el valor de un elemento de matriz determinado: */




const myArray = [1, 2, 3];

console.log(myArray[1]); // Output: 2



/* 
Pero ¿qué pasa si queremos averiguar el índice del valor de un elemento específico? Podemos 
hacerlo con el .indexOf()método: */


const stories = [
    "Sorcerer's Stone",
    "Chamber of Secrets",
    "Prisoner of Azkaban",
    "Goblet of Fire",
    "Order of the Phoenix",
    "Half-Blood Prince",
    "Deathly Hallows"
];

console.log(stories.indexOf("Half-Blood Prince")); // Output: 5



/* 
Si la matriz no tiene el valor que estamos buscando, se devuelve -1.

Nota: Si hay varios elementos con el mismo valor en una matriz, .indexOf()devuelve el 
índice de la primera aparición de ese valor.

# .incluye()
También podemos comprobar si una matriz contiene un valor de elemento particular 
con el .includes()método: */


/* array.includes(value); */

/* 
El .includes()método comprueba si valueexiste un elemento con el parámetro en el arrayy devuelve un 
valor booleano truesi existe o falseno. A continuación, un ejemplo: */

const myArray2 = [1, 2, 3];

console.log(myArray2.includes(3));
console.log(myArray2.includes(42));

/*
Output:
true
false 
*/


/* 
Instrucciones
Para este ejercicio, practicaremos el uso de los métodos y con una variación de los 
famosos .indexOf()libros infantiles "¿Dónde está Wally?" ..includes()

Copie y pegue la siguiente matriz en un archivo index.js : 


A continuación, escribe una declaración condicional con la siguiente lógica:

Si nuestra characters matriz incluye un elemento con el valor "Waldo", haga esto:
Guarde el índice del elemento "Waldo" en una nueva variable llamada waldoIndex.
Luego use console.log()para mostrar "Found Waldo at index {indexNumber}!"(por ejemplo, 
"Found Waldo at index 3").
De lo contrario, inicie sesión "Not found"en la consola. */



const characters = [
    "The Wally Watchers",
    "Wilma",
    "Fritz",
    "Wizard Whitebeard",
    "Odlaw",
    "Waldo",
    "Woof"
];


if(characters.includes("Waldo")) {
    const waldoindex = characters.indexOf("Waldo")
    console.log(`Found Waldo at index ${waldoindex}!`)
} else {
    console.log("Not found");
    
}





