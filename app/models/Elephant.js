export class elephant{
  constructor(name, color, gender, weight, tailLengthInch, teethSize){
    this.name = name
    this.color = color
    this.gender = gender
    this.weight = weight
    this.tailLengthInch = tailLengthInch
    this.teethSize = teethSize
  }
  eat(food){
    console.log(`yum yum yum ${food}ies is munched.`)
  }
}
