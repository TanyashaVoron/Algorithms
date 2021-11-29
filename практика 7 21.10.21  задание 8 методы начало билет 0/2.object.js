//Задание 2.
// Создайте функцию AddString(obj), которая к строковым свойствам
// объекта obj добавляет строку «Это строка.».
function obj(width,height,title){
    this.width=width
    this.height=height
    this.title=title
}


str=new obj(200,300,"My menu")

function AddString(obj) {
    for (let i in obj) {
        if (typeof obj[i] == "string") {
            obj[i] += " Это строка."
        }
    }
}
console.log(str)
AddString(str)
console.log(str)














/*let a=obj[i];
           a+=" Это строка."
           delete obj[i]
           obj[i]=a*/