function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const fibonacciSequence = [0, 1];
    
    for (let i = 2; i < n; i++) {
        const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
    }
    
    return fibonacciSequence;
}

// Example usage:
const n = 10;
const fibonacciSequence = generateFibonacci(n);
console.log(fibonacciSequence);  // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]