//------------------------------START SCREEN-------------------------------------|
const startGameElement = document.getElementById('start_game');
const speedMeter = document.getElementById('speed_inner');
const gameWindowElement = document.getElementById('game_window');
// Start screen Effect
const startChild2 = document.getElementById('start_game').children[1].style.margin = '0%';
const startChild3 = document.getElementById('start_game').children[2].style.margin = '0%';
const startChild4 = document.getElementById('start_game').children[3].style.margin = '0%';
const startChild5 = document.getElementById('start_game').children[4].style.margin = '0%';

//level variables
const levelsElement = document.getElementById('select_level');
const level1 = levelsElement.children[0];
const level2 = levelsElement.children[1];
const level3 = levelsElement.children[2];


let speed;
let timing;
let speedScore;
let pointsForLife;
let cubes = document.getElementsByClassName('none');

//_______GAME CONTROLS________|
pointsForLife = 25;
//Remove Black target points
let removeBad = 100;
//Progress controls|
let addTargetPoints = 250;
let moveTaargetPoints = 100;
let sppedProgress = 500;
// detect touchscreen devices
if ('ontouchstart' in window) {
    //starting speed for touch|
    speed = 2800;
    for (cube of cubes) {
        cube.style.display = 'block';
        cube++
    }
} else {
    //starting speed pc|
    speed = 3000;
}

// Game event listeners
window.onload = function () {
    document.getElementById('contact_button').addEventListener('click', contactPage);
    document.getElementById('info').addEventListener('click', infoPopout);

    // Start game level 1
    level1.addEventListener('click', function () {
        //Starting Target count
        if ('ontouchstart' in window) {
            objectCount = 2;
        } else {
            objectCount = 1;
        }
        startTheGame();
    });
    // Start game level 2
    level2.addEventListener('click', function () {
        //Starting Target count
        if ('ontouchstart' in window) {
            objectCount = 3;
        } else {
            objectCount = 2;
        }
        startTheGame();
    });
    // Start game level 3
    level3.addEventListener('click', function () {
        //Starting Target count
        if ('ontouchstart' in window) {
            objectCount = 4;
        } else {
            objectCount = 3;
        }

        startTheGame();
    });
};
// -----------------------------TARGETS-------------------------------------------|

let w = gameWindowElement.offsetWidth;
let h = gameWindowElement.offsetHeight;

let bad = document.getElementsByClassName('bad');
let targets = document.getElementsByClassName('target');
//target object count
let objectCount;
// Trarget Colors
let badCount = 0;
let colours = ['red', 'royalblue', 'green'];
//this line below from stackoverflow
let randColor = colours[(Math.random() * colours.length) | Math.random() * colours.length]
// append color and position for individual targets 


//Positions are randomly pulled from the array, then position gets 

let arr = [2]
let arr1 = [2]
let arr3 = [];

function arrays() {
    let num = 0;
    let num1 = 0;
    let arr1 = []
    if (w < 540 || h < 540) {
        let num3 = 87 / 6
        for (let i = 0; i < 6; i++) {
            arr.push(num += num3)
            arr1.push(num1 += num3)
        }
    } else {
        let num4 = 87 / 9
         
        for (let i = 0; i < 9; i++) {
           
            arr.push(num += 9)
            arr1.push(num1 += 9)
        }
    }

    for (a in arr) {
        for (b in arr1) {
            if (arr[a] != arr[b]) {
                arr3.push([arr[a], arr[b]])

            }
        }
    }

}
arrays()
let arr2 = arr3.sort(() => .5 - Math.random());
let newthis;
console.log(arr3)
class targetBase {
    constructor(x, y) {
        this.x = x + '%';
        this.y = y + '%';
        this.c = randColor = colours[(Math.random() * colours.length) | 0];
        this.cb = 'gray';
    }
}

randColor = colours[(Math.random() * colours.length) | 0];
let moveCount = 0;

function objects() {
    arr1 = arr3.sort(() => .5 - Math.random());

    for (let i = 0; i < objectCount; i++) {
        let target = targets[i];
        setTimeout(function timer() {
            target.style.display = 'block';
            newthis = new targetBase(arr2[i][0], arr2[i][1])

            target.style.left = newthis.x;
            target.style.top = newthis.y;

            target.style.backgroundColor = newthis.c;
        }, i * 1);

    };

    //bad targets position
    if (badCount > 0) {
        setTimeout(function timer8() {
            for (let o = 0; o < badCount; o++) {
                let mc2 = objectCount + o;
                bad[o].style.display = 'block';

                newthis2 = new targetBase(arr2[mc2][0], arr2[mc2][1])
                bad[o].style.left = newthis2.x;
                bad[o].style.top = newthis2.y;

                bad[o].style.backgroundColor = newthis2.cb;
            }
        }, 10);
    };
    // Move random target 
    if (moveCount > 0 && moveCount <= objectCount) {

        setTimeout(() => {
            for (let h = 0; h < moveCount; h++) {
                let mc3 = badCount + objectCount + h;
                newthis3 = new targetBase(arr2[mc3][0], arr2[mc3][1])

                targets[h].style.transition = 'all 200ms linear';
                targets[h].style.left = newthis3.x;
                targets[h].style.top = newthis3.y;
            }
        }, 500);

    }

}

// bad listeners
function badListener() {
    badCount++;
    setTimeout(() => {
        for (let i = 0; i < badCount; i++)
            bad[i].addEventListener('click', clickEvent = () => {
                bad[i].style.display = 'none';
                scoreCount = score.innerText;
            })
    }, 20);
}

//remove bad listener
function removeBadListener() {
    badCount--;
    bad[badCount].style.display = 'none';
    bad[badCount].removeEventListener('click', clickEvent = () => {});
}

//target event listeners + styling
function targetSetup() {
    for (let i = 0; i < objectCount; i++) {
        livesDivElement.style.transition = ".6s";
        targets[i].addEventListener('click', clickEvent = () => {
            targets[i].style.display = 'none';
            scoreCount = score.innerText;
            livesLogic();
        });
    }
}
//Add target event listeners to the targets
function addTargetListeners() {
    for (let i = 0; i < objectCount; i++) {
        targets[i].addEventListener('click', clickEvent = () => {});
    }
}

// remove target event listeners
function removeTargetListeners() {
    for (let i = 0; i < objectCount; i++) {
        targets[i].removeEventListener('click', clickEvent);
    }
}


// Target reset display:none
function targetsDisplayNone() {
    for (let i = 0; i < objectCount; i++) {
        targets[i].style.display = 'none';
    }
}

//------------------------------SCORE STREAK COUNTER -----------------------------|
const counterElement = document.getElementById('score_counter');
//Score Counter varialles
const score = counterElement.children[0];
const scoreStreak = counterElement.children[1];
const scoreMissed = counterElement.children[2];

let streak2 = 0;
let streak1 = 0;
let highScore = 0;
// scorestreak counter
function countHighScore(highScoreClick, higScoreMiss) {
    highScoreClick = streak1;
    higScoreMiss = streak2;
    if (highScoreClick > higScoreMiss) {
        highScore = Math.abs(highScoreClick - higScoreMiss);
        scoreStreak.innerText = highScore;
    } else {
        highScore = Math.abs(higScoreMiss - highScoreClick);
        scoreStreak.innerText = highScore;
    };
}

//------------------------------TARGET CLICKS-------------------------------------| 
// click counter variables
let clicks = 0;
let difference = 0;
// get the difference between missed and clicked targets
// Count will resets if the target is missed or gained life
function countDifference(windowClick) {
    if (clicks > windowClick) {
        difference = Math.abs(windowClick - difference);
    } else {
        difference = Math.abs(clicks, windowClick);
    };
}

//Count target clicks
function livesLogic() {
    score.innerText++;
    clicks++;
    streak1++;
    notClick++;
    addLife();
    countHighScore();
    countDifference();
    gameProgress();
    if (badCount > 0) {
        if (removeBad == scoreStreak.innerText ||
            removeBad * 2 == scoreStreak.innerText ||
            removeBad * 3 == scoreStreak.innerText ||
            removeBad * 4 == scoreStreak.innerText ||
            removeBad * 5 == scoreStreak.innerText) {
            removeBadListener();
        }
    }
}
//miss target Flash efect
function missedEffect() {
    gameWindowElement.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
    setTimeout(resetEffect, 20);

    function resetEffect() {
        gameWindowElement.style.backgroundColor = 'oldlace';
    }
}

//----------------------------GAME WINDOW-----------------------------------------|

let detectWindowEvents;
// detect game window clicks
function gameWindow() {
    // Game window mousedown listener
    gameWindowElement.addEventListener('click', detectWindowEvents);

    function detectWindowEvents(event) {
        //Prevent click event trigger on child elements.                  
        //https://stackoverflow.com/questions/1369035/how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli                      
        if (this === event.target) {
            missedEffect();
            clicks = 0;
            streak2 = 0;
            streak1 = 0;
            livesCount--;
            badListener()
            scoreMissed.innerText++;
            deductLife();
            countDifference();
            livesDivElement.style.width = '0';
            gameWindowElement.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        };
    };

}

//-------------------------------LIVES COUNTER------------------------------------|
// Lives Elements
const livesDivElement = document.getElementById('add_life');
const livesElement = document.getElementById('lives_remailing');
let life1 = livesElement.children[0];
let life2 = livesElement.children[1];
let life3 = livesElement.children[2];

livesDivElement.style.width = '100%';
livesDivElement.style.backgroundColor = 'green';
speedMeter.style.backgroundColor = '';
// get lives a color
let lives = document.getElementsByClassName('life');
let colourLives = ['green', 'red', 'royalblue']
let livesCount = 3;
let i = 0;
while (i < livesCount) {
    lives[i].style.backgroundColor = colourLives[i];
    i++;
}

// Reset lives to color to oldlace
function livesDisplaySeashell() {
    for (let i = 0; i < livesCount; i++) {
        lives[i].style.backgroundColor = 'oldlace';
    }
}

// How many points for new life must divide with 100 evenly
let divider = 100 / pointsForLife;

//add one life if 50 scorestreak reached, this number can be set to any
function addLife() {
    if (livesCount === 0) {
        missedEffect();
        setTimeout(stopTheGame, 30);
    }
    // life counter progress bar
    if (livesCount == 2) {
        livesDivElement.style.width = difference * divider + '%';
        livesDivElement.style.backgroundColor = 'green';
    } else if (livesCount == 1) {
        livesDivElement.style.width = difference * divider + '%';
        livesDivElement.style.backgroundColor = 'red';
    } else if (livesCount == 3) {
        livesDivElement.style.backgroundColor = 'green';
    }
    //Add one life
    if (difference == pointsForLife && livesCount == 2) {
        livesCount = 3;
        clicks = 0;
        lives[0].style.backgroundColor = 'green';
    } else if (difference == pointsForLife && livesCount == 1) {
        livesCount = 2;
        clicks = 0;
        lives[1].style.backgroundColor = 'red';
    }
}

// Deduct one life if the target is missed
function deductLife() {
    livesCount;
    if (livesCount == 2) {
        missedEffect();
        lives[0].style.backgroundColor = 'oldlace';
        livesDivElement.style.width = '0'
        clicks = 0;
        difference = 0;
        scoreStreak.innerText = 0;
        streak2 = 0;
        streak1 = 0;

    } else if (livesCount == 1) {
        missedEffect();
        lives[0].style.backgroundColor = 'oldlace';
        lives[1].style.backgroundColor = 'oldlace';
        livesDivElement.style.width = '0';
        clicks = 0;
        difference = 0;
        scoreStreak.innerText = 0;
        streak2 = 0;
        streak1 = 0;

    } else if (livesCount <= 0) {
        missedEffect();
        setTimeout(stopTheGame, 30);
    }
}
//Speed Meter

let speedMeterF = () => {
    let widthH = 0;
    speedMeter.style.width = '0%'
    let task = (b) => {
        setTimeout(() => {
            widthH++;
            speedMeter.style.width = widthH + '%';
        }, (speed / 100) * b)
    }

    for (let b = 0; b < 100; b++) {
        task(b)
    }

}

//------------------------------MISSED TARGET LOGIC-------------------------------|

//timing for target display block check.
//If any targets left/s with display set to block
//the deductLife(); function gets triggered
let notClick = 0;

function timigFunction() {
    notClick = 0;
    for (let i = 0; i < targets.length; i++)
        if (targets[i].style.display === 'block') {
            notClick++;
            badListener();
            scoreMissed.innerText++;
        }
    for (let i = 0; i < bad.length; i++)
        if (bad[i].style.display === 'block') {
            notClick++;
            badListener();
            scoreMissed.innerText++;
        }
    if (notClick >= 3 && objectCount + badCount >= 3) {
        missedEffect();
        setTimeout(stopTheGame, 30);
    } else if (notClick == 2 || notClick == 1) {
        livesCount = livesCount - notClick;
        scoreMissed.innerText + livesCount;
        deductLife();
    }
    notClick = 0;
}


//----------------------GAME PROGRESS SPEED INCREASE------------------------------| 

let targetScore = addTargetPoints;
let targetPoints = moveTaargetPoints;
//Progress multiplier
//adds a target if set points are reached

function gameProgress() {

    if (sppedProgress == score.innerText) {
        sppedProgress = sppedProgress + speedScore;
        speed = speed - 200; // Substract 200ms of current speed
        timing = speed - 100;
    }

    if (addTargetPoints == score.innerText && objectCount <= 12) {
        addTargetPoints = addTargetPoints + targetScore;
        objectCount++; // adds the target     
        let listen = objectCount - 1;
        setTimeout(() => { // adds event listeners time out 
            targets[listen].addEventListener('click', addClickEvent = () => {
                targets[listen].style.display = 'none';
                scoreCount = score.innerText;
                livesLogic();
            });
        }, 20); // time out is set for 20 ms
    }

    if (moveTaargetPoints == score.innerText && objectCount <= 12) {
        moveTaargetPoints = moveTaargetPoints + targetPoints
        if (moveCount <= objectCount) {
            moveCount++;
        }
    }
}
//------------------------------GAME SELLECT--------------------------------------|
// Timmer variables 
let timer1;

//timing for target check
timing = speed - 100;
//multiples score|
speedScore = sppedProgress;

//Game setup-------------|
function startTheGame() {
    startGameElement.style.display = 'none';
    livesDivElement.style.width = '100%';
    levelsElement.style.display = 'none';
    gameWindow();
    targetSetup();
    levelH(speed);
}

let devideSpeed = (speed / 4) * 3;

function levelH() {
    timer1 = setInterval(timingF, speed);

    function timingF() {
        speedMeterF();
        objects();
        setTimeout(timigFunction, timing);
    }
}

//-------------------------------- STOP THE GAME----------------------------------|
const gameOverElement = document.getElementById('game-over');
const gameOverChild2 = document.getElementById('game-over').children[1];

function stopTheGame() {
    document.getElementById('new_game_btn').addEventListener('click', pageReload1);
    document.getElementById('contact_button2').addEventListener('click', contactPage);
    document.getElementById('new_game_btn').addEventListener('click', pageReload1);
    gameWindowElement.removeEventListener('mousedown', detectWindowEvents);

    for (let i = 0; i < badCount; i++) {
        bad[i].style.display = 'none';
        bad[i].removeEventListener('click', clickEvent = () => {});
    }
    targetsDisplayNone();
    livesDisplaySeashell();
    lives[0].style.backgroundColor = 'oldlace';
    lives[1].style.backgroundColor = 'oldlace';
    lives[2].style.backgroundColor = 'oldlace';
    contactWindow.style.display = 'none';
    speedMeter.style.display = 'none'
    speed = speed * 1000;
    livesDivElement.style.width = '0';
    gameOverElement.style.display = 'flex';
    clearInterval(timer1);
    setTimeout(gameOverTimer, 100);

    function gameOverTimer() {
        gameOverChild2.style.margin = '0';
    };
}

//Game Over reload screen 
function pageReload1() {
    location.reload();
}