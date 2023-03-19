const main_menu = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-mobile');

main_menu.addEventListener('click', function(){
    main_menu.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});