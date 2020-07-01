//Declare Variables
var input;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumber;
var confirmSpecialCharacter;
var choices;

lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

//Function to generate Password//////
function generatePassword() {
    //ask for user input
    input = parseInt(prompt("How many characters would you like in your password? (Must be at least 8 and no more than 128"));
    //if invlaid
    if (!input) {
        alert("You must have a value!");
    } else if (input < 8 || input > 128) {
        alert("Your password must be between 8 and 128 characters");
    }
    else {
        confirmLowerCase = confirm("Would you like to include uppercase letters?");
        confirmUpperCase = confirm("Would you like to include lowercase letters?");
        confirmNumber = confirm("Would you like to include numbers?");
        confirmSpecialCharacter = confirm("Would you like to include special characters?");
    };

    //If no criteria is selected
    if (!confirmLowerCase && !confirmUpperCase && !confirmNumber && !confirmSpecialCharacter) {
        choices = alert("You must select criteria for your password.");
    }
    //Else if all four selected yes
    else if (confirmLowerCase && confirmUpperCase && confirmNumber && confirmSpecialCharacter) {
        choices = lower.concat(upper,number,special);
    }

    //Else if for three selections
    else if (confirmLowerCase && confirmUpperCase && confirmSpecialCharacter) {
        choices = lower.concat(upper,special);
    }
    else if (confirmLowerCase && confirmNumber && confirmSpecialCharacter) {
        choices = lower.concat(number,special);
    }
    else if (confirmUpperCase && confirmNumber && confirmSpecialCharacter) {
        choices = upper.concat(number,special);
    }

    //Else if for only two selections
    else if (confirmLowerCase && confirmUpperCase) {
        choices = lower.concat(upper);
    }
    else if (confirmLowerCase && confirmNumber) {
        choices = lower.concat(number);
    }
    else if (confirmLowerCase && confirmSpecialCharacter) {
        choices = lower.concat(special);
    }
    else if (confirmUpperCase && confirmNumber) {
        choices = upper.concat(number);
    }
    else if (confirmUpperCase && confirmSpecialCharacter) {
        choices = upper.concat(special);
    }
    else if (confirmNumber && confirmSpecialCharacter) {
        choices = number.concat(special);
    }

    //Else if for only one criteria selection
    else if (confirmLowerCase) {
        choices = lower;
    }
    else if (confirmUpperCase) {
        choices = upper;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmSpecialCharacter) {
        choices = special;
    }

    //Define variable for the for loop below
    var password = [];

    //for loop to generate random combination of criteria chosen by user
    for (var i = 0; i < input; i++) {
        var randomPassword = choices[Math.floor(Math.random() * choices.length)];
        password.push(randomPassword);
    }
    //returns password
    return password.join("");

}

