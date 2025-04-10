

export function setBackground(colors = ["#ff7e5f", "#feb47b"], direction = "to right", eltHtml) {
    eltHtml.style.background = `linear-gradient(${direction}, ${colors.join(", ")})`;
}

