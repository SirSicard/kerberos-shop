// ********************** slidedown funktion för min search-bar **********************//

//sparar diven med klassen .search och sparar den i en variable
let searchbar = document.querySelector(".search");
//skapar en onclick funktion till min search icon
function slideSearch(){
    //om jag trycker på knappen och den innehåller classen .hide ta bort classen hide annars lägg till classen .hide.
    if(searchbar.classList.contains("hide-search")){
        searchbar.classList.remove("hide-search");
    }else{
        searchbar.classList.add("hide-search")
    }
}

let shoppingCart = document.querySelector(".shopping-cart");

function slideShoppingCart(){
    if(shoppingCart.classList.contains("hide-cart")){
        shoppingCart.classList.remove("hide-cart");
    }else{
        shoppingCart.classList.add("hide-cart");
    }
}