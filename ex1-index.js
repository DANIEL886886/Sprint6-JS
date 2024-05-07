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