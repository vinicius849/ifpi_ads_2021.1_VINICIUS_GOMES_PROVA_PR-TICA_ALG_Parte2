const prompt = require('prompt-sync')();

/* No IFPI para ser aprovado o aluno deve alcançar média de 7,0 nas disciplinas. Para isso, o
Professor Roger Flores, realizará duas avaliações cada uma valendo dez ponto mas com
pesos diferentes, Avaliação 1 com peso 2 (ou seja 20%) e Avaliação 2 com peso 3 (ou seja
30%) e além disso as Atividades com peso 1 (ou seja 10%). Estas 3 notas irão compor a
nota do aluno ao final. */

function aprovacao(){
    var nome = String(input('Escreva o nome do aluno: ')); // Nome do aluno
    var avaliacao_1 = Number(input('Informe para mim a nota do aluno na avaliação 1: ')); // 1a avaliação
    var avaliacao_2 = Number(input('Informe para mim a nota do aluno na avaliação 2: ')); // 2a avaliação
    var atividades = Number(input('Informe para mim a nota do aluno nas atividades: ')); // Atividades
    var media_semestral = (2 * avaliacao_1 + 3 * avaliacao_2 + 1 * atividades) / (2 + 3 + 1); // Média ponderada semestral

    aprovado_reprovado(media_semestral); 

}

function aprovado_reprovado(media){
    if (media >= 7){ // Caso o aluno tenha uma média maior ou igual a 7 será aprovado.
        console.log(`Média semestral: ${media}, Situação: APROVADO`);
    }else if (media < 4){ // Caso o aluno tenha uma média menor que 4 é reprovado imediatamente.
        console.log(`Média semestral: ${media}, Situação: REPROVADO`);
    }else{ // Caso em que o aluno tenha média entre 4 e 7 é reprovado e vai para PF(Prova Final).
        console.log(`Média semestral: ${media}, Situação: EM PROVA FINAL`);
    }
    
    /* Caso ele fique de prova final (conforme explicado acima), solicite para digitar a
nota obtida na Prova Final obtida. */
    
    var prova_final = Number(input('Informe a nota da Prova Final: '));
    var media_final = (prova_final +media) / 2;
    if(media_final >= 6){ // Caso o aluno tenha média da Prova Final e da média semestral maior que 6 é aprovado pós Prova Final.
        console.log(`Média semestral pós Prova Final: ${media_final}, Situação: APROVADO PÓS PROVA FINAL`);
    }else{ // Caso o aluno tenha média da Prova Final e da média semestral menor que 6 é reprovado pós Prova Final.
        console.log(`Média semestral pós Prova Final: ${media_final}, Situação: REPROVADO PÓS PROVA FINAL`);
    }
}

aprovacao();