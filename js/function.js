/**
 * Checks if a word is a palindrome
 * @param {string} word The word to check
 * @returns {boolean} Returns true if the word is a palindrome, false otherwise 
 */

function isPalindrome(word) {
    const invertedWord = word.split('').reverse().join('');

    return word.toLowerCase() === invertedWord.toLowerCase()? true : false;
}