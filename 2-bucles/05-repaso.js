let myNumber = 15000000000000000;
let binary = "";

//con esto no pierdo el valor de myNumber, visto que a myNumber lo tengo que modificar
const numeroOriginal= myNumber 

// se usa un bucle while que se ejuta siempre que myNumber sea mayor a 0
while (myNumber > 0){
    //vemos si el resto es 0 o 1
    let resto = myNumber % 2;
    //aca le damos dos opciones con el if si es 0 o 1 agregarlo a binary
    if(resto === 0){
        binary = "0" + binary;
    } else {
        binary = "1" + binary;
    }
    //Con esto se actualiza la variable en bucle hasta reducirla a 0 
    myNumber = Math.floor(myNumber / 2)
}

console.log("Este es tu numero " + numeroOriginal)
console.log("Y este es su numero binario " + binary)