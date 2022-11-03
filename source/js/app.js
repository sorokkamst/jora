// import Swiper from 'swiper/swiper-bundle.esm.browser.min'
const Swiper = require('swiper');
const Elements = {
    body: document.querySelector('.body'),
    menuOpenButton: document.querySelector('.header__burger-wrapper'),
    menuCloseButton: document.querySelector('.header-mob-menu__close-menu'),
    menuMobileHidden: document.querySelector('.header__mobile-hidden'),
    menuMobileNavigation: document.querySelector('.header__burger-menu'),
    faqDetails: document.querySelectorAll('.questions__summary'),
};

const closeNavigationOutsideClick = (evt) => {
    if (evt.target !== Elements.menuMobileNavigation && Elements.menuMobileHidden.style.display === 'block') {
        Elements.menuOpenButton.style.display = 'flex';
        Elements.menuMobileHidden.style.display = 'none';
        Elements.body.style.overflow = 'auto';
        Elements.menuMobileHidden.removeEventListener('click', closeNavigationOutsideClick);
    }
};

//поворачивает стрелку, когда кликают на отзывы
Elements.faqDetails.forEach(detail => {
    detail.addEventListener('click', () => {
        detail.querySelector('.questions__button')
            .classList.toggle('questions__button-image--rotate');
    });
});

//открывает меню
Elements.menuOpenButton.addEventListener('click', () => {
    Elements.menuOpenButton.style.display = 'none';
    Elements.menuMobileHidden.style.display = 'block';
    Elements.body.style.overflow = 'hidden';
    Elements.menuMobileHidden.addEventListener('click', closeNavigationOutsideClick);
});

//закрывает меню
Elements.menuCloseButton.addEventListener('click', () => {
    Elements.menuOpenButton.style.display = 'flex';
    Elements.menuMobileHidden.style.display = 'none';
    Elements.body.style.overflow = 'auto';
    Elements.menuMobileHidden.removeEventListener('click', closeNavigationOutsideClick);
});

 const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    loopedSlides: "auto"
});
