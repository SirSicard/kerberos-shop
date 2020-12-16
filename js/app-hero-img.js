const btnRight = document.querySelector('#btnRight');
const btnLeft = document.querySelector('#btnLeft');

btnRight.addEventListener('click', () =>{
    let hero = document.querySelector('.hero');
    hero.classList.remove('hero');
    hero.classList.add('hero-2');
})

btnLeft.addEventListener('click', () =>{
    let hero = document.querySelector('.hero-2');
    hero.classList.remove('hero-2');
    hero.classList.add('hero');
})