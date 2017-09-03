$(document).ready(function(){

var correctAnswer;

//timer for question & answer(s) page
function longTimer(){
	var count = 30;

	var counter = setInterval(timer, 1000);
	function timer(){
		count = count-1;
		if (count <= 0){
			clearInterval(counter);
			console.log("Time's out!")
			return;
		}
		console.log(count)
		$("#timerDisplay").html(count)
	}
}
//timer for correct answer page
function shortTimer(){
	var count = 8;

	var counter = setInterval(timer, 1000);
	function timer(){
		count = count-1;
		if (count <= 0){
			clearInterval(counter);
			console.log("moving on")
			return
		}
	}
}
//stops timers
function stop(){
	clearInterval(intervalId)
	clockRunning = false;
}

//function to change to new question...
function correct(){
	$("#gameDisplay").text("Correct Answer is: " + correctAnswer)
	shortTimer()
}

$("#startBtn").on("click", function(){
	console.log("start this motha")
	$("#start").empty()
	longTimer()

	//display text for first question
	var quizQuestion = {
			question: "Which is not a primary color?",
			answer1: "blue",
			answer2: "red",
			answer3: "yellow",
			answer4: "purple",
		}
		console.log(quizQuestion)
		$("#questionDisplay").html(quizQuestion.question)
	//display answer options as buttons	
		$("#answer1").val(quizQuestion.answer1)
		$("#answer2").val(quizQuestion.answer2)
		$("#answer3").val(quizQuestion.answer3)
		$("#answer4").val(quizQuestion.answer4)

		$("#answer1").text(quizQuestion.answer1)
		$("#answer2").text(quizQuestion.answer2)
		$("#answer3").text(quizQuestion.answer3)
		$("#answer4").text(quizQuestion.answer4)
	
		$(".answerOption").on("click", function(){
			console.log(this.value)
			var correctAnswer = "purple"
			if (this.value===correctAnswer){
				console.log("Correct!")
				clearTimeout(longTimer)
				//^^^not working, need to find a way to stop timer...
				correct()
			}

			else {
				console.log("Sorry, nope")
				correct()
			}
		})



})









})