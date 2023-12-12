let carros = ['Fusca', 'Brasilia', 'Gurgel'];


// i = iterador, interação ou index
for(let i = 0; i <= 5; i++){
    document.write(i + " ");
}

for(let i = 0; i < carros.length; i++){
    document.write(`<li>${carros[i]}</li>`);
}



let frutas = ['Pera', 'Uva', 'Maçã', 'Banana', 'Melancia'];

frutas.forEach(function(frutas,i){
    document.write(`<br> ${i} ${frutas} <br>`);
})  

carros.forEach(function(carros){
    document.write(carros + '<br>');
})


let contador = 0;

while(contador < frutas.length){
    console.log(frutas[contador]);
    contador ++;
}

console.log(contador);// estará com o valor 5


let iterador = 0;

do{
    console.log(carros[iterador]);
    iterador++;
}while(iterador < carros.length)

console.log(iterador)// iterador com valor 3