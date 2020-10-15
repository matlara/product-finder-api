const express = require("express");
const bodyParser = require("body-parser");
const { getAllProduct, getProductById, getProductByBrandDescription } = require("./services/product-service");

const app = express();
app.use(bodyParser.json());

app.get("/products", (req, res) => {
  res.json(getAllProduct());
});

app.get("/product/id/:id", (req, res) => {
  const product = getProductById(String(req.params.id));
  if (!product) return res.status(404).send("Product not found");
  res.json(product);
});

app.get("/product/word/:word", (req, res) => {
  const product = getProductByBrandDescription(req.params.word);
  if (!product) return res.status(404).send("Product not found");
  res.json(product);
});

app.listen(3000);
console.log("Express started on port 3000");
console.log(
  "http://localhost:3000/products \n" +
  "http://localhost:3000/product/id/:id \n" +
  "http://localhost:3000/product/word/:word \n"
);
