/* Instrucciones
Muchos restaurantes aspiran a obtener una estrella Michelin por su comida. 
Si bien obtener el máximo de 3 estrellas es extraordinario, incluso una estrella puede cambiar el 
destino de un restaurante.

Sólo hay 153 restaurantes con 3 estrellas en el mundo. 😮

Creemos un sistema para otorgar estrellas Michelin.

Defina una ratingvariable como un número entre 1 y 3 y registre uno de los siguientes 
en función del número: */

/* "🌟 is worth walking to."
"🌟🌟 is worth driving to."
"🌟🌟🌟 is worth flying to."
En todos los demás casos, regístrese "Invalid." */

let rating = 0;
if (rating > 2) {
    console.log("🌟🌟🌟 is worth flying to.");
} else if (rating > 1) {
    console.log("🌟🌟 is worth driving to.");
} else if (rating > 0) {
    console.log("🌟 is worth walking to.");
} else {
    console.log("Invalid.")
}





/* 
Instrucciones
En muchos lugares, la gente celebra el viernes como el comienzo del fin de semana. Algunos 
lo expresan con "TGIF" (abreviatura de "Thank God It's Friday" o "Gracias a Dios es viernes").

¡Usemos condicionales para ver si el fin de semana está cerca!

Primero, defina una day variable con un número entre 1 y 7. Entonces, 1 representa el lunes, 
2 representa el martes, y así sucesivamente.

Según el valor de una dayvariable, utilice condicionales para registrar uno de los siguientes:

Si es un día laborable, registre"Not Friday, yet!"
Si es viernes, registre "TGIF 🕺".
Si es fin de semana, registre "Yay, weekends! 🙌".
De lo contrario, inicie sesión"Wait, what day is it?" */



let day = 0;

if (day === 6 || day === 7) {
    console.log("Yay, weekends! 🙌");
} else if (day === 5) {
    console.log("TGIF 🕺")
} else if (day >= 1 && day <= 4) {
    console.log("Not Friday, yet!");
} else {
    console.log("Wait, what day is it?");
}


/* 
Instrucciones
Hacer ejercicio y tener una rutina de ejercicios es fundamental para nuestra salud y 
calidad de vida. Hoy en día, hay tantos tipos de ejercicios que puede resultar un poco intimidante empezar.

¿Por qué no usamos condicionales y números aleatorios para ayudarnos a elegir un ejercicio y 
hacerlo divertido?

Crea una randomNumber variable que genere un número aleatorio entre 0 y 3.

Utilice una declaración condicional para registrar uno de los siguientes:

0:"10 Push-ups"
1:"10 Sit-ups"
2:"10 Squats"
3:"10 Jumping Jacks"
¡Cuando hayas terminado, no olvides realizar el desafío de fitness! 🔥 */



let randomNumber = Math.floor(Math.random() * 4);

if (randomNumber === 3) {
    console.log("10 Jumping Jacks");
} else if (randomNumber === 2) {
    console.log("10 Squats");
} else if (randomNumber === 1) {
    console.log("10 Sit-ups");
} else if(randomNumber === 0) {
    console.log("10 Push-ups");
}
