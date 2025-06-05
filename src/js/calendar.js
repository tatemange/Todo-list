import { createHtmlElement, wait } from "./functions.js"



const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const monthsInYear = 12
const daysInWeek = 7
const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


export class Calendar {
    constructor(container) {
        this.calendar = container
        this.dates  = this.calendar.querySelector(".dates")
        this.monthHTML = this.calendar.querySelector(".month")
        this.yearHTML = this.calendar.querySelector(".year")
        this.leftBtn = this.calendar.querySelector(".left svg")
        this.rightBtn = this.calendar.querySelector(".right svg")
        
        this.leftBtn.addEventListener("click", this.prevMonth.bind(this))
        this.rightBtn.addEventListener("click", this.nextMonth.bind(this))

    }

    async init(year, month) {
        let firstDay = new Date(year, month, 1)
        this.year = year
        this.month = month
        let indexMonth = shortMonths.indexOf(firstDay.toDateString().split(" ")[1])
        this.monthHTML.innerHTML = months[indexMonth]
        this.yearHTML.innerHTML = this.year        
        firstDay = firstDay.toDateString().split(" ")[0]
        let lastDay = new Date(year, month + 1, 0)

        for(let i = 1 - week.indexOf(firstDay); i <= lastDay.getDate(); i++) {
            let mask, today = ""
            i < 1 ? mask = "mask" : mask = ""
            
            if(i == new Date().getDate() &&  new Date().getMonth() == month && new Date().getFullYear() == year) {
                today = "today"
                
            }else {
                today = ""
            }
            let day = createHtmlElement("span", 
                {"class": `date ${mask} ${today}`, html: `
                            <span class="number">${i}</span>
                            <span class="task-number"></span>`})

            this.dates.appendChild(day)
            await wait(0)
        }
    }

    nextMonth() {
        this.dates.innerHTML = ""
        this.month++
        if(this.month > monthsInYear - 1) {
            this.month = 0
            this.year++
        }
        this.init(this.year, this.month)
    }

    prevMonth() {
        this.dates.innerHTML = ""
        this.month--
        if(this.month < 0) {
            this.month = monthsInYear - 1
            this.year--
        }
        this.init(this.year, this.month)
    }
}
