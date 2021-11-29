let S="asd" //исходная строка
console.log("строка для кодирования: ",S)

    codestr = []
    let k = 0 //счетчик
    let st = 0 //степень 2
    let zvezda = 0 //количество *

for(let i=0;i<S.length;i++) {
    let x = Number(S.charCodeAt(i))-36
    let str = ""
    while (x > 1) {
        str = x % 2+str
        x = Math.floor(x / 2)
    }
    str = x+str
    let dl=str.length
    for (let l = 0; l < 8 - dl;l++) {
        str = "0" + str
    }
console.log(Number(S.charCodeAt(i))-36, " ", str)
    //переводит строку в массив и вставляем * на места 2^n
    for (let j = 0; j < str.length; j++) {
        while (k === 2 ** st - 1) {
            codestr[k] = "*"
            st++
            k++
            zvezda++
        }
        codestr[k] = str[j]
        k++
    }
}

//заполняет массив нулями (длинной количество * в кодировании выше)
    let dopcode = [] //доп код (для замены *)
    for (let i = 0; i < zvezda; i++)
        dopcode[i] = 0

//переводим все номера элементов равных 1 в двоичную сс с количеством знаков равным кол-ву *
    for (let i = 0; i < codestr.length; i++) {
        if (codestr[i] === "1") {
            let x = i + 1
            let dvcode = "" //двоичный код текущего х
            while (x > 1) {
                dvcode += x % 2
                x = Math.floor(x / 2)
            }
            dvcode+=x

            if (dvcode.length < zvezda) {
                let dlinna = dvcode.length
                for (let j = 0; j < zvezda - dlinna; j++)
                    dvcode += "0"
            }

            //складываем в занулеванный массив в [0]-самый большой разряд двоичного числа и тд по конца
            for (let k = 0; k < dvcode.length; k++) {
                if (dvcode[k] === "1")
                    dopcode[k]++
            }
        }
    }

//проверяем на четность чет-0 нечет-1
    for (let i = 0; i < dopcode.length; i++) {
        if (dopcode[i] % 2 === 1)
            dopcode[i] = 1
        else dopcode[i] = 0
    }

//заменяем * на элементы доп массива и переписываем код в строку
    let k2 = 0 //счетчик
    let code = "" //конечный код строки (ответ 1)
    for (let i = 0; i < codestr.length; i++) {
        if (codestr[i] === "*") {
            codestr[i] = dopcode[k2]
            k2++
        }
        code += codestr[i]
    }
console.log("code: ",code)









let T=code
console.log("строка для декодирования: ",T)
let Tmus=[]
 zvezda=0

Tmus[0]=T[0]
for(let i=1;i<T.length;i++){
    Tmus[i]=T[i]
    if(2**(i-1)<=T.length && T.length<=2**i)
        zvezda=i
}

//заполняет массив нулями (длинной количество * в кодировании выше)
 dopcode = [] //доп код (для замены *)
for (let i = 0; i < zvezda; i++)
    dopcode[i] = 0

for (let i = 0; i < T.length; i++) {
    if (T[i] === "1") {
        let x = i + 1
        let dvcode = "" //двоичный код текущего х

        while (x > 1) {
            dvcode += x % 2
            x = Math.floor(x / 2)
        }
        dvcode+=x

        if (dvcode.length < zvezda) {
            let dlinna = dvcode.length
            for (let j = 0; j < zvezda - dlinna; j++)
                dvcode += "0"
        }

        //складываем в занулеванный массив в [0]-самый большой разряд двоичного числа и тд по конца
        for (let k = 0; k < dvcode.length; k++) {
            if (dvcode[k] === "1")
                dopcode[k]++
        }
    }
}

let dop="" //перевернем массив и запишем в строку
//проверяем на четность чет-0 нечет-1
for (let i = 0; i < dopcode.length; i++) {
    if (dopcode[i] % 2 === 1)
        dopcode[i] = 1
    else dopcode[i] = 0
    dop=dopcode[i]+dop
}

//перевод в десятичную сс
let dvast=0 //степень 2-ки
let x=0 //десятичное число
while(dop>0){
    x+=dop%10*2**dvast
    dvast++
    dop= Math.floor(dop / 10)
}

//исправили ошибку в кодировании
if(x!==0){
    if(Tmus[x-1]==="0")
    Tmus[x-1]="1"
    else
        Tmus[x-1]="0"
}

//декодирования
let uns=""
 st=0
for(let i=0;i<Tmus.length;i++){
    if(i+1!==2**st)
        uns+=Tmus[i]
    else
        st++
}



//console.log(dopcode)
//console.log(dop)
//console.log(x)
console.log("decode:", uns)

if(x!==0)
    console.log("ошибка в символе ",x)
else
    console.log("ошибок нет")



x=""
k=0
ans2=""
let flag=0
for(let i=0;i<uns.length;i++){
    while(uns[i]==="0" && flag===0){
        i++
        k++
    }
    if(uns[i]!=="0")
        flag=1
    x+=uns[i]
    k++
//console.log("x=",x," i=",i)
    let x1=0
    let st=0
    if(k===8){
        while (x>0){
            x1+=x%10*2**st
            st++
            x=Math.floor(x / 10)
        }
        x1+=36
        ans2+=String.fromCharCode(x1)
        flag=0
        k=0
        x=""
    }
}
console.log(ans2)