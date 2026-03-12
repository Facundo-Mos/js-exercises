/*
Objetos
En la vida real, todo lo que te rodea puede considerarse un objeto, con ciertas características y posibles 
comportamientos.

En JavaScript, algunos de los tipos de datos principales son los números y las cadenas de texto. 
En este capítulo conocerás un nuevo tipo de dato: los objetos.

Los objetos se utilizan para almacenar múltiples valores dentro de una sola variable. Normalmente están 
formados por pares clave–valor, donde la clave y 
el valor se separan mediante dos puntos (:).


object = {
    key1: value1,
    key2: value2,
    key3: value3
}

He aquí un ejemplo:

const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
}

Sí, ¡incluso puedes almacenar métodos dentro de objetos! Lo exploraremos con más detalle en un 
ejercicio posterior.


Instrucciones:


// Pizza 1

const pizzaTopping = "Cheese 🧀";
const pizzaType = "Pan";
const pizzaSlices = 8;
const pizzaPrice = 12.99;

// Pizza 2 

const pizza = {
    topping: "Pepperoni 🍕",
    type: "Hand-tossed",
    slices: 12,
    price: 14.99
}

console.log(pizza);

En el código anterior, encontrará que si bien podríamos definir cada pieza de datos en su propia 
variable, los objetos facilitan la organización de estos datos en una sola colección y su almacenamiento 
en una sola variable.

Si ejecuta este código, registrará lo siguiente:

{
    topping: 'Pepperoni 🍕', 
    type: 'Hand-tossed', 
    slices: 12, 
    price: 14.99
} 
*/