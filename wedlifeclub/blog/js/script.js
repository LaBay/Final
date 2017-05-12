'use strict'


var blogBody = "";

function createArticle(topic, author, date, text) {

		function createTopic(topic){
			return '<h1 class="blogHeader">' + topic + '</h1>'
		};

		function createAuthor(author){
			return '<div class="blogAuthor">' + author + '</div>';
		};

		function createDate(date){
			return '<div class="blogDate">' + date + '</div>';
		};

		function createText(text){
			return '<p class="blogText">' + text + '</p>';
		};

	 blogBody = blogBody + '<article>' + createTopic(topic) + createAuthor(author) + createDate(date) +  createText(text) + '</article>';

};


function printArticles(){

	for (var i = 0; i < blogData.length; i++) {

		createArticle(blogData[i][0],blogData[i][1],blogData[i][2],blogData[i][3]);

	};

	document.body.innerHTML = blogBody;

};

printArticles();