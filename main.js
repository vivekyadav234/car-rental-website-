let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '200px',
    duration: 2500,
    delay: 300,
    reset: true
})

sr.reveal('.text',{delay: 200, origin:'top'})
sr.reveal('.form-container form',{delay: 800, origin:'left'})
sr.reveal('.heading',{delay: 500, origin:'top'})