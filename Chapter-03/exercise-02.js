function isEven(n) {
    // Handle negative numbers
    if (n < 0) {
      n = Math.abs(n); // Make n positive
    }
  
    // Loop approach for iterative evenness check
    for (let i = 0; i <= n; i += 2) {
      if (i === n) {
        return true;
      }
    }
  
    return false;
  }
  
  console.log(isEven(50)); // → true
  console.log(isEven(75)); // → false
  console.log(isEven(-1)); // → false
  