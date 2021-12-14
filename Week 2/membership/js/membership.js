'use strict';
// membership.js
// This script calculates the cost of a membership.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
    // TODO declare a variable named 'cost' to store the total cost:

    // TODO lookup the type and years input elements with DOM getElementById()

    // TODO Convert the year to a number (see parseInt())
    if (years && years.value) {
        years = parseInt(years.value, 10);
    }

    // Check for valid data:
    if (type && type.value && years && (years > 0)) {

        // TODO Add a switch statement to determine the base cost using the value of "type"
        switch (type.value) {
            case 'basic':
                break;
            case 'premium':
                break;
            case 'gold':
                break;
            case 'platinum':
                break;
        }

        // TODO Update cost by multiplying number of years

        // Discount multiple years
        if (years > 1) {
            cost *= .80; // 80%
        }

        let costElement = document.getElementById('cost');

        // TODO convert cost to a number and then format to decimal places (see Number.toFixed())

        // TODO update the value property of 'costElement' to the calculated cost
    }
    // Return false to prevent submission:
    return false;
}

function init() {
    document.getElementById('theForm').onsubmit = calculate;
}
window.onload = init;