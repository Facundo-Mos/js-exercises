
/* ¡ Felicitaciones!
¡Arreglo de cadera! ¡Llegaste al último ejercicio! 🎊

En este capítulo, aprendimos mucho sobre matrices, entre ellos:

Creación, acceso y actualización de una matriz con corchetes.
Recorriendo matrices con la .lengthpropiedad.
Agregar y eliminar elementos de una matriz con varios métodos:
.push()
.unshift()
.shift()
.pop()
Confirmar si un elemento o valor determinado existe en una matriz con los métodos .includes()y .indexOf().
Instrucciones
¡Usemos lo que aprendimos sobre matrices para construir una secuencia de ADN ! 🧬

El ADN está formado por las siguientes cuatro piezas:

Adenina (A)
Citosina (C)
Guanina (G)
Timina (T)
¡En conjunto, estas cuatro piezas representan la composición genética única de la mayoría de las formas 
de vida!

Crea una matriz de 24 elementos myDNA eligiendo al azar una de estas cuatro piezas. Comienza con la 
siguiente matriz:

const dnaPieces = ["A", "C", "G", "T"];

Dentro de un bucle, para construir la myDNAmatriz haga lo siguiente:

Obtenga tres números de índice aleatorios de dnaPiecescon Math.floor()y Math.random().
Construya una cadena de tres letras accediendo a los dnaPieceselementos de la matriz con los tres 
números de índice aleatorios.
Añade esta cadena a la myDNAmatriz.
Por último, registre la myDNAmatriz en la consola.

La salida podría verse así:

[
    "TAG", "GAG", "ATA", "AAC",
    "AAT", "CTT", "AGG", "TAG",
    "ATC", "ACT", "GAG", "TTA",
    "CTG", "ACG", "GAC", "TCC",
    "GTA", "ACT", "GCA", "GTA",
    "GCG", "GCT", "TCT", "TAA"
] */


const dnaPieces = ["A", "C", "G", "T"];
const myDNA = []; // Aca creamos el contenedor del ADN

for(let i = 0; i < 24; i++) {
    // Generamos las 3 letras
    let a = dnaPieces[Math.floor(Math.random() * 4)];
    let b = dnaPieces[Math.floor(Math.random() * 4)];
    let c = dnaPieces[Math.floor(Math.random() * 4)];
    
    // Las unimos y las metemos directo al estante
    myDNA.push(a + b + c);
}

console.log(myDNA);