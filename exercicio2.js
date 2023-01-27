const form = document.querySelectorAll('form');
const botaum = document.querySelector('#botaum');

console.log(form)
console.log(botaum)

form.addEventListener('submit', event => {
    event.preventDefault();
    const clicandoBotao = botaum.value;

    console.log(clicandoBotao);

    console.log(event);
    console.log("potate")
})

