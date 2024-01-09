let numeroSecreto = 0;
//numeroDeChances = 3;
let contador = 1
let min = 1;
let max = 10;
let situacao = '';

let inputNumero = document.querySelector('#inputNumero');
let btnChutar = document.querySelector('#btnChutar');
let aviso = document.querySelector('#aviso');
let musica = document.querySelector('#musica DeFundo');

function gerarNumeroSecreto(){
    numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + 1;
}

function bloquearBtnChutar(){
    btnChutar.setAttribute('disabled', 'diseblad');
    btnChutar.style.background = '#ccc';
    btnChutar.style.cursor = 'not-allowed';
}

function ativarBtnChutar(){
    btnChutar.removeAttribute('disabled');
    btnChutar.style.background = '#222';
    btnChutar.style.cursor = 'pointer';
}

function validarNumeroDigitado(numero){
    if(numero <=0 || numero > 10){
        aviso.classList('errou');
        mensagemRapida('Você não está sendo um(a) mentalista! Digite um número inteiro entre 1 e 10.');
        bloquearBtnChutar();
        inputNumero.value = '';
    } else{
        console.log('Número válido');        
    }
}

function ativarDesativarMusica(){
    if (musica.muted ){
        musica.muted = false;
    }else{
        musica.muted = true;
    }
}

function pausarMusicaDeFundo(){
    musica.pause();
    musica.currentTime = 0;
}

function jogar(){
    verificarSeAcertou()
}

function mensagemRapida(menssagem){
    aviso.textContent = menssagem;
    setTimeout( function(){
        aviso.textContent = '';
        aviso.classList.remove('acertou');
        aviso.classList.remove('errou');
        inputNumero.value ='';
    }, 3000);
}