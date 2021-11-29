let fs = require('fs')
let stroka =String(fs.readFileSync('./code.txt'))
let uns =''
let j=0
let number ='0123456789'
for(let i=0; i<stroka.length;i++ ) {
    if(number.includes(stroka[i])) { //если символ число
        if (j !==0) {
            j=j*10+Number(stroka[i]) //и уже в J что-то есть
        } else
            j+=Number(stroka[i]) //если нет
    } else {
        if(j !==0) {                           //если символ не число
            for(count=1;count <=j;count++)    //выводим J раз символ
                uns += stroka.charAt(i)
            j=0
        } else
            uns += stroka.charAt(i) //иначе ввыводим 1 символ
    }
}
fs.writeFileSync("decode.txt",uns)