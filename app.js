const navMenu = document.querySelector('.nav-menu'),
    navToggle = document.querySelector('.nav-toggle'),
    navClose = document.querySelector('.nav-close'),
    navLink = document.querySelectorAll('.nav-link'),
    header = document.querySelector('.header'),
    sections = document.querySelectorAll(`#home,#featured,#products,#new`),
    scrollUp = document.querySelector('#scroll-up');


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


