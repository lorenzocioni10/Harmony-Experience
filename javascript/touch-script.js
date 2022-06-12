//Istruzioni per il bottone salva

function saveFileAs() {
	if (promptFilename = prompt("Save file as", "")) {
		var textBlob = new Blob([document.getElementById("lyrics-box").value], {type:'text/plain'});
		var downloadLink = document.createElement("a");
		downloadLink.download = promptFilename;
		downloadLink.innerHTML = "Download File";
		downloadLink.href = window.URL.createObjectURL(textBlob);
		downloadLink.click();
    delete downloadLink;
    delete textBlob;
	}
}

document.getElementById("save-button").onclick = saveFileAs;

//Istruzioni per il bottone copia

function copy() {
	var copyText = document.getElementById("lyrics-box");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(copyText.value);

}


//Istruzioni per il bottone cancella

function eraseText() {
	var songDelete = confirm("Are you sure you want to delete it?");
	if (songDelete == true) {
    	document.getElementById("lyrics-box").value = "";	 
	} else {
		return false;
	}
}

//Istruzioni per la Drawing board

const canvas = document.getElementById("canvas");


canvas.width = window.innerWidth *0.65;
canvas.height = 450;

/*per cambiare la dimensione del foglio in base alla finestra usa window.innerWidth e window.innerHeight*/

let context = canvas.getContext("2d");

let start_background_color = "white";
context.fillStyle = start_background_color;
context.fillRect(0, 0, canvas.width, canvas.height);


let draw_color = "black"; //istruzione che cambia il colore di partenza della linea
let draw_width = "5";
let is_drawing = false;

//le istruzioni "touch" sono per il mobile, mentre quelle "mouse" per il computer

let restore_array = []; /*funzione per far sì che il foglio salvi in un 
array tutto ciò che disegniamo, in modo che la funzione "undo" 
permetterà di cancellare l'ultima cosa che abbiamo disegnato. La funzione
servirà poi dentro la funzione "stop", per cancellare dopo che si è
finito di disegnare.*/

let index = -1; /*funzione per sapere dove siamo dentro l'array. Il
valore "-1" sta a indicare che non si è disegnato nulla; se l'index
fosse "0" vorrebbe dire che c'è già qualcosa disegnato*/

function change_color(element) {
	draw_color = element.style.background;
}

canvas.addEventListener("touchstart", start, false);
canvas.addEventListener("touchmove", draw, false);
canvas.addEventListener("touchend", stop, false);
canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false); 
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function start(event) {
	is_drawing = true;
	context.beginPath();
	context.moveTo(getX(event), getY(event));
	event.preventDefault();
}

function draw(event) {
	if ( is_drawing ) {
		context.lineTo(getX(event), getY(event));
		context.strokeStyle = draw_color;
		context.lineWidth = draw_width;
		context.lineCap = "round";
		context.lineJoin = "round";
		context.stroke();
	}
	event.preventDefault();
}

function stop(event) {
	if ( is_drawing ) {
		context.stroke();
		context.closePath();
		is_drawing = false;
	}
	event.preventDefault();

	if ( event.type != "mouseout") {
		restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height)); /*"push" porta un elemento 
		nell'ultima posizione di un array esistente*/
		index += 1;
	}
	console.log(restore_array);
}

//Istruzioni per il mobile

function getX(event) { 
  if (event.pageX == undefined) {return event.targetTouches[0].pageX - canvas.offsetLeft}
  else {return event.pageX - canvas.offsetLeft}
  }


function getY(event) {
  if (event.pageY == undefined) {return event.targetTouches[0].pageY - canvas.offsetTop}
  else {return event.pageY - canvas.offsetTop}
}

//Istruzioni per il bottone cancella

function clear_canvas() {
	context.fillStyle = start_background_color;
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.fillRect(0, 0, canvas.width, canvas.height);

	restore_array = [];
	index = -1;	//qui tornano le istruzioni dell'array vuoto, perché il foglio dovrebbe essere pulito

}

//Istruzioni per il bottone undo

function undo_last() {
	if ( index <= 0 ) { 
		clear_canvas();
	} else {
		index -= 1; //istruzione per sottrarre "un" passaggio 
		restore_array.pop(); /*la funzione "pop" in JS è quella che
		permette di eliminare l'ultimo elemento di un array*/
		context.putImageData(restore_array[index], 0, 0); /*istruzione per
		recuperare la posizione precedente al passaggio eliminato; i due
		"0" si riferiscono alle posizioni x e y, per far sì che il
		recupero parta dalla posizione di default, in alto a sinistra*/
	}

}

//Istruzioni per la sidebar

function openNav() {
	document.getElementById("mySidenav").style.width = "500px";
	document.getElementById("main").style.marginLeft = "500px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}

//Istruzione per il menu hamburger

const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0]

const menuLinks = document.getElementsByClassName("menu-links")[0]

hamburgerMenu.addEventListener("click", () => {
	menuLinks.classList.toggle("active")
})