//PALINDROMA

/*
Acquisisco la parola
Inverto la parola
La confronto con la parola originariamente inserita
Se si equivalgono allora sono palindrome
*/

let message = 'La parola inserita NON è palindroma';

//Acquisisco la parola
const word = prompt('Inserire un parola: ').trim();

//Invoco la funzione per verificare che la parola sia palindroma
if(isPalindrome(word)) message = 'La parola inserita è palindroma';

console.log(message);
