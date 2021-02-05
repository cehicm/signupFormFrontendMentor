//rewrite as ES6:
// change to const where possible
// switch to arrow func
//delete unnecessary vars
// debugging

//NEXT PROJECT: MORE JS HEAVY, JQUEARY ANIMATION  TYPESCRIPT

submitForm = () => {
  let passwordInput = document.getElementById("passwordField").value;
  let inputErrorMessage = document.getElementById("inputErrorMessage");

  if (passwordInput.length < 5) {
    inputErrorMessage.innerHTML +=
      "Password has to be at least 5 characters long" + "<br>";
  }

  let checkForNumbers = false;
  let checkForCapitalLetters = false;

  for (let i = 0; i < passwordInput.length; i++) {
    let singleCharacter = passwordInput[i];

    if (!isNaN(singleCharacter)) {
      checkForNumbers = true;
    } else if (singleCharacter == singleCharacter.toUpperCase()) {
      checkForCapitalLetters = true;
    }
  }

  if (checkForNumbers == false) {
    inputErrorMessage.innerHTML +=
      "The password has to contain a number" + "<br>";
  }

  if (checkForCapitalLetters == false) {
    inputErrorMessage.innerHTML +=
      "The password has to contain a capital letter" + "<br>";
  }
};
