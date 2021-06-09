const input = require('prompt-sync')();

/* O SERASA começou a implantar o sistema de dívidas das pessoas há algum tempo; aperfeiçoando o Score 2.0 agora em 2021. Com isso,
avaliam seu perfil e verificam se seu nome(CPF, RG, CNH) caso limpo no mercado. Os 3 critérios abaixo vão de 0 a 100, nas
tabelas mostram informações cruciais para estruturar pensamentos e resolver a questão 5 por abstração dos scores utilizando variáveis,
funções e estruturas condicionais vistas em vídeo-aulas com o professor. */

function serasa(){
    var criterio_a = Number(input('Informe um valor para o critério a de 0 a 100: '));
    var criterio_b = Number(input('Informe um valor para o critério b de 0 a 100: '));
    var criterio_c = Number(input('Informe um valor para o critério c de 0 a 100: '));

    score_1 = (criterio_a, criterio_b, citerio_c);
    score_2 = (criterio_a, criterio_b, criterio_c);

}

function nome_positivo_negativo(codigo_unico, nome_da_pessoa){
    var codigo_unico = input('Digite aqui seu código único: ') // Somente para critério a parte da questão, uma curiosidade rotineira.
    var nome_da_pessoa = input('Digite o nome da pessoa: ') // Verifica e soma as informações trazidas no cotidiano.
    console.log('Sem vínculo.')

    }

nome_positivo_negativo();

function score_1(criterio_a, criterio_b, criterio_c){ // Calcula o score antigo e imprime a faixa do score.
    var valor_em_criterio_a = criterio_a * 2.6;
    var valor_em_criterio_b = criterio_b * 5.7;
    var valor_em_criterio_c = criterio_c * 1.7;
    var soma_dos_criterios = valor_em_criterio_a + valor_em_criterio_b + valor_em_criterio_c;
    console.log('Score antigo: ');

    if((soma_dos_criterios >= 0 && soma_dos_criterios < 400)){
        console.log('Valor Baixo.');
    }else if((soma_dos_criterios <= 400 && soma_dos_criterios < 600)){
        console.log('Valor Regular.');
    }else if((soma_dos_criterios >= 600 && soma_dos_criterios < 800)){
        console.log('Valor Bom.');
    }else{
        console.log('Muito Bom.')
    }

}

function score_2(criterio_a, criterio_b, criterio_c){ // Calcula o score novo e imprime a faixa do score.
    var valor_em_criterio_a = criterio_a * 6.2;
    var valor_em_criterio_b = criterio_b * 1.9;
    var valor_em_criterio_c = criterio_c * 1.9;
    var soma_dos_criterios = valor_em_criterio_a + valor_em_criterio_b + valor_em_criterio_c;
    console.log('Score novo: ');

    if((soma_dos_criterios >= 0 && soma_dos_criterios <= 300)){
        console.log('Valor Baixo.');
    }else if((soma_dos_criterios > 300 && soma_dos_criterios <= 500)){
        console.log('Valor Regular.');
    }else if((soma_dos_criterios > 500 && soma_dos_criterios <= 700)){
        console.log('Valor Bom.');
    }else{
        console.log('Muito Bom.')
    }

}

serasa()
