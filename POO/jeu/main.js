import { Personnage } from "./Model/Personnage.js";
import { Game } from "./Model/Game.js";

let myGame = new Game("Mon jeu");
myGame.play();

// let personnage1 = new Personnage("Doigby", 100, 85, "Guerrier");
// myGame.addPersonnage(personnage1);
// let personnage2 = new Personnage("Nasdas", 95, 105, "La Chienneté");
// myGame.addPersonnage(personnage2);
// let personnage3 = new Personnage("Gitans", 75, 115, "Lanceur de Nigloo");
// myGame.addPersonnage(personnage3);

let tabPlayers = myGame.getPersonnage();
let lose = false;

do {
  for (let i = 0; i < tabPlayers.length; i++) {
    const { numberAttaquant, numberVictime } = myGame.getPlayers();

    tabPlayers[numberAttaquant].attaquer(
      tabPlayers[numberAttaquant],
      tabPlayers[numberVictime],
      80
    );
    // lose =
    //   tabPlayers[numberAttaquant].getPointsDeVie <= 0 ||
    //   tabPlayers[numberVictime].getPointsDeVie() <= 0;

    console.log(tabPlayers);
    tabPlayers = myGame.updatePlayers(
      tabPlayers[numberAttaquant],
      tabPlayers[numberVictime]
    );
    lose = tabPlayers.some((player) => player.getPointsDeVie() <= 0); // true ou false

    if (lose) {
      alert(`${tabPlayers[numberVictime].getName()} CHEH T'ES MORT!`);
      break;
    }

    console.log(tabPlayers);
    // console.log(tabPlayers[numberAttaquant]);
    // console.log(tabPlayers[numberVictime]);
  }
} while (!lose);
