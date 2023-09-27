/**
 *
 *
 *
 *
 */
//Import da biblioteca de cálculos
var calculosMatematicos = require('./modulo/calculosMatematicos.js')


//Import da biblioteca readline
var readline = require('readline');


//Criação do objeto entradaDeDados
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




//Entrada de dados do Valor1
entradaDeDados.question('Digite o valor1:', function(valor1){
    let numero1 = valor1.replace(',','.');




    //Entrada de dados do valor2
    entradaDeDados.question('Digite o valor2: ', function(valor2){
        let numero2 = valor2.replace(',','.');
   
        entradaDeDados.question('Escolha uma operação [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR]: ', function(tipoCalculo){


            let operacao = tipoCalculo.toUpperCase();
            //Validação de entrada de valores em branco
            if(numero1 == '' || numero2 == ''){
                console.log('ERRO: Todos os valores devem ser preenchidos.')
            //Validação de NaN
            } else if(isNaN(numero1)||isNaN(numero2)){
                console.log('ERRO: Apenas números.')
            }else{
                //conversão dos tipos de dados e a conversão da vírgula para ponto
                numero1 = Number(numero1);
                numero2 = Number(numero2);
               
               








                // if(operacao=='SOMAR'){
                //     resultado = numero1 + numero2;
                // } else if(operacao=='SUBTRAIR'){
                //     resultado = numero1 - numero2;
                // } else if(operacao=='MULTIPLICAR'){
                //     resultado = numero1 * numero2;
                // } else if(operacao=='DIVIDIR'){
                //     if(numero2 == 0){  
                //     resultado = numero1 / numero2;
                //     }                
                // } else {
                //     console.log('ERRO: A operação não pôde ser realizada.')
                // }


                    //Chama função
                    resultado = calculosMatematicos.calculadora(numero1, numero2, operacao);


                    //Tratamento para exibir o resultado somente se houver conteúdo da variável
                    if(resultado)
                    console.log(resultado);




            }
        })
    });
});




//Função para realizar cálculos