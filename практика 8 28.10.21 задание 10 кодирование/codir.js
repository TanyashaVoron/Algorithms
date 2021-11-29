let readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Введите строку для кодирования: ", (str) => {

    let alphch = []
    let N_alphch = 0
    for (let i = 0; i < str.length; i++) {

        if (alphch[str.charAt(i)])
            alphch[str.charAt(i)]++
        else {
            alphch[str.charAt(i)] = 1
            N_alphch++
        }
    }

    //console.log("алфавит",alphch)
    //console.log("N_alphch= ",N_alphch) //мощность алфавита

    let n = Math.trunc(Math.log2(N_alphch))+1 //количество знаков в числе
    //console.log("n=",n)

    let i = 0
    for (key in alphch) {
        let kod = i.toString(2) //перевели в двоичную СС
        //console.log("i=",i," kod=",kod)
        if (kod.length < n) { //дописываем нужное количество 0 в начало
            let p=kod.length
            for (let j = 0; j < n - p; j++)
                kod = "0" + kod
        }
        alphch[key] = kod //меняем количество вхождений на двоичный код
        i++
        //console.log("i=",i," key=", alphch[key])
    }
    console.log("Коды символов ", alphch)

    let code = ""
    for (let i = 0; i < str.length; i++) {
        for (key in alphch) {
            if (key === str[i])
                code += alphch[key]
        }
    }
    console.log("Закодированная строка: ", code)

    rl.question("Введите строку для декодирования: ", (str2) => {
        rl.close()
        let decode=""
        let k=-1

        for (let i=0;i<str2.length;i+=n){
            let s=""

            for(let j=0;j<n;j++){
                k++
                s+=str2[k]
                //console.log(s," ",k)
            }

            for(key in alphch){
                if (alphch[key]===s)
                    decode+=key
            }
            //console.log(s," ",i)
        }
        console.log("Декодированная строка: ",decode)
    })
})

