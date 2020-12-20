function catogoriesSearch(text) {
  //console.log(text.textContent);

  let search = text.textContent;

  console.log(search);

  let products = document.querySelectorAll(".product");

  for (let product of products) {
    if (product.textContent.toLowerCase().includes(search.toLowerCase())) {
      product.style.display = "block";
    } else if (text.textContent.includes("All")) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  }

}
