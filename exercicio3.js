const respostaArea = prompt('Voce pretende seguir para Front-End ou Back-End');

if (respostaArea === 'Front-End') {
    const respostaFront = prompt('Quer aprender React ou Vue?');
    const respostaContinuacao = prompt(`Voce quer continuar se especealizando ${respostaFront}, ou deseja se tornar um FullStack?`);

    if (respostaContinuacao === 'FullStack') {
        alert('sugerimos tentar algo do Back-End');
    }
}
if (respostaArea === 'Back-End') {
    const respostaBack = prompt('Quer aprender C# ou Java?');
    const respostaContinuacao = prompt(`Voce quer continuar se especealizando ${respostaBack}, ou deseja se tornar um FullStack?`);

    if (respostaContinuacao === 'FullStack') {
        alert('sugerimos tentar algo do Front-End');
    }
}

let respostaTecnologia = [];
let validacao = true;

while (validacao) {
    tecnologiaPrompt = prompt("Tem mais alguma tecnologia que você gostaria de aprender? se nao digite Cancelar");
    respostaTecnologia.push(tecnologiaPrompt);

    respostaTecnologia.map(function (item) {
        if (item === "Cancelar") {
            validacao = false
        } else {
            validacao = true
        }
    })
}


console.log(respostaTecnologia);
alert("obrigado por testar meu programinha <3")