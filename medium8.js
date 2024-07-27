let str = "Hello world"

let count = 0
let index = 0
let inWord = false

while (index < str.length) {
    if (str[index] !== ' ' && !inWord) {
        inWord = true
        count++
    } else if (str[index] === ' ' && inWord) {
        inWord = false
    }
    index++
}

console.log(count)