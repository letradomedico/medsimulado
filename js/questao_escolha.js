//declaração do array com o gabarito das questões
//o primeiro elemento é o número de questões
var totalDeQuestoes = 3;
var newpopupWindow = null;
var arrayGabarito = new Array(totalDeQuestoes, 'A', 'B', 'C');
var arrayComentarios = [
    'comentário da questão 1: se você tem dúvidas a respeito dessa questão, '+
    'verifique os comentários disponíveis nesta página!',
    'comentário da questão 2: se você tem dúvidas a respeito dessa questão, '+
    'verifique os comentários disponíveis nesta página!',
    'comentário da questão 3: se você tem dúvidas a respeito dessa questão, '+
    'verifique os comentários disponíveis nesta página!'
];


function questaoEscolha(arrayQuestoes, numQuestao, resposta){
    arrayQuestoes[numQuestao] = resposta;
    var respondidas = 0;
    arrayQuestoes.forEach(element => {
        if(element != null){
            respondidas++;
        }
    });
    arrayQuestoes[0] = respondidas-1;
    document.getElementById("captionRespondidas").textContent = arrayQuestoes[0] + " / 3";

    return arrayQuestoes;
        
}

function inicializa(){
    var arrayRespostas = new Array();
    arrayRespostas[0] = 0;
}

function emitirRelatorio(arrayQuestoes) {
    var numeroAcertos = 0;
    var inputChangeBackground;
    for(i=1; i < arrayGabarito.length; i++){
        if(arrayQuestoes[i] == arrayGabarito[i]){
            numeroAcertos++;
        }
        if(arrayQuestoes[i] != null){
            inputChangeBackground = 'span_alternativa_question' + i + arrayQuestoes[i];
            document.getElementById(inputChangeBackground).style.backgroundColor = 'rgb(241, 52, 52)';
        }
        
        inputChangeBackground = 'span_alternativa_question' + i + arrayGabarito[i];
        document.getElementById(inputChangeBackground).style.backgroundColor = 'mediumspringgreen';
        
    }

    
    document.getElementById('spanNumeroAcertos').textContent = 'Você acertou ' + 
            numeroAcertos + ' das '+ arrayGabarito[0] + ' questões.';
    document.getElementById('figMenuEnviar').style.visibility = 'hidden';
    fecharPopUp();
    window.location.href = "#divTituloSimulado";
}

function mostraComentario(numeroQuestao) {
    if(newpopupWindow != null){
        fecharPopUp();
    }
    newpopupWindow = window.open ('', 'Comentários', "width=250 height=250");
    newpopupWindow.document.write (arrayComentarios[numeroQuestao-1]);
}

function fecharPopUp() {
    if(newpopupWindow != null){
        newpopupWindow.close();
        newpopupWindow = null;
    }
}