let str = "Hello, world!"
let i = str.length
let sum = ""

while (i>0) {
    sum += str[i-1]
    console.log(str[i])
    i--
}

console.log(sum)