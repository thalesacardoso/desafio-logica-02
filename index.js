// Desafio de projeto 02
// Dev: Thales Cardoso
// Data: 28/08/2023


// Variáveis
let vitorias = 205
let derrotas = 120
let saldoFinal
let nivel

// Função responsável por calcular o saldo final
function saldo(venceu , perdeu){
    let saldoTotal = venceu - perdeu
    return saldoTotal
}

// variável que armazena o retorno da Função saldo()
saldoFinal = saldo(vitorias , derrotas)

// Estrutura de Decisão
if (saldoFinal < 10){
    nivel = "Ferro"

} else if (saldoFinal >= 11 && saldoFinal <= 20) {
    nivel = "Bronze"

} else if (saldoFinal >= 21 && saldoFinal <= 50) {
    nivel = "Prata"

} else if (saldoFinal >= 51 && saldoFinal <= 80) {
    nivel = "Ouro"

} else if (saldoFinal >= 81 && saldoFinal <= 90) {
    nivel = "Diamante"

} else if (saldoFinal >= 91 && saldoFinal <= 100) {
    nivel = "Lendário"

} else if (saldoFinal >= 101){
    nivel = "Imortal"
}

// Saída
console.log(`O Herói tem ${saldoFinal} de saldo e está no nível de ${nivel}`)