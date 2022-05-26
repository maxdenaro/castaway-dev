new Swiper('.gallery__content', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.gallery__right',
    prevEl: '.gallery__left',
  },
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const close = document.querySelector('.close');

burger.addEventListener('click', function(){
  nav.classList.add('nav--active');
});

close.addEventListener('click', function(){
  nav.classList.remove('nav--active');
});
