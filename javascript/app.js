$(document).ready(function() { 

	var triviaQuestions = [
		{
			q: "Who wrote the Lord of The Rings trilogy?",
			ansOptions: ['Michael Crichton', 'J.R.R. Tolkien', 'Philip K. Dick', 'George R.R. Martin'],
			rtAnswer: "J.R.R. Tolkien",

		}, 

		{
			q: "What Marvel character is big and green with a bad temper?",
			ansOptions: ['Thor', 'Hulk', 'Iron Man', 'Captain America'],
			rtAnswer: 'Hulk',
		}, 

		{	
			q: "When was the last time the Chicago Bears won the Super Bowl?", 
			ansOptions: ['1980', '2006', '1988', '1985'], 
			rtAnswer: '1985',
		}, 
	]; 

	var gameTracker = {
		correctAnswersCount: 0, 
		wrongAnswersCount: 0, 
		notAnsweredCount: 0,
		userChoice: null, 
		triviaQSelect: null,

		randomizer: function (min, max) {
	  		return Math.floor( Math.random() * ( max - min + 1 ) ) + min;		
		},

		gameQuestionPrint: function() {
			this.triviaQSelect = this.randomizer(0, triviaQuestions.length) 
			console.log(this.triviaQSelect)
			$("#question").text(triviaQuestions[this.triviaQSelect].q); 
			var a = 1;
 			for (var i = 0; i < triviaQuestions[this.triviaQSelect].ansOptions.length; i++) {
 				var li = $("<li>").appendTo("#answers");
 				li.append("<input type='radio' name='q-answer' id='answer-" + a + "' value='" + 
 					triviaQuestions[this.triviaQSelect].ansOptions[i] + "'>" + 
 					triviaQuestions[this.triviaQSelect].ansOptions[i] + "</input>");
 				a++;
 			}    
			$('#start-button').remove(); 		
		},  
 
		gameStart: function () { 
			$('#start-button').click(function(){
				gameTracker.gameQuestionPrint(); 
				gameTracker.timerReset();
			});
			console.log(gameTracker.userChoice);
		},

		gameState: function (a) { 
			if (a === triviaQuestions[0].rtAnswer) { 
				correctAnswersCount++;
			}
		},


		// game timer
		gametime: 30,
		gameinterval: null,
		timerReset: function() {

		    gameTracker.gametime = 30;
		    		    
		    $('#timecontainer').html("<h2>Time left: <span id='gametimer'></span> seconds </h2>");
		    $('#gametimer').text('30'); 
		    
		    gameTracker.gameinterval = setInterval(gameTracker.countdown, 1000); 
		  },
		
	  	countdown: function() {

		    // reduce time
		    gameTracker.gametime--;

		    $("#gametimer").html(gameTracker.gametime); 

		    if (gameTracker.gametime === 0 ) {

		    	gameTracker.stop();
		    }
			
		    console.log( 'time is ' + gameTracker.gametime);
		},
		
		stop: function() {
    		// DONE: Use clearInterval to stop the count here and set the clock to not be running.
    		clearInterval(gameTracker.gameinterval);
  			console.log('stop reached');
  		},
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

	$("#answers").on('click', '#answer-2', function() {
		/* Act on the event */
		console.log("radio clicked");
		gameTracker.userChoice = $('#answer-2').val();
		console.log(gameTracker.userChoice);
	});

	$("#answers").on('click', '#answer-3', function() {
		/* Act on the event */
		console.log("radio clicked");
		gameTracker.userChoice = $('#answer-3').val();;
		console.log(gameTracker.userChoice);
	}); 

	$("#answers").on('click', '#answer-4',function() {
		/* Act on the event */
		console.log("radio clicked");
		gameTracker.userChoice = $('#answer-4').val();;
		console.log(gameTracker.userChoice);
	}); 

});