const person = {
    name: "Shubham"
};

function greet(age, city) {
    console.log(`Hello, my name is ${this.name}, I am ${age} years old, from ${city}`);
}

greet.call(person, 25, "Mumbai"); 

greet.apply(person, [25, "Mumbai"]);

const Greet1 = greet.bind(person, 25, "Mumbai");
Greet1();
