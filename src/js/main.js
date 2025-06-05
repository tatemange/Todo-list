
import { Calendar } from './calendar.js';
import { createHtmlElement } from './functions.js';
import { createTaskElement, createGroupElement } from './ui.js';



let calendar = new Calendar(document.querySelector(".calendar"))
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth()
calendar.init(year, month)




const UI = {
    familytask: {
        completed: 3,
        name: "Family Task",
        groupes: {
            1: {
                title: "Prof",
                tasks: [
                    {
                        description: "je suis le plus fort du monde j'ai la plus grande logique ma lorem lorem10  ",
                        statut: "completed",
                        dateDeCreation: "lundi 30 a 10h23",
                        dateLastUpdate: null,
                        priorite: 1,
                        categorie: "projet",
                        fichiersJoints: [],
                    },
                    {
                        description: "hello world",
                        statut: "completed",
                        dateDeCreation: "lundi 10 a 11:23",
                        dateLastUpdate: null,
                        priorite: 1,
                        categorie: "travail",
                        fichiersJoints: [],
                    },
                ]
            },
            2: {
                title: "Prof",
                tasks: [
                    {
                        description: "(1) Je suis completement my brother",
                        statut: "",
                        dateDeCreation: "lundi 30 a 10h23",
                        dateLastUpdate: null,
                        priorite: 1,
                        categorie: "projet",
                        fichiersJoints: [],
                    },
                    {
                        description: "hello world",
                        statut: "",
                        dateDeCreation: "lundi 10 a 11:23",
                        dateLastUpdate: null,
                        priorite: 1,
                        categorie: "travail",
                        fichiersJoints: [],
                    },
                ]
            }
        }
    },
    assigned: {
        completed: 3,
        name: "Assigned",
        groupes: {
            1: {
                title: "Prof",
                tasks: [
                    {
                        description: "VS code",
                        statut: null
                    }
                ]
            }
        }
    },
    today: {
        completed: 0,
        name: "Today",
        groupes: {
            gn: {
                title: "GN nuit prod",
                tasks: [
                    {
                        description: "Vendre les meuble de la plaine ville de douala fff et si possible je suis prod",
                        statut: "completed",
                        dateDeCreation: "Today with 12h32",
                        dateLastUpdate: null,
                        priorite: 1,
                        categorie: "projet",
                        fichiersJoints: [
                        ],
                    },
                    {
                        description: "laisse moi tranquille",
                        statut: "pending",
                        dateDeCreation: "lundi 30 a 10h23",
                        dateLastUpdate: null,
                        priorite: 1,
                        categorie: "projet",
                        fichiersJoints: [
                            "./src/images/cook.png",
                            "./src/images/c1.png",
                            "./src/images/cook.png",
                            "./src/images/cook1.png",
                            "./src/images/c2.png",
                            "./src/images/cook.png",
                            "./src/images/cook.png",
                            "./src/images/cook.png",
                        ],
                    },

                ]
            },
            gn2: {
                title: "Jojo",
                tasks: [
                    {
                        description: "Vendre la banane",
                        statut: "completed",
                        dateDeCreation: "lundi 30 a 10h23",
                        dateLastUpdate: null,
                        priorite: 0,
                        categorie: "projet",
                        fichiersJoints: [
                        ],
                    },
                    {
                        description: "partir a Baf",
                        statut: "pending",
                        dateDeCreation: "lundi 30 a 10h23",
                        dateLastUpdate: null,
                        priorite: 0,
                        categorie: "projet",
                        fichiersJoints: [
                            "./src/images/cook1.png",
                            "./src/images/c1.png",
                            "./src/images/cook1.png",
                        ],
                    },

                ]
            },
        }
    },
    completed: {
        completed: 0,
        name: "Completed task",
        groupes: {
            gn: {
                title: "Meilleur",
                tasks: [
                    {
                        description: "ma lorem lorem10  ",
                        statut: "completed",
                        dateDeCreation: "lundi 30 a 10h23",
                        dateLastUpdate: null,
                        priorite: 1,
                        categorie: "projet",
                        fichiersJoints: [
                        ],
                    },
                    {
                        description: "partir a Baf",
                        statut: "pending",
                        dateDeCreation: "lundi 30 a 10h23",
                        dateLastUpdate: null,
                        priorite: 1,
                        categorie: "projet",
                        fichiersJoints: [
                            "./src/images/cook.png",
                            "./src/images/cook.png",
                            "./src/images/cook.png",
                            "./src/images/cook.png",
                            "./src/images/cook.png",
                            "./src/images/cook.png",
                            "./src/images/cook.png",
                            "./src/images/cook.png",
                        ],
                    },

                ]
            },
            gn2: {
                title: "Ulrich",
                tasks: [
                    {
                        description: "Vendre la banane",
                        statut: "completed",
                        dateDeCreation: "lundi 30 a 10h23",
                        dateLastUpdate: null,
                        priorite: 0,
                        categorie: "projet",
                        fichiersJoints: [
                        ],
                    },
                    {
                        description: "partir a Baf",
                        statut: "pending",
                        dateDeCreation: "lundi 30 a 10h23",
                        dateLastUpdate: null,
                        priorite: 0,
                        categorie: "projet",
                        fichiersJoints: [
                            "./src/images/cook.png",
                            "./src/images/cook.png",
                        ],
                    },

                ]
            },
        }
    },
    all: {
        completed: 0,
        name: "All",
        groupes: {
            0: {
                title: "@shadow",
                tasks: [
                    {
                        description: "film",
                        statut: "",
                        dateDeCreation: "mardi 30 a 10h23",
                        dateLastUpdate: null,
                        priorite: 1,
                        categorie: "projet",
                        fichiersJoints: [
                        ],
                    },
                    {
                        description: "Ok my brother",
                        statut: "pending",
                        dateDeCreation: "lundi 30 a 10h23",
                        dateLastUpdate: null,
                        priorite: 1,
                        categorie: "projet",
                        fichiersJoints: [
                            "./src/images/cook.png",
                        ],
                    },

                ]
            },
            2: {
                title: "john doe",
                tasks: [
                    {
                        description: "Vendre des produit manufacturer",
                        statut: "completed",
                        dateDeCreation: "vendredi 30 a 12:00",
                        dateLastUpdate: null,
                        priorite: 0,
                        categorie: "projet",
                        fichiersJoints: [
                            "./src/images/cook1.png",
                            "./src/images/cook.png",
                        ],
                    },
                    {
                        description: "ok google la platform",
                        statut: "pending",
                        dateDeCreation: "lundi 30 a 10h",
                        dateLastUpdate: null,
                        priorite: 0,
                        categorie: "projet",
                        fichiersJoints: [
                            "./src/images/cook.png",
                            "./src/images/cook.png",
                            "./src/images/cook.png",
                            "./src/images/cook.png",
                        ],
                    },

                ]
            },
        }
    },
}


/**
 *
 * @param {string} target
 * @param {Object} object
 */
function switchFolder(target, object) {
    const containerTask = document.querySelector(".container-tasks")
    const titleContainer = document.querySelector(".container .task-name")
    const text = document.querySelector(".container .text")
    const clearBtn = document.querySelector(".container .clear")
    const groupe = containerTask.querySelector(".group-task")
    groupe.innerHTML = ''
    for (const [key, value] of Object.entries(object)){
        if(key === target){
            titleContainer.textContent = value.name
            text.textContent = `${value.completed} task is completed`

            for(const [nameG, valueG] of Object.entries(value.groupes)){
                const newGroupe = createGroupElement(nameG, valueG)
                groupe.append(newGroupe)
            }
        }
    }
}

switchFolder("today", UI)

const folders = [...document.querySelector(".default_folder").children]
folders.forEach((folder) => {
    folder.addEventListener('click', (e) => {
        folders.forEach(f => f.classList.remove("activate"))
        const name = folder.querySelector(".name")
        switchFolder(name.getAttribute("data-set").toLowerCase(), UI)
        folder.classList.add("activate")
    })
})





