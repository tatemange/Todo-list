
import { setBackground } from './ui.js';



let folders = [...document.querySelectorAll('.folder')]
let colors = [["black 30%", "#222"],
["#aaa 30%", "#555"],
["#282c34", "red"],
["#ef4131 0%", "#44aaff", "#30b031"],
["#1b6ade", "orange", "#1b6ade"],
];

folders.forEach((folder, index) => {
    setBackground(colors[index % colors.length], `${Math.random() * 180}deg`, folder);
});

