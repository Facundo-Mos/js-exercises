/* 
Instrucciones
Desde el Apolo 11, los lanzamientos de cohetes son momentos de gran emoción, especialmente la 
cuenta regresiva

Escriba un pequeño programa que use un forbucle para simular una cuenta regresiva de 10 a 0, 
registrando cada número en la consola. Luego, regístrelo "To infinity and beyond! 🚀"al final.
Asegúrate de que el forbucle termine en 0 (no en 1).

La salida debería verse así:

10
9
8
7
6
5
4
3
2
1
To infinity and beyond! 🚀


*/

for (let i = 10; i >= 0; i--) {
    // Regla 1: El bucle llega hasta el 0
    if(i === 0) {
        continue // Regla 2: Si es 0, salta el console.log y no lo imprimas
    }
    console.log(i);
    
} 
// Al final, el mensaje del espacio
console.log("To infinity and beyond! 🚀");







/* 
Instrucciones
Estamos realizando un sorteo de regalos en la comunidad Codédex y necesitamos devolver 10 del 
mismo número eligiendo números aleatorios entre 0 y 99. 🏆

Define una countvariable en 0 y targetNumber que se establece aleatoriamente entre 0 y 99.

Ejecute un whilebucle hasta que countsea igual a 10. Dentro del bucle, establezca una drawNumber variable 
en un número aleatorio entre 0 y 99.

Si drawNumber es igual a targetNumber, incrementa counten 1 y registra "Match".
De lo contrario, no incremente el countregistro y "No Match".
Fuera del bucle, registre un mensaje indicando que targetNumber se dibujó 10 veces: */



let targetNumber = Math.floor(Math.random() * 100); // aca elegimos el numero que tendremos en el sorteo de forma aleatoria
let count = 0; //estas son las veces que ganamos


while(count < 10){ //hasta que count no sea 10 se repetira el siguiente ejercicio
    let drawNumber = Math.floor(Math.random() * 100); // le pedimo que elija un numero del 0 al 99 hasta que count llegue a 10
    if(targetNumber !== drawNumber) {
        console.log("No Match") //si no es igual imprime este mensaje
    } else if (targetNumber === drawNumber) {
        count = count + 1;
        console.log("Match");//si es igual imprime este mensaje y suma uno al count
    }
}
console.log(`The number ${targetNumber} was drawn 10 times!`);









/* Instrucciones
Cuando multiplicas un número por sí mismo tres veces, lo estás elevando 
al cubo (ejemplo: 3³ = 3 x 3 x 3 = 27).

Escriba un programa que encuentre el total de todos los números impares elevados al cubo 
entre 1 y limit.

Por ejemplo, si limites 7, el total debería ser 343:

1**3+3**3+5 **3+7**3
=1+27+125+343
=496
Define una limitvariable con un valor numérico como 7. Luego, define una totalcon un valor inicial de 0

Utilice un forbucle para iterar desde 1 hasta limity haga lo siguiente cada vez:

Eleva al cubo únicamente los números impares (1, 3, 5, etc.).
Añade cada número elevado al cubo a tu total.
Nota: Si el limitnúmero en sí es impar, elévelo al cubo también.

Por último, inicie sesión total en la consola */


let limit = 14;
let total = 0;

for(let i = 1; i <= limit; i++){
    if(i % 2 === 1){
        total = total + i ** 3
    } 
}
console.log(total);





/* 
Instrucciones
Si lanzas dos dados, la probabilidad de que ambos tengan el mismo valor es ligeramente 
inferior al 17 %. 🎲 🎲

¡Simulemos esto con bucles!

Comience con dos variables, die1y die2, cada una con un valor aleatorio entre 1 y 6.

Rastreamos las tiradas de dados inicializando a numberOfRolls en 0.

Ahora, usemos un whilebucle que se ejecuta mientras nuestro die1no sea igual a die2. Cuando no 
sean iguales, incrementemos numberOfRollsy restablezcamos die1y die2a un nuevo número aleatorio entre 1 y 6.

Cuando se obtienen valores dobles, el bucle debe detenerse y la salida debe verse así:

Roll 1: 2
Roll 2: 5
Roll 1: 1
Roll 2: 1
Number of rolls: 1
Nota : asegúrese de utilizarlo console.log()para que coincida con el resultado que se muestra arriba.
 */




let die1 = Math.floor(Math.random() * 6 + 1);
let die2 = Math.floor(Math.random() * 6 + 1);
let numberOfRolls = 1;

// Mientras los dados sean diferentes, ejecutamos el bucle
while (die1 !== die2) {
    // 1. Imprimimos los valores actuales que son diferentes
    console.log(`Roll 1: ${die1}`);
    console.log(`Roll 2: ${die2}`);

    // 2. Incrementamos el contador porque vamos a lanzar de nuevo
    numberOfRolls++;

    // 3. Lanzamos los dados otra vez
    die1 = Math.floor(Math.random() * 6 + 1);
    die2 = Math.floor(Math.random() * 6 + 1);
}

// El bucle se detiene cuando die1 === die2. 
// Imprimimos el último lanzamiento (el que fue doble)
console.log(`Roll 1: ${die1}`);
console.log(`Roll 2: ${die2}`);

// Finalmente mostramos el total de intentos
console.log(`Number of rolls: ${numberOfRolls}`);




/* 
Instrucciones
¡Hay fuerza en los números, pero también hay belleza en ellos!

La secuencia de Fibonacci es una lista especial de números donde cada uno es la suma de los dos
números anteriores (después del 0 y el 1):

0 ,1 ,1 ,2 ,3 ,5 ,8 ,13 ,21 34
Se encuentran ejemplos de la secuencia en la naturaleza, incluyendo las ramas de los árboles y las 
escamas de las piñas. 🌲

Utilice un for bucle para registrar los primeros 10 números de Fibonacci.

Los dos primeros números, 0 y 1, se pueden guardar en firstFib variables secondFib y registrarse 
directamente en la consola. Use un bucle para generar una nextFib variable para el siguiente número de 
Fibonacci.

Nota: Dentro del bucle, asegúrese de reasignar correctamente firstFib y secondFib después de generar 
el siguiente número. */





let firstFib = 0;
let secondFib = 1;

for(let i = 2; i < 11; i++){
    let nextFib  = firstFib + secondFib;
    console.log(nextFib)
    firstFib = secondFib;
    secondFib = nextFib;
}