const form = document.querySelector('#formulario-principal');
const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const linguagem = document.querySelector('#linguagem-programacao');


console.log(nome);
console.log(idade);
console.log(linguagem);



const botao = document.querySelector('#botao');

botao.addEventListener("click", function(event) {
    console.log(event)
    event.preventDefault();

    const [valorNome, valorIdade, valorLinguagem] = event.target.form;
    criaParagrafo(valorNome.value);
    criaParagrafo(valorIdade.value);
    criaParagrafo(valorLinguagem.value);
})

function criaParagrafo(valorParagrafo){
    
    const paragrafo = document.createElement('p');
    const nomeCaixaTexto = document.createTextNode(valorParagrafo);
    paragrafo.appendChild(nomeCaixaTexto);
    form.appendChild(paragrafo);

}

