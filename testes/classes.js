// script2.js

// export function minhaFuncao() {
//   console.log("Função de script2!");
// }

export class Pessoa {
  static nomeClass = "Pessoa"; // ou posso usar o "this.constructor.name" / "(coloque o nome de alguma instancia/objeto que vc criou usando essa classe).constructor.name" pra conseguir o nome da classe
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  minhaClasse() {
    console.log("Minha classe é: " + Pessoa.nomeClass);
    // console.log("Minha classe é: " + this.constructor.name)
  }
}

// let pessoa1 = new Pessoa("Nome Teste", 22)
// pessoa1.minhaClasse();

export class Client extends Pessoa {
  email;
  categoria;

  constructor(nome, idade, email, categoria) {
    super(nome, idade);
    this.email = email;
    this.categoria = categoria;
  }

  minhaClasse() {
    // console.log("Minha classe é: " + Client.nomeClass);
    console.log("Minha classe é: " + this.constructor.name);
  }
}

export class Funcionario extends Pessoa {
  cargo;

  constructor(nome, idade, cargo) {
    super(nome, idade);
    this.cargo = cargo;
  }

  minhaClasse() {
    // console.log("Minha classe é: " + Funcionario.nomeClass);
    console.log("Minha classe é: " + this.constructor.name);
  }
}
