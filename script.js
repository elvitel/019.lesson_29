class Person {
    name;
    gender;
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Flat {
    persons = [];
    
    addPerson(person) {
        this.persons.push(person);
    }
}

class House {
    flats = [];
    maxFlats;
    constructor(maxFlats) {
        this.maxFlats = maxFlats;
    }

    addFlat(flat) {
        if (this.flats.length < this.maxFlats) {
            this.flats.push(flat);
        } else {
            console.log('Максимальна кількість квартир перевищена.');
        }        
    }
}

let person1 = new Person('Ann', 'female');
let person2 = new Person('Bob', 'male');
let person3 = new Person('Mary', 'female');
let person4 = new Person('John', 'male');
let person5 = new Person('Charles', 'male');
let person6 = new Person('Jane', 'female');

let flat1 = new Flat();
let flat2 = new Flat();
let flat3 = new Flat();

flat1.addPerson(person1);
flat1.addPerson(person2);
flat2.addPerson(person3);
flat2.addPerson(person4);
flat3.addPerson(person5);
flat3.addPerson(person6);

let house = new House(3);
house.addFlat(flat1);
house.addFlat(flat2);
house.addFlat(flat3);

