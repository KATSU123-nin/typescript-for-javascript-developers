(function () {

class AnimalName {
    constructor(animalName) {
        this.animalName = animalName;
    }

    profile() {
        return `これは${animalName}です。`;
    }
}
    
    const animal = new AnimalName("dog");
    console.log(animal);

})();
