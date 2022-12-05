'use strict'

// 1). Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang
// будут выводится дни недели на русском или английском языке.
let lang = 'ru'
const daysOfWeek = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}

// a) через if
lang === 'ru'
    ? console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье')
    : console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday')

// b) через switch-case
switch (lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье')
        break
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday')
}

// c) через многомерный массив без ифов и switch.
console.log(daysOfWeek[lang])

/*
*2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то
* вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”,
* с любым другим значением вывести в консоль “студент”
* Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
*/

const namePerson = ['Артем', 'Александр', 'Вася']
const idx = 3

namePerson[idx] === 'Артем'
    ? console.log('Директор')
    : namePerson[idx] === 'Александр'
        ? console.log('Преподаватель')
        : console.log('Студент')



