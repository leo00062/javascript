import { Personnage } from "./Model/Personnage.js";

let personnage1 = new Personnage("Arouf", 15, 10, "Guerrier");
let personnage2 = new Personnage("Mimie Mathy", 100, 60, "Archer");

console.log("PDV: ", personnage1.getPointsDeVie());
console.log("Force: ", personnage1.getForce());

personnage1.attaquer(personnage1, personnage2, 5);

console.log("PDV: ", personnage1.getPointsDeVie());
console.log("Force: ", personnage1.getForce());
