/* 
Alcance
Ahora que nos estamos familiarizando más con las funciones, es hora de explorar el alcance.

En programación, cada función y variable tiene un "alcance". Esto significa que, al definir una 
variable dentro de una función, esta solo puede usarse dentro de ella, no fuera de ella.

Utilicemos una add()función como ejemplo:

function add(x, y) {
  let answer = x + y;
  return answer;
}

console.log(answer);

Este código generará un error ReferenceErrorque indica que la answervariable no está definida. Esto 
se debe a que intentamos acceder a una variable creada en una función.

Nota: Cualquier área fuera de las llaves de funciones o bucles se conoce como ámbito global .

Si definiéramos un answerexterior de la add()función:

function add(x, y) {
  let answer = x + y;
  return answer;
}

let answer = "This";
console.log(answer); // Output: This

Ahora tenemos dos answervariables en dos ámbitos diferentes:

Uno definido dentro de la add()función como un número.
Uno definido fuera de la add()función como una cadena (en el ámbito global).
Tenga siempre presente dónde está definiendo nuevas variables y dónde las está utilizando.

Arreglemos este código rápidamente eliminando esa answervariable global y llamando add()dentro de la 
console.log()declaración:

console.log(add(2, 2)); // Output: 4








Instrucciones
Estás ayudando a tu amigo creador de contenido a generar influencia en sus diversos canales de redes 
sociales al analizar sus vistas de la semana pasada.

Aquí están los números de audiencia, almacenados como matrices:

const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

Necesitan las siguientes estadísticas de cada matriz:

La media o número promedio de visitas.
La mediana o valor medio de la matriz ordenada .
Para calcular la media y la mediana, cree dos funciones llamadas mean()y median(). Cada función acepta un viewsArrayparámetro.

Define una totalViewsvariable local dentro del ámbito de la mean()función. Úsala para calcular el promedio de visualizaciones.

Para la mediana, deberá ordenar el viewsArrayparámetro previamente. Dentro del alcance de la median()matriz, defina dos variables llamadas sortedStatsy middleIndex.

Por último, llama a estas funciones en los tres arrays y registra los resultados en la consola. La salida debería verse así:

TikTok
Mean: 4625.142857142857
Median: 5222

Instagram
Mean: 3970
Median: 3921

YouTube
Mean: 3698.285714285714
Median: 2789 */



const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];


let mediaTikTok = 0;
let mediaIg = 0;
let mediaYt = 0;

function mean(dato) {
    let total = dato.reduce((a, b) => a + b, 0);
    let media = total / dato.length;
    return media;
}
console.log(mean(recentTikTokViews));
console.log(mean(recentInstagramViews));
console.log(mean(recentYouTubeViews));