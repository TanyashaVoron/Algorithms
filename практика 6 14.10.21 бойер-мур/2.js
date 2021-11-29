//Алгоритм Бойера — Мура
let fs = require("fs")
let stroka = fs.readFileSync("./input.txt", {encoding: "utf-8" , flag:"r"})
stroka=stroka.split("\n")
let S=stroka[0]
let T=stroka[1]
m=T.length
n=S.length
let uns=""

StopTable=[]
for(let j=0;j<m-1;j++)
    StopTable[T.charAt(j)]=j

//console.log(StopTable)

suffshift=[]
z=[]
let maxZidx = 0
let maxZ = 0;
for (let j = 0; j <=m; j++) {
    z[j]=0
    suffshift[j]=m
}

//console.log(suffshift)

for (let j = 1; j < m; j++) {
    if (j <= maxZ)
        z[j] = Math.min(maxZ - j + 1, z[j - maxZidx])
    while (j + z[j] < m && T.charAt(m - 1 - z[j]) === T.charAt(m - 1 - (j + z[j])))
        z[j]++
    if (j + z[j] - 1 > maxZ) {
        maxZidx = j
        maxZ = j + z[j] - 1
    }
}

for (let j = m - 1; j > 0; j--)
    suffshift[m - z[j]] = j  // цикл №1

let r = 0
for (let j = 1;  j <= m - 1; j++)  // цикл №2
    if ((j + z[j]) === m)
        for( ; r <= j; r++)
            if (suffshift[r] === m)
                suffshift[r] = j

//console.log(suffshift)

let i=0
let bound = 0
while (i<=n-m) {
     tekSTsimvol="" //обьявляем переменные текущей части и конечной
     STsimvol=""
    let j = m - 1

    while (j >= bound && S[i + j] === T[j]) {
        tekSTsimvol+=T[j]  //присваиваем текущее значение
        j--
    }

    if (j!==m-1 && j!==-1){ //если нашелся совпадающем с суффиксом кусок
        for (let k=tekSTsimvol.length-1;k>=0;k--) //перевернем его
            STsimvol+=tekSTsimvol[k]
        console.log(STsimvol," ",i)
    }

    if (j < bound) {
        uns+=i+" "
        bound = m - suffshift[0]
        j = -1
        i+=suffshift[0] //установить j так, как будто мы прочитали весь шаблон, а не только до границы bound
    }else {
        bound = 0
        if (StopTable[S[i + j]]) {
            i = Math.max(i + suffshift[j + 1], i + j - StopTable[S[i + j]])
            //console.log(i + j - StopTable[S[i + j]]);
            //console.log([S[i + j]]);
        }
        else
            i = Math.max(i + suffshift[j+1], i + j)
    }
   // i += suffshift[j+1]
}
console.log(uns)
