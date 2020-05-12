let resetButton = document.getElementById("reset-button");
let resetCountDisplay = document.getElementById("num-resets");
let t1Button = document.getElementById("teamone-shoot-button");
let t2Button = document.getElementById("teamtwo-shoot-button");
let t1ShotCountDisplay = document.getElementById("teamone-numshots");
let t2ShotCountDisplay = document.getElementById("teamtwo-numshots");
let t1GoalsDisplay = document.getElementById("teamone-numgoals");
let t2GoalsDisplay = document.getElementById("teamtwo-numgoals");
let displayWinner = document.querySelector("div div:last-child");

let resetCount = 0;
let t1Shots = 0;
let t2Shots = 0;
let t1Goals = 0;
let t2Goals = 0;
let winningShot;
let t1RandomShot = 0;
let t2RandomShot = 0;
let maxRange = 2;
let minRange = 8;

//displayWinner.classList.remove("display_winner");

function randomNumberGenerator(minNumber, maxNumber){
    return Math.floor(Math.random() * (maxNumber+1 - minNumber) + minNumber);
}

winningShot = randomNumberGenerator(minRange, maxRange);

//reset all the shot and goal counters and add 1 to the number of resets
resetButton.addEventListener("click", function(){
    resetCountDisplay.textContent = (++resetCount) + "";
    t1ShotCountDisplay.textContent = "0";
    t2ShotCountDisplay.textContent = "0";
    t1GoalsDisplay.textContent = "0";
    t2GoalsDisplay.textContent = "0";
    winningShot = randomNumberGenerator(minRange, maxRange);
    t1Shots = 0;
    t2Shots = 0;
    t1Goals = 0;
    t2Goals = 0;

    

    //determine the winner by the most goals
    if(t1Goals > t2Goals){

    }
})

t1Button.addEventListener("click", function(){
    //increase the number of shots taken
    t1ShotCountDisplay.textContent = (++t1Shots) + "";
    //get a random number and compare with teh winning goal
    t1RandomShot = randomNumberGenerator(minRange, maxRange);
    if(t1RandomShot === winningShot){
        t1GoalsDisplay.textContent = (++t1Goals) + "";
    }
})

t2Button.addEventListener("click", function(){
    //increase the number of shots taken
    t2ShotCountDisplay.textContent = (++t2Shots) + "";
    t2RandomShot = randomNumberGenerator(minRange, maxRange);
    if(t2RandomShot === winningShot){
        t2GoalsDisplay.textContent = (++t2Goals) + "";
    }
})



