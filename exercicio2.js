const form = document.querySelector('#formulario-principal');
const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const linguagem = document.querySelector('#linguagem-programacao');


console.log(nome);
console.log(idade);
console.log(linguagem);



const botao = document.querySelector('#botao');

botao.addEventListener("click", function(event) {
    console.log(event);
    event.preventDefault();

    const valores = event.target.form;
    criaParagrafo(valores);

})

function criaParagrafo(valores){

    const [valorNome, valorIdade, valorLinguagem] = valores;

    const paragrafo = document.createElement('p');
    const nomeCaixaTexto = document.createTextNode(`Olá meu nome ${valorNome.value}, tenho ${valorIdade.value} e estou aprendendo ${valorLinguagem.value}`);
    paragrafo.appendChild(nomeCaixaTexto);
    const divDown = document.getElementById('card-down');
    divDown.appendChild(paragrafo);
    divDown.style.opacity = "1";

}

function limparCampo(){
    document.querySelectorAll('#formulario-principal').value = "";
    
}


