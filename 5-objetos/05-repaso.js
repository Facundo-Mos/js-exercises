/* ¡ Felicitaciones!
¡Felicitaciones por llegar al último ejercicio! 🎊

En este capítulo, se le presentaron los objetos y aprendió lo siguiente:

¿Qué son los objetos y por qué son útiles?
Cómo acceder a las propiedades de los objetos a través de la notación de puntos.
Cómo cambiar propiedades existentes y crear nuevas.
Cómo escribir y utilizar funciones, o métodos de objetos, como propiedades.
Instrucciones
¿Hay algún lugar al que siempre hayas querido volar? 🌎

Usemos lo que aprendimos para construir dos objetos para tarjetas de embarque para un viaje de ida y vuelta:

🛫departTripTicket
🛬returnTripTicket
Ambos objetos deben tener las siguientes propiedades:

.name para el pasajero.
.from para el lugar desde donde vuela el pasajero.
.to para el lugar al que vuela el pasajero.
.businessClass Valor booleano que indica si está en clase empresarial ( true/ false).
.upgrade() El método cambia la .businessClass propiedad a true o imprime un mensaje si false(por ejemplo, "Your ticket is already business class!").
Después de crear estos objetos, utilice el .upgrade()método en al menos uno de ellos y luego registre ambos objetos en la consola.

Bono: ¿ Quieres un reto extra? Agrega una propiedad ` .leaveTimey` .arriveTimea ambos objetos (enteros del 1 al 24). 
Luego, define una .flightTime()propiedad de método que calcule e imprima el tiempo de viaje con las propiedades .leaveTime`y` ..arriveTime */



const departTripTicket = {
    name: "Facundo",
    from: "Italia",
    to: "España",
    businessClass: false,
    upgrade() {
        // al usar THIS le estoy diciendo que de ESTE obje quiero modificar ESTA propiedad
        if(this.businessClass === true) {
            console.log("Your ticket is already business class!");
        } else{
            this.businessClass = true;
        }
    }
};
departTripTicket.upgrade();
console.log(departTripTicket);


const returnTripTicket = {
    name: "Facundo",
    from: "España",
    to: "Italia",
    businessClass: true,
    upgrade() {
        // al usar THIS le estoy diciendo que de ESTE obje quiero modificar ESTA propiedad
        if(this.businessClass === true) {
            console.log("Your ticket is already business class!");
        } else{
            this.businessClass = true;
        }
    }
};
console.log(returnTripTicket);
returnTripTicket.upgrade();