// add a function for input field:
//check for blanks,
// create an onblur and onfocus function

function submitForm() {
  let passwordInput = document.getElementById("passwordField").value;
  let inputErrorMessage = document.getElementById("passErrorMessage");

  let fieldInput = document.querySelectorAll("singleInputField").value;

  if (passwordInput.length < 5) {
    inputErrorMessage.innerHTML += "Cant Be Empty" + "<br>";
  }

  let checkForNumbers = false;
  let checkForCapitalLetters = false;

  for (let i = 0; i < passwordInput.length; i++) {
    let singleCharacter = passwordInput[i];

    if (!isNaN(singleCharacter)) {
      checkForNumbers = true;
    } else if (singleCharacter === singleCharacter.toUpperCase()) {
      checkForCapitalLetters == true;
    }

    if (checkForNumbers === false) {
      inputErrorMessage.innerHTML =
        "The passwords is missing a number" + "<br>";
    }

    if (checkForCapitalLetters === false) {
      inputErrorMessage += " The password is missing a capital letter" + "<br>";
    }
  }
}
