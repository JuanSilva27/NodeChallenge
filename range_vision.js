range_vision = (numero)=>{
    let digitos = Array.from(String(numero), Number)
    let minValorVision= Infinity
    let digitosConValorMin=[]
    for (let i = 0; i < digitos.length; i++){
        let rangoVision = digitos[i]
        let valorVision = 0
        
        

        for(let j=i-rangoVision; j<=i+rangoVision; j++){
            if(digitos[j]!==undefined){
            valorVision = digitos[j]+valorVision
            }
        }
        valorVision = valorVision-rangoVision
        
        if(valorVision<=minValorVision){
            if(valorVision<minValorVision){
                minValorVision=valorVision
                digitosConValorMin=[digitos[i]]
            } else{
                minValorVision=valorVision
                digitosConValorMin=[...digitosConValorMin,digitos[i]]
            }
            
        }
        
        
    }
    return digitosConValorMin.includes(1)
}

range_vision(34315)