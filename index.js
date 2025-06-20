/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertbtn = document.getElementById("convert-btn");
const input = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");



convertbtn.addEventListener("click", function() {
    // Get the input value and convert it to a number
    const value = parseFloat(input.value);
    // Check if the input is a valid number
    if (isNaN(value)) {
        alert("Please enter a valid number");
        return;
    }
    // Call the function to convert units
    convertUnits(value);
});

function convertUnits(value) {
    // Convert length
    //meter/feet, feet/meter
    const lengthFeet = (value * 3.281).toFixed(3);
    const lengthMeters = (value / 3.281 ).toFixed(3);
    // Convert volume
    //liters/gallon, gallon/liters
    const volumeGallons = (value * 0.264).toFixed(3);
    const volumeLitters = (value / 0.264).toFixed(3);
    // Convert mass
    //kilograms/pounds, pounds/kilograms
    const massPounds = (value * 2.204).toFixed(3);
    const massKilograms = (value / 2.204).toFixed(3);
    // Update the HTML elements with the converted values
    lengthEl.textContent = `${value} meters = ${lengthFeet} feet | ${value} feet = ${lengthMeters} meters`
    volumeEl.textContent = `${value} Liters = ${volumeGallons} gallons | ${value} gallons = ${volumeLitters} Liters`
    massEl.textContent = `${value} kilograms = ${massPounds} pounds | ${value} pounds = ${massKilograms} kilograms`
    // Clear the input field after conversion
    input.value = '';
}

input.addEventListener("input", function() {
    const len = input.value.length;
    if (len <= 2) {
        input.style.fontSize = "58px";
        input.style.width = "117px";
    } else if (len <= 4) {
        input.style.fontSize = "40px";
        input.style.width = "140px";
    } else if (len <= 6) {
        input.style.fontSize = "28px";
        input.style.width = "180px";
    } else {
        input.style.fontSize = "20px";
        input.style.width = "250px";
    }
});