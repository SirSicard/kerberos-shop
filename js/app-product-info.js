function goToProductInfo(id){

    for(let productInfo of document.querySelectorAll('.products')){
        productInfo.style.display = 'none';
    }
    document.querySelector(id).style.display = 'block';
    let categories = document.querySelector('.categories');
    categories.style.display = 'none';
}

function goBack(){
    for(let productInfo of document.querySelectorAll('.product-info')){
        productInfo.style.display = 'none';
    }

    for(let productInfo of document.querySelectorAll('.products')){
        productInfo.style.display = 'flex';
    }
    let categories = document.querySelector('.categories');
    categories.style.display = 'flex';
}

function scrollAppear(){


    let product = document.querySelectorAll('.product');
    
    //with window.innerHeigth we find out how big the window of the browser is
    let screenPosition = window.innerHeight;

    let interval = 150;

    //loop through product with forEach, and use an arrow function
    product.forEach((products, index) =>{
        
 
        //looking for the distance between the windows top to the element products
        let productPosition = products.getBoundingClientRect().top;
        
        //setTimeout-function will set a delay for each index of products * interval (milliseconds)
        setTimeout(function (){

            //if productPosition is less then screenPosition add the class product-appear to products  
            if(productPosition < screenPosition) {
                products.classList.add('product-appear');
            
            }
        }, index * interval);
        
        
    });

}

//addEventListener on scroll and run function scrollAppear
window.addEventListener('scroll',scrollAppear);