let stone = document.getElementById('stone');
let numeroRandom = Math.floor(Math.random() * 9 + 1);

if(numeroRandom === 1) {
    stone.style.backgroundColor = "red";
} else if (numeroRandom === 2) {
    stone.style.backgroundColor = "orange";
} else if (numeroRandom === 3) {
    stone.style.backgroundColor = "yellow";
} else if (numeroRandom === 4) {
    stone.style.backgroundColor = "green";
} else if (numeroRandom === 5) {
    stone.style.backgroundColor = "blue";
} else if (numeroRandom === 6) {
    stone.style.backgroundColor = "#4169e1";
} else if (numeroRandom === 7) {
    stone.style.backgroundColor = "#00008b";
} else if (numeroRandom === 8) {
    stone.style.backgroundColor = "purple";
} else {
    stone.style.backgroundColor = "black";
}
console.log(numeroRandom)