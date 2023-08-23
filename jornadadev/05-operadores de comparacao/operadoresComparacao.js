// Comparar se é identico a alguma coisa
'a' === 'b';

// Comparar se não é identico a alguma coisa
'a' !== 'b';

// Maior Que
20 > 10;

//Menor Que 
10 < 20;

// Maior ou iagual a
20 >= 10;

// Menor ou igual a 
10 <= 20;


// Desafio
let nota1 = parseFloat(prompt('Digite sua nota da prova:'));
let nota2 = parseFloat(prompt('Digite sua outra nota da prova:'));
let mediaNota = (parseFloat(nota1) + parseFloat(nota2)) / 2;

if(mediaNota >= 5){
    console.log('Sua media foi '+ mediaNota +', você passou!');
}else{
    console.log('Sua media foi '+ mediaNota +' você reprovou!');
}