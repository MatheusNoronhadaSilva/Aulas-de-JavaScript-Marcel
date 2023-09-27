
const CalculoDoImc = function (Fpeso, FAltura){

    let peso = Fpeso
    let altura = FAltura
    let resultado

    if (peso == '' || altura == '') {
        console.log('ERRO: os requisito devem ser preenchidos')
    } else if (isNaN(peso) || isNaN(altura)) {
        console.log('ERRO: os valores devem ser números')
    } else {

        peso = Number(peso)
        altura = Number(altura)

        resultado = peso / Math.pow(altura, 2)
    }

    return resultado.toFixed(2)
}

module.exports = {
    CalculoDoImc
}

