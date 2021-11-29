let fs = require("fs")
let stroka = fs.readFileSync("./input.txt", {encoding: "utf-8" , flag:"r"})
stroka=stroka.split("\n")
let S=stroka[0]
let T=stroka[1]
m=T.length
alph=[]
let uns=""
for( let i=0;i<m;i++)
    alph[T.charAt(i)]=0
aut=new Array(m+1)
for( let j=0;j<=m;j++)
    aut[j]=[]
for( let c in alph)
    aut [0] [c]=0
for(let j=0;j<m;j++){
   let prev=aut[j][T.charAt(j)]
    aut[j] [T .charAt(j)]=j+1
    for(let c in alph)
        aut[j+1] [c]=aut [prev] [c]
}
//for(let j=0; j<=m; j ++) {
   // out = " "
   // for (let c in alph)
      //  out += aut[j] [c] + " "
   // console.log(out)
//}
//let finds = []
let pref = 0
for (let i = 0; i < S.length; i++) {
    if (T.indexOf(S[i]) !== -1) {
        pref = aut[pref][S[i]]
    } else
        pref = 0
    if (pref === m)
        uns+=i - m + 1+" "
}
console.log(uns)