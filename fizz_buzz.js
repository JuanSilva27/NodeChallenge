fizz_buzz = (input) => {
  let arr = [];
  for (let i = 1; i <= input; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 !== 0:
        arr.push("Fizz");
        break;
      case i % 5 === 0 && i % 3 !== 0:
        arr.push("Buzz");
        break;
      case i % 5 === 0 && i % 3 === 0:
        arr.push("FizzBuzz");
        break;
      default:
        arr.push(i);
    }
    
  }
  console.log(arr);
};

fizz_buzz(100)
