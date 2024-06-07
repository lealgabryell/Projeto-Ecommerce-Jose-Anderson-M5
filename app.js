const mysql = require("mysql2");


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Gabryellfodao123$",
  database: "ecommerce",
});

connection.connect(function (err) {
  console.log("Conectado com bando de dados do seu E-commerce!");
});

const inserir =
  'INSERT INTO cliente (cpf, nome, telefone, endereco, email, senha) VALUES ("08547419411","Francinaldinho","5583988665544","rua da resenha, 89","cudegrudinho@grudinho.com","cudegrude123");';

const consultaInserir = connection.query(
  inserir,
  function (err, result) {
    if (err) throw err;
    console.log(result);
  }
);

const mostrar = "SELECT * FROM cliente;";
const consultaMostrar = connection.query(mostrar, function (err, result) {
  if (!err) {
    console.log("resultado:\n", result);
  } else {
    console.log("Consulta não realizada!");
  }
});

// module.exports = { inserir ,  consultaInserir , consultaMostrar };
