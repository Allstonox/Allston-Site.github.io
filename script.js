function navSlide() {
    const nav = document.querySelector('.nav-bar-container');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const hamburgerMenuItems = document.querySelector('.nav-bar-menu');
    let hamburgerOn = false;
    hamburgerMenu.addEventListener('click', () => {
        nav.classList.toggle('nav-bar-container-active');
        if(!hamburgerOn) {
            hamburgerOn = true;
        }
        else {
            hamburger = false;
        }
    });
    hamburgerMenuItems.addEventListener('click', () => {
        if(hamburgerOn) {
            nav.classList.toggle('nav-bar-container-active');
            hamburgerOn = false;
        }
        else {
            return;
        }
    });
}


//     vv Arrow function version of nav slide below vv


// const navSlide = () => {
//     const nav = document.querySelector('.nav-bar-container');
//     const hamburgerMenu = document.querySelector('.hamburger-menu');


//     hamburgerMenu.addEventListener('click', () => {
//         nav.classList.toggle('nav-bar-container-active');
//     });
// }


var message = "Scientist";
var titlePick = 0;
var introCount = 0;
titleList = ["Leader", "Dreamer", "Creator", "Scientist"];
function draw() {
    message = titleList[titlePick];
    var newMessage = message.slice(0, introCount);
    const introMessage = document.querySelector('.intro-message');
    introMessage.innerHTML = newMessage;
    introCount++;
    if (introCount >= message.length + 1) {
        introCount = 0;
        if (titlePick < titleList.length - 1) {
            titlePick++;


        }
        else if (titlePick >= titleList.length - 1) {
            titlePick = 0;


        }
    }
}


function toggleCursor() {
    const curs = document.querySelector('.curs');
    curs.classList.toggle('curs-off');
    console.log("toggled");
}


navSlide();
window.setInterval(draw, 200);
window.setInterval(toggleCursor, 500);
