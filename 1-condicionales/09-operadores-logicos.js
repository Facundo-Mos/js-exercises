/* 
Operadores lógicos
Una cosa más que debemos aprender son los operadores lógicos.
A medida que sus declaraciones if/ else if/ elsese hacen más grandes y complejas, ¡también lo hacen los condicionales!
Ya aprendimos a evaluar condiciones con operadores de comparación como >y <. 
Pero podemos ir más allá y combinar condiciones con operadores lógicos.

Los operadores lógicos , también conocidos como operadores booleanos, combinan y evalúan dos condiciones. Son los operadores &&, ||, y !:

El operador lógico AND &&retorna truesi ambas condiciones son true, y retorna falseen caso contrario.
El operador lógico OR ||devuelve truesi al menos una de las condiciones es true, y falseen caso contrario.
El operador lógico NOT !retorna truesi la condición es false, y viceversa. */




/* 
En el verano de 2023, el humo de los incendios forestales en Canadá generó preocupación sobre el Índice de Calidad del Aire (ICA) en la zona.

Cree un programa air-quality-index.js .

Busque en Google el IQA de su área y defina una aqivariable con ese número.

Escriba una declaración if// con else ifla elsesiguiente lógica:

Si aqiestá entre 0 y 50, imprime "Bueno".
De lo contrario, si aqiestá entre 51 y 100, imprime "Moderado".
De lo contrario, si aqiestá entre 101 y 150, imprime "No saludable (grupos sensibles)".
De lo contrario, si aqiestá entre 151 y 200, imprime "No saludable".
De lo contrario, si aqiestá entre 201 y 300, imprime "Muy poco saludable".
De lo contrario, escriba "Peligroso". */

let iqa = 220;

if (iqa >= 0 && iqa <= 50) {
    console.log("Calidad del aire buena");
} else if(iqa >= 51 && iqa <= 100) {
    console.log("Calidad del aire Moderada");
} else if(iqa >= 101 && iqa <= 150) {
    console.log("Calidad del aire no saludable (grupos sensibles)");
} else if(iqa >= 151 && iqa <= 200) {
    console.log("Calidad del aire no saludable");
} else if(iqa >= 201 && iqa <= 300) {
    console.log("Calidad del aire muy poco saludable");
}