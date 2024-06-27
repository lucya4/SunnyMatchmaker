const menu = document.querySelector('#mobile_menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

const menu2 = document.querySelector('#mobile_menu2')
const menuLinks2 = document.querySelector('.navbar2_menu')

const mobileMenu = () => {
  menu2.classList.toggle('is-active')
  menuLinks2
}