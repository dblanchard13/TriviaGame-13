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
			correctPage();
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

			correctPage()
		}
	}
}
//stops timers
function stop(){
	clearInterval(intervalId)
	clockRunning = false;
}

//function to change to new question...
function correctPage(){
	$("#gameDisplay").text("Correct Answer is: " + correctAnswer)
	shortTimer()
}

$("#startBtn").on("click", function(){
	console.log("start this motha")
	$("#start").empty()
	longTimer()

	//display text for first question
	var quizQuestion, i, j, x, correct = "";
	var quizQuestion = {
		question: [
			{quote: "You can't handle the truth!", answers: ["Goodfellas", "Basic Instinct", "A Few Good Men", "Pulp Fiction"], correctAnswer: "A Few Good Men"},
			{quote: "It's so fluffy I'm gonna die.", answers: ["Despicable Me", "Inside Out", "Wall-E", "Finding Nemo"], correctAnswer: "Despicable Me"},
			{quote: "-We need this gig. <br> -We're on a mission from God.", answers: ["Wayne's World", "Blues Brothers", "Animal House", "The Big Lebowski"], correctAnswer: "Blues Brothers"},
			{quote:"She doesn't even go here", answers: ["Clueless", "Sixteen Candles", "The Princess Diaries", "Mean Girls"], correctAnswer: "Mean Girls"},
			{quote: "Get busy living or get busy dying", answers: ["Forrest Gump", "The Shawshank Redemption", "The Green Mile", "Fight Club"], correctAnswer: "The Shawshank Redemption"},
			{quote: "Help me I'm poor", answers: ["Superbad","Meet the Parents","Bridesmaids", "The Hangover"], correctAnswer: "Bridesmaids"},
			{quote: "In the morning, I'm making waffles", answers: ["Shrek", "Monsters Inc", "Toy Story", "The Incredibles"], correctAnswer: "Shrek"},
			{quote: "...But what I do have are a very particular set of skills; skills I have aquired over a long career...", answers: ["The Transporter", "Shooter", "Casino Royale","Taken"], correctAnswer: "Taken"}

		]
	}
		for (i in quizQuestion.question){
			x += quizQuestion.question[i].quote;
			correct += quizQuestion.question[i].correctAnswer;
			console.log(quizQuestion.question[i].quote)
			console.log(quizQuestion.question[i].correctAnswer)
			for (j in quizQuestion.question[i].answers){
				x += quizQuestion.question[i].answers[j];
				//console.log(quizQuestion.question[i].answers[j])
			}
		
		}

		$("#questionDisplay").text(quizQuestion.question[i].quote)
	//display answer options as buttons	
		$("#answer1").val(quizQuestion.question[i].answers[0])
		$("#answer2").val(quizQuestion.question[i].answers[1])
		$("#answer3").val(quizQuestion.question[i].answers[2])
		$("#answer4").val(quizQuestion.question[i].answers[3])

		$("#answer1").text(quizQuestion.question[i].answers[0])
		$("#answer2").text(quizQuestion.question[i].answers[1])
		$("#answer3").text(quizQuestion.question[i].answers[2])
		$("#answer4").text(quizQuestion.question[i].answers[3])
	
		$(".answerOption").on("click", function(){
			console.log(this.value)
			//var correctAnswer = quizQuestion.question[i].correctAnswer[i]
			if (this.value===quizQuestion.question[i].correctAnswer[i]){//not working, keeps returning 'undefined'
				console.log("Correct!")
				//^^^not working, need to find a way to stop timer...
				correctPage()
			}

			else {
				console.log("Sorry, nope")
				correctPage()
			}
		})



})









})