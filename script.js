console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('black')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'black'){
		document.getElementById('theme-style').href = './css/default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = './css/blue.css'
	}

	if(mode == 'light'){
		document.getElementById('theme-style').href = './css/light.css'
	}


	localStorage.setItem('theme', mode)
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 680px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 680 || document.documentElement.scrollTop > 680) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}