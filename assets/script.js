const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variable globale permettant de gérer les bullets points
// et l'indice du tableau slides
let n = 0

// function permettant de faire avancer le point avec gestion
// de l'erreur de n 

function NextDot(){
	try {
	let DotList = document.querySelectorAll(".dots .dot");
	let ActiveDot = DotList[n]
	let NextDot = DotList[n+1]
	DotList[n].classList.remove("dot_selected")
	DotList[n+1].classList.add("dot_selected")
	ActiveDot = NextDot
	n += 1
	}
	catch {
	  let DotList = document.querySelectorAll(".dots .dot");
	  n = 0
	  DotList[n].classList.add("dot_selected")
	}
  }

// function permettant de faire reculer le point avec gestion
// de l'erreur de n 
  
  function PrevDot() {
	try {
	let DotList = document.querySelectorAll(".dots .dot");
	let ActiveDot = DotList[n]
	let PrevDot = DotList[n-1]
	DotList[n].classList.remove("dot_selected")
	DotList[n-1].classList.add("dot_selected")
	ActiveDot = PrevDot
	n -= 1
	}
	catch {
	  let DotList = document.querySelectorAll(".dots .dot");
	  n = 3
	  DotList[n].classList.add("dot_selected")
	}
  }

// Modification de banner-img en fonction de l'indice n dans 
// tableau slides

  function ChangeImgAndText (){
	let img = document.querySelector(".banner-img")
	let text = document.querySelector("#banner p")
	let NewText = `
	${slides[n].tagLine}
	`;
	img.src = "./assets/images/slideshow/"+ slides[n].image
	text.innerHTML = NewText
  }

// Permet de calculer le nombre d'éléments dans tableau slides
// et applique x nombres de divs avec class dot 
// 1er indice contient dot_selected

  function SlideNumber (){
	let dots = document.querySelector(".dots")
	let i = 0
	while (i < slides.length) {
		let DotDiv = document.createElement("div")
		dots.appendChild(DotDiv)
    if (i === 0) {
      DotDiv.classList = "dot dot_selected"
    } else {
      DotDiv.classList = "dot"
    }
		i++
	}
}

// function qui gère les événements et lance les fonctions
// NextDot, PrevDot et ChangeImgAndText
// Utilisation de onclick dans le HTML 
/*
function SelectionFleche(){
	let flecheGauche = document.querySelector(".arrow_left")
	let flecheDroite = document.querySelector(".arrow_right")
	  flecheDroite.addEventListener("click", () => {
		NextDot()
		ChangeImgAndText()
	  });
	   flecheGauche.addEventListener("click", () => {
		 PrevDot()
		 ChangeImgAndText()
	  });
  }
*/
SlideNumber()
//SelectionFleche()
