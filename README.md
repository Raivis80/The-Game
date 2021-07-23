# Top

## MS-2 JavaScript | Reaction Time Game.

![View](project_files/site.PNG)

## [View the live project here.](https://raivis80.github.io/The-Game/game.html)

### Table of contents

1. [Introduction](#Introduction)
1. [UX](#UX)
    - [Player goal's](#Player-goals)
    - [Owner goal's](#Owner-goals)
    - [Developer goal's](#Developer-goals)
    - [User Stories](#User-Stories)
1. [Development planes](#Development-planes)
    - [Strategy](#Strategy)
    - [Scope](#Scope)
    - [Structure](#Structure)
    - [Surfaice](#Surfaice)
1. [Features](#Features)
    - [The Game](#The-Game)
    - [In Game](#In-Game)
    - [Game Information Popup](#Game-Information-Popup)
    - [Contact Bug report](#Contact-Bug-report)
    - [Game Over](#Game-Over)
    - [Site layout features](#Site-layout-features)
    - [Features To implement](#Features-To-implement)
1. [Game Design Features](#Game-Design-Features)
    - [Game Mechanics](#Game-Mechanics)
    - [Game Logic](#Game-Logic)
1. [Testing](project_files/TESTING.md)
    - [W3C Validation](project_files/TESTING.md#W3C-Validation)
    - [Future Testing](project_files/TESTING.md#FutureTesting)
    - [User Stories](project_files/TESTING.md#User-Stories-Testing)
    - [Solved issues or bugs](project_files/TESTING.md#Solved-issues-or-bugs)
1. [Technologies and Frameworks](#Technologies-and-Frameworks)
   - [Languages](#Languages)
   - [Frameworks Libraries and Programs](#Frameworks-Libraries-and-Programs)  
1. [Deployment](#Deployment)
   - [Deployment on GitHub Pages](#Deploying-on-GitHub-Pages)
   - [Forking the Repository](#Forking-the-Repository)
   - [Creating a Clone](#Creating-a-Clone)
1. [Credits](#Credits)
   - [Code](#Code)
   - [Helpfull sites](#Helpfull-sites)
   - [Acknowledgements](#Acknowledgements)

# [&#8686;](#Top)
## ***Introduction***

**Single-player reaction time game** 

This is my second of four Milestone Projects that the developer must complete during the Full Stack Web Development Program at The Code Institute. 

The main requirement for this project is to write interactive web applications using HTML, CSS, JavaScript, and Application Programming Interfaces (APIs).

To manipulate the DOM as much as possible, I'm building a simple JavaScript single-player reaction time game.<br> 
The objective of this game is to click or tap the objects that are spawning randomly on the screen as quickly as you can.<br>
The difficulty will increase throughout the game.
# [&#8686;](#Top)
## **UX**
### **Player goals:**
1. Have fun playing the game.
1. Age appropriateness and child-friendly.
1. User-friendly controls.
1. Improve reaction times
1. Information on how to use the game.
1. If the mobile version is available.
1. Is the desktop version available.
### **Owner goals:**
1. Make a game that is fun to play.
1. The game is suitable for players of all ages.
1. The game Is child-friendly.
1. The game works on most devices.
1. Game rules available in-game on how to use the game.
1. It is vital to include a  bug report, contact form.
### **Developer goals:**
1. Developer will Learn code in javascript.
1. Connect at least one API.
1. Developer will manipulate the DOM as much as possible.
1. Developer will take up the challenge and learn new skills.
1. Include a JavaScrip project to build a portfolio.
### **User Stories**
As a player I want to:
1. To understand the game rules and to have gameplay instructions available.
1. Have fun playing the game. 
1. To play a game that is visually appealing and has a user-friendly design.
1. To be able to understand the controls for the game.
1. The be able to select appropriate different levels, depending on player skill level. 
1. To be able to contact the developer if encounter any bugs or issues.
1. If the game is available on mobile devices and or despot pc's is important.
# [&#8686;](#Top)
## **Development planes**
### **Strategy**

The game needs enable player to:
1. Access game rules and gameplay instructions if needed. 
1. User-friendly game that is fun to play.
1. Understand clearly and easily the controls for the game 
1. Select appropriate different levels, depending on player skill level. 
1. Contact form if they encounter any bugs or issues.
1. Paly the game on mobile and desktop devices
### **Scope**
* **Functionality Requirements**
    1. Build a simple single-player reaction time game.
    1. Three-level selection. Easy, medium, and hard depending on the device.
    1. Increase in complexity throughout the game.
    1. The score counter if the player clicks or misses the target.
    1. Provide the player with instructions on how to play the game.
    1. Feedback form if encountered bugs or glitches.
    1. Provide the player with feedback on how they're doing at any stage.
* **Structure**
![view](project_files/structure.jpg)
* **Surfaice**
    1. Color Scheme
        - Body background color antiquewhite.
        - Game Window background color oldlace.
        - Font and element background color red, royelBlue and green.
    2. Typography
        - Primary font-family: Press Start 2P with cursive as a fallback font
        - Secondary font-family: Roboto with sans-serif as a fallback
    3. Wireframe

![Here](project_files/wireframe.jpg)
# [&#8686;](#Top)
## **Features**
### **The Game** 
`Start screen screenshot` [Here](project_files/features/desktop-home.PNG)
- The game 
    -  The Game Detects touch devices and sets difficulty accordingly
    -  Responsive works on most devices(desktop, mobile)
    -  It could be, resized, and it will recalculate the game area on the fly.
- Select Level
    - Player can select a difficulty level.
    - Mobile devices starting speed is faster and one extra target to start with than for pointing enabled devices.
### **In Game** 

`In game screenshot` [here](project_files/features/desktop-ingame.PNG)
- Score counter 
    - Enables players to keep track of points when playing a game.
- Speed display
    -  Enables players to see current game speed in seconds.
- Lives Remaining
    - If a player misses the box target, you lose one life, but once a score of 50 has been, reached players will gain one life.
- Gray target
    - If a player misses the target the Gray object will spawn instead,
    - The Gray object will reset if 100p streaks are achieved
- Game-level-Up
    - The game is full of surprises various events and effects happened as you progress in the game
### **Game Information Popup** 

`Info popup screenshot` [Here](project_files/features/desktop-info.PNG)
- Game Help/instruction Pop-up
    - Enables players to look at game instructions on how to play the game.
### **Contact Bug report** 

`Contact page screenshot` [Here](project_files/features/contact-form.PNG)  
`Contact page screenshot submitted` [Here](project_files/features/form-after-submit.PNG)
- Contact/Bug report form
    - Bug report/feedback form for the user to contact if they encounter any glitches or bugs.
    - Enabled emailJS auto-reply to automatically send a reply to the user who submitted the email request
### **Game Over** 

`And game over screenshot` [Here](project_files/features/desktop-game-over.PNG)
- Links back to the landing page and bug report page.
### **Site layout features**
![Here](project_files/features/feature.jpg)
### **Features To implement**
After user testing, here are some of the suggested future features to implement for the game:
1. Randomize the target on-screen trimming
1. Add level indicator on when it is changing.
1. And After game stats on the game over screen

# [&#8686;](#Top)
## **Game Design Features**
### **Game Mechanics**
1. Game Play
    - Select a difficulty level to start the game.
    - Click or tap on target objects once they spawn.
    - As you progress in the game, target count will increase along with speed and target sliding as well
    - If a player misses the target, the black object will spawn instead, that will reset every 100point scorestreak
1. Select Level 
    - Touch-enabled devices start with higher speed.
    - Levels for mobile devices  = "Easy" Start with one target, "Medium" start with two targets "Hard" start with three targets.
    - Levels for PC's devices  = "Easy" Start with two targets, "Medium" start with three targets "Hard" start with four targets.
1. Score Counters
    - Score counter:
        - Will increase by one once the player clicks on the target.
    - Missed score counter:
        - Will increase by one if the target is not clicked on time or target is, missed altogether.
1. Lives Remaining
    - The game starts with three lives.
    - One game life is gained every 50 score points. 
    - Maximum of three lives can be gained at once.
    - If the player fails to click on a target or fails to click target on time, one game life will be deducted and the black object will spawn. 
    - Losing all lives means game over.
### **Game Logic**  
![Here](project_files/wireframe2.jpg)
*** 
- Select Level
    - Added touchscreen detection, for mobile devices starting speed is faster than pointing enabled devices.
    - Levels for mobile devices  = "Easy" Start with one target, "Medium" start with two targets "Hard" start with three targets.
    - Levels for PC's devices  = "Easy" Start with two targets, "Medium" start with three targets "Hard" start with four targets.
        - Level target count and speed could be set in the game.js file 

***
- Lives Remaining
    - Based on capture and click events, all Unsuccessful clicks and missed on-time events will disable one life element.
    - Based on the Score counter, every 50 score points will create one life. Enable one life element (if statement)

***
- Random Number generator
    - Extract Window height and width.
    - Create random number integer of a current window width and height.

***
- In game target objects
    - Target HTML div elements in the DOM for game box targets.
    -  Positions are randomly pulled from the array, then position gets spliced from the array to avoid the next object picking the same position.

***
- Click event listeners and capture events.
    - Create event listeners for game targets that will record successful clicks and disable target once clicked. If not will take away one life

***
- Capture events on all failed click attempts. I managed to achieve this by counting how many objects at the end of setInterval() cycle has display: none;  

***
- Game setup
    - Based on Level selection. if "EASY", else if "MEDIUM", else if "HARD".
    - Level variable will be passed into the setInterval() function and will launch the game.

***
- Game Progress levels
    - Speed will increase over, course of the game. 
    - Target count will increase over, course of the game.
    - As you progress in the game the objects move-effect will be added at a certain point count.
`
***
- If a player misses the target,  one life will be deducted and a gray object will spawn instead, Gray object will resset if 100 point streak reached.

# [&#8686;](#Top)
## **Technologies and Frameworks**
### **Languages**
- [HTML5](https://en.wikipedia.org/wiki/HTML5) Hypertext Markup Language (HTML)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) Cascading Style Sheets (CSS)
- [JavaScript](https://www.javascript.com/) Interactive functionality.

### **Frameworks Libraries and Programs**
- [Google Fonts:](https://fonts.google.com/) Making the web more beautiful.
- [Font Awesome:](https://fontawesome.com/) to add icons to the website.
- [Git](https://git-scm.com/) Git was used for version control.
- [GitHub:](https://github.com/) used to store the projects code.
- [gitpod.io](https://gitpod.io/) gitpod Was used for codding.
- [VS Code](https://code.visualstudio.com/) gitpod Was used for codding.

# [&#8686;](#Top)
## ***Deployment***
Source: https://docs.github.com/
### **Deploying on GitHub Pages**
1. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
1. Locate the [GitHub Repository](https://github.com/Raivis80/)"Link to GitHub Repo".
1. In the GitHub repository, navigate to the Settings tab.
1. From the source section drop-down menu, select the Master Branch.
1. Upon selection, the page will automatically refresh meaning that the website is now deployed.
1. Under "GitHub Pages", select the GitHub Pages visibility drop-down menu, then click a visibility.
1. Now deploy it to GitHub Pages.
1. To see your published site, under "GitHub Pages", click your site's URL.

More Detailed information on GitHub Pages can be found here: [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site) "Link to GitHub docs"
### **Fork A repository**
A Fork is a coppy of repository allows you to freely experiment with changes without effecting the original project.
<br>Forking a repository is a simple two-step process.

1. On GitHub, navigate to The [GitHub Repository](https://github.com/Raivis80/)" Link to my Repo".
1. In the top-right corner of the page, click Fork.

Detailed Steps for forkig a repository from GitHub can be found here: [here](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
### **Creating a Clone**

You can clone reposetory. When you clone repository, you copy repository to your Machine.
<br>Locate the [GitHub Repository](https://github.com/Raivis80/)"Link to GitHub Repo".
<br>Steps for cloning a repository from GitHub can be found here: [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository) "Link to GitHub docs"
# [&#8686;](#Top)
## ***Credits***
### **Code**

- Some of emailjs API code is reused of Code Institute Resume project. Thanks to Matt Rudge.
- Detect touchscreen devices [link here](https://hacks.mozilla.org/2013/04/detecting-touch-its-the-why-not-the-how/)
- Prevent click event trigger on child elements helped me to solve this Stackoverflow user abaz [link here](https://stackoverflow.com/questions/1369035/how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli)                     

### **Helpfull sites**
#### **Thanks To:**
-  [google.com](https://google.com/): Search for anything.
-  [stackoverflow.com](https://stackoverflow.com/): Useful website for code tips.
-  [www.w3schools.com](https://www.w3schools.com/): Examples of how to use HTML, CSS, JavaScript.
-  [developer.mozilla.org](https://developer.mozilla.org/): Examples of how to use HTML, CSS, JavaScript.
-  [css-tricks.com](https://css-tricks.com/): Useful CSS styling tips.
-  [developer.mozilla.org](https://developer.mozilla.org/):Used to source how to use JavaScript.
### **Acknowledgements**
- A huge thanks to Owonikoko Oluwaseun, My Mentor for, continuous support and inspire me to push myself beyond where I think I can go.
- Tutor support at Code Institute for their support.
# [&#8686;](#Top)
