/* 37. Rebelión en la granja
# Métodos de objeto
Además de almacenar valores de datos sin procesar, los objetos también pueden almacenar funciones como valores. ¡Guau! 🤯

Una función dentro de un objeto se denomina método . Observa este phoneobjeto que presenta una ringtonepropiedad:

const phone = {
    model: "iPhone 11 Pro Max",
    brand: "Apple",
    version: 11.6,
    owner: "John Appleseed",
    ringtone: function () {
        console.log("Ring, ring! Ring, ring! 📲")
    }
}

phone.ringtone();
// Output: Ring, ring! Ring, ring! 📲

La ringtonepropiedad es un método y se indica mediante el uso de la functionpalabra clave, entre paréntesis.

La sintaxis es un poco rara ( function () {...}). Pero no importa; el nombre del método es el mismo que el de la propiedad.

Sin embargo, puedes almacenar métodos en objetos de otra manera:

const phone = {
    model: "Android",
    brand: "Samsung",
    version: 16.1,
    owner: "Jane Doe",
    ringtone () {
        console.log("Ring, ring! Ring, ring! 📲")
    }
}

phone.ringtone();
// Output: Ring, ring! Ring, ring! 📲

Aquí, combinamos el par clave:valor en una sola sentencia para el ringtone()método. Esta es, de hecho, la sintaxis que usan la mayoría de los programadores.

Nota: Pero recuerda, el par key: valuetodavía está allí. ringtonees la clave y el cuerpo del método () { ... }es el valor.

Instrucciones
¡Vamos a la granja! ¡Miren todos los animales! 🧑‍🌾

Para este ejercicio, cree tres objetos para tres animales de granja: pig, sheep, y dog.

Cada objeto debe tener las siguientes propiedades:

A .name, establecido en una cadena.
A .type, establecido en una cadena de "cerdo", "oveja" o "perro".
Un .age, establecido en un entero.
Un .makeSound()método que devuelve una cadena del sonido que produce (específico del animal).
El .makeSound()método debe devolver una cadena que incluya las otras propiedades y que se vea como la siguiente:

Benny is a 10 year old dog that goes woof! */
const cerdo = {
    name: "Tonton",
    type: "cerdo",
    age: 3,
    makesound(){
        console.log(`${cerdo.name} tiene ${cerdo.age} años es un ${cerdo.type} y hace oing oing!`) // backticks ``no son comillas simples'' en mi teclado esta en la "è" 
    }
}
cerdo.makesound()
const oveja = {
    name: "Oscar",
    type: "lanuda",
    age: 6,
    makesound(){
        console.log(`${oveja.name} tiene ${oveja.age} años es una oveja ${oveja.type} y hace beeeh beeeh!`)
    }
}
oveja.makesound()
const perro = {
    name: "Facha",
    type: "caniche",
    age: 13,
    makesound(){
        console.log(`${perro.name} tiene ${perro.age} años es un ${perro.type} y hace wau wau!`)
    }
}
perro.makesound()