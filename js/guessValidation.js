const playAgain = document.body.addEventListener("click", (event) => {
  if (event.target.id === "play-again-btn") window.location.reload();
});

function checkGuess(guess) {
  const number = +guess;

  invalidGuess(number);

  numberOutOfScope(number);

  guessIsGreater(number);

  guessIsLower(number);

  guessIsCorrect(number);
}

function invalidGuess(number) {
  if (Number.isNaN(number))
    elementGuess.innerHTML += `<div>Invalid Answer (Not a Number)</div>`;
  return;
}

function numberOutOfScope(number) {
  if (number > maxValue || number < minValue)
    elementGuess.innerHTML += `<div>Number out of playing range [${minValue}, ${maxValue}]</div>`;
  return;
}

function guessIsGreater(number) {
  if (number > secretNumber && number <= maxValue) {
    elementGuess.innerHTML += `
    <p>
        The secret number is lower! <i class="fa-solid fa-arrow-turn-down"></i>
    </p>`;
  }
}

function guessIsLower(number) {
  if (number < secretNumber && number >= minValue) {
    elementGuess.innerHTML += `
      <p>
          The secret number is bigger! <i class="fa-solid fa-arrow-turn-up"></i>
      </p>`;
  }
}

function guessIsCorrect(number) {
  if (number === secretNumber) {
    document.body.innerHTML = `
        <div>
            <h2>You got it right!</h2>
            <h3>The secret number is:</h3>
            <p><span class="guess-box">${secretNumber}</span></p>
            <button id="play-again-btn">Play Again</button>
        </div>`;

    recognition.addEventListener("end", () => recognition.stop());
  }

  playAgain;
}
