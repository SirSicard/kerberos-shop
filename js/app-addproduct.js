// ********************** Add A new Product to Shop funktion **********************//

// the input of the admin page
let addProductToShopForm = queryOne(".add-product-to-shop");
addProductToShopForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let artno = queryOne(".add-product-to-shop .product-artno").value;
  let name = queryOne(".add-product-to-shop .product-name").value;
  let category = queryOne(".add-product-to-shop .product-category").value;
  let price = queryOne(".add-product-to-shop .product-price").value;
  let image = document.getElementById("product-image").files[0].name;
//console.log(artno , name, category, price, image);
addDiv(artno , name, category, price , image);
});

// short expression for select query
function queryOne(selector) {
  return document.querySelector(`${selector}`);
}

// this function for create and push a new Div for new product in shop
function addDiv(artno , name, category, price , image) {
    
  let div = document.createElement('div');
  div.id = 'product';

  let product = /*html*/ `<div class="product">
  <div onclick="goToProductInfo('#product${artno}')" class="product-img">
      <img src="../assets/img/products/${image}"/>
  </div>
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

