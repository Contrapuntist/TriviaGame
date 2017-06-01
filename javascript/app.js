$(document).ready(function() { 

	var triviaQuestions = {
		question1: {
			q: "Who wrote the Lord of The Rings trilogy?",
			ansOptions: ['Michael Crichton', 'J.R.R. Tolkien', 'Philip K. Dick', 'George R.R. Martin'],
			rtAnswer: "J.R.R. Tolkien",

		}, 

		question2: {
			q: "What Marvel character is big and green with a bad temper?",
			ansOptions: ['Thor', 'Hulk', 'Iron Man', 'Captain America'],
			rtAnswer: 'Hulk',
		}, 

		question3: {	
			q: "When was the last time the Chicago Bears won the Super Bowl?", 
			ansOptions: ['1980', '2006', '1988', '1985'], 
			rtAnswer: '1985',
		}, 
	}; 

	var gameTracker = {
		correctAnswersCount: 0, 
		wrongAnswersCount: 0, 
		notAnsweredCount: 0,
		userChoice: null, 
		triviaQSelect: null,

		gameInit: function() {
			$("#question").text(triviaQuestions.question1.q); 
			$("#answer-1").text(triviaQuestions.question1.ansOptions[0]);
			$("#answer-2").text(triviaQuestions.question1.ansOptions[1]);
			$("#answer-3").text(triviaQuestions.question1.ansOptions[2]);
			$("#answer-4").text(triviaQuestions.question1.ansOptions[3]);
			console.log(gameTracker.userChoice);   
		}, 

	}; 

	gameTracker.gameInit();

	$("#answer-1").click(function() {
		/* Act on the event */
		gameTracker.userChoice = triviaQuestions.question1.rtAnswer; 
		console.log(gameTracker.userChoice);
	}); 


	$("#answer-2").on('click',function() {
		/* Act on the event */
		gameTracker.userChoice = triviaQuestions.question1.wrAnswer;
		console.log(gameTracker.userChoice);
	}); 

	//method to gauge object length
	//console.log(Object.keys(gameTracker).length);

	function pickRandomProperty(obj) {
	    //var result;
	    var count = 0;
	    for (var prop in obj)
	        if (Math.random() < 1/++count)
	           gameTracker.triviaQSelect = prop; 
	    return console.log(gameTracker.triviaQSelect);
	}

	function gameState(u) {
		if 	
	}

	pickRandomProperty(triviaQuestions);
	console.log(gameTracker.triviaQSelect.q); 

});