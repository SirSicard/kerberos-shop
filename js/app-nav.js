

let searchbar = document.querySelector(".search");
//slide function for search input
function slideSearch(){
    //if searchbar contains the class .hide-search, remove .hide-search from searchbar else add .hide-search
    if(searchbar.classList.contains("hide-search")){
        searchbar.classList.remove("hide-search");
    }else{
        searchbar.classList.add("hide-search")
    }
}

//**********************Same function for shopping-cart ***********************//

let shoppingCart = document.querySelector(".shopping-cart");

function slideShoppingCart(){
    if(shoppingCart.classList.contains("hide-cart")){
        shoppingCart.classList.remove("hide-cart");
    }else{
        shoppingCart.classList.add("hide-cart");
    }
}

