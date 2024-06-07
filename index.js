//TODO:
//OS DADOS RECEBIDOS PELO FORMULARIO NAO ESTAO SENDO ADICIONADO AO ARRAY CLIENTE.
//PRECISAMOS RESOLVER ESSE PROBLEMA 
//PRECISAMOS CONSEGUIR ENVIAR O ARRAY PARA O ARQUIVO APP.JS E LA FAZER COM QUE O MESMO SEJA ADICIONADO AO BD


const cliente = [];

const recebeParams = () => {
  const cpf = getElementById('cpf').value;
  const nome = getElementById('nome').value;
  const telefone = getElementById('telefone').value;
  const endereco = getElementById('endereco').value;
  const email =  getElementById('email').value;
  const senha = getElementById('senha').value;

  const newCliente = cliente({ cpf, nome, telefone, endereco, email, senha });
  cliente.push(newCliente);
};

console.log(cliente);