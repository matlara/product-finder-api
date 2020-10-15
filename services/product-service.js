const utils = require("../utils/utils");
const products = require('../data/01-products.json');

const getAllProduct = () => products;

const getProductById = (id) => {
  const product = products.find((element) => element.id == id);
  if( product && utils.palindrome(id) ) {
    product.price = utils.fiftyPercent(product.price);
  }
  return product;
}

const getProductByBrandDescription = (word) => {
  let productsByBrand = products.filter((product) => product.brand.includes(word));
  let productsByDescription = products.filter((product) => product.description.includes(word));
  
  let productsByBrandDescription = [];
  productsByBrandDescription = utils.mergeArrays(productsByBrand, productsByDescription);

  if( productsByBrandDescription.length > 0 && utils.palindrome(word) ) {
    productsByBrandDescription.forEach(element => {
      element.price = utils.fiftyPercent(element.price);
    });
  }

  return productsByBrandDescription;
}

module.exports = { getAllProduct, getProductById, getProductByBrandDescription };
