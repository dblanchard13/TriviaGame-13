$(document).ready(function(){

$(".videos").hide()

//timer for question & answer(s) page
function longTimer(){
	var count = 30;

	var counter = setInterval(timer, 1000);
	function timer(){
		count = count-1;
		if (count <= 0){
			clearInterval(counter);
			console.log("Time's out!")
			timesUp();
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


	var quizQuestion, i, j, x, correct = "";
	var quizQuestion = {
		question: [
			{quote: "You can't handle the truth!", answers: ["Goodfellas", "Basic Instinct", "A Few Good Men", "Pulp Fiction"], correctAnswer: "A Few Good Men"},
			{quote: "It's so fluffy I'm gonna die.", answers: ["Despicable Me", "Inside Out", "Wall-E", "Finding Nemo"], correctAnswer: "Despicable Me"},
			{quote: "We're on a mission from God.", answers: ["Wayne's World", "Blues Brothers", "Animal House", "The Big Lebowski"], correctAnswer: "Blues Brothers"},
			{quote:"She doesn't even go here", answers: ["Clueless", "Sixteen Candles", "The Princess Diaries", "Mean Girls"], correctAnswer: "Mean Girls"},
			{quote: "Get busy living or get busy dying", answers: ["Forrest Gump", "The Shawshank Redemption", "The Green Mile", "Fight Club"], correctAnswer: "The Shawshank Redemption"},
			{quote: "Help me I'm poor", answers: ["Superbad","Meet the Parents","Bridesmaids", "The Hangover"], correctAnswer: "Bridesmaids"},
			{quote: "In the morning, I'm making waffles", answers: ["Shrek", "Monsters Inc", "Toy Story", "The Incredibles"], correctAnswer: "Shrek"},
			//{quote: "Carpe Diem boys. Seize the day.", answers: ["Good Will Hunting", "The Truman Show", "Mrs. Doubtfire","Dead Poets Society"], correctAnswer: "Dead Poets Society"}
		]
	}
		for (i in quizQuestion.question){
			x += quizQuestion.question[i].quote;
			correct += quizQuestion.question[i].correctAnswer;
			console.log(quizQuestion.question[i].quote)
			console.log(quizQuestion.question[i].correctAnswer)

			for (j in quizQuestion.question[i].answers){
				x += quizQuestion.question[i].answers[j];
			}
		
		}
	
		$("#answer1").val(quizQuestion.question[i].answers[0])
		$("#answer2").val(quizQuestion.question[i].answers[1])
		$("#answer3").val(quizQuestion.question[i].answers[2])
		$("#answer4").val(quizQuestion.question[i].answers[3])


//wrong answer display... not working
function wrongPage(){
	$("gameDisplay").text("Sorry, wrong answer." + " Correct answer is: " + quizQuestion.question[i].correctAnswer)
	shortTimer()
}

//correct answer display		
function correctPage(){
	$("#gameDisplay").text("You're right!" + " Correct Answer is: " + quizQuestion.question[i].correctAnswer)
	shortTimer()
	$(".videos").show()//video display not working
}

//time out display... flashes for a second or 2 when timer finishes, then plays correctPage
function timesUp(){
	$("#gameDisplay").text("Time is up." + " Correct Answer is: " +quizQuestion.question[i].correctAnswer)
	shortTimer()
}

//start button user selects to start the game
$("#startBtn").on("click", function(){
	console.log("start this motha")
	$("#start").empty()
	longTimer()

//display text for the quiz question to the user
$("#questionDisplay").text(quizQuestion.question[i].quote)

	//display answer options as buttons	
		$("#answer1").text(quizQuestion.question[i].answers[0])
		$("#answer2").text(quizQuestion.question[i].answers[1])
		$("#answer3").text(quizQuestion.question[i].answers[2])
		$("#answer4").text(quizQuestion.question[i].answers[3])
	
		$(".answerOption").on("click", function(){
			console.log(this.value)

			if (this.value===quizQuestion.question[i].correctAnswer){
				console.log("Correct!")
				$("#questionDisplay").text("You got it right!")
				correctPage()
			}

			else if (this.value!==quizQuestion.question[i].correctAnswer){
				console.log("Sorry, nope")
				wrongPage()
			}
			else {
				return
			}
		})



})









})