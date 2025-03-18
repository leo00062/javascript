// Model
class Person {
  // propriétés en private
  #age;
  #nom;
  #prenom;
  #metier;
  #taille;

  constructor(nom, age, prenom, metier, taille) {
    this.#age = age;
    this.#nom = nom;
    this.#prenom = prenom;
    this.#metier = metier;
    this.#taille = taille;
  }
  // parler() {
  //   console.log(
  //     Bonjour je m'apelle ${this.#prenom} ${this.#nom} , j'ai ${
  //       this.#age
  //     } ans , Je suis actuellement ${this.#metier} .
  //   );
  // }

  toString() {
    return `Bonjour, je m'apelle ${this.#prenom} ${this.#nom} , j'ai ${
      this.#age
    } ans , Je suis actuellement ${this.#metier} .`;
  }

  //setters
  setAge(newAge) {
    this.#age = newAge;
  }
  //getters
  getAge() {
    return this.#age;
  }
}

let john = new Person("Carpentier", 23, "Léo", "etudiantDWWM", 177);
console.log(`${john}`);
// john.parler();
// console.log(john.getAge());
john.setAge(23);
console.log(john);
