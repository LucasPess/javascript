let cor = document.getElementById('titulo')
let cores = ['red', 'blue', 'yellow','green'];

document.body.style.backgroundColor =cores[0];

function mudarCor(){
    if(document.body.style.backgroundColor == cores[0]){
        document.body.style.backgroundColor = cores[1];
        cor.innerHTML = `Cor de fundo:  ${cores[1]}`
        } else if(document.body.style.backgroundColor == cores[1]){
            document.body.style.backgroundColor = cores[2];
            cor.innerHTML = `Cor de fundo:  ${cores[2]}`
        } else if(document.body.style.backgroundColor == cores[2]){
            document.body.style.backgroundColor = cores[3];
            cor.innerHTML = `Cor de fundo:  ${cores[3]}`
        } else{
            document.body.style.backgroundColor =cores[0]
            cor.innerHTML = `Cor de fundo:  ${cores[0]}`
        }
}