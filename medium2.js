let number = [5, 6, 4, 4, 8, 9, 44, 11, 897, -4]
let i = 0
let min = Number.MAX_SAFE_INTEGER

while(i < number.length) {
    if(min > number[i]) {
        min = number[i]
    }
    i++
}

console.log(min)
