const connection = require("./connection");

const allitems = async () => {
  const [query] = await connection.execute("SELECT * FROM Produto");
  return query;
};

module.exports = allItems;
