//TODO:
//OS DADOS RECEBIDOS PELO FORMULARIO NAO ESTAO SENDO ADICIONADO AO ARRAY CLIENTE.
//PRECISAMOS CONSEGUIR ENVIAR O ARRAY PARA O ARQUIVO APP.JS E LA FAZER COM QUE O MESMO SEJA ADICIONADO AO BD

export const listaClientes = [];

function addCliente(cliente) {
  listaClientes.push(cliente);
  return cliente.nome + " adicionado a lista de clientes";
};

function setCliente() {
  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const telefone = document.getElementById("telefone").value;
  const endereco = document.getElementById("endereco").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const cliente = {
    nome,
    cpf,
    telefone,
    endereco,
    email,
    senha,
  };

  const resultado = addCliente(cliente);
  document.querySelector(".clientes").innerHTML += `<p>${resultado}</p>`;
  console.log(listaClientes);
}

document.querySelector("#cadastrar").addEventListener("click",() => setCliente);