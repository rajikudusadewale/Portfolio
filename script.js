const main_menu = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-mobile');

main_menu.addEventListener('click', function(){
    main_menu.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

const nav = document.querySelector('.nav-link')

nav.addEventListener('click', function(){
    main_menu.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})


const nav2 = document.querySelector('.nav-link2')

nav2.addEventListener('click', function(){
    main_menu.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})


const nav3 = document.querySelector('.nav-link3')

nav3.addEventListener('click', function(){
    main_menu.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})