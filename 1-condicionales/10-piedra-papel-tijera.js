
/* 
Piedra, papel o tijera es un juego clásico que cautiva a gente de todo el mundo. 
Las reglas son las siguientes:

La piedra vence a las tijeras.
Las tijeras vencieron al papel.
El papel vence a la piedra.
¡Usemos condicionales, el generador de números aleatorios y creemos un programa 
que simule el juego entre el jugador y la computadora!

Comience con una player variable y asígnele un 0 para representar "Piedra", 
un 1 para representar "Papel" o un 2 para representar "Tijeras".

Luego use Math.random()para generar un número entre 0 y 2 para otra computervariable.

Luego, usa condicionales para comparar los valores de playery computerpara ver quién gana. */

let player = 0;
let computer = Math.floor(Math.random() * 3);
console.log("El jugador ha elegido " + player);
console.log("El computer ha elegido " + computer);

if(player === computer) {
    console.log("Empate");
} else if ((player === 0 && computer === 1)||
    (player === 1 && computer === 2)||
    (player === 2 && computer === 0)
) {
    console.log("Ganador Computer");
} else {
    console.log("Ganador Player")
}

