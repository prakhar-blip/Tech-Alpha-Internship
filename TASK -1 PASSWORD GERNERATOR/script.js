const passwordBox = document.getElementById("password");
const copyButton = document.getElementById("copyButton"); // Get the copy button

const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

const generatePassword = () => {
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * 4);
        if (random === 0) {
            generatedPassword += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
        } else if (random === 1) {
            generatedPassword += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
        } else if (random === 2) {
            generatedPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
        } else {
            generatedPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
        }
    }
    passwordBox.value = generatedPassword;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
}

copyButton.addEventListener("click", copyPassword); // Add event listener to the copy button
