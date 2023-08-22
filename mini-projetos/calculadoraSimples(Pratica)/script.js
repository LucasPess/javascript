let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let resultado = document.querySelector('span')

function adicao(){
    resultado.innerHTML = Number(n1.value) + Number(n2.value);
}

function subtracao(){
   resultado.innerHTML =  Number(n1.value) - Number(n2.value);
}

function multiplicacao(){
    resultado.innerHTML = Number(n1.value) * Number(n2.value);
}

function divisao(){
    resultado.innerHTML = Number(n1.value) / Number(n2.value);
}
