let num = 456
let i = 1
let sum = 0


while (num > 0) {
    sum += num % 10
    num = Math.floor(num / 10)
}

console.log(sum)