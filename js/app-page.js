//Function that enables us to have a one page shop but when you click the different nav buttons it hides the current viewable articles and only shows one specific id(footer and header is not ID/Article set so they will always show) 
function goto(id){
    
    for(let article of document.querySelectorAll('article') ){//Accesses the articles inside the index.html file
        
        if(id === '#home'){//Home is default screen when entering site
            article.style.display = 'block'; //Everything is shown as home is default and supposed to show the whole page
        } else {
            article.style.display = 'none';//only the chosen article ID is shown and will hide everything else on the page that is given a article id.
        }
    }
    document.querySelector(id).style.display = 'block';//Current ID is shown in block and therefore not hiding the current chosen id
}