// Structures de contrôle de flux
// let age = 16;
// let textAfficher = "Vous êtes";
// if (age < 18) {
//   console.log(textAfficher + " mineur");
// } else {
//   console.log(`${textAfficher} majeur`);
// }

let couleur = "";
if (couleur === "rouge") {
  console.log("Danger!");
} else if (couleur === "vert") {
  console.log("Succès!");
} else if (couleur === "bleu") {
  console.log("Info!");
} else if (couleur === "orange") {
  console.log("Attention!!");
} else {
  console.log("Pas de couleurs");
}

switch (couleur) {
  case "rouge":
    console.log("Danger!");
    break;
  case "vert":
    console.log("Succès!");
    break;
  case "blue":
    console.log("Info!");
    break;
  case "orange":
    console.log("Attention!");
    break;
  default:
    console.log("Pas de couleur!");
    break;
}
