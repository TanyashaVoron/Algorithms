//Алгоритм Бойера — Мура — Хорспула
let fs = require("fs")
let stroka = fs.readFileSync("./input.txt", {encoding: "utf-8" , flag:"r"})
stroka=stroka.split("\n")
let S=stroka[0]
let T=stroka[1]
m=T.length
n=S.length
N=[]
for( let j=0;j<m-1;j++)
    N[T.charAt(j)]=j+1

let i=0
while (i<=(n-m)){
    let j=0
    while ((S[i+j]===T[j])&&(j<m))
        j++
    if (j===m)
        console.log(i)

    if (!(N [S[i+ m-1]]))
        i=i+ m
    else
        i=i+ m-N[S[i+ m-1]]
}