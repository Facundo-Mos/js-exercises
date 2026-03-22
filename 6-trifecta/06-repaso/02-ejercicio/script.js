const memeArray = [
    "https://i.imgur.com/bSi4xLb.png",
    "https://i.imgur.com/6y0G7N0.png",
    "https://i.imgur.com/LXnRao1.png",
    "https://i.imgur.com/Qqoxh1N.png"
];

const captionsArray = [
    "No soy flojo… estoy en modo ahorro de energía 🔋",
    "Mi cerebro: estudia. Yo: abre otra pestaña",
    "Cuando por fin entiendes algo y era facilísimo 🤡",
    "Yo organizando mi vida… en la mente, porque en la realidad no pasa",
    "Dije ‘una serie más’ y ahora ya es mañana",
    "Intento ser productivo, pero mi cama tiene argumentos muy sólidos",
    "Yo con 1% de batería: tranquilo.Yo con 99%: ansiedad total 😵",
]

let memeRandom = document.getElementById("random-meme");
let titulo = document.getElementById("random-caption");
let boton = document.getElementById("generator-button");

boton.addEventListener("click", function(){
    let numeroMeme = Math.floor(Math.random() * memeArray.length);
    let numeroCaptions = Math.floor(Math.random() * captionsArray.length);
    memeRandom.src = memeArray[numeroMeme];
    titulo.innerText = captionsArray[numeroCaptions];
})
