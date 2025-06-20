const CONVERSIONS = {
    meterToFeet: 3.281,
    literToGallon: 0.264,
    kilogramToPound: 2.204
};

const convertbtn = document.getElementById("convert-btn");
const input = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

function convertUnits(value) {
    // Length
    const lengthFeet = (value * CONVERSIONS.meterToFeet).toFixed(3);
    const lengthMeters = (value / CONVERSIONS.meterToFeet).toFixed(3);
    lengthEl.textContent = `${value} meters = ${lengthFeet} feet | ${value} feet = ${lengthMeters} meters`;

    // Volume
    const volumeGallons = (value * CONVERSIONS.literToGallon).toFixed(3);
    const volumeLiters = (value / CONVERSIONS.literToGallon).toFixed(3);
    volumeEl.textContent = `${value} liters = ${volumeGallons} gallons | ${value} gallons = ${volumeLiters} liters`;

    // Mass
    const massPounds = (value * CONVERSIONS.kilogramToPound).toFixed(3);
    const massKilograms = (value / CONVERSIONS.kilogramToPound).toFixed(3);
    massEl.textContent = `${value} kilograms = ${massPounds} pounds | ${value} pounds = ${massKilograms} kilograms`;
}

function handleConvert() {
    const value = parseFloat(input.value);
    if (isNaN(value) || value < 0) {
        alert("Please enter a valid, non-negative number");
        return;
    }
    convertUnits(value);
    // Optionally clear input: input.value = '';
}

convertbtn.addEventListener("click", handleConvert);
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") handleConvert();
});

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