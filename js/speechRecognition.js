window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const elementGuess = document.getElementById("guess");

const recognition = new SpeechRecognition();
recognition.lang = "En-Us";
recognition.start();

recognition.addEventListener("result", onSpeak);

recognition.addEventListener("end", () => recognition.start());

function onSpeak(event) {
  guess = event.results[0][0].transcript;
  displayGuess(guess);
  checkGuess(guess);
}

function displayGuess(guess) {
  elementGuess.innerHTML = `
    <p>You guessed:</p>
    <span class="guess-box">${guess}</span>
    `;
}
