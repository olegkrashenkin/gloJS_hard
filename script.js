'use strict'

let tikTok = () => {
    const start = () => {
        const wrap = document.querySelector('.wrap')
        const date = new Date()
        const weekday = date.toLocaleString('ru', { weekday: 'long' })
        const year = date.toLocaleString('ru', { year: 'numeric' })
        const dayMonth = date.toLocaleString('ru', { day: 'numeric', month: 'long' })
        const hour = date.toLocaleString('ru', { hour: 'numeric' })
        const minute = date.toLocaleString('ru', { minute: 'numeric' })
        const second = date.toLocaleString('ru', { second: 'numeric' })
        const fullDate = date.toLocaleString('ru', { day: '2-digit', month: '2-digit', year: 'numeric' })
        const fullTime = date.toLocaleString('ru', { hour: '2-digit', minute: '2-digit', second: 'numeric' })

        wrap.firstElementChild.textContent =
            `Сегодня ${weekday.charAt(0).toUpperCase() + weekday.slice(1)}, ${dayMonth} ${year} года, 
        ${hour} ${decl(hour, 'hour')} ${minute} ${decl(minute, 'minute')} 
        ${second} ${decl(second, 'second')}`

        wrap.lastElementChild.textContent = `${fullDate} - ${fullTime}`
    }

    const decl = (units, flag) => {
        let tmp = String(units).slice(-1)
        switch (flag) {
            case 'hour': {
                switch (true) {
                    case units >= 5 && units <= 20 || tmp == 0: return 'часов'
                    case tmp == 1: return 'час'
                    default: return 'часа'
                }
            }
            case 'minute': {
                switch (true) {
                    case units >= 5 && units <= 20 || tmp == 0 || tmp >= 5 && tmp <= 9: return 'минут'
                    case tmp == 1: return 'минута'
                    default: return 'минуты'
                }
            }
            case 'second': {
                switch (true) {
                    case units >= 5 && units <= 20 || tmp == 0 || tmp >= 5 && tmp <= 9: return 'секунд'
                    case tmp == 1: return 'секунда'
                    default: return 'секунды'
                }
            }
        }
    }

    start()
    setInterval(start, 1000)
}

tikTok()

