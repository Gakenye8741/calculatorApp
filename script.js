
const display = document.getElementById('display');
const buttons = document.querySelector('.buttons');
let currentInput = '';

buttons.addEventListener('click', (event) => {
    const target = event.target;

    if (!target.matches('button')) {
        return; 
    }

    const action = target.dataset.action;
    const value = target.value;
    const textContent = target.textContent;

    switch (action) {
        case 'number':
            appendNumber(value);
            break;
        case 'operator':
            appendOperator(value);
            break;
        case 'clear':
            clearDisplay();
            break;
        case 'delete':
            deleteLast();
            break;
        case 'calculate':
            calculate();
            break;
        default:
            
            break;
    }
});

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput !== '' && !isOperatorAtEnd()) {
        currentInput += operator;
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculate() {
    try {
        if (currentInput !== '') {
            currentInput = eval(currentInput);
            display.value = currentInput;
        }
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}

function isOperatorAtEnd() {
    const lastChar = currentInput.slice(-1);
    return ['+', '-', '*', '/'].includes(lastChar);
}
