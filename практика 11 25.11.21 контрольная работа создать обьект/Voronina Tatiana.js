function lineWords(arrayOfWords) {
    this.arrayOfWords=arrayOfWords.split(" ")

    this.wordCount=function wordCount(){
        let array=this.arrayOfWords
        return array.length
    }

    this.capitalLetter=function capitalLetter(){
        let array=this.arrayOfWords
        let ans=[]
        k=0
        for(let i=0;i<array.length;i++){
            let s=array[i]
            let x=s.charCodeAt(0)
            if ((x>64 && x<91) || (x>1039 && x<1072)){
                ans[k]=i
                k++
            }
        }
        return ans
    }

    this.palindrome=function palindrome(){
        let array=this.arrayOfWords
        let s=""
        for(let i=0;i<array.length;i++) {
            s += array[i]
        }
        let T=""
        for(let i=0;i<s.length;i++){
            let x=s.charCodeAt(i)
            if ((x>64 && x<91) || (x>1039 && x<1072)){
                T+=String.fromCharCode(s.charCodeAt(i)+32)
            }else
                T+=s[i]
        }
        let flag=0
        let i2=T.length-1
        for(let i1=0;i1<T.length;i1++){
            if(T[i1]!==T[i2])
                flag=1
            i2--
        }
        if(flag===0)
          return "Да"
        else
            return "Нет"
    }
}

let readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Введите строку для кодирования: ", (str) => {

    let F=new lineWords(str)
    console.log("массив строки: ",F.arrayOfWords)
    console.log("количество слов в строке: ",F.wordCount())
    console.log("номера слов, начинающихся с заглавной буквы (нумерация с 0): ",F.capitalLetter())
    console.log("является ли строка палиндромом? Ответ:",F.palindrome())
})