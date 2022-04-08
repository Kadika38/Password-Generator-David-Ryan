// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create password based on user input in prompts
function generatePassword() {
  //arrays of characters
  var bigBois = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var smallBois = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numyBois = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specBois = ["!", "\u0022", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\u005c", "]", "^", "_", "`", "{", "|", "}", "~"];

  //comfirms/prompts to define password parameters
  var howBig = parseInt(prompt("How many characters would you like your password to be?  (minimum 8, maximum 128)"));
  // make sure the user enters a usable value for password length
  while (howBig < 8 || howBig > 128 || !(howBig > 0)) {
    howBig = parseInt(prompt("Please enter a value between 8 and 128"));
  }
  // more confirms for password parameters
  var lowersQ = confirm("Would you like your password to include lower case letters?");
  var uppersQ = confirm("Would you like your password to include upper case letters?");
  var numiesQ = confirm("Would you like your password to include numbers?");
  var specialsQ = confirm("Would you like your password to include special characters?");
  //check to make sure at least one set will be in use
  while (!(lowersQ || uppersQ || numiesQ || specialsQ)) {
    var cancel = confirm("To generate a password, you must confirm at least one set of characters.  You may also cancel the process now.");
    if (!cancel) {
      return "no password generated";
    }
    var lowersQ = confirm("Would you like your password to include lower case letters?");
    var uppersQ = confirm("Would you like your password to include upper case letters?");
    var numiesQ = confirm("Would you like your password to include numbers?");
    var specialsQ = confirm("Would you like your password to include special characters?");
  }

  //create full array of usable characters
  var allBois = [];
  if (lowersQ) {
    allBois = allBois.concat(smallBois);
  }
  if (uppersQ) {
    allBois = allBois.concat(bigBois);
  }
  if (numiesQ) {
    allBois = allBois.concat(numyBois);
  }
  if (specialsQ) {
    allBois = allBois.concat(specBois);
  }

  //create password
  var passArray = [];
  var pick = 0;
  for (i = 0; i < howBig; i++) {
    pick = Math.floor(Math.random() * (allBois.length));
    passArray.push(allBois[pick]);
  }

  //return
  return passArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);