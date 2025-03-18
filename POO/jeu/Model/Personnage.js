export class Personnage {
  #nom;
  #pointsDeVie;
  #force;
  #categorie;
  constructor(nom, pointsDeVie, force, categorie) {
    this.#nom = nom;
    this.#pointsDeVie = pointsDeVie;
    this.#force = force;
    this.#categorie = categorie;
  }
  attaquer(attaquant, victime, nombre) {
    attaquant.setPointsDeVies(nombre * 2);
    victime.perteVie(nombre);
  }
  setPointsDeVies(nombre) {
    this.#pointsDeVie += nombre;
  }
  perteVie(nombre) {
    this.#pointsDeVie -= nombre;
    this.#force -= 5;
  }
  getPointsDeVie() {
    return this.#pointsDeVie;
  }
  getForce() {
    return this.#force;
  }
}
