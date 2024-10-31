// write cool JS hwere!!

// a simple class with props

/* class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

}

let person = new Person('John', 25);

console.log(person);
console.log(person.name);
console.log(person.age); 



// private properties
class Person{
#age
        constructor(name, age){
        this.name = name;
        this.#age = age;
    }

    //getter
    get age(){
        return this.#age;
    }

    set age(value){
        if(value < 0){
            console.log('Age cannot be negative');
            return;
        }
        this.#age = value;
    } 

}

let person = new Person('John', 25);

console.log(person);
console.log(person.name);
console.log(person.age);

person.age = 30;
console.log(person.age);

*/

class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
        //this.#sayHi();
    }

    #sayHi(){
        console.log(`Hello, my name is ${this.name}`);
    }

}

let person = new Person('John', 25);

console.log(person);

person.sayHi();