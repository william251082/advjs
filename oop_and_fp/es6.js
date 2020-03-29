// class is blueprint of wht you want to create
// underneath the hood calls is still using prototype
class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    // constructor gets ran everything the new keyword is used
    // attack is shared among other instances
    // that would take up too much memory space
    // one function in one location
    attack() {
        return 'attack with ' + this.weapon
    }
}

const fiona = new Elf('Fiona', 'ninja stars');
console.log(fiona instanceof Elf); //

const ben = new Elf('Ben', 'bow');
console.log(fiona.attack());
