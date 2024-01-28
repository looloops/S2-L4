/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("ESERCIZIO 1");
function area(l1, l2) {
  const areaRettangolo = l1 * l2;
  return areaRettangolo;
}

console.log(area(2, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("ESERCIZIO 2");

function crazySum(num1, num2) {
  let sum;
  if (num1 === num2) {
    sum = (num1 + num2) * 3;
  } else {
    sum = num1 + num2;
  }

  return sum;
}
const firstNum = 33;
const secondNum = 8;
console.log("La somma dei due numeri è " + crazySum(firstNum, secondNum));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log("ESERCIZIO 3");

function crazyDiff(number) {
  let absoluteDiff = Math.abs(number - 19);
  if (number > 19) {
    absoluteDiff = absoluteDiff * 3;
    console.log(number + " è maggiore di 19. La differenza assoluta moltiplicata per 3 è " + absoluteDiff);
  } else {
    console.log("La differenza assoluta è " + absoluteDiff);
  }
}

crazyDiff(firstNum);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log("ESERCIZIO 4");

function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true;
  } else {
    console.log(n + "non è compreso tra 20 e 100 (incluso) e non è neanche uguale a 400");
  }
}

console.log(boundary(firstNum));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

console.log("ESERCIZIO 5");

function epify(str) {
  if (!str.startsWith("EPICODE")) {
    str = "EPICODE " + str;
  }
  console.log(str);
}

const caratteri = "is wow";
epify(caratteri);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

console.log("ESERCIZIO 6");

function check3and7(posNum) {
  if (posNum % 3 === 0 || posNum % 7 === 0) {
    return posNum + " è un multiplo di 3 o di 7";
  } else {
    return posNum + " non è un multiplo di 3 o di 7";
  }
}

console.log(check3and7(firstNum));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
console.log("ESERCIZIO 7");
// Metodo lungo:

function reverseString(str) {
  let stringArray = str.split("");
  let reversedArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    reversedArray.unshift(stringArray[i]);
  }
  console.log(stringArray);
  return reversedArray.join("");
}

let revStr1 = "HappyCode everyone";
console.log(reverseString(revStr1));

//Metodo con reverse

function reverseString(str) {
  let stringArray = str.split("").reverse("").join("");
  return stringArray;
}

let revStr2 = "HappyCode everyone";
revStr2 = reverseString(revStr2);
console.log(revStr2);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
console.log("ESERCIZIO 8");

function upFirst(str) {
  for (let b = 0; b < str.length; b++) {
    let firstCharUpperCase = str[b][0].toUpperCase();
    str[b] = str[b].replace(str[b][0], firstCharUpperCase);
  }

  return str.join(" ");
}

let originalString = "ma come si fa?";
let arrString = originalString.split(" ");
console.log(arrString);

console.log(upFirst(arrString));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log("ESERCIZIO 9");

function cutString(str) {
  cutStr = str.substring(1, str.length - 2);
  return cutStr;
}

textToCut = "Sunday";

cutText = cutString(textToCut);
console.log(cutText);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log("ESERCIZIO 10");
let casualNumbers = [];

function giveMeRandom(n) {
  i = 1;
  while (i <= n) {
    casualNumbers.push(Math.floor(Math.random() * 10));
    i++;
  }
  return casualNumbers;
}

const howMany = 12;
giveMeRandom(howMany);
console.log(casualNumbers);
