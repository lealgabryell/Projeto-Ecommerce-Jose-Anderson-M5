const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "ecommerce",
});

connection.connect(function (err) {
  console.log("Conectado com bando de dados do seu E-commerce!");
});

const inserir =
  "INSERT INTO cliente (cpf, nome, telefone, endereco, email, senha) VALUES (?,?,?,?,?,?);";

const cpf = getElementById(cpf).value;
const nome = getElementById(nome).value;
const telefone = getElementById(telefone).value;
const endereco = getElementById(endereco).value;
const email = getElementById(email).value;
const senha = getElementById(senha).value;

const consultaInserir = connection.query(
  inserir,
  [cpf, nome, telefone, endereco, email, senha],
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

// // module.exports = { inserir ,  consultaInserir , consultaMostrar };
