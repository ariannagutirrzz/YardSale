const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const flechita = document.querySelector(".flechita")

const barrasMenu = document.querySelector(".barritas")
const mobileMenu = document.querySelector(".menu-mobile")

flechita.addEventListener("click", toggleMenu)
menuEmail.addEventListener("click", toggleMenu)
barrasMenu.addEventListener("click", barritas)

function toggleMenu () {
    desktopMenu.classList.toggle("inactive")    
}

function barritas () {
    mobileMenu.classList.toggle("inactive")
}