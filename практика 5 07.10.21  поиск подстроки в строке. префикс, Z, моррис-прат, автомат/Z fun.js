let fs = require("fs")
let stroka = fs.readFileSync("./input.txt", {encoding: "utf-8" , flag:"r"})
stroka=stroka.split("\n")
let S=stroka[0]
let T=stroka[1]
let DTS1=T+'&'+S
DTS=DTS1.length
pT=[]
pT[0]=0
k=0

let m=T.length
z=[]
let left=0
let right=0
for (let j=0;j<DTS;j++)
 z[j]=0
for (let j=0;j<DTS;j++){
 if (j<=right)
  z[j]=Math.min(right-j+1,z[j-left])
 while (j+z[j]<DTS && DTS1.charAt(z[j])===DTS1.charAt(j+z[j])) //построили Z-функцию для строки T+&+S
  z[j]++
 if (j+z[j]-1>right){
  left=j
  right=j+z[j]-1
 }
z[0]=0
}
for(let i=m+1;i<DTS;i++){
 if (z[i]===m) console.log(i-1-m)
}











/*let j
p=[]
for(let i = 1; i < m; i++) {
 if (z[i] > 0) {
  for (j = z[i] - 1; j >= 0; j--) {
  if (p[i + j] === 0)
   p[i + j] = j + 1;
 }
 }
}
console.log(p)*/