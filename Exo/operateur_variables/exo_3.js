let prenom = "Jean";
let nom = "luc";
let age = 30;
let nomComplet =
  "Bonjour je m'apelle " + prenom + " " + nom + " et j'ai " + age + " ans.";
// Templates littérals
let nomComplet2 = `Bonjour je m'apelle ${prenom} ${nom} et j'ai ${age} ans.`;

console.log(nomComplet);
console.log(nomComplet2);
