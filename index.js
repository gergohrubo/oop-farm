class Farm {
  constructor(name) {
    this.name = name
    this.crops = []
    this.animals = []
  }
  addCrop(crop) {
    this.crops.push(crop)
  }
  calculateIncome() {
    const incomeFromCrops = this.crops
    .map(crop => crop.getYieldInEuros())
    .reduce((a, b) => a + b, 0)
    const incomeFromAnimals = this.animals
    .map(animal => animal.getValueInEuros())
    .reduce((a,b) => (a+b), 0)
    console.log(`
----------------------
- Farm: FARM NAME    -
- No. of crops: ${this.crops.length}   -
- No. of animals: ${this.animals.length} -
- Total income: ${incomeFromCrops+incomeFromAnimals}€ -
- ${(this.animals.length) && ('Vegan farm!')}
----------------------`)
    return incomeFromCrops + incomeFromAnimals
  }
  addAnimal(animal) {
    this.animals.push(animal)
  }
}
module.exports.Farm = Farm