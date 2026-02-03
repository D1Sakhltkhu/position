const userInput = Number(prompt("Enter the number:"));
let guess = prompt("guess");
while (guess !== userInput ) {
  if (guess > userInput) {
    guess = Number(prompt("lower:"));
  } else if ( guess < userInput ) {
    guess = Number(prompt("higher:"));
  }
}

alert("You guessed");