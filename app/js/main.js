const menuBurger = document.querySelector('.menu__icon');
const openMenu = document.querySelector('.menu__body');

menuBurger.addEventListener('click', e => {
  openMenu.classList.toggle('active');
  
});