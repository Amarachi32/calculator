let display = document.getElementById('display');
let currentInput = '0';
let operator = null;
let waitingForNewNumber = false;
let previousInput = null;

function updateDisplay() {
    // Format large numbers with commas and limit decimal places
    let displayValue = currentInput;
    if (!isNaN(displayValue) && displayValue !== '') {
        let num = parseFloat(displayValue);
        if (num > 999999 || num < -999999) {
            displayValue = num.toExponential(2);
        } else if (displayValue.includes('.') && displayValue.split('.')[1].length > 6) {
            displayValue = num.toFixed(6).replace(/\.?0+$/, '');
        }
    }
    display.textContent = displayValue;
}

function inputNumber(num) {
    if (waitingForNewNumber) {
        currentInput = num;
        waitingForNewNumber = false;
    } else {
        if (currentInput === '0' && num !== '.') {
            currentInput = num;
        } else if (num === '.' && currentInput.includes('.')) {
            return; // Don't add multiple decimal points
        } else {
            currentInput += num;
        }
    }
    updateDisplay();
    clearOperatorHighlight();
}

function inputOperator(op) {
    if (operator && !waitingForNewNumber) {
        calculate();
    }
    
    operator = op;
    previousInput = currentInput;
    waitingForNewNumber = true;
    
    highlightOperator(op);
}

function calculate() {
    if (operator && previousInput !== null && !waitingForNewNumber) {
        let prev = parseFloat(previousInput);
        let current = parseFloat(currentInput);
        let result;

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert('Cannot divide by zero');
                    return;
                }
                result = prev / current;
                break;
            case '%':
                result = prev % current;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = null;
        previousInput = null;
        waitingForNewNumber = true;
        updateDisplay();
        clearOperatorHighlight();
    }
}

function clearDisplay() {
    currentInput = '0';
    operator = null;
    previousInput = null;
    waitingForNewNumber = false;
    updateDisplay();
    clearOperatorHighlight();
}

function backspace() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function highlightOperator(op) {
    clearOperatorHighlight();
    const operatorBtn = document.querySelector(`[data-operator="${op}"]`);
    if (operatorBtn) {
        operatorBtn.classList.add('active');
    }
}

function clearOperatorHighlight() {
    document.querySelectorAll('.btn-operator').forEach(btn => {
        btn.classList.remove('active');
    });
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    event.preventDefault();
    
    if (event.key >= '0' && event.key <= '9' || event.key === '.') {
        inputNumber(event.key);
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '%') {
        inputOperator(event.key);
    } else if (event.key === 'Enter' || event.key === '=') {
        calculate();
    } else if (event.key === 'Escape' || event.key === 'c' || event.key === 'C') {
        clearDisplay();
    } else if (event.key === 'Backspace') {
        backspace();
    }
});

// Initialize display
updateDisplay();