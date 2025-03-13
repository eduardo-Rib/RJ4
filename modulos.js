class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }
}

class Cliente {
    #cpf // Atributo privado

    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = []
    }

    getCpf() {
        return this.#cpf
    }

    adicionarTelefone(telefone) {
        this.telefones.push(telefone)
    }

    descricao() {
        let endereco = `Estado: ${this.endereco.estado} cidade: ${this.endereco.cidade} rua: ${this.endereco.rua} numero: ${this.endereco.numero}`
        let telefones = this.telefones
        .map((tel) => `DDD: ${tel.ddd} Numero: ${tel.numero}`).join("\n")

        return `Nome: ${this.nome}\nCPF: ${this.getCpf()}\n${endereco}\nTelefones:\n${telefones}`
    }
}

class Empresa {
    #cnpj

    constructor(nome, nomeFantasia) {
        this.nome = nome
        this.nomeFantasia = nomeFantasia
        this.clientes = []
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente)
    }

    descricao() {
        let infoEmpresa = `Razão Social: ${this.nome}\nNome Fantasia: ${this.nomeFantasia}\n---------------------------`
        let infoClientes = this.clientes
        .map((cliente) => cliente.descricao())
        .join("\n\n")

        return infoEmpresa + "\n" + infoClientes
    }
}

export { Telefone, Endereco, Cliente, Empresa }