/* 
Iteradores en bucles
Probablemente ya te hayas dado cuenta de que estamos actualizando una variable dentro de nuestros bucles. Estas variables también se conocen como iteradores .

let i = initialValue;

while (condition) {
  // Update the i iterator variable
}

"Iterar" significa ejecutar el código en un bucle una vez. Cuando la ivariable del iterador alcanza un valor que establece el valor del bucle conditionen false, podemos salir del bucle correctamente.

Hasta ahora, hemos trabajado con whilebucles. Y si bien son útiles, tenemos otro que explorar.

# bucles for
El forbucle funciona de forma un poco diferente, ya que podemos determinar cuántas veces queremos que se ejecute:

for (let i = initialValue; condition; updateIterator) {
  // Code here
}

Vamos a desglosarlo:

Primero, definimos una ivariable iteradora con un initialValue.
Antes de la primera o la siguiente iteración, probamos la ivariable en la conditionsentencia. Si 
obtenemos true, ejecutamos el código. De lo contrario, salimos del bucle.
Después de cada iteración, updateIteratorcambiamos el valor de i.
A medida que el valor de icambia, eventualmente debería provocar que la conditiondeclaración 
regrese falsepara que podamos salir del forbucle.

Así es como se ve nuestro programa de punto de ebullición como un forbucle:*/
/* 
for (let i = 1; i <= 10; i++) {
    console.log(i);
} */
/*
Para resumir, utilizamos las siguientes partes en el forbucle:

let i = 1:inicializa una variable iteradora.
i <= 10:la declaración condicional que se prueba antes de cada iteración.
i++: esto incrementa la variable del iterador en 1 después de cada iteración.
Nota: El ++operador incrementa un valor numérico en 1. Es lo mismo que escribir i = i + 1.

El resultado se vería así:

1
2
3
4
5
6
7
8
9
10

Como queremos icambiar cada vez en el bucle, usamos la letpalabra clave. Usamos una evaluación lógica para determinar si el valor actual de ies menor o igual a 10. Después de cada iteración, sumamos 1 al valor de i(es decir, i++).

Por cierto, no siempre es necesario imprimir la variable del iterador en el bucle. Por ejemplo: */

/* for (let i = 1; i <= 3; i++) {
    console.log("Beetlejuice!")
}
 */
// Output:
// Beetlejuice!
// Beetlejuice!
// Beetlejuice!




/* 
Instrucciones
Imagina que te castigan y el profesor te pide que escribas una frase 100 veces.

¡Creemos un programa que use forbucles para solucionar esto rápidamente!

Utilice el forbucle para registrar el siguiente mensaje en la consola 100 veces:

I Must Not Tell Lies

(Aquí es donde empezamos a ver el verdadero poder de la informática. Lo que a los humanos les 
toma horas, a una computadora le puede tomar microsegundos. 🤯) */


let frase = "I Must Not Tell Lies";

for (let i = 1; i <= 100; i++){
    console.log("frase");
}