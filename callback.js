// fonction de rappel
function salutation(name) {
  alert("Bonjour " + name);
}

function processUserInput(callback) {
  var nom = prompt("Entrez votre nom.");
  callback(nom);
}

processUserInput(salutation);
