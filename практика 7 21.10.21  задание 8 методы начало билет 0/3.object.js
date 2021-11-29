//задание 3
// Объект – обыкновенная дробь.
  //  Свойства: числитель, знаменатель.
  //  Методы:
// 1.	сокращение дроби;
// 2.	перевод дроби в десятичную дробь;
// 3.	выделение целой части.
function CommonFraction(numerator,denominator){
    this.numerator=numerator
    this.denominator=denominator

    this.reduction=function reduction(){
        let num=this.numerator
        let den=this.denominator
        for(let i=2;i<=numerator;i++){
            if(this.numerator % i === 0 && this.denominator % i === 0) {
                num = this.numerator / i
                den = this.denominator / i
            }
        }
        return num + "/" + den
    }

    this.Decimal=function Decimal(){
        return this.numerator/this.denominator
    }

    this.Div=function Div(){
        return (this.numerator - this.numerator % this.denominator) /this.denominator
    }
}

let Fraction=new CommonFraction(21,9)
console.log(Fraction.reduction())
console.log(Fraction.Decimal())
console.log(Fraction.Div())
