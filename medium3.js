let Hello = prompt("About you")
let count = 0
let i = 0
while (i < Hello.length) {
    if (Hello[i] == "a" || Hello[i] == "e" || Hello[i] == "i" || Hello[i] == "o" || Hello[i] == "u") {
        count++
    }
    i++
}

console.log(count)
