/* 
else
Se puede agregar opcionalmente una elsecláusula al final de una ifdeclaración.

if (condition) {
  // Do something
} else {
  // Do something else 
}

Si la condición es true, ejecute el código dentro de if.
De lo contrario la condición es false, ejecute el código dentro de else.
Aquí hay una declaración if/ elseen acción:

if (grade > 60) {
    console.log("You passed.");
} else {
    console.log("You failed.");
}

Si grade > 60es verdadero, entonces el programa imprime “Pasaste”.
De lo contrario, el programa imprime "Falló".
# Operadores de comparación
Normalmente, comparamos dos valores en una condición. Para ello, utilizamos operadores de comparación :

===estricta igualdad
!==estricto no igual
>más que
>=mayor o igual que
<menos que
<=menor o igual que
Ya los hemos usado <y >estos son solo otros tipos de comparaciones que podemos hacer.

Volvamos al programa Buenos Días anterior y agreguemos un else!





                            Exercise



Instrucciones
Regresa a tu ifafirmación del ejercicio anterior y conviértela en una if/ elsepara lo siguiente:

Si hour< 12, entonces imprime “Buenos días 🌞” y algunas de tus rutinas matutinas.
De lo contrario, imprime “Buenas tardes ☁️” y algunos de tus rituales de la tarde.
Después de ejecutar el código, cambie hourel valor de y ejecútelo de nuevo. Repita este proceso 
varias veces para asegurarse de que el programa funcione correctamente. */

let hora = 12;

if (hora < 12) {
    console.log("Buenos días 🌞")
} else {
    console.log("Buenas tardes ☁️")
}