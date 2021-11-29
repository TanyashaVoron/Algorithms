//алгоритм грубой силы. полный перебор начиная с первого символа строки S и строки T поочередное сравение строк
//лесенкой
let fs = require("fs")
let stroka = fs.readFileSync("./input.txt", {encoding: "utf-8" , flag:"r"})
stroka=stroka.split("\n")
let S=stroka[0]
let T =stroka[1]
let i=0
while (i<=(S.length-T.length)){
    let j=0
    while ((S[i+j]===T[j])&&(j<T.length))
        j++
    if (j===T.length)
        console.log(i+1)
    i++
}
