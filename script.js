// Assignment Code
var generateBtn = document.querySelector("#generate");

// First, we need to create strings to be used in password
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var spcchar = "!@#$%^&*-_?";

// Write password to the #password input
function writePassword() {
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(upperCase);
  let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    console.log(lowerCase);
  let numbers = "0123456789"
    console.log(numbers);
  let spcchar = "!@#$%^&*-_?";
    console.log(spcchar);
  var password = "";
    console.log("Empty string");

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
