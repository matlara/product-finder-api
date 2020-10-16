const express = require("express");
const request = require('request');
const bodyParser = require("body-parser");
const { getAllProduct, getProductById, getProductByBrandDescription } = require("./services/product-service");

const app = express();
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin-addr, Reference-Service, Reference-Operation, Channel, Application-Id, Tracking-Id, Content-Type, X-Ibm-Client-Id, Access-Control-Allow-Methods, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Allow', 'GET, POST');

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
  next();
});

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
