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

// console.log(carroJoao)

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


function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('idade')

pessoa['sobrenome'] = undefined

Object.freeze(pessoa);

pessoa.nome = 'gabriel'

if (pessoa["sobrenome"]) {
    console.log("a pessoa tem um sobrenome")
}

if ('sobrenome' in pessoa) {
    console.log('tem sobrenome')
}

console.log(pessoa.nome)
console.log(pessoa["idade"])

console.log(Object.keys(pessoa).length)
console.log(Object.values(pessoa))



// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof maiorDeIdade)
// console.log(typeof conhecimentos)
// console.log(typeof pessoa)

// console.log(carroJoao instanceof Carro)
// console.log(conhecimentos instanceof Carro)