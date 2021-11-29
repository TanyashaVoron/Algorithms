//let fso1 = require("fs")
//let str = fso1.readFileSync("./input.txt", {encoding: "utf-8", flag: "r"})

function f(str) {

    let alp = "1234567890"
    let code = "";
    let stack = []; //накабливаем знаки в скобках
    let s = ""
    const prioritet = {"+": 0, "-": 0, "*": 1, "/": 1}

    for (let i = 0; i < str.length; ++i) {
        const x = str.charAt(i)

        if (alp.includes(str[i]) || str[i]===".")  //если число
            s += x //накапливаем число
        else {
            if (s !== "") s += " "
            code += s
            s = ""
            if (x === "(")
                stack.push(x)

            if (x === ")") {
                let s = stack.pop()

                while (s !== "(" && s) {
                    code += s + " "
                    s = stack.pop()
                }
            }
            if (x !== "(" && x !== ")") {
                while (prioritet[stack.slice(-1)[0]] >= prioritet[x]) {
                    //console.log("code=", code, " ", prioritet[stack.slice(-1)[0]], " ", prioritet[x])
                    code += stack.pop() + " "
                    //console.log("code=", code)
                }
                stack.push(x)
            }
        }
        //console.log("stack=",stack)
    }
    if (s !== "") s += " "
    code += s

    let sym = ''
    while (sym = stack.pop())
        code += sym + " "

    console.log(code)

    let stak2 = []
    x = ""
    for (let i = 0; i < code.length; i++) {
        if (code[i] === " ")
            i++

        while (alp.includes(code[i]) || code[i]===".") {
            x += code[i]
            i++
        }

        if (x !== "") {
            x = Number(x)
            stak2.push(x)
            x = ""
        }

        if (code[i] === "+" || code[i] === "*" || code[i] === "/" || code[i] === "-") {
            let k
            if (code[i] === "+")
                k = stak2.pop() + stak2.pop()

            if (code[i] === "-")
                k = -stak2.pop() + stak2.pop()

            if (code[i] === "*")
                k = stak2.pop() * stak2.pop()

            if (code[i] === "/")
                k = 1 / stak2.pop() * stak2.pop()
            stak2.push(k)
        }
    }
    return stak2[0]
}

console.log("Пример 1: (8+2*5)/(1+3*2-4)-5+(9/(1+2)+1)*3")
console.log("Ответ: ",f("(8+2*5)/(1+3*2-4)-5+(9/(1+2)+1)*3"))

console.log("Пример 2: ((7-6.35)/6.5+9.9)/((1.2/36+1.2/0.25-21/16)/(169/24))")
console.log("Ответ: ",f("((7-6.35)/6.5+9.9)/((1.2/36+1.2/0.25-21/16)/(169/24))"))

console.log("Пример 3: ((13.75+9+1/6)*1.2)/((10.3-8-1/2)*(5/9))+((6.8-3-3/5)*(35/6))/((3+2/3-3-1/6)*56)-27-1/6 ")
console.log("Ответ: ",f("((13.75+9+1/6)*1.2)/((10.3-8-1/2)*(5/9))+((6.8-3-3/5)*(35/6))/((3+2/3-3-1/6)*56)-27-1/6 "))
