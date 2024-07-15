class HashMap {
    constructor() {
        this.map = {};
    }

    // Method to add a key-value pair to the map
    put(key, value) {
        this.map[key] = value;
    }

    // Method to get the value associated with a key
    get(key) {
        return this.map.hasOwnProperty(key) ? this.map[key] : undefined;
    }

    // Method to remove a key-value pair from the map
    remove(key) {
        if (this.map.hasOwnProperty(key)) {
            delete this.map[key];
        }
    }
}

// Example usage:
const hashMap = new HashMap();
hashMap.put('name', 'Alice');
hashMap.put('age', 30);

console.log(hashMap.get('name'));  // Output: Alice
console.log(hashMap.get('age'));   // Output: 30

hashMap.remove('name');
console.log(hashMap.get('name'));  // Output: undefined