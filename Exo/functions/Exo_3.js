let numbers = [4, 8, 12, 16, 20];
let numbers1 = [6, 12, 18, 24, 30];
let numbers2 = [8, 16, 24, 32, 40];

function sommeTableau(monTableau) {
  let somme = 0;
  for (valeur of monTableau) {
    somme = somme + valeur;
  }
  return somme;
}
console.log(sommeTableau(numbers2));

// ------------------ => ---------------------

const sommeTableau2 = (array) => {
  const somme = array.reduce((a, b) => a + b);
  return somme;
};
console.log(sommeTableau(numbers));
