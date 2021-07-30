//------------------------------START SCREEN-------------------------------------|
const startGameElement = document.getElementById('start_game');
const speedMeter = document.getElementById('speed_inner');
const gameWindowElement = document.getElementById('game_window');
// Start screen Effect

for (screen of startGameElement.children) {
    screen.style.margin = '0%';
}

let speed;
let timing;
let speedScore;
let pointsForLife;
let objectCount;
let badCount = 0;

let cubes = document.getElementsByClassName('none');

//_______GAME CONTROLS________|
pointsForLife = 25;
//Remove Black target points
let removeBad = 2;
//Progress controls|
let addTargetPoints = 200;
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
    const levelsElement = document.getElementById('select_level');
    const level1 = levelsElement.children[0];
    const level2 = levelsElement.children[1];
    const level3 = levelsElement.children[2];

    // Start game level 1
    level1.addEventListener('click', function () {
        //Starting Target count
        if ('ontouchstart' in window) {
            objectCount = 2;
        } else {
            objectCount = 1;
        }
        setTimeout(countDown, 600);
        startTheGame(levelsElement);
    });

    // Start game level 2
    level2.addEventListener('click', function () {
        //Starting Target count
        if ('ontouchstart' in window) {
            objectCount = 3;
        } else {
            objectCount = 2;
        }
        setTimeout(countDown, 600);
        startTheGame(levelsElement);
    });

    // Start game level 3
    level3.addEventListener('click', function () {
        //Starting Target count
        if ('ontouchstart' in window) {
            objectCount = 4;
        } else {
            objectCount = 3;
        }
        setTimeout(countDown, 600);
        startTheGame(levelsElement);
    });
};


//counter -----------------------------------------------------------------------------
let countDown = () => {
    let c2 = ['green', 'royalblue', 'red'];
    let p = document.createElement("p");
    let text;
    text = document.createTextNode(4);
    p.appendChild(text);
    p.classList.add('counter');
    gameWindowElement.appendChild(p);


    for (let b = 0; b < 3; b++) {
        setTimeout(() => {
            p.innerText--;
            p.style.color = c2[b];
            p.style.transform = 'scale(1.6) translate(-25%, -25%)'
            p.style.opacity = 6;
            setTimeout(() => {
                p.style.transform = 'scale(1) translate(-50%, -50%)'
                p.style.opacity = 0;
                if (b == 2) {
                    p.remove();
                }
            }, 300)
        }, b * 600)
    }
}


// -----------------------------TARGETS-------------------------------------------|
let bad = document.getElementsByClassName('bad');
let targets = document.getElementsByClassName('target');

//Position arrays
function arrays() {
    let num = 0;
    let num1 = 0;
    let arr1 = [2]
    let arr3 = [];
    let arr = [2]
    let w = gameWindowElement.offsetWidth;
    let h = gameWindowElement.offsetHeight;
    if (w < 540 || h < 540) {
        let num3 = 87 / 6
        for (let i = 0; i < 6; i++) {
            arr.push(num += num3)
            arr1.push(num1 += num3)
        }
    } else {
        num3 = 87 / 9
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
    arr2 = arr3.sort(() => .5 - Math.random());
    return arr2;
}

let moveCount = 0;

let tarPos = ((a, b)=>{
    a.style.display = 'block';
    a.style.left = arr2[b][0] + '%';
    a.style.top = arr2[b][1] + '%';
})
function objects() {
    arrays()
    let colours = ['red', 'royalblue', 'green'];
    //Target position
    for (let i = 0; i < objectCount; i++) {
        let t = targets[i];
        setTimeout(function timer() {
            let randColor = colours[(Math.random() * colours.length) | 0];
            tarPos(t, i);
            t.style.backgroundColor = randColor;
        }, i * 1);
    };
    //bad targets position
    if (badCount > 0) {
        setTimeout(function timer8() {
            for (let o = 0; o < badCount; o++) {
                let mc2 = objectCount + o;
                let b = bad[o];
                tarPos(b, mc2);
                b.style.backgroundColor = 'gray';
            }
        }, 10);
    };
    // Move random target 
    if (moveCount > 0 && moveCount <= objectCount) {
        setTimeout(() => {
            for (let h = 0; h < moveCount; h++) {
                let mc3 = badCount + objectCount + h;
                let m = targets[h];
                targets[h].style.transition = 'all 200ms linear';
                tarPos(m, mc3);
            }
        }, 500);
    }
}
//Target click effect
let effect = ((x) => {
    x.style.transform = 'scale(1.2)';
    setTimeout(() => {
        x.style.transform = 'scale(1)';
        x.style.display = 'none';
    }, 20)
})

// bad listeners
function addBad() {
    let b;
    badCount++;
    setTimeout(() => {
        for (let i = 0; i < badCount; i++)
            bad[i].addEventListener('click', clickEvent = () => {
                b = bad[i];
                effect(b);
                scoreCount = score.innerText;
            })
    }, 30);
}

//remove bad listener
function removeBadListener() {
    badCount--;
    bad[badCount].style.display = 'none';
    bad[badCount].removeEventListener('click', clickEvent = () => {});
}

//target event listeners + styling
function targetSetup() {
    let t;
    for (let i = 0; i < objectCount; i++) {
        
        targets[i].addEventListener('click', clickEvent = () => {
            t = targets[i];
            effect(t);
            scoreCount = score.innerText;
            livesLogic();
        });
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
        targets[i].removeEventListener('click', clickEvent);
    }
}

//------------------------------SCORE STREAK COUNTER -----------------------------|
const counterElement = document.getElementById('score_counter');
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
let clicks = 0;
let difference = 0;
// get the difference
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
        if (removeBad == scoreStreak.innerText) {
            removeBad = removeBad + removeBad;
            removeBadListener();
        }
    }
}


//miss target Flash efect
function missedEffect() {
    gameWindowElement.classList.add('backgroundClicked');
    setTimeout(resetEffect, 30);

    function resetEffect() {
        gameWindowElement.classList.remove('backgroundClicked');
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
        if (this === event.target) {
            missedEffect();
            clicks = 0;
            streak2 = 0;
            streak1 = 0;
            livesCount--;
            addBad()
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
livesDivElement.style.transition = ".6s";
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
            addBad();
            scoreMissed.innerText++;
        }
    for (let i = 0; i < bad.length; i++)
        if (bad[i].style.display === 'block') {
            notClick++;
            addBad();
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

//Game Progress 
function gameProgress() {
    let targetScore = addTargetPoints;
    let targetPoints = moveTaargetPoints;
    if (sppedProgress == score.innerText) {
        sppedProgress = sppedProgress + speedScore;
        speed = speed - 200; // Substract 200ms of current speed
        timing = speed - 100;
    }

    if (addTargetPoints == score.innerText && objectCount <= 12) {
        addTargetPoints = addTargetPoints + targetScore;
        objectCount++; // adds the target     
        let listen = objectCount - 1;
        let that = targets[listen]; 
        setTimeout(() => { // adds event listeners time out 
            targets[listen].addEventListener('click', addClickEvent = () => {
                effect(that);
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
function startTheGame(x) {
    let levelsElement = x;
    startGameElement.style.display = 'none';
    livesDivElement.style.width = '100%';
    levelsElement.style.display = 'none';
    gameWindow();
    targetSetup();
    levelH(speed);
}

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
    document.getElementById('contact_button2').addEventListener('click', contactPage);
    document.getElementById('new_game_btn').addEventListener('click', pageReload1);
    gameWindowElement.removeEventListener('mousedown', detectWindowEvents);
    for (let i = 0; i < badCount; i++) {
        bad[i].style.display = 'none';
        bad[i].removeEventListener('click', clickEvent = () => {});
    }
    targetsDisplayNone();
    for (j of lives) {
        j.style.backgroundColor = 'oldlace';
    }
    contactWindow.style.display = 'none';
    speedMeter.style.display = 'none'
    speed = speed * 1000;
    livesDivElement.style.width = '0';
    gameOverElement.style.display = 'flex';
    clearInterval(timer1);
    setTimeout(() => {
        gameOverChild2.style.margin = '0';
    }, 200);
}

//Game Over reload screen 
function pageReload1() {
    location.reload();
}