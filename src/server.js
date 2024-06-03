const express = require("express");
const allItems = require("./allItems");

const app = express();

app.use(express.json());

const PORT = 3003;

app.listen(3003, () => {
  console.log(`Servidor está rodando na porta  ${PORT}`);
});

app.get("/", async (req, res) => {
  const query = await allItems.allItems();
  return res.status(200).json(query);
});

app.post("/", async (req, res) => {
  const query = await allItems.createItem(req.body);
  return res.status(201).json(query);
});

//crie uma implementação da função deletar que vem lá de allItems

app.delete("/", async (req, res) => {
  const { id } = req.params;
  const query = await allItems.deleteItemsById(id);
  return res.status(200).json(query);
});
