
const descobrirPeI = function(numeroInicial, numeroFinal) {

    inicio = numeroInicial
    final = numeroFinal

    if(inicio > final) {
        let troca 
        troca = inicio
        inicio = final
        final = troca
    } else if(inicio == '' || final == '') {
        console.log('ERRO: os valores não podem ficar vazios')
    } else if(inicio < 0 || inicio > 500 && final < 100 || final > 1000) {
        console.log('ERRO: o inicio deve ser de 0 até 500 e o final de 100 até 1000')
    } else if(isNaN(inicio) || isNaN(final)) {
        console.log('ERRO: os valores devem ser números')
    } else if(inicio == final) {
        console.log('ERRO: os valores devem ser diferentes')
    } else {
        inicio = Number(inicio)
        final = Number(final)
        let i = 0
        let p = 0
        var par = [final]
        var impar = [final]

        for (; inicio <= final; inicio ++) {
            if(inicio % 2 == 0){
                par[p] = inicio
                p++
            } else {
                impar[i] = inicio
                i++
            }
        }
    }

    return [par, impar]
}

module.exports = {
    descobrirPeI
}