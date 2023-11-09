let length = document.getElementById("length");
let lengthvalue = document.getElementById("length-value");
let number = document.getElementById("number");
let special = document.getElementById("special-character");
let copy = document.getElementById("copy");
let generatedPassword = document.getElementById("generated-password");
let generatePasswordButton = document.getElementById("generate-password");

let len = 8;

generatePasswordButton.addEventListener("click", () => {
    const len = length.value;
    
    let num = false;
    let spe = false;

    if (number.checked) {
        num = true;
    }

    if (special.checked) {
        spe = true;
    }

    const passwd = generatePassword(len, num, spe);
    generatedPassword.value = passwd;
    lengthvalue.innerHTML = `Length : ${len}`;
});

function generatePassword(len, num, spe) {
    let passwordBase = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = passwordBase;

    if (num) {
        password += "1234567890";
    }
    if (spe) {
        password += "!@#$%^&*()/.;:()[]{}";
    }

    let passwd = "";
    for (let i = 0; i < len; i++) {
        passwd += password[Math.floor(Math.random() * password.length)];
    }

    return passwd;
}

copy.addEventListener("click", () => {
    generatedPassword.select();
    document.execCommand("copy");
});
