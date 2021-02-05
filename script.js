// debugging

//NEXT PROJECT: MORE JS HEAVY, JQUEARY ANIMATION  TYPESCRIPT

submitForm = () => {
  const passwordInput = document.getElementById("passwordField").value;
  const inputErrorMessage = document.getElementById("inputErrorMessage");

  if (passwordInput.length < 5) {
    inputErrorMessage.innerHTML +=
      "Password has to be at least 5 characters long" + "<br>";
  }

  const checkForNumbers = false;
  const checkForCapitalLetters = false;

  for (let i = 0; i < passwordInput.length; i++) {
    const singleCharacter = passwordInput[i];

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
