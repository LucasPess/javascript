function somar(n1,n2){
    return n1 + n2
}

function subtrair(n1,n2){
    return n1 - n2
}

function multiplicar(n1,n2){
    return n1 * n2
}

function dividir(n1,n2){
    return n1 / n2
}

let parametro1 = parseFloat(prompt('Digite um numero: '));
let parametro2 = parseFloat(prompt('Digite um numero: '));
let calculo = prompt(' Digite: 1 para somar, 2 para subtrair, 3 para multiplicar ou 4 para dividir ');

if( calculo === '1'){
    alert(somar(parametro1, parametro2))
}else if( calculo === '2'){
    alert(subtrair(parametro1, parametro2))
}else if( calculo === '3'){
    alert(multiplicar(parametro1, parametro2))
}else if( calculo === '4'){
    alert(dividir(parametro1, parametro2))
}else {
    alert('{ERRO}, Você não fez a operação de forma correta, tente novamente(F5)')
}