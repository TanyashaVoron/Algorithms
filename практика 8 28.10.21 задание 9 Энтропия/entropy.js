let readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Введите текст: ", (str) => {
    rl.close()
    let uns=0
    let alphch=[]
    for(let i=0;i<str.length;i++) {
        if (alphch[str.charAt(i)])
            alphch[str.charAt(i)]++
        else
            alphch[str.charAt(i)] = 1
    }
    console.log("алфавит",alphch)

    for(let a in alphch){
        let n=Object.keys(alphch).length
        let N=str.length
        let ni=alphch[a]
        let pi=ni/N
        uns+=-pi*Math.log(pi)/Math.log(n)
        //console.log(n," ",N," ",ni," ",pi," ",uns)
    }
    console.log("Энтропия=",uns)
})
