function gotoCheckout(id){    
    for(let article of document.querySelectorAll('article')){
        article.style.display = 'none';
    }
    document.querySelector(id).style.display = 'block';
    emptyCart();
 }
// Empty cart after clicking on checkout button
function emptyCart(){
   // let info = document.querySelector('#cart').textContent;
   // console.log(info)
   let cartItems = document.querySelectorAll('.item')
   let cartItemsArray = Array.from(cartItems)
   console.log(cartItemsArray);

   let checkout = document.querySelector(".checkout ul")
   for(element of cartItemsArray){
       checkout.insertAdjacentHTML('beforeend', element.outerHTML)
   }
   let total = document.querySelector('.total')
   checkout.insertAdjacentHTML('beforeend', total.outerHTML)



//    while(cartItems.hasChildNodes()){
//        cartItems.removeChild(cartItems.firstChild)
//    }
updateTotal();
}
function paymentAlert(){
    alert("Thanks for your purchase!");
}

