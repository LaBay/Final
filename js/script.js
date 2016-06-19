"use strict"


 /* CAROUSEL */

var n1 = 0;
var n2 = 1;
var n3 = 2;
var k;
var quantity = 3;

function count(n){
	k = Math.abs((quantity + n) % quantity);
};

function change(button){
	button.parent().css({background: 'url(background/step'+ k + '_bg_d.jpg)'})
};

$('#step-section__content__item--1--left').on('click', function(){
	n1--;
	count(n1);
	change($(this));
});

$('#step-section__content__item--1--right').on('click', function(){
	n1++;
	count(n1);
	change($(this));
});

$('#step-section__content__item--2--left').on('click', function(){
	n2--;
	count(n2);
	change($(this));
});

$('#step-section__content__item--2--right').on('click', function(){
	n2++;
	count(n2);
	change($(this));
});

$('#step-section__content__item--3--left').on('click', function(){
	n3--;
	count(n3);
	change($(this));
});

$('#step-section__content__item--3--right').on('click', function(){
	n3++;
	count(n3);
	change($(this));
});