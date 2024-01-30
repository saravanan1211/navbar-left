const navlink=document.querySelector(".navlink i");
const nav=document.querySelector(".nav");


function toggleNav(){
    navlink.classList.toggle('fa-bars');
    navlink.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}
navlink.addEventListener('click', function() {
    toggleNav();
});