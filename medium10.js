let N = Number(prompt("random number"))

let power = 1
let powerNumber = 0
while (power * 2 <= N) {
    power *= 2
    powerNumber++
}

console.log(powerNumber); 