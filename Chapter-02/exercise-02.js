/*
  Chapter 02 - Program Structure
  Exercise 02 - FizzBuzz
*/

for (let number = 1; number <= 100; number++) {
    let isFizz = (number % 3 === 0);
    let isBuzz = (number % 5 === 0);
    let output = (isFizz ? "Fizz" : "") + (isBuzz ? "Buzz" : "");
    console.log(output || number);
  }
  