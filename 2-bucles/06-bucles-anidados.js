/* Bucles anidados
Bucles revisados
Los bucles permiten ejecutar repetidamente un bloque de código, lo que aumenta la eficiencia y potencia de los programas. ¡Realizar tareas repetitivas es la especialidad de las computadoras!

Antes de profundizar en los bucles anidados, recapitulemos rápidamente los bucles de JavaScript en general:

// while loop
let countdown = 3;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Liftoff! 🚀");

// for loop
for (let i = 0; i < 9; i++) {
  console.log(i);
}

whileLos bucles nos permiten ejecutar un bloque de código mientras una determinada condición sea verdadera.
forLos bucles nos permiten ejecutar un bloque de código una cantidad específica de veces.
En los ejemplos anteriores, el whilebucle se ejecuta mientras el valor de countdownsea mayor que cero, mientras que el forbucle se ejecutará nueve veces y registrará los valores de i0 a 8.

Pero ¿qué pasa si necesitamos realizar una tarea repetitiva dentro de otra tarea repetitiva? Necesitaremos un bucle anidado.

# Bucles anidados
Un bucle anidado se produce cuando hay una sentencia condicional dentro de otra sentencia condicional. Un bucle dentro de otro bucle.

Pensemos en el sistema solar; en él, la Tierra gira simultáneamente alrededor del Sol y la Luna alrededor de la Tierra. Estos eventos ocurren simultáneamente y, si uno se detuviera, todo el sistema solar también lo haría.

¡Esto es como los bucles anidados!


Los bucles anidados nos ayudan a identificar cuándo se cumplen condiciones específicas. Recuerda que el bucle interno no se ejecutará si el externo no lo hace.

Los bucles anidados utilizan las palabras clave " ify for" para indicar al ordenador los pasos a seguir en un programa según ciertas condiciones. El bucle interno ejecuta su ciclo completo en cada iteración del bucle externo. Ilustremos esto con un ejemplo.

# Ejemplo del mundo real: Tabla de multiplicar
Un caso de uso común para bucles anidados es generar una tabla de multiplicar. Creemos una tabla de multiplicar simple de 3x3:




for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}



Aquí tenemos dos forbucles anidados. Veamos el proceso paso a paso:

Bucle exterior i:
let i = 1;:Inicializamos una variable icon el valor 1.
i <= 3;:El bucle continuará mientras isea menor o igual a 3.
i++:Después de cada iteración, incremente ien 1.
Entonces, el bucle externo se ejecutará para los valores i de 1, 2 y 3.

Bucle interior j:
let j = 1;:Inicializamos una variable jcon el valor 1.
j <= 3;:El bucle continuará mientras jsea menor o igual a 3.
j++:Después de cada iteración, incremente jen 1.
El bucle interno se ejecuta completamente en cada iteración del bucle externo. Por lo tanto, para cada valor de i(1, 2, 3), el bucle interno se ejecutará para jlos valores 1, 2 y 3.

Registrando la tabla
Dentro del bucle interno, registramos la multiplicación de iy jpor console.log(``${i} * ${j} = ${i * j}``);. Esto nos da cada operación de multiplicación dentro del rango especificado.

Este código generará el siguiente resultado: */