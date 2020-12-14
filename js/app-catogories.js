function catogoriesSearch(){


    let clicking = document.querySelectorAll('.catogories a').textContent;

    for(let clicky of clicking){
        console.log(clicky.textContent);
    }
}