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
    
    //med window.innerHeigth så får vi reda på hur stor skärmen är och vi sparar det i en variable screenPosition
    let screenPosition = window.innerHeight;

    //skapar en variable med värdet 780 vilket kommer att översättas till 780 millisekunder
    let interval = 150;

    //vi loopar igenom alla produkterna med en forEach arrow function
    product.forEach((products, index) =>{
        
        //skapar en variable med funktionen getboundingclientrect som ger information om vad ett element befinner sig i förhållande till var jag är på sidan
        //vi letar efter distansen vi har från toppen av skärmen till elementet products vi letar efter
        let productPosition = products.getBoundingClientRect().top;
        
        //setTimeout-funktionen kommer att skapa en delay på varje produkt
        setTimeout(function (){

            //om vårt element är mindre än skärmen så vill vi lägga till klassen product-appear till elementet  
            if(productPosition < screenPosition) {
                products.classList.add('product-appear');
            
            }
        }, index * interval); // och vi gör detta i ett intervall med 780 millisekunder delay
        
        
    });

}

//skapar en eventlistner på scroll då vi anropar funktionen scrollAppear
window.addEventListener('scroll',scrollAppear);