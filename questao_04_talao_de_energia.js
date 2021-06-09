const input = require('prompt-sync')();

function energia(){
    var leitura_atual = Number(input('Informe a leitura atual: ')); // Recebe, como de costume, o último valor do mês.
    var leitura_anterior = Number(input('Informe a leitura anterior: ')); // Recebe o valor do mês anterior.
    var kwh = leitura_atual - leitura_anterior // Cálculo de leitura de consumo do mês atual em kwh

    calculo_energia_eletrica(kwh);
        console.log('##### CRISE NA MATRIZ ENERGÉTICA DO BRASIL NO ANO DE 2021 #####')

}

function calculo_energia_eletrica(kwh){ // Uma função para fazer o talão de energia, calcular todos os impostos, a taxa, e imprime o talão respeitando as regras de condições.
    var divida = 0; // Calcula quanto a pessoa irá pagar por kwh
    var icms = 0; // Calcula quanto é de imposto ICMS
    var pis = 0; // Calcula o imposto PIS/CONFIS
    var taxa_iluminacao = 0; // Calcula-se a taxa de iluminação
    var bandeira = 0; // Calcula quanto vai pagar por 100 kwh consumido de acordo com a bandeira, no caso da questão: vermelha R$ 8,00
    var total = divida + icms + pis + taxa_iluminacao + bandeira; // Calcula-se o total a pagar, ou seja, a soam d etodos os impostos, taxas e o valor de cada kwh

    if (kwh <= 30){
        console.log(`Consumo: ${kwh} kwh/nValor faturado: R$ ${total}/nBandeira R$ ${bandeira}/n (${bandeira/8} bandeiras)/nICMS R$ ${icms}/nPIS/CONFIS R$ ${pis}/nTaxa iluminação: R$ ${taxa_iluminacao}`);
    }else if (kwh > 30 && kwh <= 100){
        divida = kwh * 0.59;
        icms = divida * 0.25;
        pis = divida * 0.15;
    }
    if (kwh > 80){
        taxa_iluminacao = divida * 0.06;
    }else{
        taxa_iluminacao = 0;
    }
    if (kwh >= 100){
        bandeira = (kwh - kwh%100) / 100 * 8;
    }
        total = divida + icms + pis + taxa_iluminacao + bandeira;
        console.log(`Consumo: ${kwh} kwh/nValor faturado: R$ ${total}/nBandeira R$ ${bandeira} (${bandeira/8} bandeiras)/nICMS R$ ${icms}/nPIS/CONFIS R$ ${pis}/nTaxa iluminação: R$ ${taxa_iluminacao}`);
    else{
        divida = kwh * 0.75;
        icms = divida * 0.25;
        pis = divida * 0.15;
        taxa_iluminacao = divida * 0.6;
        bandeira = (kwh -kwh%100) / 100 * 8;
        total = divida + icms + pis + taxa_iluminacao + bandeira;
        console.log(`Consumo: ${kwh} kwh/nValor faturado: R$ ${total}/nBandeira R$ ${bandeira} (${bandeira/8} bandeiras)/nICMS R$ ${icms}/nPIS/CONFIS R$ ${pis}/nTaxa iluminação: R$ ${taxa_iluminacao}`);
    }

}

energia()
