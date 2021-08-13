// Assignment Code
var generateBtn = document.querySelector("#generate");

// First, we need to create strings to be used in password
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(upperCase.length);
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  console.log(lowerCase.length);
var numbers = "0123456789";
  console.log(numbers.length);
var spcchar = "!@#$%^&*-_?";
  console.log(spcchar.length);
var passwordLength = (8);
  console.log("Maximum number of characters in password is 8");
var characters = upperCase + lowerCase + numbers + spcchar;
  console.log("Length of characters available for password", upperCase.length + lowerCase.length + numbers.length + spcchar.length);


// Write password to the #password input
function writePassword() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(upperCase);
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    console.log(lowerCase);
  var numbers = "0123456789"
    console.log(numbers);
  var spcchar = "!@#$%^&*-_?";
    console.log(spcchar);
  var password = "";
    console.log("Empty string");

//Need a loop to randomize and create password
//Need to make sure it knows when to stop adding characters to the password
for (var i = 0; i < passwordLength; i++){
  var generateBtn = upperCase[Math.floor(Math.random() * passwordLength)];
  password += generateBtn;
}

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
