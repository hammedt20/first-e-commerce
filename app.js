const navMenu = document.querySelector('.nav-menu'),
    navToggle = document.querySelector('.nav-toggle'),
    navClose = document.querySelector('.nav-close'),
    navLink = document.querySelectorAll('.nav-link'),
    header = document.querySelector('.header'),
    sections = document.querySelectorAll(`#home,#featured,#products,#new`),
    scrollUp = document.querySelector('#scroll-up'),
    themeButton= document.querySelector("#theme-button"),
    darkTheme = 'dark-theme',
    iconTheme = 'bx-sun',
    selectedTheme = localStorage.getItem('selected-theme'),
    selectedIcon = localStorage.getItem('selected-icon');


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

window.addEventListener('scroll', () => {
    if(window.scrollY >= 400){
        scrollUp.classList.add('show-scroll');
    }else{
        scrollUp.classList.remove('show-scroll');
    }
})

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector(`.nav-menu a[href *= "${sectionId}"]`).classList.add(`active-link`);
        }else{
            document.querySelector(`.nav-menu a[href *= "${sectionId}"]`).classList.remove(`active-link`);
        }
    })
}

window.addEventListener('scroll', scrollActive);


const cart = document.querySelector('#cart'),
    cartShop = document.querySelector('#cart-shop'),
    cartClose = document.querySelector('.cart-close');


if(cartShop){
    cartShop.addEventListener('click', () => {
        cart.classList.add('show-cart');
    })
}

if(cartClose){
    cartClose.addEventListener('click', () => {
        cart.classList.remove('show-cart');
    })
}

// dark theme algo

// we obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'bx-moon bx' : 'bx bx-sun';

// we validate if the user previously chose a topic 
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-moon bx' ? 'add' : 'remove'](iconTheme);
}

// activate / deactivate the theme button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // we save the theme and icon the current user chose 
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

var testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        }
    }
  });


