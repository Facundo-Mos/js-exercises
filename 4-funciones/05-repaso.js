/* 33. Palíndromo
# ¡ Felicitaciones!
¡Felicitaciones por llegar al final de otro capítulo! 🎊

Las funciones son un concepto que confunde a mucha gente, así que definitivamente practica y practica. 💪

En este capítulo aprendimos lo siguiente:

¿Qué funciones hay en JavaScript y por qué son útiles?
Cómo definir funciones con la functionpalabra clave.
Cómo producir resultados de la función con la returnpalabra clave.
Cómo los parámetros y argumentos juegan un papel en las definiciones y ejecución de una función.
Cómo las variables definidas dentro de una función tienen un alcance limitado, y las variables globales 
no tienen alcance limitado.
Aquí está la estructura de la función en caso de que la hayas olvidado:

function nameOfFunction(parameter1, parameter2) {
  // The code inside
    return value;
}

Instrucciones
¿Has notado cómo algunas palabras se leen igual de adelante hacia atrás, como "noon" o "radar"? ¡Se llaman 
palíndromos !

Creemos una isPalindrome()función que haga lo siguiente:

Acepta una word cadena como parámetro.
La función devuelve true si word es un palíndromo. De lo contrario, devuelve false.
Nota: Si hay mayúsculas en [nombre del archivo] word, use word.toLowerCase()para convertirlo todo a 
minúsculas. Más información sobre este método aquí .

Después de definir esta función, ¡inténtalo varias veces con algunas palabras para ver los resultados! 
Aquí tienes algunas palabras para probar: */

function isPalindrome(texto){
  let palabra = texto.toLowerCase() //aca le quitamos cualquier mayuscula
  //split lo convierte en array .reverse lo da vuelta y .join lo une de nuevo 
  let palabraReverse = palabra.split("").reverse().join("");
/*     if(palabra === palabraReverse) {
    console.log(true);
  } else {                                      esto me servia para saber si era correcta la funcion
    console.log(false);
  }*/ return palabra === palabraReverse 
}
console.log(isPalindrome("Oso"))

