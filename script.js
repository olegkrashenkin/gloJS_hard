const number = 266219
let result = 1

for (let el of String(number)) {
    result *= el
}
console.log(result)
result **= 3
console.log(String(result).slice(0, 2))