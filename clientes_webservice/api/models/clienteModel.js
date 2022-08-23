class Cliente {
    constructor(nome, sobrenome, email, telefone, cep, endereco1, endereco2, dataNascimento, cpf, renda) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.telefone = telefone;
        this.cep = cep;
        this.endereco1 = endereco1;
        this.endereco2 = endereco2;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.renda = renda;
    }
}

export { Cliente }