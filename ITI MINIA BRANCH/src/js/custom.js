var w = 0;

var t=setInterval(() => {

	var mytext = " ITI Menia";
	document.getElementById("h3_writ_on_slid").textContent += mytext[w];
	w++;

	if (w > mytext.length - 1) {
		clearInterval(t);
	}
}, 300);

/////////////////////////////////////////////////////////////////////////////////
var sh;
var model = document.getElementById("the_model");
var img=document.getElementsByClassName("showimg");
var modelimg = document.getElementById("img");
var modelcaption = document.getElementById("caption");
for(sh=0;sh<img.length;sh++)
	img[sh].onclick = function () {
		model.style.display = "block";
		modelimg.src = this.src;
		modelcaption.innerHTML = this.alt;

		disableScroll();
	};

function disableScroll() {
	document.body.classList.add("stop-scrolling");
}


var close = document.getElementById("close");

close.onclick = () => {
	model.style.display = "none";
	document.body.classList.remove("stop-scrolling");
};
document.onkeydown =  (ev) => {
	if (ev.keyCode == "27") {
		model.style.display = "none";
		document.body.classList.remove("stop-scrolling");
	}
};




///////////////////////////////////////////////////////////////////////////////////////
var mynva = document.getElementById('header');
//var botom=document.getElementById("botom");

window.onscroll =  ()=> {
	'use strict';

	if (window.scrollY >= 625) {
		//		botom.style.display="block";
		mynva.style.boxShadow = ' 0 5px 30px #5B0D0D';

	} else {
		//		botom.style.display="none";
		mynva.style.boxShadow = 'none';


	}

};

///////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($) {

	"use strict";

	var slider =  () => {
		$('.nonloop-block-3').owlCarousel({
			center: false, // if true the dots will be equal number of item
			items: 1, // default responsive if width Minimize less than 600
			loop: true,
			smartSpeed: 1500, // the delay
			stagePadding: 15, // Stage padding option adds left and right padding style (in pixels) onto stage-wrapper
			margin: 20, // default responsive if width Minimize less than 600
			autoplay: true,
			responsive: {
				600: {
					margin: 20,
					items: 1
				},
				1000: {
					margin: 20,
					items: 1
				},
				1200: {
					margin: 20,
					items: 1
				}
			}
		});
	};
	slider();

});
