/* continuar
JavaScript proporciona algunas palabras clave que nos permiten navegar por los bucles de formas 
interesantes.

Primero, tenemos la continue palabra clave. Si una condición dada es true, la continue palabra clave 
finaliza la iteración actual en un bucle for`or` dado while y pasamos a la siguiente.

for (let i = 0; i < 5; i++) {
    if (i == 1) {
    continue;
    }
    console.log(i);
}

El código anterior generará los números del 0 al 4, excepto el 1 porque continueomite esta iteración.

0
2
3
4

# romper
La otra palabra clave que nos permite finalizar nuestros bucles antes de tiempo es la breakpalabra clave.

Si una condición dada en un bucle es true, esta palabra clave finaliza el bucle por completo y el programa se reanuda en la línea inmediatamente después de la llave de cierre del bucle.

for (let i = 0; i < 5; i++) {
    if (i == 3) {
    break;
    }
    console.log(i);
}

Si y cuando i es igual a 3, la breakpalabra clave finaliza el bucle y nuestra salida se ve así:

0
1
2

Instrucciones
¡Probemos las palabras clave continue y break usando números pares e impares!

Escriba un archivo even-odds.js que comience con un for bucle que itere de 1 a 50.

Si la variable del iterador i es impar, use la continue palabra clave para omitir esta iteración. De 
lo contrario, registre el número en la consola.

Si la iterator variable es igual a 42, registra 42 en la consola y usa la brea kpalabra clave para 
salir del bucle.

La salida debería verse así:

2
4
6
8
10
12
14
16
18
20
22
24
26
28
30
32
34
36
38
40
42 */


for(let i = 1; i < 50; i++) {
    if (i === 43){
        break;
    } else if(i % 2 !== 0) {
        continue
    } 
    console.log(i)
}