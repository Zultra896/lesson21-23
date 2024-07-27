let number = [1, 2, 3, 4, 5, 6, -1, 4, 8, 9, 44, 11, 897]
let i = 0

console.log(number)

while(i < number.length) {
    if (number[i] < 0) {   
        console.log(number[i]) 
        number.splice(i, 1)
    }
    i++
}

console.log(number)