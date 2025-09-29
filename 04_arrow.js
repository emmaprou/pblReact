
/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est explicite
 * 
 * contrainte: 
 *   - le mot clée "function" est interdis
 */

let arrow1 = (p) =>  { return p + 1 } ;

/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est implicite
 * 
 * contrainte: 
 *   - le mot clée "function" est interdis
 *   - le mot clée "return" est interdis
 */

let arrow2 = (p) => p + 1;

module.exports = {arrow1, arrow2};