function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let expression = document.getElementById('display').value;
    
    // Check for trigonometric functions and close the parentheses if necessary
    if (expression.includes('Math.sin(') || expression.includes('Math.cos(') || expression.includes('Math.tan(') || expression.includes('Math.log10(')) {
        expression += ')';
    }

    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Function to handle keyboard input
function handleKeyboardInput(event) {
    const key = event.key;

    if (!isNaN(key) || key === '.') {
        appendNumber(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
    } else if (key === 's') {
        appendOperator('Math.sin(');
    } else if (key === 'o') {
        appendOperator('Math.cos(');
    } else if (key === 't') {
        appendOperator('Math.tan(');
    } else if (key === 'l') {
        appendOperator('Math.log10(');
    }
}

// Add event listener for keyboard input
document.addEventListener('keydown', handleKeyboardInput);