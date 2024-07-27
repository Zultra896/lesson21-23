let num = [1, 2, 3, 4]
let str = ["a", "b", "c", "d"]
let result = []
let i1 = 0
let i2 = 0

while(i1 < num.length) {
    result.push(num[i1])
    i1++
}
while(i2 < num.length) {
    result.push(str[i2])
    i2++
}

console.log(result)