const burgerMenu = document.querySelector('.burger-menu'); 
const mobileMenu = document.querySelector('.mobile-menu');

burgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

$(document).ready(function() {    
    $('[type="tel"]').mask('+38(000)-000-00-00');
})
