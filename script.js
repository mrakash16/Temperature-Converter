document.getElementById("convertBtn").addEventListener("click", function () {
    var temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    var unit = document.getElementById("unitSelect").value;
    var resultElement = document.getElementById("result");

    if (isNaN(temperatureInput)) {
        resultElement.textContent = "Please enter a valid number.";
        resultElement.style.color = "red";
        return;
    }

    var convertedTemperature;
    var color;

    if (unit === "celsius") {
        convertedTemperature = (temperatureInput * 9 / 5) + 32;
        resultElement.textContent = `${temperatureInput} Celsius is equal to ${convertedTemperature.toFixed(2)} Fahrenheit.`;
        color = (convertedTemperature < 32) ? "lightblue" : (convertedTemperature > 89.60) ? "red" : "lightgreen";
    } else {
        convertedTemperature = (temperatureInput - 32) * 5 / 9;
        resultElement.textContent = `${temperatureInput} Fahrenheit is equal to ${convertedTemperature.toFixed(2)} Celsius.`;
        color = (convertedTemperature < 0) ? "lightblue" : (convertedTemperature > 30) ? "red" : "lightgreen";

    }

    resultElement.style.color = color;
});

document.getElementById("clearBtn").addEventListener("click", function () {
    document.getElementById("temperatureInput").value = "";
    document.getElementById("unitSelect").value = "celsius";
    document.getElementById("result").textContent = "";
});
document.getElementById("temperatureInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        document.getElementById("convertBtn").click();
    }
});