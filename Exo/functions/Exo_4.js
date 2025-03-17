// Exercice 4 :
// Créer une function qui prends un tableau d'âges en entrée et qui retourne
// le nombre de personnes majeures

const tabOfAges = [5, 8, 10, 12, 15, 18, 23, 45, 86, 89, 76, 34, 25, 66];
const tabOfAges2 = [5, 8, 10, 12, 13, 15, 16, 84, 86, 92, 95, 100];
const tabOfAges3 = [25, 28, 32, 36, 48, 45, 49, 67, 85, 74, 69, 99, 44];

// const newTabOfAges = tabOfAges.filter((age) => age > 18);
function nombreOfAdultes(monTableau) {
  const newTab = [];
  for (age of monTableau) {
    if (age > 18) {
      newTab.push(age);
    }
  }
  return newTab.length;
}

console.log(nombreOfAdultes(tabOfAges)); //8
console.log(nombreOfAdultes(tabOfAges2)); //5
console.log(nombreOfAdultes(tabOfAges3)); //13

// nombreOfAdultes(tabOfAges); //3
// nombreOfAdultes(tabOfAges2); //2
