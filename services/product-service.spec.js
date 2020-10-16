const { getAllProduct, getProductById, getProductByBrandDescription } = require("./product-service");

describe("product-service", () => {
  it("should return all products", () => {
    expect(getAllProduct().length).toBe(3000);
  });

  it("should return a product by id that it is not palindrome", () => {
    const expectedProduct = {
      "id": 10,
      "brand": "adsfsda",
      "description": "dñqy ipvukesh",
      "image": "www.lider.cl/catalogo/images/smartphoneIcon.svg",
      "price": 691504
    }

    const p = getProductById("10");

    expect(p).toStrictEqual(expectedProduct);
    expect(p.price).toBe(expectedProduct.price);
  });

  it("should return a product by id that it is palindrome and apply the discount", () => {
    const expectedProduct = {
      "id": 181,
      "brand": "rvblsml",
      "description": "goeyxg nbowu",
      "image": "www.lider.cl/catalogo/images/toysIcon.svg",
      "price": 775722,
      "newPrice": 387861
    }

    const p = getProductById("181");

    expect(p).toStrictEqual(expectedProduct);
    expect(p.price).toBe(expectedProduct.price);
    expect(p.newPrice).toBe(expectedProduct.newPrice);
  });

  it("should return a list of product by brand or description that it is not palindrome", () => {
    const expectedProduct = {
      "id": 1462,
      "brand": "hufvwmu",
      "description": "yqfc rwkdjwqa",
      "image": "www.lider.cl/catalogo/images/bedRoomIcon.svg",
      "price": 986857
    }

    const products = getProductByBrandDescription("rwkdjwqa");
    const p = products.find((element) => element.id == expectedProduct.id);

    expect(products.length).toBe(11);
    expect(p.price).toBe(expectedProduct.price);
  });

  it("should return a list of product by brand or description that it is palindrome and apply the discount", () => {
    const expectedProduct = {
      "id": 46,
      "brand": "dsasd",
      "description": "muqn qblmiklf",
      "image": "www.lider.cl/catalogo/images/furnitureIcon.svg",
      "price": 65676,
      "newPrice": 32838
    }

    const products = getProductByBrandDescription("dsasd");
    const p = products.find((element) => element.id == expectedProduct.id);

    expect(products.length).toBe(12);
    expect(p.price).toBe(expectedProduct.price);
    expect(p.newPrice).toBe(expectedProduct.newPrice);
  });

});
