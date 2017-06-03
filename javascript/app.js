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

		gameQuestionPrint: function() {
			$("#question").text(triviaQuestions.question1.q); 
			var a = 1;
 			for (var i = 0; i < triviaQuestions.question1.ansOptions.length; i++) {
 				var li = $("<li>").appendTo("#answers");
 				li.append("<input type='radio' name='q-answer' id='answer-" + a + "' value=" + triviaQuestions.question1.ansOptions[i] + "'>" + triviaQuestions.question1.ansOptions[i] + "</input>"); 
 				a++;
 			}    
			$('#start-button').remove(); 
			var test = $('#answer-2').val();
			console.log(test);
		},  
 
		gameStart: function () { 
			$('#start-button').click(function(){
				gameTracker.gameQuestionPrint(); 
			});
		},

	}; 
 	
	//$("#question").text(triviaQuestions.question1.q); 
	//$("#answer-1").html(triviaQuestions.question1.ansOptions[0]);
	//$("#answer-2").text(triviaQuestions.question1.ansOptions[1]);
	//$("#answer-3").text(triviaQuestions.question1.ansOptions[2]);
	//$("#answer-4").text(triviaQuestions.question1.ansOptions[3]); 

	gameTracker.gameStart();
	
	$("#answer-1").click(function() {
		/* Act on the event */
		console.log("radio clicked");
		gameTracker.userChoice = $('#answer-1').val();
		console.log(gameTracker.userChoice);
	}); 


	$("#answer-2").on('click',function() {
		/* Act on the event */ 
		console.log("radio clicked");
		gameTracker.userChoice = $('#answer-2').val();
		//if ( gameTracker.userChoice )

		console.log(gameTracker.userChoice);
		//console.log(alert("Right answer"));
	});  

	$("#answer-2").on('click',function() {
		/* Act on the event */
		gameTracker.userChoice = triviaQuestions.question1.wrAnswer;
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
	        	console.log(prop);
	           gameTracker.triviaQSelect = prop.q; 
	    console.log(gameTracker.triviaQSelect);
	}

	//function gameState(u) { if }

	pickRandomProperty(triviaQuestions);
	console.log(gameTracker.triviaQSelect); 

});