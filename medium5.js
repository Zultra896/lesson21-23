let arr = [1, 2, 3, 4, 5, 6, "a", "b", "c", 1, 2, 3, 4, 5, "g", "h", "i", "j", "k", "l", 8, 9, 10];
let x = 0;

console.log("Изначальный массив: ", arr);

while (x < arr.length) {
    let y = x + 1;
    while (y < arr.length) {
        if (arr[x] === arr[y]) {
            arr.splice(y, 1); 
        } else {
            y++;
        }
    }
    x++;
}

console.log("Массив после удаления дубликатов: ", arr);
