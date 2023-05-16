/* Escriba la función fizz_buzz() que devuelve un array de 1 a N, pero:

Para múltiplos de 3, imprime “Fizz”
Para múltiplos de 5, imprime “Buzz”
Para múltiplos de 3 y 5 impresiones “FizzBuzz”
La función toma un número entero N como parámetro y devuelve la secuencia como un array hasta el índice N.  */


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
