/*

Primeiro 

Voce deseja adicionar uma comida a sua lista de compras ? 

Sim ou nao ?


Se sim, entao o campo para digitar a comida por exemplo prompt("digite a comida!")

Digitando a comida, proximo campo pompt("em qual categoria essa comida se encaixa ? ")

Digitando o campo, tem que ser adicionado dentro de uma lista, pré definida


Se não, exibir uma lista com todos os itens agrupados como 

banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca 

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho
*/

let itemArray = [];
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let campoComida = "";
let campoCategoria = "";

let addFood = "sim";  

while(addFood != "não"){
    addFood = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");

    while (addFood != "sim" && addFood != "não") {  
	alert(`Operação não reconhecida!`);
        addFood = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }
	
    if (addFood === "não"){  
        break;
    }
	
    campoComida = prompt("Qual comida você deseja inserir?");

    campoCategoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?")

    if(campoCategoria === 'frutas'){
        frutas.push(campoComida);
    } else if (campoCategoria === 'laticínios'){
        laticinios.push(campoComida);
    } else if (campoCategoria === 'doces'){
        doces.push(campoComida);
    } else if (campoCategoria === 'congelados'){
        congelados.push(campoComida);
    } else {
        alert("Essa categoria não foi pré-definida.")
    }
}
console.log(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}`);




