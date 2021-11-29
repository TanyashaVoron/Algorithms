let fs = require("fs")
let stroka = fs.readFileSync("./input.txt", { encoding: "utf-8", flag: "r" })
stroka = stroka.split("\n")
let S = stroka[0]
let T = stroka[1]
let DTS = T + '&' + S
pT=[]
pT[0]=0
k=0
for (let i=1;i<T.length+1;i++) {
    while ((k > 0) && (DTS.charAt(k) !== DTS.charAt(i)))
        k = pT[k - 1]
    if (DTS.charAt(k) === DTS.charAt(i))
        k++
    pT[i] = k   //построили массив префикс функции Т+&
}
k=0
for (let i=T.length+1;i<DTS.length;i++){
    while((k>0)&&(DTS.charAt(k)!==DTS.charAt(i))) //затем начали брать по одноу символу из строки S и если значение префф равно
        k=pT[k-1]                                 //длинне строки Т то мы нашли конец вхождения T в S
    if (DTS.charAt(k)===DTS.charAt(i))
        k++
    if(k===T.length)
        console.log(i-2*T.length)
}
