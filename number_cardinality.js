/* Escriba la función number_cardinality() que toma un número entero y devuelve una cadena, de la siguiente manera:


Devuelve la cadena zero si el número termina en 0
Devuelve la cadena five si el número termina en 5
Devuelve la cadena even si el número es par (divisible por 2) Y no termina en 0
Devuelve la cadena odd si el número es impar (no divisible por 2) Y no termina en 5
Asegúrese de que su cadena de retorno sea exactamente como la anterior, usando letras minúsculas. */

number_cardinality = (numero)=>{
    let ultimoDigito = numero%10
    
    switch (true){
        case ultimoDigito===0:
            console.log("zero")
            break
        case ultimoDigito===5:
            console.log("five")
            break
        case ultimoDigito%2===0 && ultimoDigito!==0:
            console.log("even")
            break
        case ultimoDigito%2!==0 &&  ultimoDigito!==5:
            console.log("odd")
            break
    }
}

number_cardinality(1)