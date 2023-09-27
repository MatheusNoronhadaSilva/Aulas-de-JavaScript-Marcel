/************************************************
 * Objetivo: trabalhar com conceitos de ARRAY e JSON
 * Data: 27/09/2023
 * Autor: meeeeeeeee
 * versão 1.0
 */

// [] -> significa uma estrutura de ARRAY
// {} -> significa uma estrutura de JSON

const conceitoArray = function(){
    //criando um Array e atribuindo conteudo para ele
    let listaDeNome = ['José', 'Maria', 'Luiz', 'Ana', 4, true]

    console.log(listaDeNome)
    console.table(listaDeNome)

    console.log(listaDeNome[2])
    console.log(typeof(listaDeNome))
    console.log(typeof(listaDeNome[4]))
    console.log(typeof(listaDeNome[5]))

    listaDeNome [1] = 'Maria da Silva'
    console.table(listaDeNome)

    //inseri um valor no array
    listaDeNome.push('André da Silva')
    console.table(listaDeNome)

    //inseri um valor no topo do array - indice 0
    listaDeNome.unshift('Eu sou o Primeiro')
    console.table(listaDeNome)

    //retira dados de um array
    listaDeNome.pop()
    listaDeNome.pop([3])
    console.table(listaDeNome)

    // remove elementos do array com base no seu indice e qtde de itens
    // obs splice (3,1) - O primeiro é o indice, o segundo a quantidade de dados a serem retirados
    listaDeNome.splice(3,1)

    //remove um elemento no inicio do Array
    listaDeNome.shift()
    console.table(listaDeNome)
}

const percorrendoArray = function() {
    let listaDeProdutos = [ 'Mouse',
                            'teclado',
                            'monitor',
                            'computador',
                            'caixa de som',
                            'impressora',
                            'fone de ouvido',
                            'webcam',
                            'microfone',
                            'hd',
                            'memoria'];
    console.log(listaDeProdutos.length)

    //while
    /*let cont = 0
    while(cont < listaDeProdutos.length){
        console.log(`nome do produto: ${listaDeProdutos[cont]}`)
        cont ++
    }

    //for
    for (let cont = 0; cont < listaDeProdutos.length; cont++){
        console.log(`Nome do produto: ${listaDeProdutos[cont]}`)
    }

    //FOREACH
    listaDeProdutos.forEach(function(produto){
        console.log(`nome do produto: ${produto}`)
    })*/

    //mostra o indice de um determinado dado em uma array
    //no caso de um dado que não existe no array, seu indice parecerá como -1
    console.log(listaDeProdutos.indexOf('impressora'))

    console.log(listaDeProdutos.includes('impressora'))

    console.log(listaDeProdutos.includes('webcam'))
                                     
}

const filtrarProduto = function(nomeProduto) {

    let listaDeProdutos = [ 'mouse',
                            'teclado',
                            'monitor',
                            'computador',
                            'caixa de som',
                            'impressora',
                            'fone de ouvido',
                            'webcam',
                            'microfone',
                            'hd',
                            'memoria',
                            'Mouse'];

    let nome = nomeProduto
    let status = false;
    let cont = 0
    /*if(listaDeProdutos.indexOf(nome) >= 0)
        status = true

        return status
        
        //usando o includes
        status = listaDeProdutos.includes(nome)

        return status*/

        //fazendo o filtro manual
        listaDeProdutos.forEach(function(produto){
            if(produto.toUpperCase() == nome.toUpperCase()) {
                //status = true
                cont++
            }
        })
        return cont
}
//conceitoArray()
//percorrendoArray()
console.log(filtrarProduto('moUsE'))