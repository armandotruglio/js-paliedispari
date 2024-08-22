//PALINDROMA

/*
Acquisisco la parola
Inverto la parola
La confronto con la parola originariamente inserita
Se si equivalgono allora sono palindrome
*/

//Acquisisco gli elementi del DOM
const form = document.getElementById('palindrome-form');
const resultWord = document.getElementById('word');
const reusltMessage = document.getElementById('result-palindrome');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const word = resultWord.value.trim();

    let message = 'La parola inserita NON è palindroma';
    //Invoco la funzione per verificare che la parola sia palindroma
    if (isPalindrome(word)) message = 'La parola inserita è palindroma';

    reusltMessage.innerText = message;
})


//PARI O DISPARI

//Dichiaro le variabili e acqusisco le informazioni dal DOM
const max = 5;
const formEvenOdd = document.getElementById('even-odd-form')
const resultUserChoice = document.getElementById('even-odd');
const resultUserNumber = document.getElementById('number');
const resulComputerNumber = document.getElementById('computer-number');
const resultElement = document.getElementById('result-even-odd');

//Genero un numero casuale da 1 a 5 utilizzando una funzione
formEvenOdd.addEventListener('submit', function (event) {
    event.preventDefault();

    let message = 'Hai perso'

    const choice = resultUserChoice.value;
    const userNumber = resultUserNumber.value;

    const computerNumber = randomNumber(1, 5);
    resulComputerNumber.innerText = 'Il numero del tuo avversario è ' + computerNumber;

    const sum = userNumber + computerNumber;

    //Verifico se la somma dei due numeri è pari o dispari, e se l'utente ha vinto o perso in base alla sua scelta
    if ((isOdd(sum) && choice.toLowerCase() == 'odd') || (!isOdd(sum) && choice.toLowerCase() == 'even')) message = 'Hai vinto';

   resultElement.innerText = message

})

