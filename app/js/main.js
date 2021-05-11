const menuBurger = document.querySelector('.menu__icon');
const openMenu = document.querySelector('.menu__body');



menuBurger.addEventListener('click', e => {
  menuBurger.classList.toggle('active');
  openMenu.classList.toggle('active');
  document.body.classList.toggle('_lock');
  
});