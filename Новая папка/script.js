"use strict"

var $left_btn = $('#step-section__content__item--1--left');
var $right_btn = $('.right_btn');
var n = 0;
var quantity = 3;

function count(){
	return Math.abs((quantity + n) % quantity)
};

$left_btn.on('click', function(){
	n++;
	console.log('n=', n, Math.abs((quantity + n) % quantity));
	$left_btn.parent().css({background: 'url(background/step'+ count() + '_bg_t.jpg)'})
});


/*

var direction = 0;		//global variable (programmers start counting from zero)
var imgQuantity = 9;	//global variable (set images quantity)
var n;




function move(){
	document.getElementById('imgMyCarousel2').setAttribute("src", "img/img" + n + ".jpg");
};




	/* BUTTONS FOR CAROUSELS*/

/*function left(){
	direction--;
	counting();
	variator1();
	variator2();
	variator3()
};

function right(){
	direction++;
	counting();
	variator1();
	variator2();
	variator3()
};

document.getElementById('goLeft').addEventListener("click", left);
document.getElementById('goRight').addEventListener('click', right);
*/