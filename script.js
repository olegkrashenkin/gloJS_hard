'use strict'

// task 1
let arr1 = ['18623', '2634', '3545', '4756', '5867', '2654', '47895']

for (const str of arr1) {
    if (str[0] === '2' || str[0] === '4') console.log(str)
}

// task 2
const eratosfen = (limit = 100) => {
    let arr2 = []
    for (let i = 2; i <= limit; i++) {
        arr2.push(i)
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] !== 0) {
            for (let step = i + arr2[i]; step < arr2.length; step += arr2[i]) {
                arr2[step] = 0
            }
        }
    }
    for (const el of arr2) {
        if (el !== 0) console.log(`${el} - делители этого числа: 1 и ${el}`)
    }
}

eratosfen()

