const {Swiper} = require('swiper');
import 'swiper/css';

const Elements = {
    body: document.querySelector('.body'),
    menuOpenButton: document.querySelector('.header__burger-wrapper'),
    menuCloseButton: document.querySelector('.header-mob-menu__close-menu'),
    menuMobileHidden: document.querySelector('.header__mobile-hidden'),
    menuMobileNavigation: document.querySelector('.header__burger-menu'),
    faqDetails: document.querySelectorAll('.faq__summary'),
};

const closeNavigationOutsideClick = (evt) => {
    if (evt.target !== Elements.menuMobileNavigation && Elements.menuMobileHidden.classList.contains('show')) {
        Elements.menuOpenButton.classList.remove('hide');
        Elements.menuMobileHidden.classList.remove('show');
        Elements.body.classList.remove('overflow');
        Elements.menuMobileHidden.removeEventListener('click', closeNavigationOutsideClick);
    }
};

//поворачивает стрелку, когда кликают на отзывы
Elements.faqDetails.forEach(detail => {
    detail.addEventListener('click', () => {
        detail.classList.toggle('open');
    })
});

//открывает меню
Elements.menuOpenButton.addEventListener('click', () => {
    Elements.menuOpenButton.classList.add('hide');
    Elements.menuMobileHidden.classList.add('show');
    Elements.body.classList.add('overflow');
    Elements.menuMobileHidden.addEventListener('click', closeNavigationOutsideClick);
});

//закрывает меню
Elements.menuCloseButton.addEventListener('click', () => {
    Elements.menuOpenButton.classList.remove('hide');
    Elements.menuMobileHidden.classList.remove('show');
    Elements.body.classList.remove('overflow');
    Elements.menuMobileHidden.removeEventListener('click', closeNavigationOutsideClick);
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    loop: false,
});
