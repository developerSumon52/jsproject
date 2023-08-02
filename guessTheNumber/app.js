 const randomNumber = parseInt(Math.random()*100 +1)
 // refferences 
 const submit = document.querySelector('#subt')
 const userInput = document.querySelector('#guessField')
 const guessSlot = document.querySelector('.guesses')
 const remaining = document.querySelector('.lastResult')
 const lowOrHi = document.querySelector('.lowOrHi')
 const startOver = document.querySelector('.resultParas')
 const p = document.createElement('p')

 // variables
 let prevGuess = []
 let numGuess = 1
 let playGame = true

 // main code start here
 if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        let guess = parseInt(userInput.value)
        validateGuess(guess)
    })
 }

 function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if(guess<0 || guess>100){
         alert('Enter a number between 1 to 100')
    }
    else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            CleanUpGuess(guess)
            displayMessage(`Game over! Random number is ${randomNumber}`)
            endGame()

        }
        else{
            CleanUpGuess()
            checkGuess()
        }
    }
 }

 function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed the right number ${randomNumber}`)
        endGame()
    }
    else if(guess<randomNumber){
         displayMessage(`Your number is too low`)
    }
    else if(guess>randomNumber){
        displayMessage(`Your number is too High`)
   }
 }

 function CleanUpGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}`
    numGuess++;
    remaining.innerHTML =  `${(11 - numGuess) + 1 }`

 }

 function displayMessage(message) {
    lowOrHi.innerHTML = `<h>${message}</h>`
 }

 function endGame(params) {
    
 }

 function startGame(params) {
    
 }

