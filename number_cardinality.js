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