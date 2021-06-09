const prompt = require('prompt-sync')()

/* O Varejo nacional vive uma nova fase com movimento de compras online. O varejo físico
ainda sobrevive com bons percentuais de vendas. Assim os lojistas inventivam seus
vendedores com políticas de comissão. */

function main(){

    const nome_vendedor = String(input('Nome do vendedor: '));
    const valor_total_vendas_mes = Number(input('Digite aqui o valor total de vendas no mês: '));
    var salario = 1100

    calcular_comissao(valor_total_vendas_mes, salario);
}

function calcular_comissao(){
    var comissao = 0; // Inicia a variável que calcula a comissão
    var salario_final = comissao + salario_base; // Calcular o salário final
    var faixa = 0;

}

calcular_comissao()

// Aplicando estruturas condicionais para o Varejo Nacional
    if(valor <= 5000){
        console.log(`Valor de comissão: 0% Faixa: ${faixa}/nGanhos com comissão: ${comissao}/nSalario Final: ${salario_final}`) // até 5000 o funcionário não ganha comissão por cima das vendas.
    }else if(valor > 5000 && valor <= 10000){
     faixa = valor - 5000;
     comissao = faixa * 0.05;
     salario_final = comissao + salario_base;
     console.log(`Valor de comissão: 5% Faixa: ${faixa}/nGanhos com comissão: ${comissao}/nSalario Final: ${salario_final}`) // maior que 5000 e menor ou igual a 10000 o funcionário ganhará 5% de comissão sobre as vendas.
    }else if(valor > 10000 && valor <= 30000{
     faixa = valor - 10000;
     comissao = (faixa * 0.10) + (valor - (5000 * 0.5));
     salario_final = comissao + salario_base;
     console.log(`Valor de comissão: 10% Faixa: ${faixa}/nGanhos com comissão: ${comissao}/nSalario Final: ${salario_final}`) // maior que 10000 e menor ou igual a 30000, o funcionário ganhará 10% de comissão sobre as vendas.
    }else{
     comissao = valor * 0.20;
     salario_final = comissao + salario_base;
     console.log(`Valor de comissão: 20% Faixa: ${valor}/nGanhos com comissão: ${comissao}/nSalario Final: ${salario_final}`) // super comissão, ou seja, acima de 30000, o funcionário ganhará 20% de comissão sobre as vendas.
    }

main()


