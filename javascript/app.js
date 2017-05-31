$(document).ready(function() { 


	var triviaQuestions = {
		question1: {
			q: "Are you a dog?",
			rtAnswer: "yes",
			wrAnswer: "no",  
		} 
	} 

	var gameTracker = {
		correctAnswersCount: 0, 
		wrongAnswersCount: 0, 
		notAnsweredCount: 0,
		userChoice: null,

	} 


	$("#question").text(triviaQuestions.question1.q); 
	$("#answer-1").text(triviaQuestions.question1.rtAnswer);
	$("#answer-2").text(triviaQuestions.question1.wrAnswer);
	console.log(gameTracker.userChoice);  

	$("answer-1").click(function() {
		/* Act on the event */
		gameTracker.userChoice = triviaQuestions.question1.rtAnswer; 
		console.log(gameTracker.userChoice);
	}); 


	$("answer-2").on('click',function() {
		/* Act on the event */
		gameTracker.userChoice = triviaQuestions.question1.wrAnswer;
		console.log(gameTracker.userChoice);
	});


});