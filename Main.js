const textos = document.querySelectorAll('.aba-conteudo');
botoes[i].classList.add('ativo');
textos[i].classList.add('ativo');
for(botoes[j].classList.remove('ativo');
textos[j].classList.remove('ativo'););
const contadores = document.querySelectorAll('contador');
contadores[0]
contadores[0].textContent = 'Contagem regressiva';
const contadores = document.querySelectorAll('contador')
const tempoObjetivo1 = new Date('2023-10-05T00:00:00');
let tempoAtual = new Date();
contadores[0].textContent = tempoObjetivo1 - tempoAtual;
contadores[0].textContent = calculaTempo(tempoObjetivo1);
function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = tempoFinal / 1000;
    return segundos; }
    function calculaTempo(tempoObjetivo) {
        let tempoAtual = new Date();
        let tempoFinal = tempoObjetivo - tempoAtual;
        let segundos = Math.floor(tempoFinal / 1000);
        let minutos = Math.floor(segundos / 60);
        
        return minutos;
        }
        function calculaTempo(tempoObjetivo) {
            let tempoAtual = new Date();
            let tempoFinal = tempoObjetivo - tempoAtual;
            let segundos = Math.floor(tempoFinal / 1000);
            let minutos = Math.floor(segundos / 60);
            let horas = Math.floor(minutos / 60);
            let dias = Math.floor(horas / 24);
            
            segundos %= 60;
            minutos %= 60;
            horas %= 24;
            
            return dias + dias + horas +  horas  + minutos +
            minutos + segundos + ' segundos';
            }
