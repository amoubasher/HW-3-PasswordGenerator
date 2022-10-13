// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Create character array pool for the password generator to access
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = uppercase.map(letter => letter.toLowerCase())
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]


// Make function for getting a random integer for the length of the password
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


// Create function for password generator
// Step 1 Ask how many characters the user wants the password to be (8-12 characters)
// Step 2 Ask user if the user wants to use uppercase, lower case, numbers, & special characters
function generatePassword () {
  var passwordLength = prompt("How many characters do you want your password to be? (8-128)", "12");
  var useUpperCase = confirm("Would you like to include uppercase letters in your password?");
  var useLowerCase = confirm("Would you like to include lowercase letters in your password?");
  var useNumbers = confirm("Would you like to include numers in your password?");
  var useSpecialChars = confirm("Would you like to include special characters in your password?");

  // Put options into a datastructure so we can use user input to select a random character for the length they choose. 
  // Make a structure for potential characters from arrays of characters
  var potentialChars = [];

  if (passwordLength > 128 || passwordLength < 8) {
    prompt("Invalid input: Please enter a value between 8 & 128");
    return;
  }

  if (useUpperCase) {
    potentialChars = potentialChars.concat(uppercase);
  }

  if (useLowerCase) {
    potentialChars = potentialChars.concat(lowercase);
  }

  if (useNumbers) {
    potentialChars = potentialChars.concat(numbers);
  }

  if (useSpecialChars) {
    potentialChars = potentialChars.concat(special);
  }

  // Create the password to be the length of passwordLength

  var password = "";
  for (var i=0; i < passwordLength; i++) {
    password = password + potentialChars[getRandomInt(potentialChars.length)]
  }
  return password;

  // Make the user have to input a number between 8 & 128 characters, if  < 8 or >128; tell them its wrong
}