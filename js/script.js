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

//PARI O DISPARI

//Resetto la variabile message
message = 'Hai perso'

//Dichiaro le variabili e acqusisco le informazioni dell'utente
const max = 5;
const choice = prompt('Pari o dispari?').trim();
const userNumber = parseInt(prompt('Inserire un numero da 1 a 5: '));

//Genero un numero casuale da 1 a 5 utilizzando una funzione
const computerNumber = randomNumber(1,5);

const sum = userNumber + computerNumber;


//Verifico se la somma dei due numeri è pari o dispari, e se l'utente ha vinto o perso in base alla sua scelta
if((isOdd(sum) && choice.toLowerCase() == 'dispari') || (!isOdd(sum) && choice.toLowerCase() == 'pari')) message = 'Hai vinto';

console.log(message);



