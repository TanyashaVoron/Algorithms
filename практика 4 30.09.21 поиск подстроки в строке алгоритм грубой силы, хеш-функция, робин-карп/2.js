//хеш-фукция: сравнение сумм кодов строк, если они совпали, то необходимо полостью пройтись по строкам и сравнить их для полного совпадения
//боер-мур
let fs = require("fs")
let stroka = fs.readFileSync("./input.txt", {encoding: "utf-8" , flag:"r"})
stroka=stroka.split("\n")
let S=stroka[0]
let T =stroka[1]
let i=0
let hs=0
let ht=0
let k=0
while (k<=(T.length-1)) { //считаем суммы кодов элементов строк
    ht += T.charCodeAt(k)
    hs += S.charCodeAt(k)
    k++
}
while (i<=(S.length-T.length)){
//console.log(hs,' ',ht)
    if (hs===ht){     //если они совпали, то проверяем посимвольно
       let  j=0
        while ((S[i+j]===T[j])&&(j<T.length))
        j++
        if(j===T.length)
          console.log(i+1)
    }
    i++
    if (i<=(S.length-T.length))
        hs=hs+S.charCodeAt(i+T.length-1)-S.charCodeAt(i-1)
}