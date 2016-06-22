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


	
/* IDEA PHOTOS */

$(function(){

const quantity = 7;
const BEMclass = 'idea-section__content__item';
var newElemets = '';
var BEMselector = 1;
var $queryBlock = $('#queryBlock');
var fatItem1, fatItem2;
var queries = ['Sports and Activity', 'Welness and Health', 'Extreme Sports and Expeditions', 'Games', 'Culture and Education', 'Relaxation', 'Travelling'];


	function create(){
		
		$queryBlock.html('');

		function fatalizator(fat){
		
				if (fat < 0.08){
					fatItem1 = 1;
					fatItem2 = 3;
				};
				if (fat>0.08 && fat<0.17){
					fatItem1 = 1;
					fatItem2 = 4;
				};
				if (fat>0.17 && fat<0.25){
					fatItem1 = 1;
					fatItem2 = 6;
				};		    
				if (fat>0.25 && fat<0.33){
					fatItem1 = 1;
					fatItem2 = 7;
				};

				if (fat>0.33 && fat<0.42){
					fatItem1 = 2;
					fatItem2 = 3;
				};
				if (fat>0.42 && fat<0.5){
					fatItem1 = 2;
					fatItem2 = 4;
				};
				if (fat>0.5 && fat<0.58){
					fatItem1 = 2;
					fatItem2 = 6;
				};			    
				if (fat>0.58 && fat<0.67){
					fatItem1 = 2;
					fatItem2 = 7;
				};

				if (fat>0.67 && fat<0.75){
					fatItem1 = 4;
					fatItem2 = 6;
				};
				if (fat>0.75 && fat<0.83){
					fatItem1 = 4;
					fatItem2 = 7;
				};
				if (fat>0.83 && fat<0.92){
					fatItem1 = 5;
					fatItem2 = 6;
				}		    
				if (fat > 0.92){
					fatItem1 = 5;
					fatItem2 = 7;
				};

		}fatalizator(Math.random());


		function fatInsert(){
			if ((BEMselector == fatItem1) || (BEMselector == fatItem2))	return ' fat';
			else return '';
		};

		while(BEMselector <= quantity){
				let str = '<li class="' + BEMclass + ' ' + BEMclass + '--' 
				+ BEMselector + fatInsert() + '">' + '</li> ';
				BEMselector++;
				newElemets += str;
		};

	$queryBlock.html(newElemets);


	}create();

	var $block = $('.' + BEMclass);	

	function getImage(el, i){

		$.getJSON('http://api.pixplorer.co.uk/image?word=' + el + '&amount=1&?size=l(large)', function(r){
				console.log(r)
				$block.eq(i).css('background-image', 'url(' +r.images[0].imageurl+ ')')
							.html('<span>' + r.images[0].word + '</span>')
		});
	};


	function inner(){
				//var $word = $('.' + BEMclass + ' span');
		
		for (let i = 0; i < $block.length; i++){
			getImage((queries[i]), i);
		}

	}inner();


	function search(arg){

			for (let i = 0; i < $block.length; i++){
				getImage(arg, i);
			}
	};


	$('#interests-search_btn').on('click', function(){
		let value = $('#interests-search_field').val();
		search(value);
	});


})