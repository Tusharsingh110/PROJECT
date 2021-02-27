var secretnum = 5;

var strguess =prompt("Guess a Number.");

var guess= Number(strguess);

if(guess === secretnum){
	alert("Correct guess.");
}
else if (guess > secretnum){
	alert("TOO HIGH!!!, Try again.")
}
else{
	alert("TOO LOW!!!, Try again.")
}