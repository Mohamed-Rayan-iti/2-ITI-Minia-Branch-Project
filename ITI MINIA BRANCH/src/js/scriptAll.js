var w = 0;

function viw() {

	var mytext = " ITI Menia";
	document.getElementById("h3_writ_on_slid").textContent += mytext[w];
	w++;

	if (w > mytext.length - 1) {
		clearInterval(t);
	}
}

var t = setInterval("viw()", 300);

/////////////////////////////////////////////////////////////////////////////////

var model = document.getElementById("the_model");
var img = document.getElementsByTagName('img');
var modelimg = document.getElementById("img");
var modelcaption = document.getElementById("caption");

for (var i = 0; i < img.length; i++)
	img[i].onclick = function () {
		model.style.display = "block";
		modelimg.src = this.src;
		modelcaption.innerHTML = this.alt;

		disableScroll();
	};

function disableScroll() {
	document.body.classList.add("stop-scrolling");
}

var close = document.getElementsByClassName("close")[0];

close.onclick = function () {
	model.style.display = "none";
	document.body.classList.remove("stop-scrolling");
};
document.onkeydown = function (ev) {
	if (ev.keyCode == "27") {
		model.style.display = "none";
		document.body.classList.remove("stop-scrolling");
	}
};




///////////////////////////////////////////////////////////////////////////////////////
var mynva = document.getElementById('header');
//var botom=document.getElementById("botom");

window.onscroll = function () {
	'use strict';

	if (window.scrollY >= 625) {
		//		botom.style.display="block";
		mynva.style.boxShadow = ' 0 5px 30px #5B0D0D';

	} else {
		//		botom.style.display="none";
		mynva.style.boxShadow = 'none';


	}

};