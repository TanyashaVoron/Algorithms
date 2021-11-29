//хеш фуннкция но разница в сдвиге на 1 символ (вычитаем слева, прибавляем справа)
// и умножении на в N степени .что предотвращает колизии
let fs = require("fs")
let stroka = fs.readFileSync("./input.txt", {encoding: "utf-8" , flag:"r"})
stroka=stroka.split("\n")
let S=stroka[0]
let T =stroka[1]
let i=0
let ht=0
let hs=0
let k=T.length-1
counter=0
let st2=1
//console.log(S,' ',T)
while (k >=0) {
    ht+=T.charCodeAt(k)*st2
    hs+=S.charCodeAt(k)*st2
    st2*=2
    k--
   // console.log(hs,' ',ht)
}
//console.log(st2)
//console.log(hs,' ',ht)
st2=st2/2
//console.log(st2)
while (i<=(S.length-T.length)) {

    if (hs === ht) {
        let j = 0
        while ((S[i + j] === T[j]) && (j < T.length))
            j++
        if (j === T.length)
            console.log(i + 1)
    }
    i++
    if (i<=(S.length-T.length))
        hs=(hs-S.charCodeAt(i-1)*st2)*2+S.charCodeAt(i+T.length-1)
    //console.log(hs)
}