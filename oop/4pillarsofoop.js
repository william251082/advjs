// encapsulation --wrap code into boxes that are related to one another
// abstraction --hiding the complexity from the user, reduces complexity
// inheritance --avoid rewriting the same code and save memory space by having shared methods

// polymorphism --many forms --ability to call the same method on different object and each object responding in different way
// for example
class Character {
    #age = 12;
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'attack with ' + this.weapon + this.#age;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        // console.log('what am i?', this); this gives an error
        super(name, weapon);
        console.log(this); // will run the constructor of parent class
        console.log('what am i?', this);
        this.type = type;
    }

    attack(cry) {
        return 'attack with ' + cry;
    }
}

class Ogre extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makeFort() { // this is like extending our prototype.
        return 'strongest fort in the world made'
    }
    attack() {
        return 'arghhhh';
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
const shrek = new Ogre('Shrek', 'club', 'green');
console.log(dolby.attack('weee'));
console.log(shrek.attack());

// method overwriting --editing method
// method overloading --adding extra features and params to the method


// problem
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'atack with ' + this.weapon
    }
}
//Polymorphism--
//Extend the Character class to have a Queen class. The output of the below code should be:
const victoria = new Queen('Victoria', 'army', 'hearts'); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'

victoria.attack() // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '


//solution
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return 'atack with ' + this.weapon
    }
}

class Queen extends Character {
    constructor(name, weapon, kind) {
        super(name, weapon)
        this.kind = kind;
    }
    attack() {
        console.log(super.attack());
        return `I am the ${this.name} of ${this.kind}, now bow down to me! `
    }
}

const victoria = new Queen('Victoria', 'army', 'hearts');
victoria.attack()
