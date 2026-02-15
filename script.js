const display = document.forms[0].elements["display"];
const buttons = document.querySelectorAll("input[type='button']");

let justCalculated = false; // 👈 NEW

buttons.forEach(button => {
    button.addEventListener("click", function () {

        const value = this.value;

        if (value === "AC") {
            display.value = "";
            justCalculated = false;
        } 
        else if (value === "DE") {
            display.value = display.value.slice(0, -1);
        } 
        else if (value === "=") {
            calculate();
            justCalculated = true; // 👈 remember we pressed =
        } 
        else {

            // 👇 If we just calculated and user presses a number
            if (justCalculated && !isNaN(value)) {
                display.value = value;
            } else {
                display.value += value;
            }

            justCalculated = false;
        }
    });
});

function calculate() {
    try {
        display.value = Function("return " + display.value)();
    } catch {
        display.value = "Error";
    }
}
