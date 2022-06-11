//Istruzioni per la funzione "read more"

function readMore() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more-contents");
	var btnText = document.getElementById("read-more-button");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";		
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}

function readMore2() {
	var dots = document.getElementById("dots2");
	var moreText = document.getElementById("more-contents2");
	var btnText = document.getElementById("read-more-button2");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";		
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}

function readMore3() {
	var dots = document.getElementById("dots3");
	var moreText = document.getElementById("more-contents3");
	var btnText = document.getElementById("read-more-button3");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more";
		moreText.style.display = "none";		
	} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less";
		moreText.style.display = "inline";
	}
}

//Istruzioni per il fade-in

let elementsArray = document.querySelectorAll(".fade-in");
console.log(elementsArray);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}

fadeIn();

//Istruzione per il menu hamburger

const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0]

const menuLinks = document.getElementsByClassName("menu-links")[0]

hamburgerMenu.addEventListener("click", () => {
	menuLinks.classList.toggle("active")
})
