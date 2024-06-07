import {inserir, consultaInserir} from './app.js'
function inserirCliente() {
  const cpf = getElementById(cpf).value;
  const nome = getElementById(nome).value;
  const telefone = getElementById(telefone).value;
  const endereco = getElementById(endereco).value;
  const email = getElementById(email).value;
  const senha = getElementById(senha).value;

  const realizarInsercao = (inserir(cpf, nome, telefone, endereco, email));
}