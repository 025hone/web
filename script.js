let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}
function differentiate() {
    try {
        const expression = currentInput;
        const derivative = math.derivative(expression, 'x').toString();
        currentInput = derivative;
        display.value = derivative;
    } catch (error) {
        display.value = 'Error';
    }
}

function integrate() {
    try {
        const expression = currentInput;
        const integral = math.integral(expression, 'x').toString();
        currentInput = integral;
        display.value = integral;
    } catch (error) {
        display.value = 'Error';
    }
}