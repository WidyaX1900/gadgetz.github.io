const hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0];
const menuLink = document.getElementById('menu-link');
const icons = document.getElementsByClassName('icon');

hamburgerIcon.addEventListener("click", (event) => {
    menuLink.classList.toggle('slide');

    for (let i = 0; i < icons.length; i++) {
        
        icons[i].classList.toggle('icon-' + (i + 1));
    }
    
});