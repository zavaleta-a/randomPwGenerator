// Assignment Code
var generateBtn = document.querySelector("#generate");

// First, we need to create strings to be used in password
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var spcchar = "!@#$%^&*-_?";
var passwordLenght = (14);
  console.log("Maximum number of characters");

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

//Need a loop to randomize and create password
//Need to make sure it knows when to stop adding characters to the password
for (var i = 0; i < 10; i++){
  let writePassword = upperCase[Math.floor(Math.random() * 10)];
  password += generateBtn;
}

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
