
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


// Write password to the #password input
function writePassword() {
  let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*-_?"
  var password = "";
    console.log("Empty string");


//Need to make sure it knows when to stop adding characters to the password
//How do we limit the number of characters the password has?

for (var i = 0; i <= passwordLength; i++){
  var generateBtn = characters[Math.floor(Math.random() * 73)];
  password += generateBtn;



  
}

  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Clean up code to comply with DRY principle.  Check to see if you really need lines 5 through 12 since the variables are defined inside the function


// Add prompts asking user to select password criteria