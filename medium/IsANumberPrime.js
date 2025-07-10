// Is a Number Prime?
// Write a function isPrime(num) that returns true if num is a prime number, and false otherwise.

function isPrime(num) {
  //TODO
  if (num <= 1) {
    return false; // 0 and 1 are not prime
  }
  if (num === 2) {
    return true; // 2 is the only even prime number
  }
  if (num % 2 === 0) {
    return false; // Other even numbers are not prime
  }
  // Check for divisibility by odd numbers up to the square root
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false; // Not prime if divisible
    }
  }
  return true;
}
