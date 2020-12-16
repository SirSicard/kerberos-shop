function goto(id){
    
    for(let article of document.querySelectorAll('article') ){
        
        if(id === '#home'){
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    }
    document.querySelector(id).style.display = 'block';
}