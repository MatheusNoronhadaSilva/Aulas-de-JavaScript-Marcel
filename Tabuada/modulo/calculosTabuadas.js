
const primeiraTabuada = function(tabuadaInicial, contadorInicial, contadorFinal){

    let tabInicio = tabuadaInicial
    let contInicial = contadorInicial
    let contFinal = contadorFinal
    let resultado

    if(tabInicio == '' || contFinal == '' || contInicial == ''){
        console.log('ERRO: nenhum valor deve ficar vazio!!!')
    } else if (tabInicio < 2 || tabInicio > 100) {
        console.log('ERRO: o valor da tabuada deve ser entre 2 e 100')
    } else if(contInicial < 1 || contInicial > 50 || contFinal < 1 || contFinal > 50) {
        console.log('ERRO: o valor dos contadores deve ser entre 1 e 50')
    } else if (contInicial > contFinal ){
        contInicial = Number(contInicial)
        contFinal = Number(contFinal)
            for(; contFinal <= contInicial; contFinal++) {
                resultado = tabInicio * contFinal
                console.log(`${tabInicio} x ${contFinal} = ${resultado}`)
            }
    } else {
        contInicial = Number(contInicial)
        contFinal = Number(contFinal)
            for(; contInicial <= contFinal; contInicial++) {
                resultado = tabInicio * contInicial
                console.log(`${tabInicio} x ${contInicial} = ${resultado}`)
            }
    }
    
}

const segundaTabuada = function (tabuadaFinal, contadorInicial, contadorFinal) {

    let tabFinal = tabuadaFinal
    let contInicial = contadorInicial
    let contFinal = contadorFinal
    let resultado

    if(tabFinal == '' || contFinal == '' || contInicial == ''){
        console.log('ERRO: nenhum valor deve ficar vazio!!!')
    } else if (tabFinal < 2 || tabFinal > 100) {
        console.log('ERRO: o valor da tabuada deve ser entre 2 e 100')
    } else if(contInicial < 1 || contInicial > 50 || contFinal < 1 || contFinal > 50) {
        console.log('ERRO: o valor dos contadores deve ser entre 1 e 50')
    } else if (contInicial > contFinal ){
        contInicial = Number(contInicial)
        contFinal = Number(contFinal)
            for(; contFinal <= contInicial; contFinal++) {
                resultado = tabFinal * contFinal
                console.log(`${tabFinal} x ${contFinal} = ${resultado}`)
            }  
    } else {
        contInicial = Number(contInicial)
        contFinal = Number(contFinal)
        for(; contInicial <= contFinal; contInicial++) {
            resultado = tabFinal * contInicial
            console.log(`${tabFinal} x ${contInicial} = ${resultado}`)
        }
    }

}

module.exports = {
    primeiraTabuada,
    segundaTabuada
}