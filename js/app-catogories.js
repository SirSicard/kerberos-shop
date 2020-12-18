function catogoriesSearch(text){

    //console.log(text.textContent);

    let search = text.textContent;

    console.log(search);
    
    let products = document.querySelectorAll('.product');

    //loopar igenom products 
    for(let product of products){
        //compare product with text
        if(product.textContent.toLowerCase().includes(search.toLowerCase())){
            product.style.display = 'block';
            //display all products when pressing All
        }else if(text.textContent.includes('All')){
            product.style.display = 'block'
        }else{
            product.style.display = 'none';
        }
    }
    
}