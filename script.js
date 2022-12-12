'use strict'

const body = document.body
const dayOfWeek = new Date().getDay()
const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

weekDays.forEach((el, index) => {
    let newEl = document.createElement('p')
    switch (index) {
        case dayOfWeek:
            newEl.style.fontWeight = 700
            break;
        case 0:
            newEl.style.fontStyle = 'italic'
            break;
        case 6:
            newEl.style.fontStyle = 'italic'
            break;
    }
    newEl.textContent = el
    body.appendChild(newEl)
})
