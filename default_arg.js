// JS DOC : https://jsdoc.app/
// valeurs par défaut
/**
 *
 * Calcul du prixTTC en fonction du nombre d'articles
 * et du pris unitaire
 *
 * Le taux de TVA est facultatif => 20% par défaut
 *
 * @param {number} prixUnitaire
 * @param {number} nombreArticle
 * @param {number} tauxTVA
 * @returns {number} prix TTC calculé
 *
 * @author Carpentier Léo <carpentierleo2001@gmail.com>
 */
const calculTTC = (prixUnitaire, nombreArticle, tauxTVA = 20) => {
  // valeur par défaut tva = 20
  const prixTTC =
    nombreArticle * (prixUnitaire + (prixUnitaire * tauxTVA) / 100);
  return prixTTC;
};

const prix = calculTTC(10, 5, 20);
console.log(prix);
