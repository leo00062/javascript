import { Personnage } from "./Personnage.js";

export class Game {
  #nom = "";
  #personnages = [];
  constructor(nom) {
    this.#nom = nom;
  }

  play() {
    let numberOfPlayer = parseInt(prompt("Combien de joueur : "));
    for (let i = 0; i < numberOfPlayer; i++) {
      let nom = prompt("Nom :");
      let pv = parseInt(prompt("Pv :"));
      let force = parseInt(prompt("Force :"));
      let categorie = prompt("Categorie :");
      let newPlayer = new Personnage(nom, pv, force, categorie);
      this.#personnages.push(newPlayer);
    }
  }

  getPlayers() {
    let txt = "";
    for (let i = 0; i < this.#personnages.length; i++) {
      txt += `${i + 1} - ${this.#personnages[i].getName()}\n`;
    }

    let numberAttaquant =
      prompt(`Saisir le numéro de l'attaquant : \n${txt}`) - 1;
    const regexindexOfVicAtt = new RegExp(
      `^[0-${this.#personnages.length - 1}]$`
    );
    console.log(regexindexOfVicAtt);
    while (!regexindexOfVicAtt.test(numberAttaquant)) {
      numberAttaquant = prompt(`Saisir un chiffre dans la liste :\n${txt}`) - 1;
    }

    let numberVictime =
      parseInt(prompt(`Saisir le numéro de victime :\n${txt}`)) - 1;
    let promptPlayers = { numberAttaquant, numberVictime };
    return promptPlayers;
    // return promptPlayers;
  }

  updatePlayers(attaquant, victime) {
    for (let player of this.#personnages) {
      if (attaquant.getName() === player.getName()) {
        player = attaquant;
      }
      if (victime.getName() === player.getName()) {
        player = victime;
      }
    }
    return this.#personnages;
  }

  addPersonnage(newPersonnage) {
    this.#personnages.push(newPersonnage);
  }

  getPersonnage() {
    return this.#personnages;
  }
}
