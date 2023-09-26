let lutador = 'popó';
let nacionalidade = 'brasileiro';
let idade = 48;
let peso = 61;
let altura = 1.68;

document.write(`<h2>Informações</h2><br>`);
document.write(`Lutador: ${lutador}<br>`);
document.write(`Nacionalidade: ${nacionalidade}<br>`);
document.write(`Idade: ${idade} anos<br>`);
document.write(`Peso: ${peso} Kg<br>`);
document.write(`Altura: ${altura} m<br>`);

const dia = 26;
const mes = 9;
const ano = 2023;

const frase = "Seu tempo é limitado, então não o gaste vivendo a vida de outra pessoa";
const autor = "Steve Jobs";

document.write(`<h2>Frase do Dia</h2><br>`);
document.write(`${dia}/0${mes}/${ano}<br>`);
document.write(`${frase}<br>`);
document.write(`${autor}<br>`);

let meses = ['jan','fev','mar'];

document.write(`<h2>Array de Meses do Ano</h2><br>`);
document.write(`${meses} <br>`);

let jogo = {
    nome: 'League of legends',
    desenvolvedor: 'Riot games',
    anoLancamento: 2009
}

document.write(`<h2>Objeto jogo</h2><br>`);
document.write(`Jogo: ${jogo.nome}<br>`);
document.write(`Desenvolvido por: ${jogo.desenvolvedor}<br>`);
document.write(`Ano de lançamento: ${jogo.anoLancamento}`);