const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const flechita = document.querySelector(".flechita")

flechita.addEventListener("click", toggleMenu)
menuEmail.addEventListener("click", toggleMenu)


function toggleMenu () {
    desktopMenu.classList.toggle("inactive")    
}