'use strict'

// task 1
let arr1 = ['18623', '2634', '3545', '4756', '5867', '2654', '47895']

for (const str of arr1) {
    if (str[0] === '2' || str[0] === '4') console.log(str)
}

// task 2
const eratosfen = (limit = 100) => {
    let arr = []
    for (let i = 2; i <= limit; i++) {
        arr.push(i)
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            for (let step = i + arr[i]; step < arr.length; step += arr[i]) {
                arr[step] = 0
            }
        }
    }
    for (const el of arr) {
        if (el !== 0) console.log(`${el} - делители этого числа: 1 и ${el}`)
    }
}

eratosfen()

