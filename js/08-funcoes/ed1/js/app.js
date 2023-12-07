let titulo = document.querySelector('h1');
titulo.textContent = 'Funções em JavaScript';
let box = document.querySelector('.box');

function olaMundo(){
    document.write('Olá Mundo sem retorno <br>');
};

function olaMundo2(){
    return 'Olá Mundo com retorno';
};

olaMundo();
document.write(olaMundo2())

let x = 1;
let y = 2;

let menssagem = 'Jesus é o meu salvador';

function somar(a,b){
    document.write((a + b) + "<br>");
}

function somar2(c, d){
    return c + d;
}

somar(x,y);
somar(10,5);

document.write(`<p>${somar2(x, y)}</p>`);
document.write(`<p>${somar2(5, 2)}</p>`);

// função anonima
titulo.addEventListener('click', function() {
    console.log('clicou no título')
})

// Arrow function

const nomeFuncao = () =>{
    //Ações
}

const olaMundoArrow = () => document.write("Olá mundo!!!!!!!!!");

const olaMundo2Arrow = () => '<p>Olá mundo com arrow function</p>';

olaMundoArrow();
document.write(olaMundo2Arrow())