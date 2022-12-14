'use strict'

let tikTok = () => {
    const weekDays = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    const months = ['января', 'февраля', 'марта', 'апреля', 'мае', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
    let count = 1
    const start = () => {
        console.log(count);
        count++
        let date = new Date()
        const tmp = document.querySelector('.wrap')
        tmp.firstElementChild.textContent =
            `Сегодня ${weekDays[date.getDay()]}, 
        ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} года, 
        ${date.getHours()} ${hour(date.getHours())} ${date.getMinutes()} минут ${date.getSeconds()} секунды`
        tmp.lastElementChild.textContent =
            `${zeros(date.getDate())}.${zeros(date.getMonth() + 1)}.${date.getFullYear()} - 
        ${zeros(date.getHours())}:${zeros(date.getMinutes())}:${zeros(date.getSeconds())}`
    }
    const hour = (hour) => {
        let tmp = String(hour).slice(-1)
        switch (true) {
            case hour >= 5 && hour <= 20 || tmp == 0: return 'часов'
            case tmp == 1: return 'час'
            default: return 'часа'
        }
    }
    const zeros = (num) => {
        num = String(num)
        if (num.length != '2') return `0${num}`
        return num
    }
    start()
    setInterval(start, 1000)
}

tikTok()


