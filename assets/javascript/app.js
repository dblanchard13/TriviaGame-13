// Good job putting everything inside the document.ready block - this has the 
// benefit of preventing variables from leaking onto the global scope.
$(document).ready(function(){

$(".videos").hide()


//timer for correct answer page
function shortTimer(){
	var count = 6;

	var counter = setInterval(timer, 1000);
	function timer(){
		count = count-1;
		if (count <= 0){
			// Sometimes you've chosen to terminate statements/expressions
			// with semi-colons and some palces you haven't. In almost all cases
			// semi-colons are unnecessary due to automatic semi-colon insertion.
			// So you can go either way with them, but I'd urge you to stay consistent
			// one way or the other.
			clearInterval(counter);
		}
		// console.log(count)
		$("#timerDisplay").html(count)
	}
}


	var quizQuestion, i, j, x, correct = "";
	// Instead of using an object here I think you'd be better off simply havign a `questions` array
	// that would have a list of question objects in it - just the same as your `quizQuestion.question` property does.
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

		// for..in loops are generally used for iterating over the properties of an object and not necessarily
		// for looping over an array (though it will still work since the indexes of an array are its properties).
		// I'd suggest just using the built in `.forEach` method on arrays looping in the future.
		for (i in quizQuestion.question){
			x += quizQuestion.question[i].quote;
			correct += quizQuestion.question[i].correctAnswer;
			// console.log(quizQuestion.question[i].quote)
			// console.log(quizQuestion.question[i].correctAnswer)

			for (j in quizQuestion.question[i].answers){
				x += quizQuestion.question[i].answers[j];
			}
		
		}

		// Since you're using `.val` as opposed to `.text` or `.html` this won't
		// display anything to the user in the dom.
		$("#answer1").val(quizQuestion.question[i].answers[0])
		$("#answer2").val(quizQuestion.question[i].answers[1])
		$("#answer3").val(quizQuestion.question[i].answers[2])
		$("#answer4").val(quizQuestion.question[i].answers[3])


//wrong answer display... not working
function wrongPage(){
	$("#gameDisplay").text("Sorry, wrong answer." + " Correct answer is: " + quizQuestion.question[i].correctAnswer)
	shortTimer()
	return
}

//correct answer display		
function correctPage(){
	$("#gameDisplay").text("You're right!" + " Correct Answer is: " + quizQuestion.question[i].correctAnswer)
	shortTimer()
	$(".videos").show()//video display not working
	return
}

//time out display... flashes for a second or 2 when timer finishes, then plays correctPage
function timesUp(){
	$("#gameDisplay").text("Time is up." + " Correct Answer is: " +quizQuestion.question[i].correctAnswer)
	shortTimer()
	return
}

//start button user selects to start the game
$("#startBtn").click(function(game){
	// console.logs are awesome (and I particularly appreciate the phrasing in this one)
	// but you generally want to keep them out of your production code.
	// console.log("start this motha")
	$("#start").empty()


	longTimer()
	//display text for the quiz question to the user
	$("#questionDisplay").text(quizQuestion.question[i].quote)

		// By the time this code runs, you will have looped to the last question due to the for..in block above.
		// so the user will only ever see the quote from Shrek. In order for the user to see each question, you'd need to
		// keep track of what question they were on using an index and then increment that index
		// everytime they answer a question. That way the question being displayed would be in sync
		// with the number of questions they'd answered.

	//display answer options as buttons	
		$("#answer1").text(quizQuestion.question[i].answers[0])
		$("#answer2").text(quizQuestion.question[i].answers[1])
		$("#answer3").text(quizQuestion.question[i].answers[2])
		$("#answer4").text(quizQuestion.question[i].answers[3])

//timer for question & answer(s) page
function longTimer(){
	var count = 30;

	var counter = setInterval(timer, 1000);
	
	function timer(){
		count = count-1;
		
		if (count <= 0){
			clearInterval(counter);
			// console.log("Time's out!")
			timesUp()
		}
		// console.log(count)
		$("#timerDisplay").html(count)
	
	// By putting this listener in your timer countdown function
	// you end up setting a new listener every second which is overkill
	// and could potentially elad to some really funny bugs. It's
	// a better idea to just set listeners once outside of most of your
	// logic functions.
	$(".answerOption").on("click", function(){
			// console.log(this.value)

		 if (this.value===quizQuestion.question[i].correctAnswer){
				// console.log("Correct!")
				$("#questionDisplay").text("You got it right!")
				clearInterval(counter)
				correctPage()
				return
			}

		else if (this.value!==quizQuestion.question[i].correctAnswer){
				// console.log("Sorry, nope")
				clearInterval(counter)
				wrongPage()
				return
			}

		
		})

	}		

}


})

})










