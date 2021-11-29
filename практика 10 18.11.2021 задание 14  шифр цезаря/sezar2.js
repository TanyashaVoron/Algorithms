//ЗАДАНИЕ 2.
//Постановка задачи
//Попытайтесь расшифровать фразы.
let fn = require("fs")
const fso = require("fs");
let st = fn.readFileSync("./input2.txt", {encoding: "utf-8", flag: "r"})
let str=st.split("\n")
for(let i=0;str[i];i++){
    let s=""
    s=str[i]
    console.log(i+1, " ",decode(s))
}


function decode(str) {
    let alp = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
    let alpBig = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЬЭЮЯ"

    let fso = require("fs")
    let fh = fso.readFileSync("./11.txt", {encoding: "utf-8", flag: "r"})
    let stroka = fh.split("\n")

//создадим массив частот из файла
    let arr = []
    for (let i = 0; i < 33; i++) {
        let s = stroka[i]
        let k = ""
        for (let j = 2; j < s.length - 1; j++) {
            k += s[j]
        }
        arr[s[0]] = k
    }

//все заглавные буквы заменяем прописными
    let s = ""
    for (let i = 0; i < str.length; i++) {
        if (alpBig.includes((str[i])) && (str.charCodeAt(i) < 1072)) {
            let code = str.charCodeAt(i)
            code = Number(code) + 32
            s += String.fromCharCode(code)
        } else s += str[i]
    }

//создаем массив частоты символов в строке для декода
    let sAlphch = [] //алфавит строки(частоты)
    for (let i in arr) {
        sAlphch[i] = 0
    }
    let N = 0 //мощность алфавита
    for (let j = 0; j < s.length; j++) {
        for (let i in sAlphch) {
            if (i === s[j])
                sAlphch[i]++
        }
        if (alp.includes(s[j]))
            N++;
    }

    for (let i in sAlphch) {
        sAlphch[i] /= N
    }


//проходим по всем сдвигам ищем оптимальный
    let minZ = 0 //сумма

    for (let i = 0; i < 33; i++)
        minZ += Math.abs(arr[alp.charAt(i)] - sAlphch[alp.charAt(i)])

    let minsdvig = 0
    let D = 0

    for (let i = 1; i < 33; i++) {
        for (let j = 0; j < 33; j++)
            D += Math.abs(arr[alp.charAt((j + i) % 33)] - sAlphch[alp.charAt(j)])
        if (minZ > D) {
            minZ = D
            minsdvig = i
        }
        D = 0;
    }

//декодируем строку
    let strNov = ""
    for (let i = 0; i < s.length; i++) {
        if (alp.includes((s[i]))) {
            for (let j = 0; j < alp.length; j++) {
                if (s[i] === alp[j]) {
                    strNov += alp.charAt((j + minsdvig) % 33)
                }
            }
        } else
            strNov += s[i]
    }

    return strNov

}