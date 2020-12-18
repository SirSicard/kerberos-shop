
//function for page navigation
function goto(id){
    
    //loop through all articles 
    for(let article of document.querySelectorAll('article') ){
        //if id my id is #home display everything else display none
        if(id === '#home'){
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    }
    //display the clicked id
    document.querySelector(id).style.display = 'block';
}