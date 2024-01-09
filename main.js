function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo
    this.fabricante = fabricante
    this.anoModelo = anoModelo
    this.anoFabricacao = anoFabricacao
    this.acelerar = function() {
        console.log("vruummm")
    }
 }

const carroJoao = new Carro("Fiesta", "Ford", 2020, 2019)

console.log(carroJoao)

const nome = "guilherme"
const idade = 19
const maiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    maiorDeIdade: maiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof maiorDeIdade)
console.log(typeof conhecimentos)
console.log(typeof pessoa)

console.log(carroJoao instanceof Carro)
console.log(conhecimentos instanceof Carro)