'use strict';

let correctNumber = Math.trunc(Math.random()*20)+1;
let score = Number(document.querySelector('.score').textContent);
let highScore = 0;

 // Flag to control the event listener
let isEventListenerEnabled = true;

let messageText = function(message){
    document.querySelector('.message').textContent = message;
}
let scoreText = function(score){
    document.querySelector('.score').textContent= score;
}
let numberText = function(number){
    document.querySelector('.number').textContent= number;
}
let backgroundColor = function(color){
    document.querySelector('body').style.backgroundColor = color;
}

document.querySelector('.check').addEventListener('click',function (){
    // If the flag is false, do nothing
    if (!isEventListenerEnabled) {
        return; 
      }

    let guessNumber = Number(document.querySelector('.guess').value);
    if (!guessNumber){
        messageText('please enter a valid number');
    }
    else if(guessNumber===correctNumber){       
        messageText('🥇 Winner');
        numberText(guessNumber);
        score--;       
        scoreText(score);
        backgroundColor(' #60b347');
        if (score>highScore){
            highScore = score;
            document.querySelector('.highscore').textContent=highScore;
        }                      
        if (score <= 0){
            messageText('😢 You Lost The Game');
            scoreText('0');
        }
        isEventListenerEnabled = false;
    }
    else {
        messageText(guessNumber> correctNumber ? '📈 Too High': '📉 Too low' );         
        score--;       
        scoreText(score);
        if (score <= 0){
            messageText('😢 You Lost The Game');
            scoreText('0');
        }
    }    
})

document.querySelector('.again').addEventListener('click', function(){
    correctNumber = Math.trunc(Math.random()*20)+1;
    score = 20;    
    backgroundColor('#222');
    messageText('start guessing...');
    scoreText(score);
    numberText('?');
    document.querySelector('.guess').value ='' ;
    isEventListenerEnabled = true;
}); 