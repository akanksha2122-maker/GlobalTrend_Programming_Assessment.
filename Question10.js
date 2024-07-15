function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Example usage:
const inputString = "hello world! this is a test.";
const titleCaseString = toTitleCase(inputString);
console.log(titleCaseString);  // Output: "Hello World! This Is A Test."