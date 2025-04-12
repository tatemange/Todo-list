

import { createHtmlElement } from "./functions.js";



const formCrateNewGroup = document.querySelector(".formGroup")
let addGroupBnt = document.querySelector(".add-group")




export function setBackground(colors = ["#ff7e5f", "#feb47b"], direction = "to right", eltHtml) {
    eltHtml.style.background = `linear-gradient(${direction}, ${colors.join(", ")})`;
}

export function setFill(color, eltHtml){
    eltHtml.style.fill = color
}



export function getTheNfirstChar(str, n) {
    let words = []
    let end = ""
    if(n < str.length) {
        end = "..."
    }
    for(let i = 0; i < n && i < str.length; i++) {
        words.push(str[i])
    }
    return words.join("") + end
}


class mainTask {
    /**
     * 
     * @param {HTMLElement} container 
     */
    constructor(container){
        this.container = container
        this.group = [...container.children]

        addGroupBnt.addEventListener("click", this.formGroup.bind(this))       
    }
    formGroup() {        
        formCrateNewGroup.classList.toggle("mask")        
        this.handleFormAddGroup(formCrateNewGroup)
    }

    handleFormAddGroup(form) {
        let nameGroup = form.querySelector("#nameGroup")
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            if(nameGroup.value.length > 0) {
                this.addGroup(nameGroup.value);
                nameGroup.value = ""
                form.classList.add("mask")
            }
        })
        
        form.addEventListener("reset", (e) => {
            form.classList.add("mask")
        })

        form.addEventListener("click", (e) => {
            if(e.target.classList.contains("formGroup")) {
                form.classList.add("mask")
            }
        })
    }

    addGroup(name) {
        const groupTask = this.container.querySelector(".group-task")
        const newGroup = createHtmlElement("div", {"class": "group"})
        newGroup.innerHTML = `
            <div class="title-group">
                <h3>${getTheNfirstChar(name, 18)}</h3>
                <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"
                    width="512" height="512">
                    <circle cx="2" cy="12" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="22" cy="12" r="2" />
                </svg>
            </div>
            
        `
        groupTask.appendChild(newGroup)
    }
}


const todo = new mainTask(document.querySelector(".today-container"))



