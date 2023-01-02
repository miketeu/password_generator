// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// * Generate a password when the button is clicked

// Function to prompt user for password options


function getPasswordOptions(lengthOfPassword, charSet) {

}

//  * Present a series of prompts for password criteria
 //   * Length of password
 //     * At least 10 characters but no more than 64.
 //   * Character types
//      * Lowercase
 //     * Uppercase
 //     * Numeric
 //     * Special characters ($@%&*, etc)
 // * Code should validate for each input and at least one character type should be selected
 // * Once prompts are answered then the password should be generated and displayed in an alert or written to the page


// js for the modal.
// Call the Modal
var modal = document.getElementById("dataCollectModal");

// Get the button that opens the modal.
var btn = document.getElementById("generate");

// Get the "close" span element.
var span = document.getElementsByClassName("close")[0];

// Click "generate button", open modal.
btn.onclick = function() {
  modal.style.display = "block";
};

// Close the modal.
span.onclick = function() {
  modal.style.display = "none";
};

// Click anywhere to close modal.
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};







// End of modal js.
//________________________
// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);