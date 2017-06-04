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
		},  
 
		gameStart: function () { 
			$('#start-button').click(function(){
				gameTracker.gameQuestionPrint(); 
			});
		},


		// game timer
		gametime: 30,

		timerReset: function() {

		    this.gametime = 30;

		    // DONE: Change the "display" div to "00:00."
		    
		    $('#timecontainer').html("<h2>Time left: <span id='gametimer'></span></h2>")
		    $('#timecontainer').html('#gametimer', '00:30');
		  },
		
	  	countdown: function() {

		    // DONE: increment time by 1, remember we cant use "this" here.
		    gameTracker.gametime--;

		    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
		    //       and save the result in a variable.
		    var converted = gameTracker.timeConverter(gameTracker.time);
		    console.log(converted);

		    // DONE: Use the variable we just created to show the converted time in the "display" div.
		    $("#timecontainer").html('#gametimer', converted);
		},
		
		timeConverter: function(t) {

		    var minutes = Math.floor(t / 60);
		    var seconds = t - (minutes * 60);

		    if (seconds < 10) {
		      seconds = "0" + seconds;
		    }

		    if (minutes === 0) {
		      minutes = "00";
		    }
		    else if (minutes < 10) {
		      minutes = "0" + minutes;
		    }

		    return minutes + ":" + seconds;
		}
	}; 
 	
	//$("#question").text(triviaQuestions.question1.q); 
	//$("#answer-1").html(triviaQuestions.question1.ansOptions[0]);
	//$("#answer-2").text(triviaQuestions.question1.ansOptions[1]);
	//$("#answer-3").text(triviaQuestions.question1.ansOptions[2]);
	//$("#answer-4").text(triviaQuestions.question1.ansOptions[3]); 

	gameTracker.gameStart();
	// event propogation, bubbling up
	$("#answers").on('click', '#answer-1', function() {
		/* Act on the event */
		console.log("radio clicked");
		gameTracker.userChoice = $('#answer-1').val();
		console.log(gameTracker.userChoice);
	}); 


	$("#answers").on('click', '#answers-2', function() {
		/* Act on the event */ 
		console.log("radio clicked");
		gameTracker.userChoice = $('#answer-2').val();
		console.log(gameTracker.userChoice);
	});  

	$("#answers").on('click', '#answer-3', function() {
		/* Act on the event */
		gameTracker.userChoice = triviaQuestions.question1.wrAnswer;
		console.log(gameTracker.userChoice);
	}); 

	$("#answers").on('click', '#answer-4',function() {
		/* Act on the event */
		gameTracker.userChoice = triviaQuestions.question1.wrAnswer;
		console.log(gameTracker.userChoice);
	}); 


	//method to gauge object length
	//console.log(Object.keys(gameTracker).length);

	//function gameState(u) { if };

	console.log(gameTracker.triviaQSelect); 

});