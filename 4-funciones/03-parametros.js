/* 
Parámetros
A estas alturas, quizá te preguntes por qué las funciones usan estos paréntesis. ¿Tienen algún propósito? 
¡De hecho, lo tienen!

Al definir una función, puede agregar uno o más parámetros dentro de los paréntesis para indicar qué 
entrada(s) necesita la función cuando se la llama.

function example(parameter) {
  // Function code here
}

Dentro del cuerpo de la función, podemos usar este parámetro para devolver algo más, como usarlo en 
una evaluación.

Aquí hay otro ejemplo de parámetros, utilizando una greetings()función actualizada:

function greetings(name) {
    console.log("Hi! My name is " + name + ".");
}

greetings("Marshall");

¡Pruébelo usted mismo ejecutando el código en nuestro editor!

Puede agregar más de un parámetro a una función, separados por comas, ¡y pueden ser de cualquier tipo de 
datos!

Pruebe lo siguiente:

function greetings(name, age) {
    console.log("Hi! My name is " + name + ".");
    console.log("I am " + age + " years old.");
}

greetings("Marshall", 30);

# Argumentos
Después de definir una función con parámetros, podemos llamarla más adelante en nuestro programa. Sin 
embargo, debemos incluir un valor entre paréntesis.

Cuando llamamos a una función, llamamos a estos valores argumentos que se pasan a la función para devolver 
algo.

greetings("Cody");

Esto registra lo siguiente en la consola:

Hi! My name is Cody.

Nota: Si no pasamos un argumento, undefinedse utiliza un valor en su lugar. (por ejemplo, Hi! My name is 
    undefined.)

Así que, para resumir:

Los parámetros se utilizan al definir una función.
Los argumentos se utilizan cuando se llama a una función.





Instrucciones
En 1905, Albert Einstein revolucionó el mundo de la física con su teoría de la relatividad . Transformó 
nuestra comprensión de la relación entre el espacio, el tiempo y la energía.

La ecuación más notable que surgió de esta teoría fue la siguiente:

            E=m c**2

El E significa energía, que es el producto de lo siguiente:

m para la masa, generalmente medida en kilogramos (kg).

c**2 es la velocidad de la luz multiplicada por sí misma.
Escribe una función llamada relativityTheory().

Debe aceptar un único mass parámetro que sea un número entero o decimal.

Calcula la energía y devuélvela. ¡No olvides buscar en Google la velocidad de la luz!

Luego llama a la relativityTheory()función con un massargumento. */



function relativityTheory(mass) {
    let e = mass * 300000 ** 2;
    return e
}
console.log(relativityTheory(200))
