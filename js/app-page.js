function goto(id){
    
    for(let article of document.querySelectorAll('article') ){
        article.style.display = 'none';

    }
    document.querySelector(id).style.display = 'block';
}