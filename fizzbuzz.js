function fizzBuzz() {
    var numbers = []
    for (let i = 1; i < 101; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        numbers.push("FizzBuzz");
      }else if (i % 3 == 0) {
        numbers.push("Fizz");
      }else if (i % 5 == 0) {
        numbers.push("Buzz");
      }else {
        numbers.push(i);
      }
    }
    return numbers
  }
//output the result
console.log(fizzBuzz())