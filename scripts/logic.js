// Create an array of words
var words = [
  "yes",
  "javascript",
  "monkey",
  "amazing",
  "pancake",
  "browser",
  "dynamic",
  "hyperlink"
];

// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];
console.log(word)
// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
   answerArray[i] = "_";
}
var remainingLetters = word.length;

var introBox = document.getElementById('intro-box')
var gameBox = document.getElementById('game-box')
var submitNameButton = document.getElementById('submit-name')
var nameField  = document.getElementById('users-name')
var wordDisplay = document.getElementById('word-display')
var letterInput  = document.getElementById('input-letter')
var letterSubmit = document.getElementById('submit-letter')
var winModal = document.getElementById('winner')
var winnerText = document.getElementById('winner-text')

var userName = ''

submitNameButton.addEventListener('click', function(e) {
  e.preventDefault()
  if (nameField.value.length < 1) {
    nameField.className = 'error'
  } else {
        document.getElementById('start-audio').play()
    userName = nameField.value
    introBox.className = 'hide'
    gameBox.className = ''

    wordDisplay.innerText = answerArray.join(' ')
  }
})


letterSubmit.addEventListener('click', function(e) {
  var guess = letterInput.value
  var prevRemainingLetters = remainingLetters

  if (guess.length == 1) {
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
        letterInput.value = ''
        wordDisplay.innerText = answerArray.join(' ')
        
        if (remainingLetters !== 0) {
            document.getElementById('correct-audio').play()
        } else {
          gameBox.className = 'hide'
          winModal.className=""
          winnerText.innerText = "Good job " + userName + "!" + " The answer was " + word
          document.getElementById('winner-audio').play()
        }
      }
    }
  } else {
    document.getElementById('wrong-audio').play()
  }
  
  if (remaningLetters > 0) {
    document.getElementById('correct-audio').play()
  }
})