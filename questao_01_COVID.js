const prompt = require('prompt-sync')();

/* Sobre a COVID, diariamente o notícia informa a população dados importantes sobre a
evolução e controle da doença. Determinar a variação de casos. */

// Entrada
function main(){
    var numero_casos_14_dias = Number(prompt('Digite aqui o número de casos nos últimos 14 dias: ')); // Mostra o número de casos nos últimos 14 dias.
    var numero_casos_hoje = Number(prompt('Digite aqui o número de casos atual: ')); // Mostra o número de casos recentes.
    var variacao = (numero_casos_hoje * 100)/ numero_casos_14_dias // Calcula-se a variação em porcentagem, caso for negativa = porcentagem negativa, se positiva = porcentagem positiva

function calcular_variacao(numero_casos_14_dias, numero_casos_hoje, variacao);
    console.log('Aqui eis uma função atribuída de 3 parâmetros essenciais ou uma sgunda variável genérica que recebe o valor no chamado de uma função.')

}

main()

function calcular_variacao(media_hoje, media_14_dias, variacao_casos) { // Determina as estruturas condicionais em análise: alta, baixa ou estável.

/* Construindo dados e programando condições */
    if(media_hoje < media_14_dias){
    valor *= -1;
    console.log('Valor negativo.')
    }
    if(variacao_casos < -15){
    console.log(`Em queda/nVariação em porcentagem: ${variacao_casos}%`);
    }else{
    console.log(`Em estabilidade/nVariação em porcentagem: ${variacao_casos}%`)
    }
    else{
    variacao_casos -= 100; // Se, neste caso possui uma variação de 0 a 100.
    }if (variacao_casos > 15){
        console.log(`Em alta/nVariação em porcentagem: ${variacao_casos}%`)
    }else{
        console.log(`Em estabilidade/nVariação em porcentagem: ${variacao_casos}%`)
    }

}

calcular_variacao()