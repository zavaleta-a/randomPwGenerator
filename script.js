
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

var passwordLength = (9);
  console.log("Maximum number of characters in password is 9");

var characters = upperCase, lowerCase, numbers, spcchar;
  console.log("Length of characters available for password", upperCase.length + lowerCase.length + numbers.length + spcchar.length);


// Function that generates the password
function writePassword() {
  let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*-_?"
  var password = "";
    console.log("Empty string");



//By adding 73 to the end of the loop, it allowed us to generate a password using upperCase, lowerCase, numbers, and spcchar.

for (var i = 0; i <= passwordLength; i++){
  var generateBtn = characters[Math.floor(Math.random() * 73)];
  password += generateBtn;



  
}

  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
