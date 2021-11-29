//шифр цезаря
//задание 1: Дан текст, ключ (целое число). Зашифровать текст шифром Цезаря с данным ключом.
// я учитывала то, что знаки препинания и цифры не должны меняться!
// А-1040  а-1072
// Я-1071  я-1032
let readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Введите ключ(целое число): ", (n) => {

    let fs = require("fs")
    let str = fs.readFileSync("./input.txt", {encoding: "utf-8", flag: "r"})

    let alp="абвгдеёжзийклмнопрстуфхцчшщъыьэюя"

    console.log("строка для кодирования (из файла input.txt): ",str)
    let out = ''
    for (let i=0; i< str.length; i++){
        let x=""
        if(str.charCodeAt(i)<1072)
            x=String.fromCharCode(str.charCodeAt(i)+32)
        else
            x=str[i]

        //console.log(x," ",str.charCodeAt(i)+32," ",String.fromCharCode(str.charCodeAt(i)+32) )

        if(alp.includes(x)) {
            let code1

            if(str.charCodeAt(i)<1072)
               code1=str.charCodeAt(i)+32
            else
                code1 = str.charCodeAt(i)

            code1 = Number(code1) + Number(n)

            out += String.fromCharCode(code1)

        }else out+=str[i]
        //console.log("i=",i," code=",code1," out=",out)
    }
    console.log("закодированная строка: ",out)
})


