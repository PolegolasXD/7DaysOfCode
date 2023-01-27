
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'




if (numeroUm = stringUm) {
  console.log('As variáveis numeroUm e StringUm tem o mesmovalor, mas tipos diferentes')

} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')


}

if (numeroTrinta != stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')


} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')


}

if (numeroDez = stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')


} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}


const nome = prompt("Digite o seu nome:");
const idade = prompt("Quantos anos você tem?:");
const linguagemDeProgramacao = prompt("Qual linguagem de programação você está estudando?:");

const mensagemUsuario = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemDeProgramacao}!`;

alert(mensagemUsuario);

const condicional = prompt(`Voce gosta de estudar ${linguagemDeProgramacao}?? Responta com 1 pra sim e 2 pra não`);



function condicionalResposta(){

  if (condicional === "1") {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
  }
  if (condicional === "2") {
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
  } 

}
condicionalResposta();



