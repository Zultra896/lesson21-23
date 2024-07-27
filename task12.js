let number = [1, 2, 3, 4, 5, 6, -1, 4, 8, 9, 44, 11, 897]
let i = 0
let sum = 0

while(i < number.length) {
    sum+=number[i]
    i++
}

console.log(Math.floor(sum/number.length))