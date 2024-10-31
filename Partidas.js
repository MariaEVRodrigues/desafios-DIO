//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de
//um jogador,depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser //feito através do calculo (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"


function calcularVitorias (vitorias, derrotas){
    return vitorias - derrotas;
}

function rankingVitorias (resultado){
    switch (resultado){
    case 101:
    return "Imortal";
    break;
    
    case 91:
    return "Lendário";
    break;
    
    case 81:
    return "Diamante";
    break;
    
    case 51:
    return "Ouro";
    break;
    
    case 21:
    return "Prata";
    break;
    
    case 11:
    return "Bronze";
    break;

    default:
    return "Ferro";
}
}
    
let vitorias = 21
let derrotas = 10
let saldo = calcularVitorias(vitorias, derrotas)
let nivel = rankingVitorias(saldo)     

console.log("O Herói tem saldo de " + saldo + " está no nível de " + nivel);