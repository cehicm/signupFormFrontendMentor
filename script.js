// add a function for input field:
//check for blanks,
// create an onblur and onfocus function

// prevent default browser behaviour

// check password for: caps, nums, length.
// push all messages in an array

// check email for: @ && .com?

function submitForm() {
  let passwordInput = document.getElementById("passwordField").value;
  let inputErrorMessage = document.getElementById("passErrorMessage");
  let fieldInput = document.querySelectorAll("singleInputField").value;
  let errorMessagesArray = [];

  if (passwordInput.length < 5) {
    errorMessagesArray.push("Password must be longer than 5 characters");
  } else if (passwordInput.length > 10) {
    errorMessagesArray.push("too long");
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
      errorMessagesArray.push("no numbers here");
    }

    if (checkForCapitalLetters === false) {
      errorMessagesArray.push("no capital letters");
    }
  }

  // e.preventDefault();

  /*
  if (passwordInput.length < 5) {
    inputErrorMessage.innerHTML += "Cant Be Empty" + "<br>";
  }


  

  */
}
