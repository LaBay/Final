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

const quantity = 6;
const BEMclass = 'idea-section__content__item';
var newElemets = '';
var BEMselector = 1;
var $queryBlock = $('#queryBlock');
var fatItem1, fatItem2, fatItem3;
var queries = ['Sports and Activity', 'Welness and Health', 'Extreme Sports and Expeditions', 'Games', 'Culture and Education', 'Relaxation', 'Travelling'];


	function create(){
		
		$queryBlock.html('');

		/*function fatalizator(fat){
		
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

		}fatalizator(Math.random());*/


		/*function fatInsert(){
			if ((BEMselector == fatItem1) || (BEMselector == fatItem2))	return ' fat';
			else return '';
		};*/

		while(BEMselector <= quantity){
				let str = '<li class="' + BEMclass + ' ' + BEMclass + '--' 
				+ BEMselector + '">' + '</li> ';
				BEMselector++;
				newElemets += str;
		}; //fatInsert() + 

	$queryBlock.html(newElemets);


	}create();

	var $block = $('.' + BEMclass);	

	function fatalizer(){
		let i = Math.random();
		let k = Math.random();
		let j = Math.random();

			if (i < 0.6){
				fatItem1 = 0;
			}else{
				fatItem1 = 1;
			};

			if (k < 0.5){
				fatItem2 = 2;
			}else{
				fatItem2 = 3;
			};
			
			if (j < 0.4){
				fatItem3 = 4;
			}else{
				fatItem3 = 5;
			};

			for (let i = 0; i < $block.length; i++) $block.eq(i).removeClass('fat');
			
			$block.eq(fatItem1).addClass('fat');
			$block.eq(fatItem2).addClass('fat');
			$block.eq(fatItem3).addClass('fat');
			
	}fatalizer();


	function getImage(el, i){ // yellow+flowers

		$.getJSON('https://pixabay.com/api/?key=2799655-a46e55bb99fc16063276b4cfb&q=' + el + '&image_type=photo', function(r){
				//console.log(r)
				let j = (r.hits.length * Math.random()) >> 0;
				console.log('r.hits.length=', r.hits.length,'j=', j);
				$block.eq(i).css('background-image', 'url(' +r.hits[j].webformatURL + ')')
							.html('<span>' + r.hits[j].tags + '</span>')
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
		fatalizer();
		search(value);
	});


})