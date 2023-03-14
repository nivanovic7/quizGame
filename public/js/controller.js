 import {mathGameInit} from'./mathController.js'
 import {logicGameInit} from './logicController.js'
// mathGameInit();
logicGameInit();

export const countdown = function(){
    setTimeout(function(){
        const game = document.querySelector(".game-body");
        game.classList.remove("disable-game")
        game.innerHTML = ``
        init();
    }, 7000)
}

//1 create game controller which will run other controllers
//2 make math.js' timer able to be stopped ****
//3 create logic for main controller file 

