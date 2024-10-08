/**
 * Checks if a word is a palindrome
 * @param {string} word The word to check
 * @returns {boolean} True if the word is a palindrome, false otherwise 
 */

function isPalindrome(word) {
    const invertedWord = word.split('').reverse().join('');

    return word.toLowerCase() === invertedWord.toLowerCase() ? true : false;
}


/**
 * Generates a random number from min to max
 * @param {number} min The lower number of the interval
 * @param {number} max The higher number of the interval
 * @param {boolean} isMaxIncluded 
 * @returns {number} A random number from min to max
 */
function randomNumber(min = 0, max = 100, isMaxIncluded = true) {

    if (isMaxIncluded) max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Checs if a number is Odd or Even
 * @param {number} number The number to check
 * @returns {number} 0 if is even, the remainder of the division if is odd
 */
function isOdd(number) {
    return number % 2;
}