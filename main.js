const botoes = document.queryselectorAll(".botao")
const texto = document.queryselectorAll(".aba-conteudo")

for (let i=0; i < botoes.length; i++){

    botoes[i].onclick = function(){
        for (let j=0; j < botoes.length;j++){
            botoes[j].classlist.remove("ativo")
            texto[j].remove("ativo")
        }
        botoes[i].classlist.add("ativo");
        texto[i].classlist.add("ativo");
    }
}

const contadores = document. querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2025-05-15T00:00:00");
const tempoObjetivo2 = new Date("2025-12-05T00:00:00");
const tempoObjetivo3 = new Date("2025-11-08T00:00:00:");
const tempoObjetivo4 = new Date("2025-02-01T00:00:00");


tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo (tempoObjetivo){

    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/24);
    let dias = Math.floor(horas/24);

    segundos%=60;
    minutos%=60;
    horas%=24;
    if(tempoFinal>0){

        return[dias,horas,minutos,segundos];
    }else{
        return[0,0,0,0];
    }
}

function atualizacronometro(){

    for (let i=0; i < contadores.length; i++){
        document.getElementById("dias"+i).textcontent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[0];
        document.getAnimations("minutos"i+).textContent = calculaTempo(tempos[i])[0];
    }
}