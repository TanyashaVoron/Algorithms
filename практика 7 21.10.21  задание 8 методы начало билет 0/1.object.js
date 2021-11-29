//Задание 1. Создать пользовательский объект Gruppa
//(использовать пример, представленный выше).
//Добавить метод sub_stud (исключить из группы k студентов).
// Создать несколько экземпляров объекта Gruppa (gr2, gr3, gr4).
// Применить методы add_stud и sub_stud к каждому экземпляру.
// Вывести на страницу количество студентов в каждой группе.
function Gruppa(n,spec,kolich){
    this.n=n
    this.spec=spec
    this.kolich=kolich

    this.add_stud=function add_stud(k){
        this.kolich+=k
        return("в группу"+this.n+"добавили "+k+" студентов")
    }

    this.sub_stud=function sub_stud(k){
        this.kolich-=k
        return("из группы"+this.n+"исключили "+k+" студентов")
    }
}

gr1=new Gruppa(2,"ИТиС",28)
gr1.add_stud(2)
gr1.sub_stud(5)
console.log(gr1.kolich)

gr2=new Gruppa(3,"ЯТП",35)
gr2.add_stud(2)
gr2.sub_stud(5)
console.log(gr2.kolich)

gr3=new Gruppa(24,"ОСи",102345)
gr3.add_stud(10)
gr3.sub_stud(20)
console.log(gr3.kolich)
