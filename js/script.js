function submitAnswers(){
	var total = 5;
	var score = 0;

	//Get User Input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	//alert(q1);

	//Validation
	if(q1 == null || q1 == ''){
		alert('You missed question 1');
		return false;
	}

	for(var i = 1; i <= total; i++){
		if(eval('q' +i) == null || eval('q'+i) ==''){
			alert('You missed question ' + i);
			return false;
		}

	}

	//Set Correct Answers
	var answers = ["b","a","d","b","d"];

	//Check Answers
	for(i = 1; i <= total; i++){
		if(eval('q' +i) == answers[i - 1]){
			score++;
		}

	}

	//Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored<span>'+score+'</span>'+total+'</span></h3>';
	alert('You scored '+score+'out of '+total);

	//Make sure this function resturns fals.
	return false;
}

function getName(){
	alert("What is your name?");
}

function getLastName(){
	alert("What is your name?");
}