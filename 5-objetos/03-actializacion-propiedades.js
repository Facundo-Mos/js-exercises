/* Pokémon
# Actualización de propiedades
Para los objetos, podemos cambiar una propiedad existente y asignarle un nuevo valor:

const user = {
    username: "@emmachamberlain",
    location: "Los Angeles, CA",
    followers: 15725078,
    following: 3, 
    verified: false
};

user.verified = true;
user.location = "🌐";

console.log(user);

Aquí, el usuario fue verificado y actualizó su ubicación.

La salida ahora se vería así:

{
    username: '@emmachamberlain',
    location: '🌐',
    followers: 15725078,
    following: 3,
    verified: true
}

# Agregar nuevas propiedades
Otra cosa que podemos hacer con la notación de puntos es asignar una propiedad nueva a un objeto existente.

Tomemos este fruitobjeto como ejemplo:

const fruit = {
    name: "apple",
    quantity: 10,
}

console.log(fruit);

// Output: {name: 'apple', quantity: 10}

Podemos crear y asignarle una nueva propiedad:

fruit.organic = true;

console.log(fruit);

// Output: {name: 'apple', quantity: 10, organic: true}

Instrucciones
Practiquemos agregar y actualizar propiedades con el siguiente pokemonobjeto:

pokemon = {
    name: "Pikachu",
    type: "Electric ⚡️",
    level: 25,
}

Primero, defina una nueva .isCaught propiedad con un valor de false.

A continuación, registre el pokemon objeto para asegurarse de que se haya agregado la nueva propiedad.

¡Genial! ¡Atrapaste al Pokémon! Vamos a cambiar las siguientes propiedades:

Cambiar .isCaughta true.
Ponle un apodo a tu Pokémon recién capturado cambiando el valor de name.
Por último, registre el pokemon objeto actualizado en la consola. */

const pokemon = {
    name: "Pikachu",
    type: "Electric ⚡️",
    level: 25,
}
pokemon.isCaught = false;

console.log(pokemon);

pokemon.isCaught = true;
pokemon.name = "Pika Pika";
console.log(pokemon);