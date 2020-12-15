
// ********************** Add Product to Basket funktion **********************//
function getProductInfo(button) {

    let span = button.querySelector("span");
    let price = span.textContent;
    let parent = button.closest(".content");
    let h2 = parent.querySelector("h2");
    let productName = h2.textContent;
  
    addCartItem(productName, price);
  }
    
  function addCartItem(name, price) {
  
    let cartItems = document.querySelectorAll("#cart li.item");
    let cartItemNames = [];
  
    for (let cartItem of cartItems) {
      let itemName = cartItem.querySelector(".product-name").textContent;
      cartItemNames.push(itemName);
    }
  
    if (cartItemNames.includes(name)) {
      for (let cartItem of cartItems) {
        let itemName = cartItem.querySelector(".product-name").textContent;
        if (itemName === name) {
          let amount = parseInt(cartItem.querySelector(".amount").value) + 1;
          cartItem.querySelector(".amount").value = amount;
        }
      }
    } else {
      
      let li = /*html*/ `
      <li class="item">
        <span class="product-name">${name}</span>
        <span class="product-price">${price}</span>
        <input class="amount" type="number" value="1" min="1" oninput="updateTotal()"/>
        <span class="remove" onclick="removeProduct(this)">X</span>
      </li>
      `;
      
      let cart = document.querySelector("#cart .list-items");
      cart.insertAdjacentHTML("beforeend", li);
  
      
    }
    updateTotal();
  }
  
  function updateTotal() {
  
    let items = document.querySelectorAll("#cart ul li.item");
    let total = 0;
    for (let item of items) {
      let price = item.querySelector(".product-price").textContent;
      let amount = item.querySelector(".amount").value;
      total += parseInt(price) * amount;
    }
    let totalElement = document.querySelector(".total span");
    totalElement.textContent = total;
  }

  function addCartToCheckout(checkout){
    let price = span.textContent;
    let parent = button.closest("content");
    let h1 = parent.querySelector("h1");
  }
  
  function search(input) {
  
    let products = document.querySelectorAll(".product");
  
    for (let product of products) {
      if (product.textContent.toLowerCase().includes(input.toLowerCase())) {
        product.style.display = "flex";
  
      } else {
        product.style.display = "none";
      }
    }
  }
  
  function removeProduct(product) {
    let parentElement = product.closest(".item");
    let productName = parentElement.querySelector(".product-name").textContent;
    let products = document.querySelectorAll(".item");
    for (let p of products) {
      let name = p.querySelector(".product-name").textContent;
      if (name === productName) {
        p.remove();
      }
    }
    updateTotal();
  }