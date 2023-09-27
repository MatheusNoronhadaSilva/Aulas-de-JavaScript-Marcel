/*
Objetivo: Gerar o calculo de uma tabuada
Data 6/9
autor ; Inocente
versão: 1.0
*/




const gerarTabuada = function(valorTabuada, valorInicial, valorFinal){

    let valorT = valorTabuada
    let contador = valorInicial
    let contadorFinal = valorFinal

    let resultado;


//Validação de entrada em branco
    if(valorT == '' || contador =='' || contadorFinal == '')
    console.log('ERRO: É obrigatório informar todos os valores.')
    // Validação de entrada de caracteres inválidos
    else if(isNaN(valorT) || isNaN(contador) || isNaN(contadorFinal))
    console.log('ERRO: Não é possível gerar a tabuada com a entrada de caracteres.')
    else{

        valorT = Number(valorT)
        contador = Number (contador)
        contadorFinal = Number(contadorFinal)


        // Validação para deixar sempre o numero menor na  variavel contador
        if(contador > contadorFinal)
        {
                contador = valorFinal
                contadorFinal = valorInicial
        }


        /*

        EXEMPLO DE UTILIZAÇÃO DO WHILE

        while(contador<= contadorFinal){
            resultado = tabuada * contador
            console.log(`${tabuada} x ${contador} = ${resultado}`)
            contador++
        } */


        /*EXEMPLO DE UTILIZAÇÃO DO FOR*/
        for( ; contador <= contadorFinal; contador ++) {
            resultado = valorT * contador
            console.log(`${valorT} x ${contador} = ${resultado}`)
        }
    }

    return resultado

}

module.exports = {
    gerarTabuada
}


//console.log(gerarTabuada('5','9','20'));

// dar um console.log na função ira retornar o valor do return status
// caso ele seja verdadeiro ou falso, aparecerá na tela