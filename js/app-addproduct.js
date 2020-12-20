let addProductToShopForm = queryOne(".add-product-to-shop");
addProductToShopForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let artno = queryOne(".add-product-to-shop .product-artno").value;
  let name = queryOne(".add-product-to-shop .product-name").value;
  let category = queryOne(".add-product-to-shop .product-category").value;
  let price = queryOne(".add-product-to-shop .product-price").value;
  //let image = queryOne(".add-product-to-shop .product-img").image;
console.log(artno , name, category, price);
addDiv(artno , name, category, price);
});

function queryOne(selector) {
  return document.querySelector(`${selector}`);
}

function addDiv(artno , name, category, price) {
    
  let div = document.createElement('div');
  div.id = 'product';

  let product = /*html*/ `
  <div class="content">
    <h2>${name}</h2>
    <ul>
      <li class="product-artnr">Art.no: <span>${artno}</span></li>
      <li>category: ${category}</li>
    </ul>
    <button onclick="getProductInfo(this)">
    <span>${price}</span>
    </button>
  </div>`;


 div.innerHTML = product;
 div.className = 'product';

  let cart = document.querySelector(".products");
  cart.insertAdjacentHTML("beforeend", product);;
}

