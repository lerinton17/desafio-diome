console.log("Bem-vindo")

let heroi = "lerinton17"
let xpLvl = 10001

if (xpLvl<1000) {
    xpLvl = "ferro"
} else if(xpLvl<2000) {
    xpLvl = "bronze"
} else if (xpLvl<5000) {
    xpLvl = "prata"
} else if (xpLvl<8000) {
    xpLvl = "ouro"
} else if (xpLvl<9000) {
    xpLvl = "ascendente"
} else if (xpLvl<10000) {
    xpLvl = "imortal"
} else{
    xpLvl= "radiante"
}

console.log("O herói "+ heroi + " está no nível "+ xpLvl)
