function areAnagrams(str1, str2) {
    // Remove any non-alphabetic characters and convert to lowercase
    const formatString = (str) => str.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // Sort the characters in the string
    const sortString = (str) => formatString(str).split('').sort().join('');

    return sortString(str1) === sortString(str2);
}

// Example usage:
const string1 = "Listen";
const string2 = "Silent";
console.log(areAnagrams(string1, string2));  // Output: true

const string3 = "Hello";
const string4 = "World";
console.log(areAnagrams(string3, string4));  // Output: false