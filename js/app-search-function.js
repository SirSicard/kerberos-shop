/* Search function */
function searching() {
  let keyword = new RegExp(document.getElementById("keyword").value, "gi");
  let searchResult = productList.filter((o) => o.product.match(keyword));
  document.getElementById("product").innerHTML = `${searchResult.map(productListInfo).join("")}`;
  console.log
  
}
/* Output function */
function productListInfo() {
  return `
        <div class="product">
            <div onclick="goToProductInfo('#product${artno}')" class="product-img">
                <img src="../assets/img/products/${img}"/>
            </div>
            <div class="content">
                <h2>"${category}"</h2>
                <ul>
                    <li class="product-artnr">Art.no: <span>${artno}</span></li>
                    <li>category: ${category}</li>
                </ul>   
                <button onclick="getProductInfo(this)">
                <span>${price}</span>
                </button>
            </div> 
        </div>
        `;
}
/* Product list */
let productList = [
  {
    category: "Jeans",
    img: "pants.jpg",
    artno: "000001",
    price: "499.99",
  },
  {
    category: "Jeans",
    img: "pants-2.jpg",
    artno: "000002",
    price: "499.99",
  },
  {
    category: "Jeans",
    img: "pants-3.jpg",
    artno: "000003",
    price: "499.99",
  },
  {
    category: "Hat",
    img: "hats.jpg",
    artno: "000004",
    price: "49.89",
  },
  {
    category: "Hat",
    img: "hats-2.jpg",
    artno: "000005",
    price: "49.89",
  },
  {
    category: "Hat",
    img: "hats-3.jpeg",
    artno: "000006",
    price: "49.89",
  },
  {
    category: "Shirt",
    img: "nosonsofmine.jpg",
    artno: "000007",
    price: "299.99",
  },
  {
    category: "Shirt",
    img: "Sightlessinshadow.jpg",
    artno: "000008",
    price: "299.99",
  },
  {
    category: "Shirt",
    img: "valante.jpg",
    artno: "000009",
    price: "299.99",
  },
];
