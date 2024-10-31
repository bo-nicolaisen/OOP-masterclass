

// extends and super keywords
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        
    }

    sayHi(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

let person = new Person('John', 25);

person.sayHi();


class Professional extends Person{

    constructor(name, age,profession){
       super(name, age);
        this.occupation=profession;
    }

    sayOccupation(){
        console.log(`Hello, my name is ${this.name} and I am a ${this.occupation}`);
    }

}

let prof = new Professional('ib', 25,"Programmer");

console.log(prof);

prof.sayHi();
prof.sayOccupation();




// polymorphism

class Professor extends Person{
    constructor(name, age, specialization){
        super(name, age);
        this.occupation = specialization;
    }

    sayHi(){
        console.log(`Hello, I am a professor specializing in ${this.occupation} and my name is ${this.name}`);
    }
}

let professor = new Professor('ib', 25,"atomfysik");

console.log(professor);

professor.sayHi();
