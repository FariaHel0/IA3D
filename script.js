const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "Você gosta da ideia de Inteligência Artificial?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "Gosto da ideia da Inteligência Artificial"
            },
            {
                texto: "Não",
                afirmativa: "Não gosto da ideia da Inteligência Artificial"
            }
        ]
    },
    {
        enunciado: "Você acha que todos podem ter acesso a IA?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "Todos podem ter acesso a IA"
            },
            {
                texto: "Não",
                afirmativa: "Nem todos podem ter acesso a IA"
            }
        ]
    },
    {
        enunciado: "Você acredita que a IA pode trazer benefícios?",
        alternativas: [
            {
                texto: "Sim",
                afirmativa: "A IA pode trazer benefícios"
            },
            {
                texto: "Não",
                afirmativa: "A IA não trará benefícios"
            }
        ]
    }
]

let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta() {
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmativa;
    respostas = afirmacoes;
    posicao++;
    mostraPergunta();
}
function mostra Resultado(){
    caixaPergunta.textContent = "Em 25 anos...";
    textoResultado.textContent = respostas;
    caixaAlternativa.textContent = "";
}
mostraPergunta();