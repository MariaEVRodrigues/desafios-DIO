let nome = "Joana", experiencia = 1050, nivel = ""

if (experiencia < 1000){
    nivel = "Ferro"
}else if (experiencia > 1000 && experiencia < 2001){
    nivel = "Bronze"
}else if (experiencia > 2000 && experiencia < 5001){
    nivel = "Prata"
}else if (experiencia > 5000 && experiencia < 7001){
    nivel = "Ouro"
}else if (experiencia > 7000 && experiencia < 8001){
    nivel = "Platina"
}else if (experiencia > 8000 && experiencia < 9001){
    nivel = "Ascendente"
}else if (experiencia > 9000 && experiencia < 10001){
    nivel = "Imortal"
}else {
    nivel = "Radiante"
}

console.log ("O Herói de nome " + nome + " está no nível de " + nivel )