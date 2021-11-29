let fs = require("fs")
let stroka = fs.readFileSync("./input.txt", { encoding: "utf-8", flag: "r" })
stroka = stroka.split("\n")
let S = stroka[0]
let T = stroka[1]

let dlT = T.length
mussT = []
mussT[0] = 0
let k = 0
for (let i = 1; i < dlT; i++) {
    while ((k > 0) && (T.charAt(k) !== T.charAt(i)))
        k = mussT[k - 1]
    if (T.charAt(k) === T.charAt(i))
        k++
    mussT[i] = k
}//построили префикс-функцию для строки Т и записали ее в массив mussT
k = 0
for (let i=0;i<S.length;i++){
    while((k>0)&&(T.charAt(k)!==S.charAt(i))) //затем начали брать по одноу символу из строки S и если значение префф равно
        k=mussT[k-1]                                 //длинне строки Т то мы нашли конец вхождения T в S
    if (T.charAt(k)===S.charAt(i))
        k++
    if(k===T.length){
        console.log(i-k+1)
        k = mussT[k - 1]
    }
}











/*
let i = 0
while (i < S.length) {
    if (T[k] === S[i]) {
        k++
        if (k === dlT) {
            console.log(i - dlT + 1)
            k = mussT[k - 1]
        }
    } else {
        while (k > 0)
            k = mussT[k - 1]
    }
    i++
}





/*
while (i < S.length) {
    if (T[k] === S[i]) {
        k++
        if (k === dlT) {
            console.log(i - dlT + 1)
                k = mussT[k - 1]
        }
    } else {
        while (k > 0)
            k = mussT[k - 1]
    }
    i++
}*/