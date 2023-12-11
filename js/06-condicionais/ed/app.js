let sit1 = document.querySelector('#sit1');
let sit2 = document.querySelector('#sit2');
let sit3 = document.querySelector('#sit3');
let escolha = document.querySelector('#escolha');

let notaFinal1 = 3;
let notaFinal2 = 8;
let notaFinal3 = 5;

if(notaFinal1 >= 7){
    sit1.textContent = 'Aprovado';
}

if(notaFinal1 >= 7){
    sit1.textContent = 'Aprovado';
}else{
    sit1.textContent = 'Reprovadoooo';
}

// IF TERNARIO

notaFinal2 >= 7 ? sit2.textContent = 'Passou' : sit2.textContent = 'Ficou';


if(notaFinal3 >= 7){
    sit3.textContent = "Apeovadissimo";
}else if(notaFinal3 <= 3){
    sit3.textContent = "Nos vemos proximo ano";
} else{
    sit3.textContent = "Você ganhou outra chance, Recuperação";
}


let situacao = ''
//let situacao = 'Aprovado';
//let situacao = 'Reprovado';
situacao = 'Recuperação';

switch(situacao){
    case 'Aprovado':
        escolha.textContent = 'Passou de ano';
        break
    case 'Rprovado':
        escolha.textContent = 'Não passou de ano';
        break
    case 'Recuperação':
        escolha.textContent = 'Ainda da tempo';
        break
    default:
        escolha.textContent = 'estude';
}
