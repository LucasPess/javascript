let titulo = document.querySelector("#titulo");
titulo.textContent ='DOM';

let testando = document.querySelectorAll(".box");
document.write(testando[0].textContent);
document.write(testando[1].textContent);
document.write(testando[2].textContent);
testando[0].textContent = 'texto qualquer';

let testeTag = document.getElementsByTagName('div');
console.log(testeTag);

let testeId = document.getElementById('#titulo');
console.log(testeId);

let testeClasse = document.getElementsByClassName('.box');
console.log(testeclasse);
