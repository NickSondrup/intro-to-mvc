export class whale{
  constructor(name, color, gender, weight, tailLengthInch, teethSize){
    this.name = name
    this.color = color
    this.weight = weight
    this.gender = gender 
    this.tailLengthInch = tailLengthInch
    this.teethSize = teethSize
  }
  eat(food){
    console.log(`yum yum yum ${food}ies is munched.`)
  }
}