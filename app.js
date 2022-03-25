const navMenu = document.querySelector('.nav-menu'),
    navToggle = document.querySelector('.nav-toggle'),
    navClose = document.querySelector('.nav-close'),
    navLink = document.querySelectorAll('.nav-link'),
    header = document.querySelector('.header');


if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
})

window.addEventListener('scroll', () => {
    if(this.scrollY >= 50){
        header.classList.add('scroll-header');
    }else{
        header.classList.remove('scroll-header');
    }
})
