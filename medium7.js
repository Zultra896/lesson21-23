let str = "helloolleh"

let start = 0
let end = str.length - 1

let flag = true
while (start < end) {
    if (str[start]!== str[end]) {
        flag = false
    }
    start++
    end--
}

if (flag) {
    console.log("палиндром");
} else {
    console.log("не палиндром");
}
