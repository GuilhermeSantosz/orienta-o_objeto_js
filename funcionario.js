function Pessoa(nome) {
    this.nome = nome
    this.dizOi = function() {
        console.log(this.nome + " diz olá")
    }
    this.dizCargo = function() {
        console.log(this.cargo)
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo
    this.salario = salario

    Pessoa.call(this, nome)
}


const funcionario1 = new Funcionario("Maria", "dev front-end", 5000)
const pessoa = new Pessoa("guilherme")

funcionario1.dizOi()
pessoa.dizCargo()

