/**
 *
 * @param {HTMLInputElement} passwordElement
 * @param {HTMLInputElement} passwordConfirmElement
 */
function comparePasswords(passwordElement, passwordConfirmElement) {
  if (!passwordElement.value || !passwordConfirmElement.value) {
    passwordElement.style["border"] = "1.5px solid black";
    passwordConfirmElement.style["border"] = "1.5px solid black";
  } else {
    if (passwordConfirmElement.value === passwordElement.value) {
      passwordElement.style["border"] = "2px solid green";
      passwordConfirmElement.style["border"] = "2px solid green";
    } else {
      passwordElement.style["border"] = "2px solid red";
      passwordConfirmElement.style["border"] = "2px solid red";
    }
  }
}

let passwordElement = document.querySelector("#password");
let passwordConfirmElement = document.querySelector("#password-confirm");

passwordElement.addEventListener("input", () => {
  comparePasswords(passwordElement, passwordConfirmElement);
});

passwordConfirmElement.addEventListener("input", () => {
  comparePasswords(passwordElement, passwordConfirmElement);
});
