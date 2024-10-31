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
*/



// bind method to class

const personContainer = document.getElementById('app');

class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;

        // binding the method to this class for the listner
        this.sayHi = this.sayHi.bind(this);

        this.element= document.createElement('div');
        this.element.innerText = 'Person';
        this.element.classList.add('person');

        this.element.addEventListener('click', this.sayHi);

        personContainer.appendChild(this.element);

    }


    sayHi(){
        //console.log(this);
        this.element.classList.toggle('personActive');
       this.element.innerText=`Hello, my name is ${this.name} and i am ${this.age} years old`;
       this.element.removeEventListener('click', this.sayHi);
    }

}

new Person('ib', 25);
new Person('keld', 12);
new Person('søren', 45);
new Person('bolette', 345);




