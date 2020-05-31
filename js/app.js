"use strict";

let arrPunchlines = [
    "Depuis le 11 septembre 2001 Chuck Norris ne lance plus d'avions en papier.",
    "Chuck Norris enfant n'envoyait pas de lettres au Père Noël. Il envoyait des ultimatums.",
    "Parmi les accessoires du couteau suisse de Chuck Norris, il y a Mac Gyver.",
    "Un jour, Chuck Norris a plongé dans la Mer Rouge. Moïse en a profité pour passer.",
    "Chuck Norris ne ment jamais, c'est la vérité qui se trompe.",
    "Chuck Norris ne s'est jamais rendu à l'école. Chuck Norris ne se rend jamais.",
    "Chuck Norris a joué au roi du silence avec un muet... et il a gagné.",
    "Chuck Norris peut cultiver un champ magnétique.",
    "Quand Chuck Norris s’est mis au judo, David Douillet s’est mis aux pièces jaunes.",
    "Chuck Norris est la raison pour laquelle Charlie se cache.",
    "Quand Chuck Norris fait l'épreuve des araignées dans Fort Boyard, elles sortent elles-mêmes les petits papiers et lisent à voix haute.",
    "Chuck Norris peut faire des ronds avec une equerre.",
    "Chuck Norris peut écrire un traitement de texte avec la souris.",
    "Peter Parker a été mordu par une araignée, Clark Kent a été mordu par Chuck Norris.",
    "Chuck Norris se souvient très bien de son futur.",
    "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.",
    "Google, c'est le seul endroit où tu peux taper Chuck Norris...",
    "Certaines personnes portent un pyjama Superman. Superman porte un pyjama Chuck Norris.",
    "Chuck Norris donne fréquemment du sang à la Croix-Rouge. Mais jamais le sien.",
    "Chuck Norris et Superman ont fait un bras de fer, le perdant devait mettre son slip par dessus son pantalon."
];

let text = document.querySelector(".text");
let button = document.querySelector(".button");
let background = document.querySelector("body");

button.addEventListener("click", changeText);
button.addEventListener("click", changeRgb);

function changeText() {
    text.innerHTML = arrPunchlines[Math.floor(Math.random() * arrPunchlines.length)];
}

function changeRgb() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    background.style.backgroundColor = rgb;
    text.style.color = rgb;
    button.style.backgroundColor = rgb;

}





