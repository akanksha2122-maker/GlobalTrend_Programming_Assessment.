function capitalizeFirstLetterOfEachWord(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}

// Example usage:
const inputString = "hello world! this is a test.";
const result = capitalizeFirstLetterOfEachWord(inputString);
console.log(result);  // Output: "Hello World! This Is A Test."