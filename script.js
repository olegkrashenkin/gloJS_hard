'use strict'

const foo = function (str) {
    if (typeof str === 'string') {
        if (str.trim().length > 30) return `${str.substr(0, 30)}...`
    }
    return `${str} - не строка`
}


console.log(foo('1234567890123456789012345678901234567890'))
console.log(foo(123))


