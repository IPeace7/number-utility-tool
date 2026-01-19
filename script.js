function analyzeNumber() {
    const input = document.getElementById("numberInput").value;
    const result = document.getElementById("result");
    const evenOdd = document.getElementById("evenOdd");
    const square = document.getElementById("square");
    const factorialText = document.getElementById("factorial");
    const primeText = document.getElementById("prime");



    if (input === "") {
        result.textContent = "Please enter a number.";
        evenOdd.textContent = "";
        square.textContent = "";
        return;
    }

    const number = Number(input);
    let output = "";

    //Check positive, negative, or zero
    if (number > 0) {
        output += "The number is positive. ";
    } else if (number < 0) {
        output += "The number is negative. ";
    } else {
        output += "The number is zero. ";
    }
    
    
    // Even or Odd
    if (number % 2 === 0) {
        evenOdd.textContent = "The number is even.";
    } else {
        evenOdd.textContent = "The number is odd.";
    }

    // Factorial
if (number < 0) {
    factorialText.textContent = "Factorial is not defined for negative numbers.";
} else {
    let fact = 1;

    for (let i = 1; i <= number; i++) {
        fact = fact * i;
    }

    factorialText.textContent = "Factorial: " + fact;
}
    
   // Prime check
if (number <= 1) {
    primeText.textContent = "Not a prime number.";
} else {
    let isPrime = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        primeText.textContent = "It is a prime number.";
    } else {
        primeText.textContent = "Not a prime number.";
    }
}
 
    // Square
    square.textContent = "Square of the number: " + (number * number);
    result.textContent = output;
}