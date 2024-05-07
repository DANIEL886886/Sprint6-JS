function isDivisibleByTen(number) {
    // Check if the input number is an integer
    if (!Number.isInteger(number)) {
        return "Error: Input must be an integer.";
    }

    // Check if the number is divisible by 10
    if (number % 10 === 0) {
        return true;
    } else {
        return false;
    }
}
    console.log("Test if the input is divisible by 10. Case 1 - number:  20", isDivisibleByTen(20)); // returns true
    console.log("Test if the input is divisible by 10. Case 2 - number: -34", isDivisibleByTen(-34)); // returns true
    console.log("Test if the input is divisible by 10. Case 3 - number:  67", isDivisibleByTen(67)); // returns false
    console.log("Test if the input is divisible by 10. Case 4 - number:  20", isDivisibleByTen(20.5)); // returns error