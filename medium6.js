let arr = [1,2,3,4,4,4,3,2,1]

let start = 0
let end = arr.length - 1

let flag = true
while (start < end) {
    if (arr[start]!== arr[end]) {
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
