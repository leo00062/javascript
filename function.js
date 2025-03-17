let nombre1 = 12;
let nombre2 = 34;

let result1 = nombre1 + nombre2;
// console.log(result1);

let nombre3 = 34;
let nombre4 = 78;

let result2 = nombre3 + nombre4;
// console.log(result2);

let nombre5 = 84;
let nombre6 = 98;

let result3 = nombre5 + nombre6;
// console.log(result3);

// le mot clé 'function', un nom, éventuellement un ou plusieurs argument et ou retour
// function nom () {}:

function addition(nombre5, nombre6) {
  let result = nombre5 + nombre6;
  return result;
}

// appel de la fonction addition
// console.log(addition(5, 9));
// console.log(14);

function sayHello(firstName, lastName) {
  // let result `Hello ` + firstName + ` ` + ` ` + lastName;
  let result = `hello ${firstName} ${lastName}`;
  console.log(result);
}

// sayHello("John", "Doe"); // --> 'Bonjour John Doe!'
// sayHello("Toto", "Tata"); // --> 'Bonjour Toto Tata!'

// fonction anonyme
let direBonjour = function (firstName, lastName) {
  let result = `hello ${firstName} ${lastName}`;
  console.log(result);
};
// direBonjour("John", "Doe");

// ES15 : Fonctions flèchées
function sayHello(firstName, lastName) {
  // let result `Hello ` + firstName + ` ` + ` ` + lastName;
  let result = `hello ${firstName} ${lastName}`;
  console.log(result);
}

let sayHello2 = (firstName, lastName) => {
  let result = `hello ${firstName} ${lastName}`;
  console.log(result);
};

// sayHello("John", "Doe"); // fonction normale
// sayHello2("Toto", "Tata"); // fonction flèchée

function addition(nombre5, nombre6) {
  let result = nombre5 + nombre6;
  return result;
}
// Arrow function

let addition1 = (nombre5, nombre6) => {
  let result = nombre5 + nombre6;
  return result;
};
// équivalent raccourci
let addition4 = (a, b) => a + b; // accolades facultatives
// console.log(addition(5, 8)); // 13

let numbers = [4, 8, 9, 16, 17];

const newNumbers = numbers.filter((number) => number > 5); // conditions remplie
const newNumbers2 = numbers.map((number) => number * 2); //  calculs

// a:valeur de départ, b: accumulateur
const newNumbers3 = numbers.reduce((a, b) => a + b);

numbers.push(67);
numbers.pop();
// let firstName = "toto";
// const firstNumber = numbers.shift();
numbers.forEach((number) => console.log(number));
// console.log(firstNumber);
console.log(numbers.includes(16));
console.log(numbers.join("|"));
console.log(numbers.slice(-1)); // dernier élément
console.log(numbers.pop()); // dernier élément
