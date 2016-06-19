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


	


$(function(){

var BEMclass = 'idea-section__content__item';
var newElemets = '';
var quantity = 7;
var BEMselector = 1;
var $queryBlock = $('#queryBlock');
var queries = ['Sports and Activity', 'Welness and Health', 'Extreme Sports and Expeditions', 'Games', 'Culture and Education', 'Relaxation', 'Travelling'];
	function create(){
		$queryBlock.html('');

		function fat(){
			if ((BEMselector == 5) || (BEMselector == 6))	return ' fat';
			else return '';
		};

		while(BEMselector <= quantity){
				let str = '<li class="' + BEMclass + ' ' + BEMclass + '--' 
				+ BEMselector + fat() + '">' + '</li> ';
				BEMselector++;
				newElemets += str;
		};

		$queryBlock.html(newElemets);


	}create();

		var $block = $('.' + BEMclass);
		var $word = $('.' + BEMclass + ' span');
		//console.log($block)
		console.log($word)

		for (let i = 0; i < $block.length; i++){
			$.getJSON('http://api.pixplorer.co.uk/image?word=' + queries[i] + '&amount=1&?size=medium', function(r){
				console.log(r)
				//let str = ;
				//console.log(str);
				$block.eq(i).css('background-image', 'url(' +r.images[0].imageurl+ ')')
							.html('<span>' + r.images[0].word + '</span>')

			})
		}
	
})