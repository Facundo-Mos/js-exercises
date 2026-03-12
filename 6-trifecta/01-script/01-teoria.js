/* ¡Luz verde, adelante!
# El<script>Elemento
¡Bienvenidos al capítulo final! Aquí lo resumiremos todo.

HTML + CSS + JavaScript = ¡Boom shakalaka!

Aprendimos HTML, CSS y ahora JavaScript. En el mundo del desarrollo web, los tres trabajan en conjunto para crear un sitio web increíble. Pero ¿cómo se conectan exactamente?

En HTML, utilizamos el <script>elemento para incluir código JavaScript para nuestro sitio web.

A continuación se muestra un ejemplo de un archivo HTML con un <script>elemento:

<!DOCTYPE html>
<html>
    <head>
        <script>
        console.log("Hello World!");
        </script>
    </head>
</html>

El <script>elemento se puede colocar dentro del <head>elemento o hacia la parte inferior del <body>elemento:

<!DOCTYPE html>
<html>
    <head></head>
    <body>
        <script>
        console.log("Howdy!");
        </script>
    </body>
</html>

Si su código JavaScript es largo, otra forma común de vincularlo a su archivo HTML es vincular archivos .jssrc externos a través de un atributo.

<!DOCTYPE html>
<html>
    <head>
        <script src="greetings.js"></script>
    </head>
</html>

Nota: También puedes hacer esto en el <body>elemento, pero la vinculación a archivos .js normalmente se realiza en el <head>elemento.

Instrucciones
En los siguientes ejercicios, exploraremos a fondo cómo usar JavaScript para trabajar con elementos HTML y estilos CSS. Por ahora, ¡aquí tienes una pequeña demostración del poder de la colaboración entre los tres!

Nota: Para este capítulo, utilice un editor externo (por ejemplo, VS Code) para completar los ejercicios.

Primero, crea los siguientes archivos en la misma carpeta:

índice.html
estilos.css
script.js
Copie y pegue lo siguiente en un archivo index.html :

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Green Light Go!</title>
    <link href="styles.css" rel="stylesheet" />
    <script src="script.js"></script>
</head>
<body onClick="changeLight()">
    <h1>Click Anywhere!</h1>
    <div id="traffic-light-div">
        <div id="red" class="light"></div>
        <div id="yellow" class="light"></div>
        <div id="green" class="light"></div>
    </div>
</body>
</html>

A continuación, agregue lo siguiente a un archivo styles.css :

#traffic-light-div {
    border: 7px solid;
    width: 150px;
    height: 400px;
    background-color: grey;
}

.light {
    border: 3px solid;
    width: 100px;
    height: 100px;
    margin: 20px auto;
    border-radius: 50%;
}

Por último, agregue el siguiente código JavaScript a un archivo script.js :

let lightIndex = 0;

function changeLight() {
    const redLight = document.getElementById("red");
    const yellowLight = document.getElementById("yellow");
    const greenLight = document.getElementById("green");

    if (lightIndex === 0) {
        redLight.style.backgroundColor = "#ff0000";
        yellowLight.style.backgroundColor = "";
        greenLight.style.backgroundColor = "";
    } else if (lightIndex === 1) {
        yellowLight.style.backgroundColor = "#ffff00";
        redLight.style.backgroundColor = "";
        greenLight.style.backgroundColor = "";
    } else {
        greenLight.style.backgroundColor = "#00ff00";
        redLight.style.backgroundColor = "";
        yellowLight.style.backgroundColor = "";
    }

    lightIndex = (lightIndex + 1) % 3;
}

Pruebe su código ejecutando el archivo index.html desde su editor. */