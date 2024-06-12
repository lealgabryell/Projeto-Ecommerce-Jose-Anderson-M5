const mysql = require("mysql2");
import listaClientes from './index';

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
  "INSERT INTO cliente (cpf, nome, telefone, endereco, email, senha) VALUES (?, ?, ?, ?, ?, ?);";
const cliente = listaClientes[listaClientes.length - 1]
const consultaInserir = connection.query(
  inserir,
  cliente,
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
