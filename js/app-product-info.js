function goToProductInfo(id){

    for(let productInfo of document.querySelectorAll('.products')){
        productInfo.style.display = 'none';
    }
    document.querySelector(id).style.display = 'block';
}

function goBack(){
    for(let productInfo of document.querySelectorAll('.product-info')){
        productInfo.style.display = 'none';
    }

    for(let productInfo of document.querySelectorAll('.products')){
        productInfo.style.display = 'flex';
    }
}