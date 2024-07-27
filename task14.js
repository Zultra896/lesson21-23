let number = [1, 2, 3, 4, 5, 6, -1, 4, 8, 9, 44, 11, 897]
let i = 0
let even = 0
let odd = 0
while(i < number.length) {
    if (number[i] % 2 === 0) {
        even++
    } else {
        odd++
    }
    i++
}

console.log("Количество четных чисел: " + even)
console.log("Количество нечетных чисел: " + odd)
