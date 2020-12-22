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
  let info = queryOne(".add-product-to-shop .product-desc").value;
  let size = queryOne(".add-product-to-shop .product-size").value;
//console.log(artno , name, category, price, image);
addDiv(artno , name, category, price , image, info , size);
addDivInfo(artno , name , price , image, info , size);

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

  let selectedDiv = document.querySelector(".products");
  selectedDiv.insertAdjacentHTML("beforeend", product);;
}

// this function for create and push a new Div for new product in shop
function addDivInfo(artno , name, price , image , info , size) {
    
  let div = document.createElement('div');
  div.className = "product-info";


  let productInfo = /*html*/ `<div class="product-info" id="product${artno}">
  <div class="info-product-img">
      <img src="../assets/img/products/${image}"/>
  </div>
  <p> ${info}</p>
  <ul>
      <li>Size - <span>${size}</span></li>
      <li>Composition - <span>Cotton 100%</span></li>
      <li>Art. No. - <span>${artno}</span></li>
  </ul>
  <div class="info-buttons content">
      <h2>${name}</h2>
      <button onclick="getProductInfo(this)"><span>${price}</span></button>
      <i onclick="goBack()" class="fas fa-chevron-circle-left"></i>
  </div>
</div>`;

 div.innerHTML = productInfo;
 div.className = 'product-info';

  let selectedDiv = document.querySelector(".products");
  selectedDiv.insertAdjacentHTML("beforeend", productInfo);;
}

