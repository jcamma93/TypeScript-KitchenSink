const myName: string = 'Jesse';
console.log(myName);
const stateCount: number = 50;
console.log("There are " + stateCount + " states in the U.S.")
let sum: number = (5 + 4);
console.log("Sum of 5+4 = " + sum);


function sayHello(): string {
    return 'Hello World!'
};

console.log(sayHello());


function checkAge(name: string, age: number) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page.")
    } else {
        alert("Welcome, " + name + "!");
    }
};

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

let vegetables: string[] = ["corn", "cauliflower", "peppers", "onions", "scallions"];

for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
};

interface pet {
    name: string,
    breed: string
}

let myPet: pet = {
    name: "Boots",
    breed: "cat"
};

console.log("My pet's name is " + myPet.name + " and he is a " + myPet.breed + ".");

interface person {
    name: string,
    age: number
}

let person1: person = {
    name: "Nicole",
    age: 20
};

let person2: person = {
    name: "Zach",
    age: 30
};

let person3: person = {
    name: "Peter",
    age: 19
};

let person4: person = {
    name: "Jay",
    age: 21
};

let person5: person = {
    name: "Maria",
    age: 30
};

let people: person[] = [person1, person2, person3, person4, person5];
console.log(people)

for (let i=0; i < people.length; i++) {
    alert(checkAge(people[i].name, people[i].age));
};

let str = "Hello World";

function getLength(string: string) {
    if (str.length %2 == 0) {
        console.log(str.length + ", The world is nice and even.");
    } else {
        console.log(str.length + ", The world is an odd place.")
    }
};

getLength(str);