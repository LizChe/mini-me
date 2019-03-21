"use strict";

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

window.onload = validateForm;

function displayThanks() {
    alert("Thank you for your message!");
}

function validateName() {
    let name = document.forms["form"]["name"].value;
    let validName = /[A-Z]\s?[A-Z]?\w*/;

    if (name == /\s+/ || !validName.test(name) || name.length > 25) {
        document.getElementById("name").style.borderTop = "5px solid #cf0013";
        document.getElementById("invalid-name-message").style.color = "#cf0013";
        document.getElementById("invalid-name-message").innerHTML = "* Invalid Name";
        return false;
    }
    document.getElementById("name").style.borderTop = "5px solid #648880";
    document.getElementById("invalid-name-message").innerHTML = "";
    return true;
}

function validateEmail() {
    let email = document.forms["form"]["e-mail"].value;
    let validEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

    if (email == /\s+/ || !validEmail.test(email)) {
        document.getElementById("e-mail").style.borderTop = "5px solid #cf0013";
        document.getElementById("invalid-email-message").style.color = "#cf0013";
        document.getElementById("invalid-email-message").innerHTML = "* Invalid E-mail";
        return false;
    }
    document.getElementById("e-mail").style.borderTop = "5px solid #648880";
    document.getElementById("invalid-email-message").innerHTML = "";
    return true;
}

function validateFields() {
    if (validateName() && validateEmail()) {
        displayThanks();
        return true;
    }
    return false;
}