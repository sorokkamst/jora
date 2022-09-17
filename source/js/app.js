const Elements = {
    body: document.querySelector('.body'),
    menuOpenButton: document.querySelector('.header__burger-wrapper'),
    menuCloseButton: document.querySelector('.header-mob-menu__close-menu'),
    menuMobileHidden: document.querySelector('.header__mobile-hidden'),
    menuMobileNavigation: document.querySelector('.header__burger-menu'),
    questions: document.querySelectorAll('.questions__item'),
};

//показывает отзывы
Elements.questions.forEach(question => {
    question.addEventListener('click', () => {
        question.querySelector('.questions__button-image')
            .classList.toggle('questions__button-image--rotate');
        question.querySelector('.questions__answer')
            .classList.toggle('questions__answer--show');
    });
});

const closeNavigationOutsideClick = (evt) => {
    if (evt.target !== Elements.menuMobileNavigation && Elements.menuMobileHidden.style.display === 'block') {
        Elements.menuOpenButton.style.display = 'flex';
        Elements.menuMobileHidden.style.display = 'none';
        Elements.body.style.overflow = 'auto';
        Elements.menuMobileHidden.removeEventListener('click', closeNavigationOutsideClick);
    }
};

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
