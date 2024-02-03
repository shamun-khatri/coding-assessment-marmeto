import fechData from "./fetchData.js";

const updateData = async () => {
  const data = await fechData();

  const vendorElement = document.getElementById("vendor");
  const productTitleElement = document.getElementById("product-title");
  const priceElement = document.getElementById("price");
  const comparePriceElement = document.getElementById("compare-price");
  const descElement = document.getElementById("desc");


  if (vendorElement && productTitleElement) {
    vendorElement.textContent = data.product.vendor;
    productTitleElement.textContent = data.product.title;
    priceElement.textContent = data.product.price;
    comparePriceElement.textContent = data.product.compare_at_price;
    descElement.innerHTML = data.product.description;
  }
};

updateData();
