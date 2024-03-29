/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores,roundScore,activePlayer,dice,gamePlaying;

init();


var imgDice = document.querySelector('.dice');
imgDice.style.display = 'none';

var rollDice = document.querySelector('.btn-roll');

rollDice.addEventListener('click',function(){

    if(gamePlaying){

        dice = Math.floor(Math.random() * 6) + 1;
    imgDice.style.display = 'block';
    imgDice.src = 'dice-' + dice + '.png';
    

    if(dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
        
    } else {
        // NExt Player
        nextPlayer();

    } }
    
})

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    imgDice.style.display = 'none';
}

var hold = document.querySelector('.btn-hold');

hold.addEventListener('click',function(){
    if(gamePlaying){

        scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    if(scores[activePlayer] >= 100){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        imgDice.style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        nextPlayer();
    }
    
    }
    

})

function init (){ 
    
    
scores = [0,0];
roundScore = 0;
activePlayer = 0;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player 1' ;
    document.querySelector('#name-1').textContent = 'Player 2' ;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    gamePlaying = true;
}

var newGame = document.querySelector('.btn-new');

newGame.addEventListener('click',init);

