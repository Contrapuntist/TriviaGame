$(document).ready(function() { 

	// https://www.uselessdaily.com/news/40-amazing-facts-about-the-tv-series-the-big-bang-theory-list/ 

	var triviaQuestions = [
		{
			q: "Before Johnny Galecki was a star in Big Bang Theory, he was a regular in what other sitcom?",
			ansOptions: ['Cheers', 'Roseanne', 'Step by Step', 'Blossom'],
			rtAnswer: 'Roseanne',
		}, 

		{
			q: "In what restaurant chain does Penny work until season 8?",
			ansOptions: ['T.G.I.F.', 'Chili\'s', 'Cheesecake Factory', 'P.F. Changs'],
			rtAnswer: 'Cheesecake Factory',
		}, 
  
		{	
			q: "What actor has a PhD in Neuroscience?", 
			ansOptions: ['Mayim Bialik', 'Kunal Nayyar', 'Johnny Galecki', 'Jim Parsons'], 
			rtAnswer: 'Mayim Bialik',
		}, 
		
		{
			q: "When Sheldon is sick, what song does he ask his friends to sing to him?",
			ansOptions: ['Bazinga', 'Twinkle Twinkle Little Star', 'Smelly Cat', 'Soft Kitty'],
			rtAnswer: "Soft Kitty",
		}, 

		{
			q: "What does Sheldon constantly reference to Leonard about their living arrangement?",
			ansOptions: ['His IQ', 'Roommate agreement', 'Calling Leonard\'s mom,' 'His spot on the couch'],
			rtAnswer: 'Roommate agreement',
		}, 
	]; 

	var gameTracker = {
		
		//variables used throughout game
		correctAnswersCount: 0, 
		wrongAnswersCount: 0, 
		notAnsweredCount: 0,
		userChoice: null, 
		triviaQSelect: null,
		questioncount: 0,

		randomizer: function (v) {
	  		var x = Math.floor( Math.random() * v);
	  		console.log(x);
	  		return x; 

		},

		gameQuestionPrint: function() {
			this.triviaQSelect = this.randomizer(triviaQuestions.length); 
			console.log(this.triviaQSelect);
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
			$('#submitbtn').html('<button>Submit</button>'); 		
		},  
 
		gameStart: function () { 
			$('#start-button').click(function(){
				gameTracker.gameQuestionPrint(); 
				gameTracker.timerReset(this.gametime);
			});
			console.log(gameTracker.userChoice);
		},

		answerSubmit: function (a) { 
			if (a === triviaQuestions[this.triviaQSelect].rtAnswer) { 
				gameTracker.correctAnswersCount++;
				gameTracker.stop();
				$('#game').hide();
				this.scoreUpdate();
				
			} else { 
				gameTracker.wrongAnswersCount++;
				gameTracker.stop();
				$('#game').hide();
				this.scoreUpdate();
			}
		},  

		// Score tally window in between question responses. 
		scoreUpdate: function() { 
			$('#scoretally').html('<h2>Correct answers: ' + this.correctAnswersCount + '<h2>')
			.append('<h2>Wrong answers: ' + this.wrongAnswersCount + '<h2>')
			.append('<h2>Questions not answered: ' + this.notAnsweredCount + '<h2>');
			this.tallyTimer();
			this.questioncount++;
			console.log('total questions:' + this.questioncount); 
		}, 

		tallyTimer: function() {
			console.log("tally timer reached");
			gameTracker.gametime = 30;
			if (this.questioncount != 0) {
				$('#scoretally').show();
			}
			setTimeout(function() {

				$('#answers').empty();
				gameTracker.gameQuestionPrint();
				$('#scoretally').hide();
				$('#game').show();
				gameTracker.timerReset();	
			}, 5000); 
		},

		// game timer
		gametime: 30,
		gameinterval: null,
		
		timerReset: function(time) {
		    		    
		    $('#timecontainer').html("<h2>Time left: <span id='gametimer'>30</span> seconds </h2>");
		    $('#gametimer').text(time); 
		    
		    gameTracker.gameinterval = setInterval(gameTracker.countdown, 1000); 
		  },
		
	  	countdown: function() {

		    // reduce time
		    gameTracker.gametime--;
		    $("#gametimer").html(gameTracker.gametime); 
		    if (gameTracker.gametime === 0 ) {
		    	gameTracker.stop();
		    	gameTracker.notAnsweredCount++ 
		    	gameTracker.scoreUpdate();
		    }			
		},
		
		stop: function() {
    		clearInterval(gameTracker.gameinterval);
   		},
	}; 

	gameTracker.gameStart();

	// event propogation, bubbling up
	$("#answers").on('click', '#answer-1', function() {
		/* Act on the event */
		gameTracker.userChoice = $('#answer-1').val();
		console.log(gameTracker.userChoice);
	}); 

	$("#answers").on('click', '#answer-2', function() {
		/* Act on the event */
		gameTracker.userChoice = $('#answer-2').val();
		console.log(gameTracker.userChoice);
	});

	$("#answers").on('click', '#answer-3', function() {
		/* Act on the event */
		gameTracker.userChoice = $('#answer-3').val();;
		console.log(gameTracker.userChoice);
	}); 

	$("#answers").on('click', '#answer-4',function() {
		/* Act on the event */
		gameTracker.userChoice = $('#answer-4').val();;
		console.log(gameTracker.userChoice);
	}); 

	$('#submitbtn').on('click', function(){ 
		gameTracker.answerSubmit(gameTracker.userChoice);
		console.log('submit clicked');
	});

});