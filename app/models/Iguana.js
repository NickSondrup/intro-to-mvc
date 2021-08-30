export class iguana{
  constructor(name, color, gender, weight, tailLengthInch, teethSize){
    this.name = name
    this.gender = gender
    this.weight = weight
    this.tailLenthInch = tailLengthInch
    this.teethSize = teethSize
  }
  eat(food){
    console.log(`yum yum yum ${food}ies is munched.`)
  }
}