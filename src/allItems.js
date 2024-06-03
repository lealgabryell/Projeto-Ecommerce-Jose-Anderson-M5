const connection = require("./connection");

const allItems = async () => {
  const [query] = await connection.execute("SELECT * FROM Produto");
  return query;
};


const createItem = async (produto) => {
  const [query] = await connection.execute(
    "INSERT INTO Produto (id_produto, nome, descricao, preco, categoria) VALUES (?,?,?,?,?)",
    [
      produto.id_produto,
      produto.nome,
      produto.descricao,
      produto.preco,
      produto.categoria,
    ]
  );
  return query;
};
//quero uma função para deletar items da lista de produto

const deleteItemById = async (id) => {
  const [query] = await connection.execute(
    "DELETE FROM Produto WHERE id_produto =?",
    [id]
  );
  return query;
};
module.exports = allItems, createItem, deleteItemById;
