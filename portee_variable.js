// portee des variables
var age = 10; // portee globale

if (age > 5) {
  let age = 12;
}

let nombre = 10;
const NOMBRE = 10; // on ne peut pas chnager la valeur

nombre = 15;
NOMBRE = 15;

console.log(nombre);
console.log(nombre1);

// function afficherAge() {
//   var age = 12;
//   console.log(`Vous avez ${age} ans`);
// }
// afficherAge();

// variable qui est prévue pour stocker une valeur qui sera modifié => let
// autre chose => const
