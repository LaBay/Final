"use strict"

var $left_btn = $('#step-section__content__item--1--left');
var $right_btn = $('#step-section__content__item--1--right');
var n = 0;
var quantity = 3;

function count(){
	return Math.abs((quantity + n) % quantity)
};

$left_btn.on('click', function(){
	n++;
	//console.log('n=', n, Math.abs((quantity + n) % quantity));
	$(this).parent().css({background: 'url(background/step'+ count() + '_bg_d.jpg)'})
});


$right_btn.on('click', function(){
	n--;
//	console.log('n=', n, Math.abs((quantity + n) % quantity));
	$(this).parent().css({background: 'url(background/step'+ count() + '_bg_d.jpg)'})
});
