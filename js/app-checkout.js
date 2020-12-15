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
   let CartItems = document.querySelector('.list-items')
   while(CartItems.hasChildNodes()){
       CartItems.removeChild(CartItems.firstChild)
   }
   updateTotal();
}
//function paymentAlert(){
    //alert("Thanks for your purchase!");
//}
