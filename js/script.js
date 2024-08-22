//PALINDROMA

/*
Acquisisco la parola
Inverto la parola
La confronto con la parola originariamente inserita
Se si equivalgono allora sono palindrome
*/

/*let message = 'La parola inserita NON è palindroma';

//Acquisisco la parola
const word = prompt('Inserire un parola: ').trim();

//Invoco la funzione per verificare che la parola sia palindroma
if(isPalindrome(word)) message = 'La parola inserita è palindroma';

console.log(message);

//PARI O DISPARI

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
*/


const max = 5;
const userNumber = prompt('Inserire un numero da 1 a 5: ');
const computerNumber = randomNumber(1,5);

console.log(computerNumber);
