/* 
Nivel de pH
# de lo contrario si
Ahora te estarás preguntando, if/ elsesólo nos da dos opciones, pero ¿cómo podemos tener más de dos?

Puedes agregar una else ifsección entre ify elseen tu flujo de control. Esto le da a tu programa más condiciones para evaluar, además de solo dos.

if (conditionA) {
  // Do this
} else if (conditionB) {
  // Do this, instead
} else {
  // Do this if none of the above are true
}

¡No tienes que agregar sólo uno else if; puedes incluir tantos como quieras!

Por ejemplo, podríamos aplicar esto a un sistema de calificación escolar:

let grade = 93;

if (grade > 90) {
    console.log("A");
} else if (grade > 80) {
    console.log("B");
} else if (grade > 70) {
    console.log("C");
} else if (grade > 60) {
    console.log("D");
} else {
    console.log("F");
}

Al igual que la ifdeclaración, el código en una else ifdeclaración se ejecuta si su condición es 
verdadera y se omite el código en el resto de ifla else ifdeclaración .else

Aquí, como gradees 93, la salida sería "A".



                        //Exercise



Instrucciones
En química, el pH es una escala utilizada para especificar la acidez o basicidad de un fluido.

Cree un programa ph-levels.js que verifique si un nivel de pH es básico, ácido o neutro.

Primero, crea una variable llamada phy asígnale un valor entre 0 y 14.

Escriba una declaración if/ else if/ que:else

Si ph es mayor que 7, salida “Básico”.
De lo contrario, si phes menor que 7, salida “Ácido”.
De lo contrario, salida “Neutral”. */


let ph = 6;

if (ph < 7) {
    console.log("Ácido");
} else if (ph > 7) {
    console.log("Básico");
} else {
    console.log("Neutral");
}