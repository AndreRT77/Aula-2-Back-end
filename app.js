/*****************************************************************************************************
 * Objetivo: Realizar o calculo de medias escolares (condicionais, tratamento de erro, variaveis)
 * Autor: André Roberto Tavares
 * Data: 30/07/2025
 * Versão: 1.0
 * ***************************************************************************************************/

// Import do arquivo de médias escolares
var calculoMedia = require('./modulo/media.js')

// import da biblioteca do readline
var readline = require('readline')

// cria um objeto para criar uma interface de entrada de dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*************************************************************************************************
 **************** Formas de criação de variáveis:

 * LET ->  Permite criar uma variável dentro de um escopo de bloco, 
 *         onde essa variável nasce e morre dentro do bloco.
 * VAR -> Permite criar uma variável dentro ou fora de um escopo de bloco, 
 *        porém não se utiliza com tanta frequencia.
 * CONST -> permite criar um espaço em memória onde não sofre alteração de conteúdo, 
 *          podendo ser criado dentro ou fora de um escopo de bloco.
 * 
 **************** Métodos de conversão de tipos de dados

 * String() -> Converte um objeto ou variável em String().
 * Number() -> Converte um objeto ou variável para número inteiro ou decimal(float),
 *             conforme a necessidade.
 * Boolean() -> Converte um objeto ou variável para booleano.
 * Object() -> Converte uma variável para objeto (array, json, class).
 * parseInt() -> Converte um objeto ou variável para numero inteiro.
 * parseFloat() -> Converte um objeto ou variável para numero decimal (float).
 * 
 * *************** Operadores de Comparação
 * 
 * == Validação de igualdade de conteúdos
 * < Validação de menor
 * > Validação de maior
 * <= Validação de menor ou igualdade de conteúdos
 * >= Validação de maior ou igualdade de conteúdos
 * != Diferença de conteúdos
 * === Validação de tipo de dados e conteúdos
 * !== Validação de diferença de conteúdos e igualdade de tipos de dados
 * !=! Validação de diferença de conteúdos e diferença de tipos de dados
 * 
 * *************** Operadores lógicos
 * E    and  &&
 * OU   or   ||
 * NÃO  not  !
***************************************************************************************************/

const MESSAGE_ERRO = 'ERRO: a nota informada não pode ser vazia ou com valores negativos!'

// Entrada de dados do nome do aluno
entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    let nomeAluno = String(nome).toUpperCase()

    if(nomeAluno == ''){
        console.log('ERRO: O campo nome não pode ser vazio!!!')
        entradaDeDados.close()
    }else{
        
        // Entrada de dados da nota 1
        entradaDeDados.question('Digite a nota 1: ', function(valor1){
            let nota1 = valor1

            if(nota1 == '' || Number(nota1) < 0 || Number(nota1) > 10){
                console.log(MESSAGE_ERRO)
                entradaDeDados.close()
            }else{
                //Entrada de dados nota 2
                entradaDeDados.question('Digite a nota 2: ', function(valor2){
                    let nota2 = valor2
                    if(nota2 == '' || Number(nota2) < 0 || Number(nota2) > 10){
                        console.log(MESSAGE_ERRO)
                        entradaDeDados.close()
                    }else{
                        //Entrada de dados nota 3
                        entradaDeDados.question('Digite a nota 3: ', function(valor3){
                            let nota3 = valor3
                            if(nota3 == '' || Number(nota3) < 0 || Number(nota3) > 10){
                                console.log(MESSAGE_ERRO)
                                entradaDeDados.close()
                            }else{
                                //Entrada de dados nota 4
                                entradaDeDados.question('Digite a nota 4: ', function(valor4){
                                    let nota4 = valor4
                                    if(nota4 == '' || Number(nota4) < 0 || Number(nota4) > 10){
                                        console.log(MESSAGE_ERRO)
                                        entradaDeDados.close()
                                    }else{

                                        if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' || nomeAulno == ''){
                                            console.log('ERRO: Existem campos que não foram preenchidos')
                                        
                                        }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                                            console.log('Não é possível calcular com a entrada de letras')
                                        
                                        }else if (Number(nota1) < 0 || Number(nota1)> 10 || Number(nota2) < 0 || Number(nota2)> 10 || Number(nota3) < 0 || Number(nota3)> 10 || Number(nota4) < 0 || Number(nota4)> 10){
                                            console.log('ERRO: Os valores informados precisam ser entre 0 até 10.')
                                        }
                                        //Calculando a media do aluno
                                        let statusAluno = ''
                                        // Chama a função que calcula a média, retorna o valor na variável média
                                        let media = calculoMedia.mediaEscolar(nota1, nota2, nota3, nota4)  
                                        if (media >= 0 && media < 5) {
                                            statusAluno = 'REPROVADO'
                                        }else if (media >= 5 && media < 7) {
                                            statusAluno = 'em RECUPERAÇÃO'
                                        }else if (media >= 7 && media <= 10){
                                            statusAluno = 'APROVADO'
                                        }
                                        //toFixed() -> permite fixar a qtde de casas decimais 
                                        console.log(`O aluno(a) ${nomeAluno} teve a média: ${media} e ficou ${statusAluno}`)
                                        entradaDeDados.close()
                                    }
                                })//fecha a nota4
                            }
                        })//fecha a nota3
                    }
                })//fecha a nota2
            }
        })//Fecha a nota1
    }
})//Fecha o nome

//Validação de tratamento de entrada vazia

