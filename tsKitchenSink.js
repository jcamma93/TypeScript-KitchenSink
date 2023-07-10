var myName = 'Jesse';
console.log(myName);
var stateCount = 50;
console.log("There are " + stateCount + " states in the U.S.");
var sum = (5 + 4);
console.log("Sum of 5+4 = " + sum);
function sayHello() {
    return 'Hello World!';
}
;
console.log(sayHello());
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page.");
    }
    else {
        alert("Welcome, " + name + "!");
    }
}
;
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
var vegetables = ["corn", "cauliflower", "peppers", "onions", "scallions"];
for (var i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i]);
}
;
var myPet = {
    name: "Boots",
    breed: "cat"
};
console.log("My pet's name is " + myPet.name + " and he is a " + myPet.breed + ".");
var person1 = {
    name: "Nicole",
    age: 20
};
var person2 = {
    name: "Zach",
    age: 30
};
var person3 = {
    name: "Peter",
    age: 19
};
var person4 = {
    name: "Jay",
    age: 21
};
var person5 = {
    name: "Maria",
    age: 30
};
var people = [person1, person2, person3, person4, person5];
console.log(people);
for (var i = 0; i < people.length; i++) {
    alert(checkAge(people[i].name, people[i].age));
}
;
var str = "Hello World";
function getLength(string) {
    if (str.length % 2 == 0) {
        console.log(str.length + ", The world is nice and even.");
    }
    else {
        console.log(str.length + ", The world is an odd place.");
    }
}
;
getLength(str);
