//funzione per fermare una canzone quando l'utente clicca su un'altra

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

//Istruzione per il menu hamburger

const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0]

const menuLinks = document.getElementsByClassName("menu-links")[0]

hamburgerMenu.addEventListener("click", () => {
	menuLinks.classList.toggle("active")
})
