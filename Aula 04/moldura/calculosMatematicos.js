function calculadora (valor1,valor2,tipoCalculo){
    //Recebendo os valores dentro da função
    let numero1 = valor1;
    let numero2 = valor2;
    let operacao = tipoCalculo;


    let resultado;


    switch (operacao){
        case "SOMAR":
        case"+":
            resultado = numero1 + numero2;
            break;
        case "SUBTRAIR":
        case "-":
            resultado = numero1 - numero2;
            break;
        case "Mulltiplicar":
        case "*":
            resultado = numero1 * numero2;
            break;
        case "DIVIDIR":
        case "/":
            resultado = numero1 / numero2;
            break;
            default:
            break;

    }                
    if(resultado != undefined){
        return resultado.toFixed(2);
    } else {
        return false;
    }
       
}
//Torna a função calculadora pública, ou seja, ficará visível para outros arquivos
module.exports = {
calculadora
}