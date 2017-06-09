$(document).ready(function() { 

	// https://www.uselessdaily.com/news/40-amazing-facts-about-the-tv-series-the-big-bang-theory-list/ 
	// https://giphy.com/search/big-bang-theory

	// Array of objects with questions, answers and correct answer

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
			ansOptions: ['His IQ', 'Roommate agreement', 'Calling Leonard\'s mom', 'His spot on the couch'],
			rtAnswer: 'Roommate agreement',
		}, 

		{
			q: "What is the name of Raj's dog?",
			ansOptions: ['Ginger', 'Cookie', 'Cinnamon', 'Pepper'],
			rtAnswer: 'Cinnamon',
		},  

		{
			q: "What is the name of Raj's sister?", 
			ansOptions: ["Priya", 'Maya', 'Saanvi', 'Vanya'],
			rtAnswer: 'Priya', 
		},

		{
			q: 'When Raj\'s working permit and visa expire and he was about to be deported, who did he end up working for?', 
			ansOptions: ['Leonard', 'Penny', 'Sheldon', 'Howard'],
			rtAnswer: 'Sheldon', 
		} 

		{
			q: 'Which band wrote the themesong of the series?',
			ansOptions: ['Stormchasers', 'Barenaked Ladies', 'The Animals', 'Dreamers'],
			rtAnswer: 'Barenaked Ladies',
		} 

		{
			q: 'What is Sheldon\'s catch phrase?',
			ansOptions: ['Bazinga', 'Merlin\'s Beard', 'Bam', 'I rule' ],
			rtAnswer: 'Bazinga',
		}

		{
			q: '',
			ansOptions: [],

		}
	]; 

	// Object with all functions and global variables 
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
	  		return x; 

		},

		// function dynamically adds questions and answers to #game container
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
 		
 		// function for starting game 
		gameStart: function () { 
			$('#start-button').click(function(){
				gameTracker.gameQuestionPrint(); 
				gameTracker.timerReset(this.gametime);
			});
		}, 

		// resets variables, timer and restarts game
		gameReset: function() { 
			console.log('game reset reached');
			this.questioncount = 0;
			this.correctAnswersCount = 0; 
			this.wrongAnswersCount = 0; 
			this.notAnsweredCount = 0;
			$('#answers').empty();
			this.gametime = 30;
			gameTracker.gameQuestionPrint(); 
			gameTracker.timerReset(this.gametime);
			$('#game').show();
			$('#scoretally').empty(); 
		},

		// function defining how the game should respond when 
		// user selects answer before time runs out 
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
			if (this.questioncount < 2) { 

				// html that is added when question correct
				$('#scoretally').html('<h2>Correct answers: ' + this.correctAnswersCount + '<h2>')
				.append('<h2>Wrong answers: ' + this.wrongAnswersCount + '<h2>')
				.append('<h2>Questions not answered: ' + this.notAnsweredCount + '<h2>');
				
				// Score tally screen started 
				this.tallyTimer();

				// adds total questions answered 
				this.questioncount++; 

			} else {  

				$('#scoretally').html('<h2> Game Over </h2>')
				.append('<h2>Correct answers: ' + this.correctAnswersCount + '<h2>')
				.append('<h2>Wrong answers: ' + this.wrongAnswersCount + '<h2>')
				.append('<h2>Questions not answered: ' + this.notAnsweredCount + '<h2>') 
				.append('<button id=\'start-button\'>Play Again</button>');

				// toggles visibility of container. 
				// **Note tried using .toggle(), but didn't work right 
				$('#game').hide();
				$('#scoretally').show();
			}
		}, 

		// timer setup when showing scores in between questions 
		tallyTimer: function() {
			console.log("tally timer reached");
			console.log(this.questioncount);
			$('#game').hide();
			gameTracker.gametime = 30;
			debugger;
			if (this.questioncount != 0) {
				$('#scoretally').show();
			} 
			setTimeout(function() {

				$('#answers').empty();
				gameTracker.gameQuestionPrint();
				$('#scoretally').hide();
				$('#game').show();
				gameTracker.timerReset();	
			}, 3000); 
		},

	// game timer setup
		gametime: 30,
		gameinterval: null,
		
		//Resets clock
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
		
		//stops timer
		stop: function() {
    		clearInterval(gameTracker.gameinterval);
   		},
	}; 

	//initiates game
	gameTracker.gameStart();

	// click events 
	$("#answers").on('click', '#answer-1', function() {
		/* Act on the event */
		gameTracker.userChoice = $('#answer-1').val();
		console.log(gameTracker.userChoice);
	}); 

	$("#answers").on('click', '#answer-2', function() {
		gameTracker.userChoice = $('#answer-2').val();
		console.log(gameTracker.userChoice);
	});

	$("#answers").on('click', '#answer-3', function() {
		gameTracker.userChoice = $('#answer-3').val();
		console.log(gameTracker.userChoice);
	}); 

	$("#answers").on('click', '#answer-4',function() {
		gameTracker.userChoice = $('#answer-4').val();
		console.log(gameTracker.userChoice);
	}); 

	$('#submitbtn').on('click', function(){ 
		gameTracker.answerSubmit(gameTracker.userChoice);
		console.log('submit clicked');
	}); 

	$('#scoretally').on('click', '#start-button', function() { 
		console.log('replay clicked');
		gameTracker.gameReset();
		//$('#scoretally').empty(); 	
	});

});