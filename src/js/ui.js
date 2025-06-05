
import { createHtmlElement } from "./functions.js";

function handleClickSVG(svg, container) {
    const isChecked = svg.getAttribute("data-checked") === "1";
    const newStatut = isChecked ? "uncompleted" : "completed";
    // Remplacer le SVG par le nouveau
    container.innerHTML = createStatusSvg(newStatut);
    // Réattacher l'événement au nouveau SVG
    const newSvg = container.querySelector("svg");
    newSvg.addEventListener("click", (e) => {
        handleClickSVG(newSvg, container);
    });
}


export function createTaskElement(attrs) {
    const task = createHtmlElement("div", { class: "task" });

    const defaultDiv = createHtmlElement("div", { class: "default" });
    const spanSvg = createHtmlElement("span", {class: "svg"})
    spanSvg.innerHTML = createStatusSvg(attrs.statut)
    defaultDiv.append(spanSvg)
    const text = createHtmlElement("span", { class: "task-text", text: attrs.description });
    defaultDiv.append(text);
    task.appendChild(defaultDiv);


    let svg = defaultDiv.querySelector("svg")
    svg.addEventListener("click", (e) => {
        handleClickSVG(svg, spanSvg)
    })
    // Optionnel : autres infos comme date ou fichiers joints
    if (attrs?.dateDeCreation || attrs?.fichiersJoints?.length > 0) {
        const otherInfo = createHtmlElement("div", { class: "other-info" });

        if (attrs.dateDeCreation) {
            const day = createHtmlElement("span", { class: "day", text: attrs.dateDeCreation });
            otherInfo.appendChild(day);
        }

        if (attrs.fichiersJoints.length > 0) {
            const imgs = createHtmlElement("div", { class: "imgs" });
            attrs.fichiersJoints.forEach(link => {
                const img = createHtmlElement("img", {
                    src: link,
                    alt: "fichier-joint"
                });
                imgs.appendChild(img);
            });
            otherInfo.appendChild(imgs);
            imgs.style.gridTemplateColumns = `repeat(${imgs.children.length > 4 ? 4 : imgs.children.length}, 1fr)`
        }

        task.appendChild(otherInfo);
    }

    return task;
}

export function createGroupElement(groupName, taskObjects) {
    const group = createHtmlElement("div", { class: "group" });

    const titleGroup = createHtmlElement("div", { class: "title-group" });
    const title = createHtmlElement("h3", { text: taskObjects.title });
    const button = createHtmlElement("button", { class: "more", text: "Add task" });

    titleGroup.append(title, button);
    group.appendChild(titleGroup);


    taskObjects.tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        group.appendChild(taskElement);
    })


    return group;
}

function createStatusSvg(statut) {
    let svg = `
        <svg viewBox="0 0 24 24" data-checked="0" width="512" height="512"><path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Z"/></svg>
    `
    if (statut === "completed")
        svg = `<svg data-checked="1" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>`
    return svg;
}
