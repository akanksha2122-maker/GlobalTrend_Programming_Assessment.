function evaluateExpression(expression) {
    // Remove any spaces from the expression
    expression = expression.replace(/\s+/g, '');

    // Split the expression into an array of numbers and operators
    const numbers = expression.split(/[-+]/).map(Number);
    const operators = expression.replace(/[0-9]/g, '').split('');

    // Initialize the result with the first number
    let result = numbers[0];

    // Iterate over the operators and apply them to the result
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '+') {
            result += numbers[i + 1];
        } else if (operators[i] === '-') {
            result -= numbers[i + 1];
        }
    }

    return result;
}

// Example usage:
const expression = "10 + 5 - 3 + 2";
const result = evaluateExpression(expression);
console.log(result);  // Output: 14