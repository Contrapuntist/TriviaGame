$(document).ready(function() { 


	var triviaQuestions = {
		question1: {
			q: "Are you a dog?",
			rtAnswer: "yes",
			wrAnswer: "no",  
		} 
	} 

	var counters = {
		correctAnswersCount: 0, 
		wrongAnswersCount: 0, 
		notAnsweredCount: 0,

	} 


	$("#question").text(triviaQuestions.question1.q); 

});