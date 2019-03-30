"use strict";

window.onload = function () {
    validateForm();
    changeNameFieldStyleToValid();
    changeEmailFieldStyleToValid();
};

function validateForm() {
    let fieldInputs = document.forms["form"].elements;
    let canSubmit = true;

    for (let i = 0; i < fieldInputs.length; i++) {
        if ("value" in fieldInputs[i] && fieldInputs[i].value.length === 0) {
            canSubmit = false;
        }
    }
    document.getElementById("submit-button").disabled = !canSubmit;
}

function changeNameFieldStyleToValid() {
    document.getElementById("name").style.borderTop = "5px solid #648880";
    document.getElementById("invalid-name-message").style.visibility = "hidden";
}

function changeNameFieldStyleToInvalid() {
    document.getElementById("name").style.borderTop = "5px solid #cf0013";
    document.getElementById("invalid-name-message").style.color = "#cf0013";
    document.getElementById("invalid-name-message").style.visibility = "visible";
}

function changeEmailFieldStyleToValid() {
    document.getElementById("e-mail").style.borderTop = "5px solid #648880";
    document.getElementById("invalid-email-message").style.visibility = "hidden";
}

function changeEmailFieldStyleToInvalid() {
    document.getElementById("e-mail").style.borderTop = "5px solid #cf0013";
    document.getElementById("invalid-email-message").style.color = "#cf0013";
    document.getElementById("invalid-email-message").style.visibility = "visible";
}

function displayThanks() {
    alert("Thank you for your message!");
}

function validateName() {
    let name = document.forms["form"]["name"].value;
    let validName = /^[A-Z]{1}[a-z]+\s{1}([A-Z]{1}[a-z]+|[A-Za-z]\'{1}[A-Z]{1}[a-z]+|[A-Z]{1}[a-z]+\-{1}[A-Z]{1}[a-z]\.{1})/;

    if (name == /\s+/ || !validName.test(name) || name.length > 25) {
        changeNameFieldStyleToInvalid();
        return false;
    }
    changeNameFieldStyleToValid();
    return true;
}

function validateEmail() {
    let email = document.forms["form"]["e-mail"].value;
    let validEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    if (email == /\s+/ || !validEmail.test(email)) {
        changeEmailFieldStyleToInvalid();
        return false;
    }
    changeEmailFieldStyleToValid();
    return true;
}

function validateFields() {
    validateEmail();
    validateName();
    if (validateName() && validateEmail()) {
        displayThanks();
        return true;
    }
    return false;
}