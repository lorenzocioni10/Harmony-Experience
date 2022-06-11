//Istruzione per il menu hamburger

const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0]

const menuLinks = document.getElementsByClassName("menu-links")[0]

hamburgerMenu.addEventListener("click", () => {
	menuLinks.classList.toggle("active")
})
