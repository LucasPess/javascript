let titulo = document.querySelector('h1');
titulo.innerHTML = 'Pride %%';

let imagem = document.querySelector('#foto');
imagem.setAttribute('src', 'imagens/pride-fc.jpg')

imagem.setAttribute('width', '550px')

let box = document.querySelectorAll('.box');
box[0].setAttribute('class', 'escura');
//box[0].removeAttribute('class');

let tela = document.querySelector('main');

let btnDark = document.querySelector('#btdark');

let btnLight = document.querySelector('#btlight');

btnDark.addEventListener('click', modoDark);
btnLight.addEventListener('click', modoLight);

function modoLight(){
    console.log("modo light");
    tela.classList.add("light");
    tela.classList.remove("dark")
}

function modoDark(){
    console.log("modo dark");
    tela.classList.add("dark");
    tela.classList.remove("light")
}

titulo.style.color = "red";
titulo.style.backgroundColor = "black";
titulo.style.margin = "auto";
titulo.style.textAlign = "center"
titulo.style.borderRadius = "20px"
titulo.style.width = "500px"


