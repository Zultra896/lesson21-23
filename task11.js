let number = [1, 2, 3, 4, 5, 6, -1, 4, 8, 9, 44, 11, 897]
let i = 0
let flag = false

while(i < number.length) {
    if(number[i] < 0 ) {
        flag = true
        break
    }
    i++
}

if (flag) {
    console.log("В массиве есть отрицательные числа")
} else {
    console.log("В массиве нет отрицательных чисел")
}