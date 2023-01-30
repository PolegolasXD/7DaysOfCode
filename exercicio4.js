//numero fixo
// const numeroAdivinhacaoFixo = 7;
// let chuteFixo = "";
// let acertouFixo = false;

// for(let i = 0; i < 3; i++){    
//     chuteFixo = prompt("Tente adivinhar o número de 0 a 10:");
//     if(chuteFixo == numeroAdivinhacao){
//         alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
//         acertouFixo = true;
//         break;
//     }
//     alert("Errado!");
// }
// if(!acertouFixo){
//     alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
// }


const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let chute = "";
let acertou = false;

for(let i = 0; i < 3; i++){    
    chute = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute == numeroAdivinhacao){
        alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
        acertou = true;
        break;
    }
    alert("Errado!");
}
if(!acertou){
    alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
}
