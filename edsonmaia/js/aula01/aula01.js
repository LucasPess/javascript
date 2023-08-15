//arquivo js externo
    document.write('Olá, mundo!')
    console.log('Outro olá mundo!')
    alert('Olá mundo com alerta!')

// CRIAR VARIÁVEIS e atribuir valores

let mensagem = 'Minha mensagem';
let mensagem2 = 'Outra menssagem';
let meuPeso = 90;
let minhaAultura = 182;  
let minhaIdade = 17;
let ehDoador = false;
let teste = null;

// CRIAR CONTANTES e atribuir valores
const  PI = 3.1415;
const  TAXA = 0.5;

teste = 'Algum conteudo';

//  ESCREVER O CONTEÚDO DAS VARIÁVEIS E CONSTANTES
    /*
    document.write(mensagem);
    document.write(mensagem2);
    document.write(meuPeso);
    document.write(minhaAultura);
    document.write(minhaIdade);
    document.write(ehDoador);
    document.write(teste);
    document.write(PI);
    document.write(TAXA);
    */

    document.write('<P> Mensagem: '+ mensagem +'</P>');

    document.write(`Mensagem2: ${mensagem2}`);

    document.write('<P>Peso:'+ meuPeso +' Kg </P>');

    document.write(`Altura: ${minhaAultura} cm`);

    document.write('<P> Idade:'+ minhaIdade +' anos</P>');

    document.write(`Doador? ${ehdoador}`);

    document.write('<P> Teste'+ teste +'</P>');

    document.write('<P> PI'+ PI+'</P>');

    document.write('<P> TAXA'+ TAXA +'</P>');
    


