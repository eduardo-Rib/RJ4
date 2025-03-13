import { Telefone, Endereco, Cliente, Empresa } from "./modulos.js";

const empresa = new Empresa("ABC LTDA", "Mercado Online");

const clientes = [
    {
      nome: "Maria",
      cpf: "123.456.789-00",
      estado: "RJ",
      cidade: "São João de Meriti",
      rua: "Av Cidade Jardim",
      numero: 123,
      telefones: ["12", "11111111", "11111111"],
    },
    {
      nome: "João",
      cpf: "987.654.321-00",
      estado: "SP",
      cidade: "São Paulo",
      rua: "Rua das Flores",
      numero: 456,
      telefones: ["11", "22222222", "22222222"],
    },
    {
      nome: "Ana",
      cpf: "321.654.987-00",
      estado: "MG",
      cidade: "Belo Horizonte",
      rua: "Av Amazonas",
      numero: 789,
      telefones: ["31", "33333333", "33333333"],
    },
    {
      nome: "Carlos",
      cpf: "741.258.369-00",
      estado: "BA",
      cidade: "Salvador",
      rua: "Rua do Sol",
      numero: 321,
      telefones: ["71", "44444444", "44444444"],
    },
    {
      nome: "Lucia",
      cpf: "852.963.741-00",
      estado: "PR",
      cidade: "Curitiba",
      rua: "Rua XV de Novembro",
      numero: 654,
      telefones: ["41", "55555555", "55555555"],
    },
    {
      nome: "Ricardo",
      cpf: "963.852.741-00",
      estado: "RS",
      cidade: "Porto Alegre",
      rua: "Rua das Pedras",
      numero: 987,
      telefones: ["51", "66666666", "66666666"],
    },
    {
      nome: "Juliana",
      cpf: "159.753.486-00",
      estado: "SP",
      cidade: "Campinas",
      rua: "Rua Central",
      numero: 159,
      telefones: ["19", "77777777", "77777777"],
    },
    {
      nome: "Fernando",
      cpf: "456.789.123-00",
      estado: "CE",
      cidade: "Fortaleza",
      rua: "Av Beira Mar",
      numero: 258,
      telefones: ["85", "88888888", "88888888"],
    },
    {
      nome: "Patrícia",
      cpf: "753.951.462-00",
      estado: "PE",
      cidade: "Recife",
      rua: "Rua Boa Viagem",
      numero: 369,
      telefones: ["81", "99999999", "99999999"],
    },
    {
      nome: "Ricardo",
      cpf: "852.147.369-00",
      estado: "GO",
      cidade: "Goiânia",
      rua: "Rua Goiás",
      numero: 741,
      telefones: ["62", "10101010", "10101010"],
    },
  ];

clientes.forEach((dados) => {
  let endereco = new Endereco(dados.estado, dados.cidade, dados.rua, dados.numero);
  let cliente = new Cliente(dados.nome, dados.cpf, endereco);

  for (let i = 0; i < dados.telefones.length; i++) {
    let telefoneNumero = dados.telefones[i];
    let ddd = dados.telefones[0];
    let numero = telefoneNumero;
    let telefone = new Telefone(ddd, numero);
    cliente.adicionarTelefone(telefone);
  }

  empresa.adicionarCliente(cliente);
});

console.log(empresa.descricao());