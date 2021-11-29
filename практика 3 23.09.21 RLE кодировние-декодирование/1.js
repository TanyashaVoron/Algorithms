let fs = require("fs")
let stroka = fs.readFileSync("input.txt")
let uns = ""
let k = 1
for (let i = 0; i < (stroka.length); i++) {
    if (stroka[i] === stroka[i + 1]) {       //считаем одинаковые элементы
        k++
    } else {                                //если они различны, то в зависимости от толичества одинаковых символов
        if (k >= 3) {                       //пополняем ответ
            uns += k + String.fromCharCode(stroka[i])
            k=1
        } else if (k === 2) {
            uns += String.fromCharCode(stroka[i] + stroka[i])
            k = 1
        } else {
            uns += String.fromCharCode(stroka[i])
        }
        }
}
console.log(stroka.length/uns.length)
fs.writeFileSync("code.txt",uns)