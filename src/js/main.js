
import { setBackground } from './ui.js';



let folders = [...document.querySelectorAll('.folder')]
let colors = [["black 30%", "#222"],
["#111 30%", "#555"],
["green", "black"],
["blue 0%", "black"],
["red", "orange", "black"],
];

folders.forEach((folder, index) => {
    setBackground(colors[index % colors.length], "45deg", folder);
});

