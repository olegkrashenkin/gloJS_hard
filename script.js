'use strict'

let lang = 'ru'
const daysOfWeek = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}
lang === 'ru'
    ? console.log(daysOfWeek.ru)
    : console.log(daysOfWeek.en)
switch (lang) {
    case 'ru':
        console.log(daysOfWeek.ru)
        break
    case 'en':
        console.log(daysOfWeek.en)
}
console.log(daysOfWeek[lang])


const namePerson = ['Артем', 'Александр', 'Вася']
const idx = 3
namePerson[idx] === 'Артем'
    ? console.log('Директор')
    : namePerson[idx] === 'Александр'
        ? console.log('Преподаватель')
        : console.log('Студент')



