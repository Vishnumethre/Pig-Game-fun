'use strict';
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");//getElementbyId is much faster compare to .querySelector
const diceEl = document.querySelector(".dice");
console.log(diceEl);
score0El.textContent = 0;
score1El.textContent = 0;
const p1 = document.getElementById('inputField0');
const p2 = document.getElementById('inputField1');


const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
btnHold.disabled = false;
btnRoll.disabled = false;


const currentP1 = document.querySelector('#current--0');
let sum = 0;

var activePlayer = 0;
let scores = [0, 0];
let currentScore = 0;
 //Rolling dice functionality
btnRoll.addEventListener('click', () => {
    //Generate a random number 
    const dice = Math.floor(Math.random() * 6) + 1;

    //display the dice

    diceEl.src = `dice-${dice}.png`;
    console.log(diceEl.src);
    //check the number
    if (dice !== 1) {
        
        currentScore+= dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        
    }
    else {
       //currentScore   //currentScore=0;
        //scores[`${activePlayer}`] = scores[`${activePlayer}`] +Number(document.getElementById(`current--${activePlayer}`).textContent);
        document.getElementById(`score--${activePlayer}`).textContent = scores[`${activePlayer}`];
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        console.log(document.querySelector('.player--active').classList[1]);
        // document.querySelector('.player--active').classList.value = document.querySelector('.player--active').classList.value === 'player player--0 player--active' ? 'player player--1 player--active' : 'player player--0 player--active';
        // //document.querySelector('.player--active').classList.remove('player--active');
        // document.querySelector('.player--active').classList.add('player--active');
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');

        currentScore = 0;
        activePlayer = activePlayer == 0 ? 1 : 0;
        
    }
   
});

btnHold.addEventListener('click', () =>
{
    //1 add current score to total score
    scores[activePlayer] = +scores[activePlayer]+ Number(currentScore);
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
   
    if (scores[activePlayer] >= 100)
    {
        //document.querySelector(`player--${activePlayer}`).classList.remove('player--active');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.getElementById(`name--${activePlayer}`).textContent = document.getElementById(`inputField${activePlayer}`).value+' '+"Winner";

        console.log(document.querySelector(`.player--${activePlayer}`));
        btnHold.disabled = true;
        btnRoll.disabled = true;
   
    }
    else {
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        currentScore = 0;
        activePlayer = activePlayer == 0 ? 1 : 0;
    }


    //if total score is 100>=100 active player is winner
    //switch the player making previous player score to 0 even swith the background color

})
btnNew.addEventListener('click', () =>
{
    document.getElementById(`current--${0}`).textContent = 0;
    document.getElementById(`score--${0}`).textContent = 0;
    document.getElementById(`current--${1}`).textContent = 0;
    document.getElementById(`score--${1}`).textContent = 0;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    player0.classList.toggle('player--active');
    document.getElementById(`name--${activePlayer}`).textContent = document.getElementById(`inputField${activePlayer}`).value;
    // player1.classList.toggle('player--active');
    btnHold.disabled = false;
    btnRoll.disabled = false;
    activePlayer = 0;
    currentScore = 0;
    scores = [0, 0];
})




document.querySelector('.submit-btn').addEventListener('click', () => {
    console.log(p1.value);
    console.log(p2.value);
    document.getElementById('name--0').textContent = p1.value;
    document.getElementById('name--1').textContent = p2.value;
    document.querySelector('.hidden').classList.remove('hidden');
    document.querySelector('.show').classList.add('hidden');
   

});

