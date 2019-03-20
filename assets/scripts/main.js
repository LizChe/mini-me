"use strict";

function validateForm() {
    let fieldInputs = document.forms["form"].elements;
    let canSubmit = true;

    for (let i = 0; i < fieldInputs.length; i++) {
        if ("value" in fieldInputs[i] && fieldInputs[i].value.length === 0)
            canSubmit = false;
    }
    document.getElementById("submit-button").disabled = !canSubmit;
}

window.onload = validateForm;

function displayThanks() {
    alert("Thank you for your message!");
}
