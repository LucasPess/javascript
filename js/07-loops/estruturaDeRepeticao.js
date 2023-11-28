// for( inicializador; condição-saida; expressão final){
    //executa codigo
//}

// Exercicio

let nota = [2,5,10,25,50,100,2,5,10,25,50,100,2,5,10,25,50,100,2,5,10,25,50,100,2,5,10,25,50,100,2,5,10,25,50,100];
let total = 0;

for(let repeticoes = 0; repeticoes < nota.length; repeticoes++){
    total += nota[repeticoes];
}

console.log('O total do seu dinheiro é ' + total)